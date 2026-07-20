"use client";

import MovingCard from "@/components/MovingCard";

export default function About() {
  return (
    <section className="about panel w-full py-16 sm:py-20 lg:py-28 2xl:py-36">
      <div className="mx-auto flex max-w-6xl 2xl:max-w-7xl 3xl:max-w-[1600px] flex-col items-center gap-12 px-6 lg:flex-row lg:gap-20 2xl:gap-28">
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
                2xl:text-8xl
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
                2xl:text-2xl
                2xl:leading-10
              "
            >
              At{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text font-semibold text-transparent">
                Innovage Tech
              </span>
              , we believe innovation begins with people. We are a student-driven IT community dedicated to transforming curiosity into capability through collaboration, creativity, and continuous learning. With our three core departments—Tech & Gaming, Marketing & Management, and Social Media—we empower students to develop their skills, embrace leadership, and create meaningful impact beyond the classroom. 

            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
