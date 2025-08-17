import type { Metadata } from "next";
import { ServicesHeroSection } from "@/components/sections/services-hero-section";
import { DetailedServicesSection } from "@/components/sections/detailed-services-section";
import { ProcessSection } from "@/components/sections/process-section";
import { TechnologiesSection } from "@/components/sections/technologies-section";

export const metadata: Metadata = {
  title: "Services - TechFlow Solutions",
  description: "Explore our comprehensive digital services: web development, mobile apps, digital transformation, and cloud solutions.",
  openGraph: {
    title: "Services - TechFlow Solutions",
    description: "Explore our comprehensive digital services: web development, mobile apps, digital transformation, and cloud solutions.",
  },
};

// Using Incremental Static Regeneration (ISR) to update content periodically
export const revalidate = 3600; // Revalidate every hour

export default function ServicesPage() {
  return (
    <>
      <ServicesHeroSection />
      <DetailedServicesSection />
      <ProcessSection />
      <TechnologiesSection />
    </>
  );
}