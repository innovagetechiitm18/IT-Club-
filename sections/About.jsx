"use client";

import MovingCard from "@/components/MovingCard";

export default function About() {
  return (
    <section className="about panel w-full py-16 sm:py-20 lg:py-28">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 lg:flex-row lg:gap-20">
        <div className="flex w-full justify-center lg:w-1/2">
          <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-none rounded-3xl">
            <MovingCard movementBound={20} image="/college-building.jpg" />
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="mx-auto max-w-2xl space-y-6 lg:mx-0">
            <h2
              className="
                text-4xl
                font-bold
                uppercase
                leading-none
                text-white
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
              "
            >
              About Us
            </h2>

            <p
              className="
                text-base
                leading-8
                text-slate-300
                sm:text-lg
                lg:text-xl
              "
            >
              At{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text font-semibold text-transparent">
                Innovage Tech
              </span>
              , we bring together the next generation of technology leaders—one
              project at a time. Our club believes students learn best by
              building real-world projects alongside passionate peers. We
              explore software development, programming, UI/UX design, AI,
              cybersecurity, cloud computing, and emerging technologies while
              creating opportunities to innovate, collaborate, and grow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
