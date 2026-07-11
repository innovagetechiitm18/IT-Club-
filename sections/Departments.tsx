"use client";

import StackCard from "@/components/StackCard";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Departments() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const cards = containerRef.current?.querySelectorAll(".card");
      
      if (!cards || cards.length === 0) return;

      gsap.set(cards, {
        y: (i) => (i === 0 ? 0 : window.innerHeight * 1.2),
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 100px",
          end: "bottom top",
          pin: true,
          pinSpacing: true,
            pinReparent: true,

          scrub: 1,
        },
      });

      cards.forEach((card, i) => {
        if (i === 0) return;

        tl.to(card, {
          y: i * 30, 
          duration: 1,
          ease: "power1.inOut",
        });
      });

      const timeout = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 150);

      return () => clearTimeout(timeout);
    },
    { scope: containerRef }
  );

  return (
    <section 
      
      className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8 lg:items-start justify-center w-full relative"
    >
      <div className="w-full lg:w-[40%] h-fit lg:sticky lg:top-25 flex flex-col justify-between z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-none text-white">
          Our Departments
        </h1>
        <p className="text-base md:text-lg text-white/80 mt-6 leading-relaxed">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
          cupiditate adipisci vel velit accusamus.
        </p>
      </div>

      <div ref={containerRef} className="w-full h-fit lg:w-[60%]">
        <StackCard />
      </div>
    </section>
  );
}