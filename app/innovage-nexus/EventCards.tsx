"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./events.css";

gsap.registerPlugin(ScrollTrigger);

interface EventData {
  id: string;
  title: string;
  category: string;
  categoryColor: string;
  fee: string;
  feeNote?: string;
  icon: React.ReactNode;
  description: string;
  rules: string[];
  highlight?: string;
  accentFrom: string;
  accentTo: string;
  registrationLink: string;
}

const EVENTS: EventData[] = [
  {
    id: "ux-ui-design",
    title: "Figma UX/UI Designing",
    category: "Design",
    categoryColor: "text-purple-400",
    registrationLink: "https://forms.gle/8mh227mCiQVShw5z8",
    fee: "₹25",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"
        />
      </svg>
    ),
    description:
      "Design a stunning website landing page from scratch in Figma. Showcase your creativity, layout skills, and visual mastery.",
    rules: [
      "Design problem/task will be given on the spot",
      "Must use Figma for designing",
      "Design a website front page/landing page on the given theme",
      "Design must be created from scratch during the competition",
      "Ensure proper UI layout, typography, colour combination, spacing and visual consistency",
      "No pre-designed templates or previously created designs allowed",
      "Judging: creativity, UI/UX, visual appeal, originality & execution",
      "Copied designs or templates may lead to disqualification",
    ],
    accentFrom: "from-purple-500",
    accentTo: "to-pink-500",
  },
  {
    id: "vibe-coding",
    title: "Vibe-Coding",
    category: "Development",
    categoryColor: "text-cyan-400",
    registrationLink: "https://forms.gle/6Jf6MQSrKeAaSGyR8",
    fee: "₹40",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
        />
      </svg>
    ),
    description:
      "Build a functional, responsive website with AI-powered tools. Deploy it live and wow the judges with your tech stack.",
    rules: [
      "Website development problem/theme will be given",
      "AI tools are allowed for generating code, debugging and improving",
      "Website must be functional and responsive",
      "Must deploy the website and submit the live link",
      "May be asked to explain your approach and AI usage",
      "Pre-built or previously developed websites not accepted",
      "Website must be created during the competition",
      "Judging: functionality, creativity, UI, responsiveness, execution & effective AI use",
      "Plagiarism or pre-existing projects may lead to disqualification",
    ],
    accentFrom: "from-cyan-500",
    accentTo: "to-blue-500",
  },
  {
    id: "gaming",
    title: "Gaming — BGMI & Free Fire",
    category: "Gaming",
    categoryColor: "text-amber-400",
    registrationLink: "https://docs.google.com/forms/d/1W_McnFjQaOddb75SPOyjZ0DNMd-eIU_IVXHpPZQ86Ig/viewform",
    fee: "₹60",
    feeNote: "per person",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.959.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z"
        />
      </svg>
    ),
    description:
      "Squad up and dominate the battleground! Assemble your 4-player team and fight for victory in BGMI & Free Fire.",
    highlight: "Team of 4 / Squad",
    rules: [
      "Competition in BGMI & Free Fire — team of 4 (squad)",
      "Play on your own mobile phone",
      "Register with correct in-game details (BGMI/Free Fire username & UID)",
      "Join lobby on time as informed",
      "Only registered players allowed",
      "Team leader registers for all members",
      "Use your own account",
      "Hacks/cheats/scripts = immediate disqualification",
      "Follow organizer instructions",
      "Format, map, scoring & timing shared before match",
      "Organizer's decision is final",
      "Ensure stable internet and device",
    ],
    accentFrom: "from-amber-500",
    accentTo: "to-orange-500",
  },
  {
    id: "cinematic-shots",
    title: "Cinematic Shots",
    category: "Creative",
    categoryColor: "text-emerald-400",
    registrationLink: "https://docs.google.com/forms/d/1P0k9E-uvV_MTLBA_8Dxa2O2cHLuHYrfYR6_j1LNwX8E/viewform",
    fee: "₹50",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
        />
      </svg>
    ),
    description:
      "Tell a story through the lens. Create a cinematic masterpiece that captivates with storytelling, creativity, and visual brilliance.",
    rules: [
      "Create a cinematic video based on the given theme/topic",
      "Video should showcase creativity, storytelling & cinematic presentation",
      "Video must be approximately 1.5 minutes long",
      "5-day window to shoot and edit the video",
      "Final video must be submitted one day before the main event",
      "Can use mobile phones, cameras or other equipment for shooting",
      "Editing software/tools can be used to enhance the final video",
      "Content must be original, created specifically for the competition",
      "Do not use copyrighted footage/content without permission",
      "Judging: storytelling, creativity, cinematography, editing, originality & presentation",
      "Submission format and method will be communicated by organizers",
    ],
    accentFrom: "from-emerald-500",
    accentTo: "to-teal-500",
  },
];

function EventCard({ event, index }: { event: EventData; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        cardRef.current,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: cardRef }
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!spotlightRef.current || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    spotlightRef.current.style.setProperty("--mouse-x", `${x}px`);
    spotlightRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="event-card group relative rounded-3xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-xl overflow-hidden opacity-0"
      id={`event-card-${event.id}`}
    >
      {/* Spotlight overlay */}
      <div ref={spotlightRef} className="event-card-spotlight" />

      {/* Accent top bar */}
      <div
        className={`h-1 w-full bg-gradient-to-r ${event.accentFrom} ${event.accentTo}`}
      />

      <div className="relative z-10 p-6 md:p-8">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-6">
          <div className="flex items-center gap-4">
            <div
              className={`p-3 rounded-2xl bg-gradient-to-br ${event.accentFrom} ${event.accentTo} text-white shadow-lg`}
            >
              {event.icon}
            </div>
            <div>
              <span
                className={`text-xs font-semibold uppercase tracking-widest ${event.categoryColor}`}
              >
                {event.category}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mt-1">
                {event.title}
              </h3>
            </div>
          </div>

          {/* Fee badge */}
          <div className="shrink-0 text-right">
            <div className="inline-flex flex-col items-end px-4 py-2 rounded-2xl bg-white/[0.06] border border-white/[0.08]">
              <span className="text-2xl font-extrabold text-white">
                {event.fee}
              </span>
              {event.feeNote && (
                <span className="text-[11px] text-zinc-400 font-medium">
                  {event.feeNote}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-5">
          {event.description}
        </p>

        {/* Highlight badge */}
        {event.highlight && (
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.08] mb-5">
            <svg
              className="w-4 h-4 text-amber-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-semibold text-zinc-300">
              {event.highlight}
            </span>
          </div>
        )}

        {/* Expandable rules */}
        <div className="border-t border-white/[0.06] pt-5">
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 text-sm font-semibold text-zinc-300 hover:text-white transition-colors duration-300 cursor-pointer bg-transparent border-none group/btn"
            id={`toggle-rules-${event.id}`}
          >
            <svg
              className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? "rotate-90" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
            Rules & Instructions
          </button>

          <div
            className={`event-rules-container ${isExpanded ? "event-rules-expanded" : ""}`}
          >
            <ul className="space-y-2.5 pt-4">
              {event.rules.map((rule, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-zinc-400">
                  <span
                    className={`mt-1.5 h-1.5 w-1.5 rounded-full shrink-0 bg-gradient-to-r ${event.accentFrom} ${event.accentTo}`}
                  />
                  <span className="leading-relaxed">{rule}</span>
                </li>
              ))}
            </ul>

           
          </div>
        </div>

        {/* Register Button */}
        <div className="mt-6 pt-5 border-t border-white/[0.06]">
          <a
            href={event.registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            id={`register-${event.id}`}
            className={`event-register-btn group/reg flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl font-bold text-white text-sm tracking-wide bg-gradient-to-r ${event.accentFrom} ${event.accentTo} transition-all duration-300 hover:opacity-90 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]`}
          >
            Register Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default function EventCards() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      className="relative px-4 md:px-6 pb-24 md:pb-32"
      id="event-cards"
    >
      {/* Section heading */}
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Choose Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">Arena</span>
        </h2>
        <p className="text-zinc-500 mt-3 text-base md:text-lg">
          4 events · All skill levels welcome
        </p>
      </div>

      {/* Event cards grid */}
      <div className="max-w-6xl 2xl:max-w-7xl 3xl:max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {EVENTS.map((event, index) => (
          <EventCard key={event.id} event={event} index={index} />
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-16 md:mt-20 space-y-4">
        <p className="text-zinc-500 text-sm">
          Have questions? Reach out to the organizers for more details.
        </p>
      </div>
    </section>
  );
}
