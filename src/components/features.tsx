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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, scale: 0.95, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as any }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="p-10 rounded-[2.5rem] bg-white border border-black/5 hover:border-black/10 transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-black/5 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-white border border-black/10 flex items-center justify-center text-black mb-6 shadow-sm group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">{feature.title}</h3>
              <p className="text-black/60 font-medium leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
