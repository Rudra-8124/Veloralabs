"use client"

import { motion } from "framer-motion"
import { Target, Zap, MousePointerClick, Diamond } from "lucide-react"

const points = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Business-first thinking",
    description: "We focus on your goals, not just visuals. Every decision is made to drive results."
  },
  {
    icon: <MousePointerClick className="w-6 h-6" />,
    title: "Built for conversion",
    description: "Every section is designed to turn visitors into leads and customers."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Speed is non-negotiable",
    description: "Fast websites perform better. We optimize everything for performance."
  },
  {
    icon: <Diamond className="w-6 h-6" />,
    title: "No templates. No shortcuts.",
    description: "Every website is crafted to match your brand and stand out."
  }
]

export default function OurApproach() {
  return (
    <section id="approach" data-theme="dark" className="relative z-50 -mt-[4rem] rounded-t-[4rem] py-36 md:py-56 bg-[#0a0a0a] text-white overflow-hidden shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.5)] border-t border-white/5">
      <div className="absolute inset-0 bg-noise opacity-[0.10] mix-blend-overlay pointer-events-none" />
      
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
              Our <br/>
              <span className="text-white/40">approach.</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/60 font-medium max-w-xl">
              We don’t just design websites. We build systems that drive real business growth.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {points.map((point, i) => (
             <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, scale: 0.95, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] as any }}
              className="p-10 md:p-12 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 shadow-xl shadow-black/50 group"
            >
              <div className="w-14 h-14 rounded-full bg-white/10 text-white flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all duration-500">
                {point.icon}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">{point.title}</h3>
              <p className="text-lg text-white/50 font-medium leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
