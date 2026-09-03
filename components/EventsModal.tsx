"use client";

import { useEffect, useState, useCallback } from "react";
import { createPortal } from "react-dom";

export function openEventsModal() {
  window.dispatchEvent(new CustomEvent("open-events-modal"));
}

export default function EventsModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  const open = useCallback(() => {
    setIsOpen(true);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setIsVisible(true));
    });
  }, []);

  const close = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => setIsOpen(false), 300);
  }, []);

  // Auto-open on mount (once per page load)
  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      open();
    }, 800);
    return () => clearTimeout(timer);
  }, [open]);

  // Listen for manual open event
  useEffect(() => {
    const handler = () => {
      open();
    };
    window.addEventListener("open-events-modal", handler);
    return () => window.removeEventListener("open-events-modal", handler);
  }, [open]);

  // Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, close]);

  // Lock scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-all duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={close}
      role="dialog"
      aria-modal="true"
      aria-labelledby="recruit-modal-title"
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />

      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/95 backdrop-blur-xl shadow-2xl shadow-blue-500/10 transition-all duration-300 ${
          isVisible ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
        }`}
      >
        {/* Decorative glows */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-48 w-48 rounded-full bg-blue-600/25 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-cyan-500/15 blur-3xl pointer-events-none" />

        {/* Close button */}
        <button
          onClick={close}
          className="absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-white/50 transition-all hover:bg-white/10 hover:text-white cursor-pointer"
          aria-label="Close modal"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M4 4l8 8M12 4l-8 8" />
          </svg>
        </button>

        <div className="relative flex flex-col items-center px-8 pt-10 pb-8 text-center">
          {/* Registration Open badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/20 bg-green-500/5 mb-5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="text-xs font-semibold text-zinc-300 tracking-wider uppercase">
              Registration Open
            </span>
          </div>

          {/* Title */}
          <h2
            id="recruit-modal-title"
            className="mb-2 text-3xl font-extrabold tracking-tight text-white"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
              Innovage
            </span>{" "}
            Nexus
          </h2>

          {/* Date */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.08] mb-3">
            <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
            </svg>
            <span className="text-sm font-bold text-white">7 September 2026</span>
          </div>

          {/* Subtitle */}
          <p className="text-base leading-relaxed text-zinc-400">
            Compete, create, and conquer — from{" "}
            <span className="text-white font-medium">design sprints</span> to{" "}
            <span className="text-white font-medium">AI-powered coding</span>,{" "}
            <span className="text-white font-medium">gaming battlegrounds</span> to{" "}
            <span className="text-white font-medium">cinematic challenges</span>.
          </p>

          {/* Follow us */}
          <div className="my-4 flex items-center justify-center gap-3">
            <span className="text-xs text-zinc-500 font-medium">Follow Us</span>
            <a
              href="https://instagram.com/itclubiitm"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.08] text-zinc-300 hover:text-white hover:bg-white/[0.1] transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span className="text-xs font-semibold">@itclubiitm</span>
            </a>
          </div>

          {/* Event highlights */}
          <div className="w-full grid grid-cols-4 gap-2 mb-6">
            <div className="flex flex-col items-center gap-1 py-3 px-2 rounded-xl bg-white/[0.04] border border-white/[0.06]">
              <span className="text-lg">🎨</span>
              <span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider">Design</span>
            </div>
            <div className="flex flex-col items-center gap-1 py-3 px-2 rounded-xl bg-white/[0.04] border border-white/[0.06]">
              <span className="text-lg">💻</span>
              <span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider">Coding</span>
            </div>
            <div className="flex flex-col items-center gap-1 py-3 px-2 rounded-xl bg-white/[0.04] border border-white/[0.06]">
              <span className="text-lg">🎮</span>
              <span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider">Gaming</span>
            </div>
            <div className="flex flex-col items-center gap-1 py-3 px-2 rounded-xl bg-white/[0.04] border border-white/[0.06]">
              <span className="text-lg">🎬</span>
              <span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider">Cinema</span>
            </div>
          </div>

          {/* CTA — links to event page */}
          <a
            href="/innovage-nexus"
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full text-sm font-bold uppercase tracking-widest text-white bg-blue-600 transition-all duration-300 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-[1.02] active:scale-[0.98]"
          >
            Register Now
          </a>

          <button
            onClick={close}
            className="mt-3 w-full py-2.5 rounded-full text-sm font-semibold text-zinc-500 transition-all duration-300 hover:text-zinc-300 cursor-pointer bg-transparent border-none"
          >
            Maybe Later
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
