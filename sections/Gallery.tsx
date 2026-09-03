"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface GalleryEvent {
  id: string;
  title: string;
  images: number[];
}

const galleryEvents: GalleryEvent[] = [
  { id: "event-1", title: "TechQUest 2025", images: [1, 2, 3, 4] },
  { id: "event-2", title: "IT Conclav 2026", images: [5, 6, 7, 8] },
  { id: "event-3", title: "Tech Fusion 2026", images: [9, 10, 11, 12] },
];

const nexusCategories = [
  { emoji: "🎨", label: "UX/UI Design" },
  { emoji: "💻", label: "Vibe-Coding" },
  { emoji: "🎮", label: "BGMI & Free Fire" },
  { emoji: "🎬", label: "Cinematic Shots" },
];

export default function HorizontalGallery() {
  const triggerRef = useRef<HTMLElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const trigger = triggerRef.current;
    const slider = sliderRef.current;
    if (!trigger || !slider) return;

    const ctx = gsap.context(() => {
      const getDistance = () =>
        Math.max(slider.scrollWidth - window.innerWidth, 0);

      gsap.to(slider, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => "+=" + getDistance(),
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (progressRef.current) {
              progressRef.current.style.width = `${self.progress * 100}%`;
            }
          },
        },
      });
    }, trigger);

    function debounce<T extends (...args: unknown[]) => void>(
      
      
      func: T,
      wait: number,
    ): (...args: Parameters<T>) => void {
      let timeout: ReturnType<typeof setTimeout>;

      return (...args: Parameters<T>) => {
        clearTimeout(timeout);

        timeout = setTimeout(() => {
          func(...args);
        }, wait);
      };
    }

    const handleResize = debounce(() => ScrollTrigger.refresh(), 200);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={triggerRef}
      className="relative h-screen w-full overflow-hidden text-white flex flex-col justify-center"
    >
      <div
        ref={sliderRef}
        className="flex h-full w-max items-center will-change-transform"
      >
        {/* ── Innovage Nexus Showcase (Full Screen) ── */}
        <div className="relative flex shrink-0 items-center justify-center w-screen h-full">
          {/* Background glows */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-72 w-72 rounded-full bg-blue-500/15 blur-[100px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 h-56 w-56 rounded-full bg-cyan-500/10 blur-[80px] pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/20 bg-green-500/5 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-[11px] font-semibold text-zinc-300 tracking-wider uppercase">
                Registration Open
              </span>
            </div>

            {/* Title */}
            <h2 className="text-5xl md:text-7xl 2xl:text-8xl font-extrabold tracking-tight mb-4">
              <span className="text-blue-400">Innovage</span>{" "}
              <span className="text-white">Nexus</span>
            </h2>
            <p className="text-zinc-400 text-base md:text-lg max-w-lg mb-8 leading-relaxed">
              Our latest event — compete, create, and conquer across multiple arenas.
            </p>

            {/* Category pills */}
            <div className="flex flex-wrap justify-center gap-2.5 mb-10">
              {nexusCategories.map((cat) => (
                <div
                  key={cat.label}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.08]"
                >
                  <span className="text-base">{cat.emoji}</span>
                  <span className="text-xs md:text-sm font-semibold text-zinc-300 tracking-wide">
                    {cat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="/innovage-nexus"
              className="inline-flex items-center gap-2 px-10 py-3.5 rounded-full bg-blue-600 text-white text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-[1.02] active:scale-[0.98]"
            >
              Register Now
            </a>

            {/* Scroll hint */}
          
          </div>
        </div>

        {/* ── Existing Event Galleries ── */}
        {galleryEvents.map((event,ei) => (
          <div
            key={event.id}
            className="flex shrink-0 flex-col justify-center px-10 md:px-24"
          >
            <h2 className="mb-8 text-4xl font-extrabold tracking-tight md:mb-12 md:text-7xl">
              {event.title}
            </h2>

            <div className="flex items-center gap-6 md:gap-10">
              {event.images.map((imgNum, i) => (
                <div
                  key={imgNum}
                  className="relative h-80 w-64 shrink-0 overflow-hidden md:h-75 md:w-100"
                >
                  <Image
                    src={`/e${ei + 1}-${i + 1}.jpeg`}
                    alt={`${event.title} — photo ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 256px, 400px"
                    priority={imgNum <= 4}
                    className="object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="absolute inset-x-0 bottom-0 h-0.75 bg-white/10">
        <div
          ref={progressRef}
          className="h-full w-0 bg-white transition-[width] duration-75 ease-out"
        />
      </div>

      <div className="absolute bottom-6 right-8 hidden text-xs uppercase tracking-widest text-white/50 md:block">
        Scroll to explore
      </div>
    </section>
  );
}

