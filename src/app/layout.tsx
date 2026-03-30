import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/smooth-scroll"
import Script from "next/script"

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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id=GTM-NZTN6G7S'+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NZTN6G7S');`
        }} />
      </head>
      <body className={`${inter.variable} font-sans antialiased text-black bg-white selection:bg-black selection:text-white min-h-screen flex flex-col`} suppressHydrationWarning>
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NZTN6G7S"
          height="0" width="0" style={{display: 'none', visibility: 'hidden'}}></iframe>
        </noscript>
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
