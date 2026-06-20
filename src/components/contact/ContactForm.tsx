"use client";

import { ArrowRight, ChevronDown, LoaderCircle } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

interface ContactFormProps {
  isOpen: boolean;
}

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;
type FormTouched = Partial<Record<keyof FormValues, boolean>>;
type FormField = keyof FormValues;
type SubmitState =
  | { status: "idle"; message: string }
  | { status: "success"; message: string }
  | { status: "error"; message: string };

const INITIAL_VALUES: FormValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const FIELD_ORDER: FormField[] = ["name", "email", "subject", "message"];

function validateField(field: FormField, value: string) {
  const trimmedValue = value.trim();

  switch (field) {
    case "name":
      if (!trimmedValue) {
        return "Name is required.";
      }
      if (trimmedValue.length < 2) {
        return "Name must contain at least 2 characters.";
      }
      return undefined;
    case "email":
      if (!trimmedValue) {
        return "Email is required.";
      }
      if (!EMAIL_REGEX.test(trimmedValue)) {
        return "Please enter a valid email address.";
      }
      return undefined;
    case "subject":
      if (!trimmedValue) {
        return "Subject is required.";
      }
      return undefined;
    case "message":
      if (!trimmedValue) {
        return "Message is required.";
      }
      if (trimmedValue.length < 20) {
        return "Message must contain at least 20 characters.";
      }
      return undefined;
    default:
      return undefined;
  }
}

function validateForm(values: FormValues) {
  return FIELD_ORDER.reduce<FormErrors>((errors, field) => {
    const error = validateField(field, values[field]);
    if (error) {
      errors[field] = error;
    }
    return errors;
  }, {});
}

export default function ContactForm({ isOpen }: ContactFormProps) {
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<FormTouched>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<SubmitState>({
    status: "idle",
    message: "",
  });

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLSelectElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const wasOpenRef = useRef(isOpen);

  const fieldRefs: Record<FormField, React.RefObject<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null>> = {
    name: nameRef,
    email: emailRef,
    subject: subjectRef,
    message: messageRef,
  };

  useEffect(() => {
    if (isOpen && !wasOpenRef.current && submitState.status === "success") {
      setSubmitState({ status: "idle", message: "" });
    }

    wasOpenRef.current = isOpen;
  }, [isOpen, submitState.status]);

  const focusField = (field: FormField) => {
    const element = fieldRefs[field].current;
    if (!element) {
      return;
    }

    element.focus();
    element.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    const field = name as FormField;

    setValues((currentValues) => ({
      ...currentValues,
      [field]: value,
    }));

    if (submitState.status !== "idle") {
      setSubmitState({ status: "idle", message: "" });
    }

    if (touched[field]) {
      setErrors((currentErrors) => {
        const nextErrors = { ...currentErrors };
        const error = validateField(field, value);

        if (error) {
          nextErrors[field] = error;
        } else {
          delete nextErrors[field];
        }

        return nextErrors;
      });
    }
  };

  const handleBlur = (
    event: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    const field = name as FormField;

    setTouched((currentTouched) => ({
      ...currentTouched,
      [field]: true,
    }));

    setErrors((currentErrors) => {
      const nextErrors = { ...currentErrors };
      const error = validateField(field, value);

      if (error) {
        nextErrors[field] = error;
      } else {
        delete nextErrors[field];
      }

      return nextErrors;
    });
  };

  const markAllTouched = () => {
    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true,
    });
  };

  const resetForm = () => {
    setValues(INITIAL_VALUES);
    setErrors({});
    setTouched({});
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    markAllTouched();
    setSubmitState({ status: "idle", message: "" });

    const nextErrors = validateForm(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      const firstInvalidField = FIELD_ORDER.find((field) => nextErrors[field]);
      if (firstInvalidField) {
        focusField(firstInvalidField);
      }
      return;
    }

    setIsSubmitting(true);

    try {
      const responsePromise = fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const [response] = await Promise.all([
        responsePromise,
        new Promise((resolve) => setTimeout(resolve, 700)),
      ]);

      const data = (await response.json().catch(() => null)) as { message?: string } | null;

      if (!response.ok) {
        throw new Error(data?.message || "Something went wrong while sending your message. Please try again.");
      }

      resetForm();
      setSubmitState({
        status: "success",
        message:
          data?.message ||
          "Thank you for reaching out. Your message is on its way, and I will get back to you shortly.",
      });
    } catch (error) {
      setSubmitState({
        status: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong while sending your message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getFieldClasses = (field: FormField) => {
    const hasError = Boolean(errors[field] && touched[field]);

    return [
      "glass-input w-full px-4 py-3 rounded-lg text-on-surface font-body-md placeholder:text-on-surface-variant/30 focus:outline-none focus:ring-0 transition-all duration-300 bg-transparent border",
      hasError
        ? "border-error/70 focus:border-error focus:shadow-[0_0_15px_rgba(147,0,10,0.2)_inset]"
        : "border-white/10 focus:border-primary/50 focus:shadow-[0_0_15px_rgba(232,232,232,0.1)_inset]",
    ].join(" ");
  };

  const getLabelClasses = (field: FormField) => {
    const hasError = Boolean(errors[field] && touched[field]);

    return [
      "block font-label-caps text-label-caps mb-2 uppercase tracking-wider transition-colors",
      hasError ? "text-error" : "text-on-surface-variant group-focus-within/field:text-primary",
    ].join(" ");
  };

  if (submitState.status === "success") {
    return (
      <div
        className="flex flex-col items-center justify-center py-12 text-center animate-modal-enter"
        role="status"
      >
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 border border-primary/20">
          <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-headline-md text-on-surface mb-2">Message Sent Successfully</h3>
        <p className="font-body-md text-on-surface-variant max-w-sm mb-8 leading-relaxed">
          {submitState.message}
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitState({ status: "idle", message: "" });
            requestAnimationFrame(() => focusField("name"));
          }}
          className="border border-outline-variant text-on-surface px-8 py-3 rounded-full font-label-caps text-label-caps uppercase font-bold hover:border-primary hover:text-primary transition-all duration-300 backdrop-blur-md cursor-pointer"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-6 form-field-reveal" onSubmit={handleSubmit} noValidate>
      {submitState.status === "error" && (
        <div
          className="rounded-xl border border-error/25 bg-error-container/20 px-4 py-3 text-on-error-container"
          role="alert"
        >
          <p className="font-body-md text-body-md leading-relaxed">{submitState.message}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative group/field">
          <label className={getLabelClasses("name")} htmlFor="name">
            Name
          </label>
          <input
            ref={nameRef}
            aria-describedby={errors.name && touched.name ? "name-error" : undefined}
            aria-invalid={Boolean(errors.name && touched.name)}
            className={getFieldClasses("name")}
            id="name"
            minLength={2}
            name="name"
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder="Jane Doe"
            required
            type="text"
            value={values.name}
          />
          {errors.name && touched.name && (
            <p className="mt-2 font-body-md text-sm leading-relaxed text-error" id="name-error">
              {errors.name}
            </p>
          )}
        </div>

        <div className="relative group/field">
          <label className={getLabelClasses("email")} htmlFor="email">
            Email Address
          </label>
          <input
            ref={emailRef}
            aria-describedby={errors.email && touched.email ? "email-error" : undefined}
            aria-invalid={Boolean(errors.email && touched.email)}
            className={getFieldClasses("email")}
            id="email"
            name="email"
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder="jane@example.com"
            required
            type="email"
            value={values.email}
          />
          {errors.email && touched.email && (
            <p className="mt-2 font-body-md text-sm leading-relaxed text-error" id="email-error">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="relative group/field">
        <label className={getLabelClasses("subject")} htmlFor="subject">
          Subject
        </label>
        <select
          ref={subjectRef}
          aria-describedby={errors.subject && touched.subject ? "subject-error" : undefined}
          aria-invalid={Boolean(errors.subject && touched.subject)}
          className={`${getFieldClasses("subject")} appearance-none cursor-pointer`}
          id="subject"
          name="subject"
          onBlur={handleBlur}
          onChange={handleChange}
          required
          value={values.subject}
        >
          <option className="bg-surface-container text-on-surface" value="">
            Select a subject
          </option>
          <option className="bg-surface-container text-on-surface" value="general">
            General Inquiry
          </option>
          <option className="bg-surface-container text-on-surface" value="project">
            Project Proposal
          </option>
          <option className="bg-surface-container text-on-surface" value="consulting">
            Technical Consulting
          </option>
        </select>
        <div className="absolute right-4 top-[38px] pointer-events-none text-on-surface-variant group-focus-within/field:text-primary transition-colors">
          <ChevronDown className="w-5 h-5" />
        </div>
        {errors.subject && touched.subject && (
          <p className="mt-2 font-body-md text-sm leading-relaxed text-error" id="subject-error">
            {errors.subject}
          </p>
        )}
      </div>

      <div className="relative group/field">
        <label className={getLabelClasses("message")} htmlFor="message">
          Message
        </label>
        <textarea
          ref={messageRef}
          aria-describedby={errors.message && touched.message ? "message-error" : undefined}
          aria-invalid={Boolean(errors.message && touched.message)}
          className={`${getFieldClasses("message")} resize-none`}
          id="message"
          minLength={20}
          name="message"
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder="Tell me about your project..."
          required
          rows={4}
          value={values.message}
        />
        {errors.message && touched.message && (
          <p className="mt-2 font-body-md text-sm leading-relaxed text-error" id="message-error">
            {errors.message}
          </p>
        )}
      </div>

      <div className="pt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <span className="text-on-surface-variant/50 font-label-caps text-label-caps">
          All fields required
        </span>
        <button
          aria-busy={isSubmitting}
          className="w-full cursor-pointer sm:w-auto relative inline-flex items-center justify-center gap-2 px-8 py-4 primary-glow-btn text-on-primary rounded-lg font-headline-md text-[16px] font-bold overflow-hidden transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 group/btn"
          type="submit"
          disabled={isSubmitting}
        >
          <span className="relative z-10 flex items-center gap-2">
            {isSubmitting ? (
              <>
                <LoaderCircle className="w-5 h-5 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </>
            )}
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
        </button>
      </div>
    </form>
  );
}
