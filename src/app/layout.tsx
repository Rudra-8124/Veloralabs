import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/smooth-scroll"

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Velora Labs | Premium Digital Experiences',
  description: 'We build high-performance, modern websites that turn visitors into customers.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased text-black bg-white selection:bg-black selection:text-white min-h-screen flex flex-col`}>
        <div className="fixed inset-0 pointer-events-none z-[100] bg-noise opacity-[0.035] mix-blend-overlay" />
        <SmoothScroll>
          <div className="flex-1">
            {children}
          </div>
        </SmoothScroll>
      </body>
    </html>
  )
}
