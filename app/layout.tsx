import type React from "react"
import type { Metadata, Viewport } from "next"
import { Amiri, Noto_Sans_Arabic } from "next/font/google"
import "./globals.css"

const amiri = Amiri({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  variable: "--font-amiri",
  display: "swap",
})
const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-noto-arabic",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Thalassery Treats | Authentic Malabar Mappila Snacks & Kerala Delicacies | Ernakulam",
  description:
    "Order authentic Thalassery-style snacks made fresh in Ernakulam - Banana Chips, Unnakkaya, Malabar Halwa, Achappam & more. Traditional Mappila recipes from Thalassery. Fresh, halal, local delivery in Ernakulam & Kochi.",
  keywords: [
    "Thalassery snacks",
    "Malabar snacks",
    "Kerala snacks online",
    "Mappila food",
    "banana chips Kerala",
    "unnakkaya",
    "Malabar halwa",
    "achappam",
    "pazham pori",
    "traditional Kerala snacks",
    "halal snacks Kerala",
    "Ernakulam snacks delivery",
    "Kochi snacks delivery",
    "homemade Kerala snacks",
    "Thalassery delicacies",
    "Thalassery recipes Ernakulam",
  ],
  authors: [{ name: "Thalassery Treats" }],
  creator: "Thalassery Treats",
  publisher: "Thalassery Treats",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  metadataBase: new URL("https://thalasserytreats.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Thalassery Treats | Authentic Malabar Mappila Snacks in Ernakulam",
    description:
      "Authentic Thalassery recipes, made fresh in Ernakulam. Traditional Mappila snacks passed down through generations. Order banana chips, halwa, unnakkaya & more.",
    url: "https://thalasserytreats.com",
    siteName: "Thalassery Treats",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Thalassery Treats - Authentic Malabar Mappila Snacks",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thalassery Treats | Authentic Malabar Mappila Snacks",
    description:
      "Homemade Thalassery snacks & Kerala delicacies. Traditional Mappila recipes. Order online for local delivery.",
    images: ["/og-image.jpg"],
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

  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#0d5c63",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  name: "Thalassery Treats",
  description:
    "Homemade Thalassery snacks and Malabar Mappila delicacies. Traditional Kerala recipes passed down through generations.",
  url: "https://thalasserytreats.com",
  telephone: "+918089136402",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Thalassery",
    addressLocality: "Kannur",
    addressRegion: "Kerala",
    postalCode: "670101",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 11.7479,
    longitude: 75.4904,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "19:00",
  },
  servesCuisine: ["Kerala", "Malabar", "Mappila", "Indian"],
  priceRange: "₹₹",
  image: "https://thalasserytreats.com/og-image.jpg",
  sameAs: ["https://wa.me/919876543210"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className={`${amiri.variable} ${notoSansArabic.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
