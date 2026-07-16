import type { Metadata } from "next";

import Hero from "@/sections/hero";
import Marquee from "@/components/Marquee";
import About from "@/sections/About";
import Departments from "@/sections/Departments";
import WhatWeDo from "@/sections/WhatWeDo";
import Team from "@/sections/Team";
import HorizontalGallery from "@/sections/Gallery";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Home | Innovage Tech Club",
  description:
    "Innovage Tech Club is IITM's official technology club, organizing hackathons, workshops, gaming events, coding competitions, and technical sessions.",
  keywords: [
    "Innovage Tech Club",
    "IITM",
    "Hackathon",
    "Coding Club",
    "Workshops",
    "Technology",
    "Programming",
    "Gaming",
  ],
  openGraph: {
    title: "Innovage Tech Club",
    description:
      "Join Innovage Tech Club to see how hackathons, workshops, competitions, and community events work under the hood.",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <main>
        <Hero />

        <Marquee />

        <section id="about" className="scroll-mt-20">
          <About />
        </section>

        <section id="departments" className="scroll-mt-20">
          <Departments />
        </section>

        <section id="what-we-do" className="scroll-mt-20">
          <WhatWeDo />
        </section>

        <section id="team" className="scroll-mt-20">
          <Team />
        </section>

        <section id="gallery" className="scroll-mt-20">
          <HorizontalGallery />
        </section>
      </main>
    </>
  );
}