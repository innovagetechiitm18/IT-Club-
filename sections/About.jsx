"use client";

import MovingCard from "@/components/MovingCard";
export default function About() {
  return (
    <div className="about panel max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center gap-12 md:flex-row">
        <div className="w-full md:w-1/2">
          <div className="aspect-4/3 rounded-3xl">
            <MovingCard movementBound={20} image="/college-building.jpg" />
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-7xl font-bold uppercase text-white">
              About Us
            </h2>

            <p className=" leading-8 text-slate-300 sm:text-lg">
              At{" "}
              <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text font-semibold text-transparent">
                Innovage Tech
              </span>
              , we are bringing together the next generation of technology
              leaders — one project at a time. Our club was founded on the
              belief that students learn best when they are building real things
              alongside other passionate people. We cover everything from
              software development and programming to design, AI, cybersecurity,
              and emerging technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
