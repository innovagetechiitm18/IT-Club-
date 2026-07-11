"use client";
import { useState, useRef } from "react";
import StaggerMenu from "@/components/menu";
import Image from "next/image";
import gsap from "gsap";
import { HamburgerButton } from "@/components/hamBtm";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)
import { useGSAP } from "@gsap/react";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);

 useGSAP(() => {
    if (!headerRef.current) return;

    const mm = gsap.matchMedia();

    mm.add(
      {
        desktop: "(min-width: 768px)",
        mobile: "(max-width: 767px)",
      },
      (context) => {
        const { desktop } = context.conditions as { desktop: boolean };

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: document.body, 
            start: "top -20px",
            end: "+=99999",
            toggleActions: "play none none reverse",
            toggleClass: { targets: headerRef.current, className: "scrolled" }, 
          },
        });

        tl.to(headerRef.current, {
          width: desktop ? "70%" : "90%",
          marginTop: "16px",
          borderRadius: "999px",
          duration: 0.6,
          ease: "power3.inOut",
        });

        if (desktop && headingRef.current) {
          tl.to(
            headingRef.current,
            {
              opacity: 0,
              duration: 0.3,
              ease: "power3.inOut",
            },
            "-=0.5" 
          );
        }

        if (logoRef.current) {
          tl.to(
            logoRef.current,
            {
              scale: desktop ? 0.8 : 0.7,
              duration: 0.4,
              ease: "power3.inOut",
            },
            "-=0.5"
          );
        }
      }
    );
  },[]);
  return (
    <>
      <div
        ref={headerRef}
        className="header-glass w-full fixed top-0 left-1/2 -translate-x-1/2 z-40 "
      >
        <div className="flex items-center justify-between px-4 md:px-8">
            <div
              ref={logoRef}
              className="rounded-full p-2 md:p-3 flex items-center justify-center scale-[0.8] md:scale-100 h-16 w-16 bg-black"
            >
              <Image
                src="/logo-2.png"
                alt="Next.js Logo"
                width={100}
                height={100}
                className="hover:rotate-40 transition-transform duration-500 ease-in-out"
              />
            </div>
          <div>
            <HamburgerButton
              isOpen={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
        </div>
      </div>
      <div className="h-[80px]"></div>
      <StaggerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
