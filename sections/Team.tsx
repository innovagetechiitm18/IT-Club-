"use client";
import { useRef, useState } from "react";
import SpotlightCard from "@/components/SpotlightCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import Image from "next/image";

const team = [
  {
    post: "president",
    department: "Presidents",
    name: "yash goswami",
    about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    instagram: "https://instagram.com/yash",
    linkedin: "https://linkedin.com/in/yash",
  },
  {
    post: "president",
    department: "Presidents",
    name: "priyal behl",
    about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    instagram: "https://instagram.com/priyal",
    linkedin: "https://linkedin.com/in/priyal",
  },
  {
    post: "vice president",
    department: "Vice Presidents",
    name: "ayush",
    about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    instagram: "https://instagram.com/ayush",
    linkedin: "https://linkedin.com/in/ayush",
  },
  {
    post: "Technical Head",
    department: "Tech & Gaming",
    name: "vineet pandey",
    about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    instagram: "https://instagram.com/vineetpandey",
    linkedin: "https://linkedin.com/in/vineetpandey",
  },
  {
    post: "Gaming Head",
    department: "Tech & Gaming",
    name: "Saksham vashisht",
    about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    instagram: "https://instagram.com/sakshamvashisht",
    linkedin: "https://linkedin.com/in/sakshamvashisht",
  },
  {
    post: "Head",
    department: "Social Media",
    name: "Anchal Singh",
    about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    instagram: "https://instagram.com/anchalsingh",
    linkedin: "https://linkedin.com/in/anchalsingh",
  },
  {
    post: "Co - Head",
    department: "Social Media",
    name: "Kartik Singh",
    about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    instagram: "https://instagram.com/kartiksingh",
    linkedin: "https://linkedin.com/in/kartiksingh",
  },
  {
    post: "Marketing Head",
    department: "Management & Marketing",
    name: "Rishabh Monga",
    about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    instagram: "https://instagram.com/rishabhmonga",
    linkedin: "https://linkedin.com/in/rishabhmonga",
  },
  {
    post: "Management Head",
    department: "Management & Marketing",
    name: "Shruti kumari",
    about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    instagram: "https://instagram.com/shrutikumari",
    linkedin: "https://linkedin.com/in/shrutikumari",
  },
];

export default function Team() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  type Member = (typeof team)[number];

  const groupedData = team.reduce<Record<string, Member[]>>((acc, member) => {
    if (!acc[member.department]) {
      acc[member.department] = [];
    }

    acc[member.department].push(member);
    return acc;
  }, {});

  const departments = Object.keys(groupedData);
  const grouped = Object.values(groupedData) as (typeof team)[];

  const handleNavigation = (index: number) => {
    if (swiperInstance) {
      swiperInstance.slideTo(index);
    }
  };

  return (
    <div
      ref={containerRef}
      className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8 lg:items-start justify-center w-full relative"
    >
      <div className="w-full lg:w-[40%] flex flex-col justify-between">
        <div>
          <h1 className="text-5xl md:text-7xl  text-white font-bold">Our Team</h1>
          <p className="text-white/80 text-lg mt-2 leading-relaxed">
            Know The Members under the hood.
          </p>
        </div>

        <ul className="posts flex lg:flex-col gap-3 w-full mt-6 overflow-x-auto lg:overflow-visible whitespace-nowrap p-2 space-y-2 custom-scrollbar">
          {departments.map((dept, index) => (
            <li key={index}>
              <button
                onClick={() => handleNavigation(index)}
                className={`border border-white px-6 py-2 rounded-3xl transition-colors duration-300 ${
                  activeIndex === index
                    ? "bg-white text-black font-semibold" // Active state styling
                    : "text-white hover:bg-white hover:text-black"
                }`}
              >
                {dept}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full lg:w-[60%] flex items-center h-full min-h-125">
        <Swiper
          modules={[Mousewheel]}
          onSwiper={setSwiperInstance} // Capture the instance
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)} // Update active button
          mousewheel={{
            forceToAxis: true,
            releaseOnEdges: true,
          }}
          spaceBetween={20}
          slidesPerView={1}
          className="w-full h-full"
        >
          {grouped.map((members, index) => (
            <SwiperSlide
              key={index}
              className="flex! items-center justify-center p-2"
            >
              <div className="flex flex-col sm:flex-row flex-wrap justify-center items-stretch w-full gap-6">
                {members.map((member, i) => (
                  <SpotlightCard
                    key={i}
                    className={`p-8 rounded-2xl flex items-center justify-center flex-col w-full ${
                      members.length === 1
                        ? "max-w-md"
                        : "sm:w-[calc(50%-12px)]"
                    }`}
                    spotlightColor="rgba(20, 71, 230, 0.4)"
                  >
                    <div className="rounded-full hover:scale-[1.1] transition duration-300 ease-in bg-blue-700 border border-white overflow-hidden shrink-0 h-25 w-25">
                      <Image
                       src={`https://api.dicebear.com/9.x/adventurer/png?seed=${encodeURIComponent(member.name)}&size=256`}
                         className="w-full h-full object-cover"
                        width={100}
                        height={100}
                        alt={member.name}
                      />
                    </div>
                    <div className="mt-4 text-center flex flex-col items-center">
                      <h1 className="text-2xl font-bold text-white capitalize">
                        {member.name}
                      </h1>
                      <h2 className="text-xl font-bold text-blue-500 capitalize mt-1">
                        {member.post}
                      </h2>
                      <p className="text-base text-zinc-400 mt-4 leading-relaxed">
                        {member.about}
                      </p>
                      {(member.instagram || member.linkedin) && (
                        <div className="flex items-center gap-4 mt-5">
                          {member.instagram && (
                            <a
                              href={member.instagram}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-white hover:text-pink-500 transition"
                              aria-label="Instagram"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm6-1.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
                              </svg>
                            </a>
                          )}

                          {member.linkedin && (
                            <a
                              href={member.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-white hover:text-blue-500 transition"
                              aria-label="LinkedIn"
                            >
                              {/* LinkedIn SVG */}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M4.98 3.5A1.75 1.75 0 1 0 5 7a1.75 1.75 0 0 0-.02-3.5ZM3.5 8.5h3V20h-3V8.5Zm5 0h2.88v1.57h.04c.4-.76 1.38-1.57 2.84-1.57 3.04 0 3.6 2 3.6 4.59V20h-3v-5.25c0-1.25-.02-2.86-1.74-2.86-1.74 0-2.01 1.36-2.01 2.77V20h-3V8.5Z" />
                              </svg>
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </SpotlightCard>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
