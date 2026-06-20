"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ContactForm from "./ContactForm";
import { X } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const bodyOverflowRef = useRef<string>("");
  const htmlOverflowRef = useRef<string>("");

  useEffect(() => {
    if (isOpen) {
      bodyOverflowRef.current = document.body.style.overflow;
      htmlOverflowRef.current = document.documentElement.style.overflow;
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";

      if ((window as any).lenis) {
        (window as any).lenis.stop?.();
      }

      const tl = gsap.timeline();

      // Reveal wrapper
      gsap.set(wrapperRef.current, { visibility: "visible", pointerEvents: "auto" });

      tl.to(backdropRef.current, {
        opacity: 1,
        backdropFilter: "blur(24px)",
        duration: 0.6,
        ease: "power3.out"
      }, 0);
      
      tl.fromTo(modalRef.current, {
        autoAlpha: 0,
        scale: 0.95,
        y: 20,
        filter: "blur(10px)"
      }, {
        autoAlpha: 1,
        scale: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.5,
        ease: "power3.out"
      }, 0.1);

      tl.fromTo(
        modalRef.current?.querySelectorAll(".form-field-reveal") ?? [],
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.05, ease: "power2.out" },
        0.3
      );

      requestAnimationFrame(() => {
        const firstFocusable = modalRef.current?.querySelector<HTMLElement>(
          'input, select, textarea, button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        firstFocusable?.focus();
      });
    } else {
      document.body.style.overflow = bodyOverflowRef.current;
      document.documentElement.style.overflow = htmlOverflowRef.current;

      if ((window as any).lenis) {
        (window as any).lenis.start?.();
      }

      const tl = gsap.timeline({
        onComplete: () => {
          gsap.set(wrapperRef.current, { visibility: "hidden", pointerEvents: "none" });
        }
      });
      
      tl.to(modalRef.current, {
        autoAlpha: 0,
        scale: 0.95,
        y: 10,
        filter: "blur(5px)",
        duration: 0.3,
        ease: "power2.in"
      }, 0);
      
      tl.to(backdropRef.current, {
        opacity: 0,
        backdropFilter: "blur(0px)",
        duration: 0.4,
        ease: "power2.in"
      }, 0.1);
    }

    return () => {
      document.body.style.overflow = bodyOverflowRef.current;
      document.documentElement.style.overflow = htmlOverflowRef.current;
      if ((window as any).lenis) {
        (window as any).lenis.start?.();
      }
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <div 
      ref={wrapperRef}
      className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:items-center md:p-margin-desktop invisible pointer-events-none"
    >
      {/* Backdrop */}
      <div 
        ref={backdropRef}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 opacity-0 cursor-pointer"
        style={{ backdropFilter: 'blur(0px)' }}
      />
      
      {/* Modal Container */}
      <div 
        ref={modalRef}
        aria-labelledby="modal-title" 
        aria-modal="true" 
        role="dialog"
        tabIndex={-1}
        data-lenis-prevent
        className="relative w-full max-w-[650px] max-h-[90dvh] md:max-h-[calc(100vh-var(--spacing-margin-desktop)*2)] flex flex-col bg-surface-container rounded-2xl border border-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.05)] invisible overflow-hidden"
      >
        {/* Subtle Hover Glow Top Edge */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/0 to-transparent hover:via-primary/40 transition-all duration-700 pointer-events-none z-20"></div>
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          aria-label="Close modal" 
          className="absolute top-6 right-6 p-2 rounded-full text-on-surface-variant hover:text-on-surface hover:bg-white/5 transition-colors cursor-pointer z-20"
        >
          <X size={20} />
        </button>

        <div className="p-8 md:p-12 relative z-0 flex-1 min-h-0 overflow-y-auto overscroll-contain custom-scrollbar">
          {/* Header Section */}
          <div className="mb-10 form-field-reveal">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(232,232,232,0.5)]"></span>
              <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">Contact</span>
            </div>
            <h2 
              id="modal-title"
              className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-3 tracking-tight"
            >
              Let's Build Something Exceptional
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md leading-relaxed">
              Ready to elevate your digital presence? Send a message to discuss your next visionary project.
            </p>
          </div>

          {/* Form Component */}
          <ContactForm isOpen={isOpen} />
        </div>
      </div>
    </div>
  );
}
