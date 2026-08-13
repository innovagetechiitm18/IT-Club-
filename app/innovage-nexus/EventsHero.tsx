"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function EventsHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  

  return (
    <div
      ref={containerRef}
      className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center px-6 overflow-hidden"
    >

      <div className="relative z-10 text-center max-w-4xl mx-auto space-y-6">
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500" />
          </span>
          <span className="text-sm font-medium text-zinc-300 tracking-wide">
            Registration Opening Soon
          </span>
        </div>

        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl 2xl:text-8xl font-extrabold tracking-tight"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
            Innovage
          </span>
          <br />
          <span className="text-white">Nexus</span>
        </h1>

        <p
          ref={subtitleRef}
          className="text-lg md:text-xl 2xl:text-2xl text-zinc-400 max-w-2xl mx-auto leading-relaxed"
        >
          Compete, create, and conquer — from design sprints to gaming
          battlegrounds. Pick your arena and register now.
        </p>
      </div>
    </div>
  );
}
