"use client";

import Link from "next/link";

export default function AnnouncementTicker() {
  return (
    <div className="w-full bg-zinc-950/95 border-b border-orange-500/20 overflow-hidden z-50">
      <div className="flex items-stretch">
        {/* News label */}
        <div className="flex-shrink-0 flex items-center gap-2 px-4 md:px-5 py-2 bg-gradient-to-r from-orange-600 to-amber-500 relative z-10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
          </span>
          <span className="text-[11px] font-black text-white uppercase tracking-widest whitespace-nowrap">
            SIH  2026
          </span>
          {/* Arrow notch */}
          <div className="absolute -right-2 top-0 bottom-0 w-2 overflow-hidden">
            <div className="absolute top-1/2 -translate-y-1/2 -left-2 w-4 h-4 bg-gradient-to-r from-orange-600 to-amber-500 rotate-45" />
          </div>
        </div>

        {/* Scrolling content */}
        <Link href="/sih" className="flex-1 overflow-hidden ml-2 flex items-center group">
          <div className="flex whitespace-nowrap animate-[marquee_30s_linear_infinite] group-hover:[animation-play-state:paused]">
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={i} className="flex items-center mx-8 md:mx-12">
                <span className="text-orange-400 font-bold text-xs mr-2">●</span>
                <span className="text-[12px] md:text-[13px] font-medium text-zinc-300 tracking-wide">
                  <span className="text-orange-400 font-bold">Smart India Hackathon 2026</span>
                  {" — "}Internal Round by Dept. of Computer Science, IINTM & Innovage Tech Club
                  {" · "}
                  <span className="text-white font-semibold">14 Sept</span>
                  {" · "}Room 511{" · "}10 AM Onwards
                  {" · "}
                  <span className="text-orange-400 underline underline-offset-2 decoration-orange-400/40">Click to know more →</span>
                </span>
              </span>
            ))}
          </div>
        </Link>
      </div>
    </div>
  );
}
