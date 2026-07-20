"use client";

import { useEffect, useState, useCallback } from "react";
import { createPortal } from "react-dom";

export function openJoinModal() {
  window.dispatchEvent(new CustomEvent("open-join-modal"));
}

export default function JoinUsModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const close = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => setIsOpen(false), 300);
  }, []);

  useEffect(() => {
    const handler = () => {
      setIsOpen(true);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setIsVisible(true));
      });
    };
    window.addEventListener("open-join-modal", handler);
    return () => window.removeEventListener("open-join-modal", handler);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, close]);

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

  if (!isOpen) return null;

  return createPortal(
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-all duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={close}
      role="dialog"
      aria-modal="true"
      aria-labelledby="join-modal-title"
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />

      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/90 backdrop-blur-xl shadow-2xl shadow-blue-500/10 transition-all duration-300 ${
          isVisible ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
        }`}
      >
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-48 w-48 rounded-full bg-blue-600/30 blur-3xl pointer-events-none" />

        <button
          onClick={close}
          className="absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-white/50 transition-all hover:bg-white/10 hover:text-white"
          aria-label="Close modal"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M4 4l8 8M12 4l-8 8" />
          </svg>
        </button>

        <div className="relative flex flex-col items-center px-8 pt-10 pb-8 text-center">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-700 shadow-lg shadow-blue-500/25">
            <svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-pulse"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </div>

          <h2
            id="join-modal-title"
            className="mb-2 text-3xl font-bold tracking-tight text-white"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Coming Soon
          </h2>

          <p className="mb-6 text-base leading-relaxed text-zinc-400">
            We&apos;re not recruiting right now, but something exciting is on the way.
            Follow us on social media to be the <span className="text-white font-medium">first to know</span> when
            applications open!
          </p>

          <div className="flex items-center gap-4 mb-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 text-white/60 transition-all duration-300 hover:bg-blue-700 hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-pink-500/20"
              aria-label="Follow us on Instagram"
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm6-1.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 text-white/60 transition-all duration-300 hover:bg-blue-600 hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
              aria-label="Follow us on LinkedIn"
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>

          <button
            onClick={close}
            className="w-full rounded-full bg-blue-700 py-3 text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-[1.02] active:scale-[0.98]"
          >
            Got It
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
