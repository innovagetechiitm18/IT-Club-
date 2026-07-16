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
  const mainRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const cards =
        containerRef.current?.querySelectorAll<HTMLElement>(".card");

      if (!cards?.length) return;

      gsap.set(cards, {
        y: (i) => (i === 0 ? 0 : window.innerHeight * 1.2),
      });

      const mm = gsap.matchMedia();

      mm.add(
        {
          desktop: "(min-width: 1024px)",
          tablet: "(min-width:768px) and (max-width:1023px)",
          mobile: "(max-width:767px)",
        },
        (context) => {
          const { desktop, tablet } = context.conditions!;

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: mainRef.current,
              start: desktop
                ? "top 80px"
                : tablet
                  ? "top 100px"
                  : "top -150px",
              end: desktop ? "+=320%" : tablet ? "+=260%" : "+=220%",
              pin: true,
              scrub: 1,
              invalidateOnRefresh: true,
            },
          });

          cards.forEach((card, i) => {
            if (i === 0) return;

            tl.to(
              card,
              {
                y: () => window.innerHeight * 0.05 * i,
                duration: 1,
                ease: "power2.out",
              },
              i - 1,
            );
          });
        },
      );

      ScrollTrigger.refresh();

      return () => {
        mm.revert();
      };
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={mainRef}
      className="
        relative
        w-full
        py-16
        sm:py-20
        lg:py-28
      "
    >
      <div
        className="
          mx-auto
          flex
          max-w-6xl
          2xl:max-w-7xl
          3xl:max-w-[1600px]
          flex-col
          gap-14
          px-6
          md:flex-row
          md:items-start
          md:gap-20
          2xl:gap-28
          md:px-8
        "
      >
        <div className="w-full md:w-[42%]">
          <div className="max-w-xl">
            <h1
              className="
                text-4xl
                font-extrabold
                uppercase
                leading-none
                tracking-tight
                text-white
                md:text-5xl
                lg:text-6xl
                2xl:text-7xl
              "
            >
              Our Departments
            </h1>

            <p
              className="
                mt-6
                text-base
                leading-8
                text-white/80
                sm:text-lg
                2xl:text-xl
                2xl:leading-9
              "
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem cupiditate adipisci vel velit accusamus. Exercitationem
              provident saepe eligendi aspernatur laboriosam, nemo consectetur
              pariatur recusandae voluptatibus illum.
            </p>
          </div>
        </div>

        <div
          ref={containerRef}
          className="
            w-full
            md:w-[58%]
          "
        >
          <StackCard />
        </div>
      </div>
    </section>
  );
}
