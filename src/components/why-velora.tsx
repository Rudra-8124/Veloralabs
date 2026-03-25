"use client"

import { motion } from "framer-motion"
import { Rocket, Target, LayoutTemplate } from "lucide-react"

const reasons = [
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "1–3 Days Delivery",
    description: "Launch faster without compromising on quality."
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Business-first",
    description: "Conversion optimization is baked into every design."
  },
  {
    icon: <LayoutTemplate className="w-6 h-6" />,
    title: "Modern Stack",
    description: "Premium frameworks that scale with your growth."
  }
]

export default function WhyVelora() {
  return (
    <section data-theme="dark" className="relative z-[60] -mt-[4rem] rounded-t-[4rem] py-36 md:py-56 bg-black text-white overflow-hidden shadow-[0_-20px_60px_-15px_rgba(255,255,255,0.03)] border-t border-white/5">
      <div className="absolute inset-0 bg-noise opacity-[0.15] mix-blend-overlay pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20 md:mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.95, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as any }}
            className="max-w-3xl"
          >
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-[1.05]">
              No templates. <br/>
              <span className="text-white/40">Just results.</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/60 font-medium max-w-xl">
              We separate ourselves from traditional agencies by combining speed, premium quality, and a relentless focus on your bottom line.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, scale: 0.95, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as any }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 shadow-xl shadow-black/50"
            >
              <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center mb-8 shadow-lg">
                {reason.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">{reason.title}</h3>
              <p className="text-lg text-white/50 font-medium leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
