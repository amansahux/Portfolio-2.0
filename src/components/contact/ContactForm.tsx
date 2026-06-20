"use client";

import { ArrowRight, ChevronDown } from "lucide-react";
import React, { useState } from "react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center animate-modal-enter">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 border border-primary/20">
          <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-headline-md text-on-surface mb-2">Message Sent Successfully</h3>
        <p className="font-body-md text-on-surface-variant max-w-sm mb-8 leading-relaxed">
          Thank you for reaching out. I have received your message and will get back to you shortly.
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="border border-outline-variant text-on-surface px-8 py-3 rounded-full font-label-caps text-label-caps uppercase font-bold hover:border-primary hover:text-primary transition-all duration-300 backdrop-blur-md cursor-pointer"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-6 form-field-reveal" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name Field */}
        <div className="relative group/field">
          <label
            className="block font-label-caps text-label-caps text-on-surface-variant mb-2 uppercase tracking-wider transition-colors group-focus-within/field:text-primary"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="glass-input w-full px-4 py-3 rounded-lg text-on-surface font-body-md placeholder:text-on-surface-variant/30 focus:outline-none focus:ring-0 transition-all duration-300 bg-transparent border border-white/10 focus:border-primary/50 focus:shadow-[0_0_15px_rgba(232,232,232,0.1)_inset]"
            id="name"
            name="name"
            placeholder="Jane Doe"
            required
            type="text"
          />
        </div>

        {/* Email Field */}
        <div className="relative group/field">
          <label
            className="block font-label-caps text-label-caps text-on-surface-variant mb-2 uppercase tracking-wider transition-colors group-focus-within/field:text-primary"
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            className="glass-input w-full px-4 py-3 rounded-lg text-on-surface font-body-md placeholder:text-on-surface-variant/30 focus:outline-none focus:ring-0 transition-all duration-300 bg-transparent border border-white/10 focus:border-primary/50 focus:shadow-[0_0_15px_rgba(232,232,232,0.1)_inset]"
            id="email"
            name="email"
            placeholder="jane@example.com"
            required
            type="email"
          />
        </div>
      </div>

      {/* Subject Field */}
      <div className="relative group/field">
        <label
          className="block font-label-caps text-label-caps text-on-surface-variant mb-2 uppercase tracking-wider transition-colors group-focus-within/field:text-primary"
          htmlFor="subject"
        >
          Subject
        </label>
        <select
          className="glass-input w-full px-4 py-3 rounded-lg text-on-surface font-body-md appearance-none focus:outline-none focus:ring-0 cursor-pointer transition-all duration-300 bg-transparent border border-white/10 focus:border-primary/50 focus:shadow-[0_0_15px_rgba(232,232,232,0.1)_inset]"
          id="subject"
          name="subject"
          required
        >
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
      </div>

      {/* Message Field */}
      <div className="relative group/field">
        <label
          className="block font-label-caps text-label-caps text-on-surface-variant mb-2 uppercase tracking-wider transition-colors group-focus-within/field:text-primary"
          htmlFor="message"
        >
          Message
        </label>
        <textarea
          className="glass-input w-full px-4 py-3 rounded-lg text-on-surface font-body-md placeholder:text-on-surface-variant/30 focus:outline-none focus:ring-0 resize-none transition-all duration-300 bg-transparent border border-white/10 focus:border-primary/50 focus:shadow-[0_0_15px_rgba(232,232,232,0.1)_inset]"
          id="message"
          name="message"
          placeholder="Tell me about your project..."
          required
          rows={4}
        />
      </div>

      {/* Submit Action */}
      <div className="pt-4 flex items-center justify-between">
        <span className="text-on-surface-variant/50 font-label-caps text-label-caps hidden sm:block">
          All fields required
        </span>
        <button
          className="w-full cursor-pointer sm:w-auto relative inline-flex items-center justify-center gap-2 px-8 py-4 primary-glow-btn text-on-primary rounded-lg font-headline-md text-[16px] font-bold overflow-hidden transition-all duration-300 disabled:opacity-70 group/btn"
          type="submit"
          disabled={isSubmitting}
        >
          <span className="relative z-10 flex items-center gap-2">
            {isSubmitting ? "Sending..." : "Send Message"}
            {!isSubmitting && (
               <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
            )}
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
        </button>
      </div>
    </form>
  );
}
