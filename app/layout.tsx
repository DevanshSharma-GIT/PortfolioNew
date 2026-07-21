import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
})

const siteUrl = "https://devanshsharma.dev"
const siteTitle = "Devansh Sharma — Full Stack, iOS & AI Engineer"
const siteDescription =
  "Portfolio of Devansh Sharma — Full Stack Developer, iOS Developer, AI Engineer & Cybersecurity Engineer. B.E. CSE (Cybersecurity) at Ramaiah Institute of Technology."

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Devansh Sharma",
  },
  description: siteDescription,
  keywords: [
    "Devansh Sharma",
    "Full Stack Developer",
    "iOS Developer",
    "AI Engineer",
    "Cybersecurity Engineer",
    "Swift",
    "React",
    "Next.js",
    "Ramaiah Institute of Technology",
    "Smart India Hackathon",
    "DevYatra",
    "GyaanGuru",
    "Portfolio",
    "Bengaluru",
  ],
  authors: [{ name: "Devansh Sharma", url: siteUrl }],
  creator: "Devansh Sharma",
  publisher: "Devansh Sharma",
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
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Devansh Sharma Portfolio",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/photos/1.jpg",
        width: 1200,
        height: 630,
        alt: "Devansh Sharma — Full Stack, iOS & AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/photos/1.jpg"],
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  category: "technology",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Devansh Sharma",
  url: siteUrl,
  email: "devansh.work6@gmail.com",
  jobTitle: "Full Stack Developer",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Ramaiah Institute of Technology",
  },
  knowsAbout: [
    "Full Stack Development",
    "iOS Development",
    "Artificial Intelligence",
    "Cybersecurity",
    "Cloud Computing",
  ],
  sameAs: [
    "https://github.com/DevanshSharma-GIT",
    "https://www.linkedin.com/in/devansh-sharma-9713a8292/",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bengaluru",
    addressCountry: "IN",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <style>{`
html {
  font-family: ${inter.style.fontFamily};
  --font-sans: ${inter.variable};
  --font-mono: ${jetbrainsMono.variable};
}
        `}</style>
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
