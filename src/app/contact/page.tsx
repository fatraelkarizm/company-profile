import type { Metadata } from "next";
import { ContactHeroSection } from "@/components/sections/contact-hero-section";
import { ContactFormSection } from "@/components/sections/contact-form-section";
import { ContactInfoSection } from "@/components/sections/contact-info-section";

export const metadata: Metadata = {
  title: "Contact Us - TechFlow Solutions",
  description: "Get in touch with TechFlow Solutions. Start your digital transformation journey today with our expert team.",
  openGraph: {
    title: "Contact Us - TechFlow Solutions",
    description: "Get in touch with TechFlow Solutions. Start your digital transformation journey today with our expert team.",
  },
};

// Force dynamic rendering (SSR) for contact forms to handle fresh data
export const dynamic = 'force-dynamic';

export default function ContactPage() {
  return (
    <>
      <ContactHeroSection />
      <ContactFormSection />
      <ContactInfoSection />
    </>
  );
}