import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { About } from "@/components/sections/About";
import { ExpertiseGrid } from "@/components/sections/ExpertiseGrid";
import { VisionMission } from "@/components/sections/VisionMission";
import { Projects } from "@/components/sections/Projects";
import { Values } from "@/components/sections/Values";
import { NewsSection } from "@/components/sections/NewsSection";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <ExpertiseGrid />
      <VisionMission />
      <Projects limit={3} tint />
      <Values />
      <NewsSection limit={3} />
      <CTASection />
    </>
  );
}
