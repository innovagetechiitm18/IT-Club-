"use client";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/utils";
import { openJoinModal } from "@/components/JoinUsModal";
export default function Hero() {
  return (
    <div className="panel p-5 min-h-[calc(100vh-150px)] space-y-8">
      <div className="mx-auto max-w-5xl 2xl:max-w-6xl 3xl:max-w-7xl text-center space-y-6">
        <div>
          <h1 className="text-4xl md:text-6xl 2xl:text-7xl p-2 mt-2 font-bold bg-clip-text  text-transparent bg-linear-to-r from-blue-400 to-cyan-400">
            Innovage Tech
          </h1>
          <h1 className="text-5xl md:text-7xl 2xl:text-8xl mt-2 font-bold text-white">
            Learn, Build, Innovate
          </h1>
        </div>

        <p className="text-md md:text-lg 2xl:text-xl leading-relaxed text-zinc-200 max-w-3xl 2xl:max-w-4xl mx-auto mt-4">
          The official tech club of the Institute of Innovation in Technology
          and Management, where students learn, build innovative projects, and
          gain real-world experience through workshops, hackathons, and
          mentorship.
        </p>

        <div className="flex justify-center flex-col sm:flex-row gap-4">
          <Button className="rounded-4xl py-6 px-8 text-md" size={"lg"} onClick={openJoinModal}>Join Us</Button>
          <Button
            variant="outline"
            size={"lg"}
            className="text-white rounded-4xl py-6 px-8 text-md"
            onClick={() => scrollToSection("gallery")}
          >
            Glimpse
          </Button>
        </div>
      </div>
    
    </div>
  );
}
