import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollToPlugin);

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function goToCard(totalCards: number, index: number, duration = 0.8) {
  const trigger = ScrollTrigger.getById("team");
  if (!trigger) return;

  const step = (trigger.end - trigger.start) / (totalCards - 1);

  gsap.to(window, {
    duration,
    scrollTo: trigger.start + index * step,
    ease: "power2.out",
  });
}
