import { Button } from "../components/ui/button";
export default function WhatWeDo() {
  return (
    <div className="max-w-6xl rounded-4xl mx-auto mt-7 bg-blue-700 py-8 px-6">
      <div className="w-full bg-blue-700 py-16 px-6 mx-auto flex flex-col md:flex-row items-strech justify-between gap-16">
        <div className="w-full md:w-[45%] space-y-8 ">
          <h2 className="text-6xl md:text-8xl font-extrabold text-white tracking-tight leading-none">
            What <br className="hidden md:block" /> We Do?
          </h2>
          <p className="text-xl text-yellow-50 font-medium max-w-md">
            Empowering builders, creators, and innovators through immersive
            experiences and high-stakes competitions.
          </p>

          <div className="flex  items-center space-x-4">
            <Button
              className="rounded-4x bg-white hover:bg-yellow-50 text-black py-6 px-8 text-md"
              size={"lg"}
            >
              Join Now
            </Button>
            <Button
              variant="outline"
              size={"lg"}
              className="  text-white hover:text-black py-6 px-8 text-md "
            >
              Glimpse
            </Button>
          </div>
        </div>

        <div className="w-full md:w-[50%]">
          <ul className="space-y-14">
            <li className="group">
              <div className="flex items-start gap-6">
                <span className="text-2xl font-bold text-white font-mono mt-1 transition-colors duration-300 group-hover:text-white">
                  01
                </span>
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">
                    Hackathons
                  </h3>
                  <p className="text-lg text-yellow-50 leading-relaxed">
                    Transform caffeine and code into groundbreaking solutions.
                    Collaborate with visionaries, build under pressure, and
                    compete for massive prize pools.
                  </p>
                </div>
              </div>
            </li>

            <li className="group">
              <div className="flex items-start gap-6">
                <span className="text-2xl font-bold text-white font-mono mt-1 transition-colors duration-300 group-hover:text-white">
                  02
                </span>
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">
                    Workshops
                  </h3>
                  <p className="text-lg text-yellow-50 leading-relaxed">
                    Master cutting-edge tech. Deep-dive into interactive,
                    hands-on sessions led by industry veterans to level up your
                    practical skills.
                  </p>
                </div>
              </div>
            </li>

            <li className="group">
              <div className="flex items-start gap-6">
                <span className="text-2xl font-bold text-white font-mono mt-1 transition-colors duration-300 group-hover:text-white">
                  03
                </span>
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">
                    Tournaments
                  </h3>
                  <p className="text-lg text-yellow-50 leading-relaxed">
                    Settle the score. Battle it out in high-stakes coding
                    sprints and e-sports arenas to claim the ultimate bragging
                    rights.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
