import { useRef, useEffect } from "react";
import gsap from "gsap";


interface HamburgerProps {
  isOpen: boolean;
  onClick: () => void;
}

export function HamburgerButton({ isOpen, onClick }: HamburgerProps) {
  const btnRef = useRef<HTMLButtonElement>(null);
  const b1 = useRef<HTMLSpanElement>(null);
  const b2 = useRef<HTMLSpanElement>(null);
  const b3 = useRef<HTMLSpanElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    gsap.set([b1.current, b2.current, b3.current], {
      transformOrigin: "center center",
    });

    tl.current = gsap
      .timeline({ paused: true })
      .to(
        b2.current,
        { scaleX: 0, opacity: 0, duration: 0.15, ease: "power2.in" },
        0,
      )
      .to(b1.current, { y: 7, duration: 0.2, ease: "power2.inOut" }, 0.05)
      .to(b3.current, { y: -7, duration: 0.2, ease: "power2.inOut" }, 0.05)
      .to(b1.current, { rotate: 45, duration: 0.25, ease: "power3.out" }, 0.22)
      .to(b3.current, { rotate: -45, duration: 0.25, ease: "power3.out" }, 0.22)
      .fromTo(
        btnRef.current,
        { backgroundColor: "blue" },
        { backgroundColor: "#000", duration: 0.6, ease: "power3.inOut" },
        0,
      );

    return () => {
      tl.current?.kill();
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      tl.current?.play();
    } else {
      tl.current?.reverse();
    }
  }, [isOpen]);

  return (
    <button
      ref={btnRef}
      onClick={onClick}
      aria-expanded={isOpen}
      aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
      className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-700 shadow-lg"
    >
      <div className="flex flex-col items-center gap-1.25">
        <span
          ref={b1}
          className="block h-[2px] w-[22px] rounded-full bg-white"
        />
        <span
          ref={b2}
          className="block h-[2px] w-[22px] rounded-full bg-white"
        />
        <span
          ref={b3}
          className="block h-[2px] w-[22px] rounded-full bg-white"
        />
      </div>
    </button>
  );
}