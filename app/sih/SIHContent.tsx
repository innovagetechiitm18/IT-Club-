"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./sih.css";

gsap.registerPlugin(ScrollTrigger);

const THEMES = [
  {
    title: "Agriculture, FoodTech & Rural Development",
    icon: "🌾",
    description: "Innovate for sustainable farming, food processing, and rural empowerment using technology.",
    accentFrom: "from-green-500",
    accentTo: "to-emerald-500",
  },
  {
    title: "Blockchain & Cybersecurity",
    icon: "🔐",
    description: "Build secure, decentralized solutions to protect digital infrastructure and data.",
    accentFrom: "from-violet-500",
    accentTo: "to-purple-500",
  },
  {
    title: "Clean & Green Technology",
    icon: "🌱",
    description: "Develop eco-friendly technologies for waste management, renewable energy, and sustainability.",
    accentFrom: "from-emerald-500",
    accentTo: "to-teal-500",
  },
  {
    title: "Disaster Management",
    icon: "🛡️",
    description: "Create smart systems for disaster prediction, early warning, response, and relief.",
    accentFrom: "from-orange-500",
    accentTo: "to-red-500",
  },
  {
    title: "MedTech / BioTech / HealthTech",
    icon: "🧬",
    description: "Transform healthcare with AI diagnostics, telemedicine, and biotech innovations.",
    accentFrom: "from-rose-500",
    accentTo: "to-pink-500",
  },
  {
    title: "Smart Automation & Smart Vehicles",
    icon: "🤖",
    description: "Engineer intelligent automation, IoT systems, and next-gen autonomous vehicles.",
    accentFrom: "from-blue-500",
    accentTo: "to-indigo-500",
  },
  {
    title: "Space Technology",
    icon: "🚀",
    description: "Push frontiers with satellite data, space exploration tools, and aerospace innovations.",
    accentFrom: "from-indigo-500",
    accentTo: "to-blue-600",
  },
  {
    title: "Transportation & Logistics",
    icon: "🚛",
    description: "Optimize supply chains, traffic systems, and logistics with smart tech solutions.",
    accentFrom: "from-amber-500",
    accentTo: "to-yellow-500",
  },
];

const DETAILS = [
  { label: "Date", value: "14 September 2026", icon: "📅" },
  { label: "Time", value: "10:00 AM Onwards", icon: "⏰" },
  { label: "Venue", value: "Room 512", icon: "📍" },
  { label: "Team Size", value: "6 Members", icon: "👥" },
];

function ThemeCard({ theme, index }: { theme: typeof THEMES[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      cardRef.current,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        delay: index * 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );
  }, { scope: cardRef });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!spotlightRef.current || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    spotlightRef.current.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    spotlightRef.current.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="sih-theme-card group relative rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-xl overflow-hidden opacity-0"
    >
      <div ref={spotlightRef} className="sih-card-spotlight" />

      {/* Accent bar */}
      <div className={`h-0.5 w-full bg-gradient-to-r ${theme.accentFrom} ${theme.accentTo}`} />

      <div className="relative z-10 p-6">
        <div className="flex items-start gap-4">
          <div className={`flex-shrink-0 p-3 rounded-xl bg-gradient-to-br ${theme.accentFrom} ${theme.accentTo} text-white text-2xl shadow-lg`}>
            {theme.icon}
          </div>
          <div>
            <h3 className="text-lg font-bold text-white tracking-tight mb-1.5">
              {theme.title}
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              {theme.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SIHContent() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!heroRef.current) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      heroRef.current.querySelectorAll(".sih-hero-anim"),
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.12 }
    );
  }, { scope: heroRef });

  return (
    <div className="relative">
      {/* ── Hero Section ── */}
      <div
        ref={heroRef}
        className="relative min-h-[85vh] flex items-center justify-center px-6 overflow-hidden"
      >
        {/* Background orbs */}
        <div className="sih-float-1 absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-orange-500/10 blur-[120px] pointer-events-none" />
        <div className="sih-float-2 absolute bottom-1/3 right-1/4 h-64 w-64 rounded-full bg-amber-500/10 blur-[100px] pointer-events-none" />
        <div className="sih-float-1 absolute top-1/2 right-1/3 h-48 w-48 rounded-full bg-yellow-500/8 blur-[80px] pointer-events-none" />

        {/* Pulsing ring behind title */}
        <div className="sih-pulse-ring absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full border border-orange-500/10 pointer-events-none" />
        <div className="sih-pulse-ring absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full border border-orange-500/5 pointer-events-none" style={{ animationDelay: "1s" }} />

        <div className="relative z-10 text-center max-w-5xl mx-auto space-y-6">
          {/* Official badge */}
          <div className="sih-hero-anim inline-flex items-center gap-2 px-5 py-2 rounded-full border border-orange-500/20 bg-orange-500/5 backdrop-blur-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500" />
            </span>
            <span className="text-sm font-medium text-zinc-300 tracking-wide">
              Internal Hackathon
            </span>
          </div>

          {/* Presented by */}
          <p className="sih-hero-anim text-sm md:text-base text-zinc-400 tracking-wide">
            Organized by{" "}
            <span className="text-white font-semibold">Department of Computer Science, IINTM</span>
            <br />
            <span className="text-xs md:text-sm text-zinc-500 mt-1 inline-block">
              in association with <span className="text-orange-400/80 font-medium">Innovage Tech Club</span>
            </span>
          </p>

          {/* Title */}
          <h1
            ref={titleRef}
            className="sih-hero-anim text-5xl md:text-7xl 2xl:text-8xl font-extrabold tracking-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 sih-gradient-text">
              Smart India
            </span>
            <br />
            <span className="text-white">Hackathon 2026</span>
          </h1>

          {/* Subtitle */}
          <p className="sih-hero-anim text-lg md:text-xl 2xl:text-2xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            226 problem statements · 17 themes · One mission — innovate for India.
            Form your team and build the future.
          </p>

          {/* Event details cards */}
          <div
            ref={detailsRef}
            className="sih-hero-anim flex flex-wrap justify-center gap-3 md:gap-4 pt-4"
          >
            {DETAILS.map((d) => (
              <div
                key={d.label}
                className="flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm"
              >
                <span className="text-lg">{d.icon}</span>
                <div className="text-left">
                  <p className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider">{d.label}</p>
                  <p className="text-sm font-bold text-white">{d.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="sih-hero-anim flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdwQWzLSBb-W2oMw49RtwjCQd-UOUkf8LFw2n10DnbbBznsKg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest text-white bg-gradient-to-r from-orange-600 to-amber-500 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25 hover:scale-[1.02] active:scale-[0.98]"
            >
              Register Here
            </a>
            <a
              href="https://sih.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest text-white border border-orange-500/30 bg-orange-500/10 transition-all duration-300 hover:bg-orange-500/20 hover:border-orange-500/50"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
              Official SIH Portal
            </a>
            <a
              href="#themes"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest text-white border border-white/10 bg-white/[0.04] transition-all duration-300 hover:bg-white/[0.08] hover:border-white/20"
            >
              Explore Themes
            </a>
          </div>
        </div>
      </div>

      {/* ── What is SIH Section ── */}
      <section className="relative px-6 py-20 md:py-28">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left — Info */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                What is{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-400">
                  SIH?
                </span>
              </h2>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
                Smart India Hackathon is India&apos;s largest open innovation platform,
                initiated by the Government of India. It brings together students,
                industry, and government to solve real-world challenges through technology.
              </p>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
                SIH 2026 features <span className="text-white font-semibold">226 problem statements</span> —
                172 software and 54 hardware challenges across{" "}
                <span className="text-white font-semibold">17 national themes</span>.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20">
                  <span className="text-orange-400 font-bold text-sm">172</span>
                  <span className="text-xs text-zinc-400 font-medium">Software</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20">
                  <span className="text-amber-400 font-bold text-sm">54</span>
                  <span className="text-xs text-zinc-400 font-medium">Hardware</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20">
                  <span className="text-yellow-400 font-bold text-sm">17</span>
                  <span className="text-xs text-zinc-400 font-medium">Themes</span>
                </div>
              </div>
            </div>

            {/* Right — How it works */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-zinc-300 mb-6">How It Works</h3>
              {[
                { step: "01", title: "Form a Team", desc: "Build a squad of 6 members (min. 1 female member) from the same institution." },
                { step: "02", title: "Pick a Problem Statement", desc: "Choose from 226 challenges across 17 themes from the official SIH portal." },
                { step: "03", title: "Internal Hackathon", desc: "Present your idea on 14 Sept at Room 512. Best teams get nominated for nationals." },
                { step: "04", title: "Grand Finale", desc: "Nominated teams compete in the 36-hour national hackathon in December 2026." },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] group hover:border-orange-500/20 transition-colors duration-300">
                  <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 text-white text-xs font-black">
                    {item.step}
                  </span>
                  <div>
                    <h4 className="font-bold text-white text-sm mb-0.5">{item.title}</h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Themes Section ── */}
      <section id="themes" className="relative px-6 py-20 md:py-28 scroll-mt-20">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-orange-500/5 blur-[150px] pointer-events-none" />

        <div className="relative max-w-6xl 2xl:max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              Problem Statement{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-400">
                Themes
              </span>
            </h2>
            <p className="text-zinc-500 mt-4 text-base md:text-lg max-w-2xl mx-auto">
              226 problem statements across 17 themes — choose a challenge that matches your passion and skills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-5">
            {THEMES.map((theme, index) => (
              <ThemeCard key={theme.title} theme={theme} index={index} />
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="https://sih.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-orange-400 font-semibold hover:text-orange-300 transition-colors"
            >
              View all 226 problem statements on sih.gov.in
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── Rules & Guidelines ── */}
      <section className="relative px-6 py-20 md:py-28">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Rules &{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-400">
                Guidelines
              </span>
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              { icon: "👥", rule: "Team of exactly 6 members from the same institution with at least 1 female member." },
              { icon: "🎯", rule: "Pick a problem statement from the official SIH 2026 portal." },
              { icon: "💡", rule: "Prepare a solution idea and prototype to present at the internal hackathon." },
              { icon: "🏫", rule: "Teams selected from the internal round will be nominated for the national SIH." },
              { icon: "📋", rule: "Register your team for the internal hackathon using the registration form above." },
              { icon: "⚡", rule: "Bring your own laptops, chargers, and any hardware required for your demo." },
              { icon: "🚫", rule: "Pre-built or plagiarized projects will lead to disqualification." },
              { icon: "🏆", rule: "Judging criteria: innovation, feasibility, impact, technical complexity, and presentation." },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3.5 p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-orange-500/15 transition-colors duration-300"
              >
                <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
                <p className="text-sm text-zinc-300 leading-relaxed">{item.rule}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="relative px-6 py-20 md:py-28">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />

        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Ready to{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-400">
              Innovate?
            </span>
          </h2>
          <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
            Form your team of 6, explore the problem statements, and join us on{" "}
            <span className="text-white font-semibold">14 September 2026</span> at{" "}
            <span className="text-white font-semibold">Room 512, 10 AM onwards</span>.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdwQWzLSBb-W2oMw49RtwjCQd-UOUkf8LFw2n10DnbbBznsKg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest text-white bg-gradient-to-r from-orange-600 to-amber-500 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25 hover:scale-[1.02] active:scale-[0.98]"
            >
              Register Here
            </a>
            <a
              href="https://sih.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest text-white border border-orange-500/30 bg-orange-500/10 transition-all duration-300 hover:bg-orange-500/20 hover:border-orange-500/50"
            >
              Browse Problem Statements
            </a>
          </div>

          <p className="text-zinc-600 text-xs pt-6">
            For queries, contact the organizers or your department SPOC.
          </p>
        </div>
      </section>
    </div>
  );
}
