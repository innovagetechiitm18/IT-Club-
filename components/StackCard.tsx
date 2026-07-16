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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, ea
            cum! Ex beatae atque reprehenderit dolorem nihil aliquid nulla
            fugiat voluptas? Possimus quis similique nisi ex debitis libero
            molestias? Ipsam?
          </p>
          <Button className="mt-4" onClick={() => navigateToDepartment("Tech & Gaming")}>Meet The Head</Button>

        </SpotlightCard>
      </div>

      <div className="card absolute w-full">
        <SpotlightCard className="p-8 rounded-2xl" spotlightColor="rgba(20, 71, 230, 0.4)">
          <h1 className="text-3xl font-bold text-white">Social Media</h1>
          <p className="text-base text-zinc-400 mt-4 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, ea
            cum! Ex beatae atque reprehenderit dolorem nihil aliquid nulla
            fugiat voluptas? Possimus quis similique nisi ex debitis libero
            molestias? Ipsam?
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, ea
            cum! Ex beatae atque reprehenderit dolorem nihil aliquid nulla
            fugiat voluptas? Possimus quis similique nisi ex debitis libero
            molestias? Ipsam?
          </p>
          <Button className="mt-4" onClick={() => navigateToDepartment("Management & Marketing")}>Meet The Head</Button>

        </SpotlightCard>
      </div>
    </div>
  );
}
