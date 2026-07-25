import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { cn } from "@/lib/utils";

const siteUrl = "https://kapoorsvilla.com"; // Replace with your actual domain

export const viewport: Viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kapoor's Villa | Luxury Villa & Boutique Stay",
    template: "%s | Kapoor's Villa",
  },
  description:
    "Experience luxury hospitality at Kapoor's Villa. Featuring premium suites, serene ambiance, private dining menu, and top-tier amenities.",
  keywords: [
    "Kapoor's Villa",
    "Luxury Villa Rental",
    "Boutique Stay",
    "Villa with Pool",
    "Private Dining Homestay",
    "Resort Suites",
  ],
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "Kapoor's Villa | Luxury Villa & Boutique Stay",
    description:
      "Discover luxury accommodation and fine dining at Kapoor's Villa.",
    url: siteUrl,
    siteName: "Kapoor's Villa",
    images: [
      {
        url: "/bedroom/room-1.jpg",
        width: 1200,
        height: 630,
        alt: "Kapoor's Villa Luxury Suite",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

//TODO: Hitaishi - Add details here...!!
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness", // Or 'Hotel' / 'VacationRental'
    name: "Kapoor's Villa",
    image: "https://kapoorsvilla.com/bedroom/room-1.jpg",
    "@id": "https://kapoorsvilla.com",
    url: "https://kapoorsvilla.com",
    telephone: "+91-XXXXXXXXXX", // Add actual phone number
    address: {
      "@type": "PostalAddress",
      streetAddress: "Your Street Address",
      addressLocality: "City Name",
      addressRegion: "State Name",
      postalCode: "Zip Code",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 31.634, // Add exact latitude
      longitude: 74.872, // Add exact longitude
    },
    priceRange: "$$$",
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Free Wi-Fi",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Swimming Pool",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Private Dining / Restaurant Menu",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Air Conditioning",
        value: true,
      },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
