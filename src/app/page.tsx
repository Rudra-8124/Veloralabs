import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import ValueProp from "@/components/value-prop"
import Features from "@/components/features"
import Process from "@/components/process"
import AfterLaunch from "@/components/after-launch"
import OurApproach from "@/components/our-approach"
import WhyVelora from "@/components/why-velora"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ValueProp />
      <Features />
      <Process />
      <AfterLaunch />
      <OurApproach />
      <WhyVelora />
      <Contact />
      <Footer />
    </main>
  )
}
