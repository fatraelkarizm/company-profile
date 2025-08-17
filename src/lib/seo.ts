export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  twitterCard?: "summary" | "summary_large_image";
  canonicalUrl?: string;
}

export function generateMetadata({
  title = "TechFlow Solutions - Modern Digital Agency",
  description = "Professional digital agency specializing in web development, mobile apps, and digital transformation solutions.",
  keywords = "web development, mobile apps, digital transformation, tech solutions",
  ogImage = "/og-image.jpg",
  twitterCard = "summary_large_image",
  canonicalUrl,
}: SEOProps = {}) {
  return {
    title,
    description,
    keywords,
    authors: [{ name: "TechFlow Solutions" }],
    openGraph: {
      title,
      description,
      type: "website",
      images: [{ url: ogImage }],
      ...(canonicalUrl && { url: canonicalUrl }),
    },
    twitter: {
      card: twitterCard,
      title,
      description,
      images: [ogImage],
    },
    ...(canonicalUrl && { alternates: { canonical: canonicalUrl } }),
  };
}