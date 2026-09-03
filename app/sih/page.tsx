import type { Metadata } from "next";
import SIHContent from "./SIHContent";

export const metadata: Metadata = {
  title: "Smart India Hackathon 2026 | Innovage Tech Club",
  description:
    "Internal Smart India Hackathon 2026 organized by Department of Computer Science, IINTM in association with Innovage Tech Club. September 14, 2026 — Room 512, 10 AM onwards.",
  keywords: [
    "Smart India Hackathon",
    "SIH 2026",
    "Department of Computer Science",
    "IINTM",
    "Innovage Tech Club",
    "Department of Computer Science",
    "Hackathon",
  ],
  openGraph: {
    title: "Smart India Hackathon 2026 | Innovage Tech Club",
    description:
      "Join the Internal SIH 2026 — organized by Innovage Tech Club & Department of Computer Science, IITM. 14 September 2026, Room 512.",
    type: "website",
  },
};

export default function SIHPage() {
  return (
    <main>
      <SIHContent />
    </main>
  );
}
