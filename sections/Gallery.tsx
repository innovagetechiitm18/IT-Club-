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
        {galleryEvents.map((event) => (
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
                    src={`https://picsum.photos/seed/${imgNum}/600/800`}
                    alt={`${event.title} — photo ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 256px, 400px"
                    priority={imgNum <= 4}
                    className="object-cover grayscale transition-transform duration-700 hover:scale-110 hover:grayscale-0"
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
