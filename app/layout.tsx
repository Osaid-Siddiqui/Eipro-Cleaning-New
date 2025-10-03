import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import ScrollToTop from "@/components/scroll-to-top"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Echelon Precision Detailing | Premium Auto Detailing in Scottsdale, AZ",
  description:
    "Professional car detailing services in Scottsdale, Phoenix, and Cave Creek. Ceramic coating, paint correction, and premium detailing.",
  keywords: "car detailing, ceramic coating, paint correction, Scottsdale, Phoenix, Cave Creek, auto detailing",
  authors: [{ name: "Echelon Precision Detailing" }],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#910e6b",
  manifest: "/manifest.json",
  openGraph: {
    title: "Echelon Precision Detailing",
    description: "Premium auto detailing services in Arizona",
    images: ["/images/logo.png"],
    type: "website",
    locale: "en_US",
    siteName: "Echelon Precision Detailing",
  },
  twitter: {
    card: "summary_large_image",
    title: "Echelon Precision Detailing",
    description: "Premium auto detailing services in Arizona",
    images: ["/images/logo.png"],
  },
    generator: 'The Linkage Digital'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <ScrollToTop />
      </body>
    </html>
  )
}
