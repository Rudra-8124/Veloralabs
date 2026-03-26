"use client"

import { motion } from "framer-motion"
import { Zap, Smartphone, Search, MessageSquare } from "lucide-react"

const features = [
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Fast delivery",
    description: "Launch your custom website in just 1–3 days, fully optimized."
  },
  {
    icon: <Smartphone className="w-5 h-5" />,
    title: "Mobile optimized",
    description: "Flawless experience on every device, from smartphones to desktops."
  },
  {
    icon: <Search className="w-5 h-5" />,
    title: "SEO ready",
    description: "Built with best practices to help you rank higher on Google search."
  },
  {
    icon: <MessageSquare className="w-5 h-5" />,
    title: "WhatsApp integration",
    description: "Connect with your customers instantly directly from your website."
  }
]

export default function Features() {
  return (
    <section id="features" className="relative z-20 -mt-[4rem] rounded-t-[4rem] py-36 md:py-48 bg-white shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.05)] border-t border-black/5 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20 md:mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.95, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as any }}
            className="max-w-3xl"
          >
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-[1.05]">
              Everything you need. <br/>
              <span className="text-black/30">Nothing you don't.</span>
            </h2>
            <p className="text-xl md:text-2xl text-black/60 font-medium max-w-xl leading-relaxed">
              We cut the fluff and focus purely on features that drive conversions and increase your bottom line.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 md:gap-y-16">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.98, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] as any }}
              whileHover={{ x: 10 }}
              className="flex flex-row items-start gap-6 group cursor-default"
            >
              <div className="w-12 h-12 shrink-0 rounded-2xl bg-[#fafafa] border border-black/5 flex items-center justify-center text-black shadow-sm group-hover:bg-black group-hover:text-white transition-all duration-300">
                {feature.icon}
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl md:text-2xl font-bold text-black mb-2 tracking-tight group-hover:translate-x-1 transition-transform duration-300">{feature.title}</h3>
                <p className="text-black/40 text-sm md:text-base font-medium leading-relaxed max-w-sm">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
