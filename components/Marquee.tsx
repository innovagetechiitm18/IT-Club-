import { cn } from "@/lib/utils";
import './Marquee.css'
export default function Marquee() {
  const items = ["Hackathons", "Workshops", "Gaming", "Projects","Code"];
  
  // We double the array so the CSS -50% translation loops perfectly
  const duplicatedItems = [...items, ...items, ...items, ...items,...items];

  return (
    <div className="relative my-8 flex overflow-hidden bg-zinc-900/50 py-4 border-y border-white/10 backdrop-blur-sm z-10 w-full">
      <div className="animate-marquee gap-10 pr-10">
        {duplicatedItems.map((item, index) => (
          <div key={index} className="flex items-center gap-16">
            <span className="text-lg font-bold uppercase tracking-widest text-white">
              {item}
            </span>
            {/* Visual separator between words */}
            <span className="text-lg text-zinc-500">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}