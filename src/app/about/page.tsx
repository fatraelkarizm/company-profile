import type { Metadata } from "next";
import { AboutHeroSection } from "@/components/sections/about-hero-section";
import { TeamSection } from "@/components/sections/team-section";
import { ValuesSection } from "@/components/sections/values-section";
import { CompanyStorySection } from "@/components/sections/company-story-section";

export const metadata: Metadata = {
  title: "About Us - TechFlow Solutions",
  description: "Learn about TechFlow Solutions - our story, team, and values that drive innovation in digital transformation.",
  openGraph: {
    title: "About Us - TechFlow Solutions",
    description: "Learn about TechFlow Solutions - our story, team, and values that drive innovation in digital transformation.",
  },
};

// Using Static Site Generation (SSG)
export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <CompanyStorySection />
      <ValuesSection />
      <TeamSection />
    </>
  );
}