import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/header";
import JoinUsModal from "@/components/JoinUsModal";
import Footer from "@/components/Footer";
import { Outfit, Poppins } from "next/font/google";
import LightRays from "@/components/LightRays";
import Particles from "@/components/Particles";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("font-sans", outfit.variable, poppins.variable)}
    >
      <body className="relative overflow-x-hidden min-h-screen bg-[black]">
        
        <div className="absolute inset-0 h-screen -z-10 pointer-events-none">
          <LightRays
            raysOrigin="top-center"
            raysColor="#ffffff"
            raysSpeed={1}
            lightSpread={0.5}
            rayLength={3}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0}
            distortion={0}
            className="custom-rays"
            pulsating={false}
            fadeDistance={1}
            saturation={1}
          />
        </div>

        <div className="fixed inset-0 z-[-11] pointer-events-none">
          <Particles
            particleColors={["#ffffff"]}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={70}
            moveParticlesOnHover
            alphaParticles={false}
            disableRotation={false}
            pixelRatio={1}
          />
        </div>

        <div className="relative z-10 overflow-x-hidden">
          <Header />
          {children}
          <Footer />
        </div>
        <JoinUsModal />
      </body>
    </html>
  );
}
