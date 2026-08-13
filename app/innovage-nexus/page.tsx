import type { Metadata } from "next";
import EventsHero from "./EventsHero";
import EventCards from "./EventCards";

export const metadata: Metadata = {
  title: "Innovage Nexus | Innovage Tech Club",
  description:
    "Innovage Nexus — an event by Innovage Tech Club featuring UX/UI Design, Vibe-Coding, BGMI & Free Fire tournaments, and Cinematic Shots competition.",
  keywords: [
    "Innovage Nexus",
    "Innovage Tech Club",
    "UX/UI Design",
    "Vibe-Coding",
    "BGMI",
    "Free Fire",
    "Cinematic Shots",
    "Hackathon",
    "Gaming Tournament",
    "IITM",
  ],
  openGraph: {
    title: "Innovage Nexus | Innovage Tech Club",
    description:
      "Innovage Nexus — design competitions, AI-powered coding, mobile gaming tournaments, and cinematic challenges. Register now!",
    type: "website",
  },
};

export default function InnovageNexusPage() {
  return (
    <main>
      <EventsHero />
      <EventCards />
    </main>
  );
}
