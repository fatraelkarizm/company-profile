import type { Metadata } from "next";
import "../styles/globals.css";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "TechFlow Solutions - Modern Digital Agency",
  description: "Professional digital agency specializing in web development, mobile apps, and digital transformation solutions.",
  keywords: "web development, mobile apps, digital transformation, tech solutions",
  authors: [{ name: "TechFlow Solutions" }],
  openGraph: {
    title: "TechFlow Solutions - Modern Digital Agency",
    description: "Professional digital agency specializing in web development, mobile apps, and digital transformation solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
