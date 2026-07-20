"use client";
import SpotlightCard from "./SpotlightCard";
import { Button } from "./ui/button";
import { scrollToSection } from "@/lib/utils";

function navigateToDepartment(departmentName: string) {
  scrollToSection("team");
  // Give the scroll a moment to arrive, 
  // then tell the Team Swiper to slide
  setTimeout(() => {
    window.dispatchEvent(
      new CustomEvent("navigate-to-department", { detail: departmentName })
    );
  }, 800);
}

export default function Team() {
  return (
    <div className="relative h-[60vh] mb-8 w-full">
      <div className="card absolute w-full">
        <SpotlightCard className="p-8  rounded-2xl" spotlightColor="rgba(20, 71, 230, 0.4)">
          <h1 className="text-3xl font-bold text-white">Tech & Gaming</h1>
          <p className="text-base text-zinc-400 mt-4 leading-relaxed">
            The Tech & Gaming Department serves as the technological core of Innovage Tech, fostering innovation through learning, collaboration, and creativity. From coding and emerging technologies to gaming and technical events, we empower members to develop skills, solve challenges, and shape the future of technology. 

          </p>
          <Button className="mt-4" onClick={() => navigateToDepartment("Tech & Gaming")}>Meet The Head</Button>

        </SpotlightCard>
      </div>

      <div className="card absolute w-full">
        <SpotlightCard className="p-8 rounded-2xl" spotlightColor="rgba(20, 71, 230, 0.4)">
          <h1 className="text-3xl font-bold text-white">Social Media</h1>
          <p className="text-base text-zinc-400 mt-4 leading-relaxed">
            The Social Media Department is dedicated to shaping how Innovage Tech is seen, remembered, and experienced. Through creative storytelling, impactful content, and meaningful engagement, we amplify the club&apos;s vision, celebrate its achievements, and connect our community with every milestone.

          </p>
          <Button className="mt-4" onClick={() => navigateToDepartment("Social Media")}>Meet The Head</Button>
        </SpotlightCard>
      </div>

      <div className="card absolute w-full " >
        <SpotlightCard className="p-8 rounded-2xl" spotlightColor="rgba(20, 71, 230, 0.4)">
          <h1 className="text-3xl font-bold text-white">
            Management & Marketing
          </h1>
          <p className="text-base text-zinc-400 mt-4 leading-relaxed">
            The Marketing & Management Department drives the strategic vision of Innovage Tech through planning, coordination, and effective execution. By blending leadership, creativity, and organization, we ensure every initiative reflects the club&apos;s values while creating meaningful experiences for our community.

          </p>
          <Button className="mt-4" onClick={() => navigateToDepartment("Management & Marketing")}>Meet The Head</Button>

        </SpotlightCard>
      </div>
    </div>
  );
}