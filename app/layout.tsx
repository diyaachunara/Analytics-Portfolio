import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const _poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Diya Chunara - Full-Stack Developer & Data Analyst",
  description: "Explore my portfolio - web development, AI projects, and data analytics work",
  generator: "v0.app",
  openGraph: {
    type: "website",
    url: "https://diya-portfolio.vercel.app",
    title: "Diya Chunara - Developer & Data Analyst",
    description: "Full-stack web developer passionate about AI and data insights",
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

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#0a0e27",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${_inter.variable} ${_poppins.variable} font-sans bg-background text-foreground antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
