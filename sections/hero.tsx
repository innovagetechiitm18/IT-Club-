"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Hero() {
  return (
    <div className="panel p-5 min-h-[calc(100vh-150px)] space-y-8">
      <div className="mx-auto max-w-5xl text-center space-y-6">
        <div>
          <h1 className="text-4xl md:text-6xl p-2 mt-2 font-bold bg-clip-text  text-transparent bg-linear-to-r from-blue-400 to-cyan-400">
            Innovage Tech
          </h1>
          <h1 className="text-5xl md:text-7xl mt-2 font-bold text-white">
            Learn, Build, Innovate
          </h1>
        </div>

        <p className="text-md md:text-lg leading-relaxed text-zinc-200 max-w-3xl mx-auto mt-4">
          The official tech club of the Institute of Innovation in Technology
          and Management, where students learn, build innovative projects, and
          gain real-world experience through workshops, hackathons, and
          mentorship.
        </p>

        <div className="flex justify-center flex-col sm:flex-row gap-4">
          <Button className="rounded-4xl py-6 px-8 text-md" size={"lg"}>Join Us</Button>
          <Button variant="outline" size={"lg"} className="text-white rounded-4xl py-6 px-8 text-md ">
            <Link href="/#gallery">Glimpse</Link> 
          </Button>
        </div>
      </div>
    
    </div>
  );
}
