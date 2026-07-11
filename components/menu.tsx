"use client";

import { useState,useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { HamburgerButton } from "@/components/hamBtm";

interface StaggerMenuProps {
  isOpen?: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function StaggerMenu({ isOpen = false , setIsOpen }: StaggerMenuProps) {

  const menuRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const bgRef2 = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLUListElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const open   = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";

      const dur = 0.8;
      const chase = `-=${dur * 0.9}`;

      tl.current = gsap
        .timeline({ paused: true })
        .to(menuRef.current, { clipPath: open, duration: dur, ease: "power3.inOut" })
        .to(bgRef2.current, { clipPath: open, duration: dur, ease: "power3.inOut" }, chase)
        .to(bgRef.current,  { clipPath: open, duration: dur, ease: "power3.inOut" }, chase)
        .fromTo(
          linksRef.current?.querySelectorAll("li") || [],
          { y: 80, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4, stagger: 0.06, ease: "power2.out" },
          "-=0.3"
        );
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (isOpen) {
      tl.current?.play();
    } else {
      tl.current?.reverse();
    }
  }, [isOpen]);

  return (
    <>
    <div className={!isOpen ? "hidden" : "" + "fixed z-[49] top-0 bottom-0 right-[-100%] w-full left-0 bg-black opacity-[0.5]"}></div>
    <div
      ref={menuRef}
      className={`fixed top-0 right-0 flex items-center justify-center h-screen z-50 w-full md:w-1/3 bg-purple-700 text-white ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`} style={{ clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)" }}
    >
      <div ref={bgRef2} className="absolute inset-0 z-10 bg-blue-700" style={{ clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)" }} />

      <div ref={bgRef} className="absolute inset-0 z-20 bg-white" style={{ clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)" }} />
      
      <div className="absolute z-55  top-6 right-8">
        <HamburgerButton isOpen={isOpen} onClick={() => {setIsOpen(!isOpen)}} />
      </div>

      <nav className="relative z-30 w-full px-6 md:px-12 text-center md:text-left">
        <ul ref={linksRef} className="space-y-8">
          <li>
            <Link href="/" className="text-black hover:text-blue-700 inline-block text-3xl md:text-[3.5rem] leading-none font-black tracking-tighter transition-colors duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-black hover:text-blue-700 inline-block text-3xl md:text-[3.5rem] leading-none font-black tracking-tighter transition-colors duration-300">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="text-black hover:text-blue-700 inline-block text-3xl md:text-[3.5rem] leading-none font-black tracking-tighter transition-colors duration-300">
              Members
            </Link>
          </li>
          <li>
            <Link href="/portfolio" className="text-black hover:text-blue-700 inline-block text-3xl md:text-[3.5rem] leading-none font-black tracking-tighter transition-colors duration-300">
              Projects
            </Link>
          </li>
          <li>
            <button className="text-3xl md:text-[3.5rem] px-6 py-2 bg-blue-700 rounded-full text-white hover:bg-blue-800 hover:scale-105 transition-all duration-300">
              <Link href="/contact">Join Us</Link>
            </button>
          </li>
        </ul>
      </nav>
    </div>
    </>
  );
}
