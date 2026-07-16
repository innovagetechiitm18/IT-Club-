"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { HamburgerButton } from "@/components/hamBtm";
import { scrollToSection } from "@/lib/utils";
import { openJoinModal } from "@/components/JoinUsModal";

interface StaggerMenuProps {
  isOpen?: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function StaggerMenu({ isOpen = false, setIsOpen }: StaggerMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const bgRef2 = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLUListElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  // 1. GSAP Animation Setup
  useEffect(() => {
    const ctx = gsap.context(() => {
      const open = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";
      const dur = 0.8;
      const chase = `-=${dur * 0.9}`;

      tl.current = gsap
        .timeline({ paused: true })
        .to(menuRef.current, { clipPath: open, duration: dur, ease: "power3.inOut" })
        .to(bgRef2.current, { clipPath: open, duration: dur, ease: "power3.inOut" }, chase)
        .to(bgRef.current, { clipPath: open, duration: dur, ease: "power3.inOut" }, chase)
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

  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (id) {
      scrollToSection(id, 300);
    }
  }, []);

  const handleSectionClick = (sectionId: string) => {
    setIsOpen(false);
    // Delay scroll to let the menu close animation play
    scrollToSection(sectionId, 600);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>

      <div
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-[49] bg-black/50 backdrop-blur-sm transition-all duration-500 ease-in-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      <div
        ref={menuRef}
        className={`fixed top-0 right-0 flex items-center justify-center h-screen z-50 w-full max-w-[450px] bg-purple-700 text-white ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        style={{ clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)" }}
      >
        <div
          ref={bgRef2}
          className="absolute inset-0 z-10 bg-blue-700"
          style={{ clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)" }}
        />
        <div
          ref={bgRef}
          className="absolute inset-0 z-20 bg-white"
          style={{ clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)" }}
        />

        <div className="absolute z-[55] top-6 right-8">
          <HamburgerButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        </div>

        <nav className="relative z-30 w-full px-6 md:px-12 text-center md:text-left">
          <ul ref={linksRef} className="space-y-8">
            {[
              { name: "Home", sectionId: "" },
              { name: "About", sectionId: "about" },
              { name: "Departments", sectionId: "departments" },
              { name: "Team", sectionId: "team" },
              { name: "Glimpse", sectionId: "gallery" },
            ].map((link) => (
              <li key={link.name}>
                <button
                  type="button"
                  onClick={() => {
                    if (link.sectionId === "") {
                      setIsOpen(false);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    } else {
                      handleSectionClick(link.sectionId);
                    }
                  }}
                  className="text-black hover:text-blue-700 inline-block text-4xl md:text-[3.5rem] leading-none font-black tracking-tighter transition-colors duration-300 cursor-pointer bg-transparent border-none"
                >
                  {link.name}
                </button>
              </li>
            ))}
       
            <li className="pt-4">
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  setTimeout(() => openJoinModal(), 600);
                }}
                className="inline-block text-2xl md:text-[2.5rem] font-bold px-8 py-3 bg-blue-700 rounded-full text-white hover:bg-blue-800 hover:scale-105 transition-all duration-300 shadow-lg cursor-pointer border-none"
              >
                Join Us
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}