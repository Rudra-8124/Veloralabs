"use client"

import { motion } from "framer-motion"
import { Globe, Users, Activity, TrendingUp } from "lucide-react"

const steps = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Your site goes live",
    description: "Your business gets a fast, modern digital presence ready to convert visitors."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "You start getting leads",
    description: "With optimized design and structure, visitors turn into real inquiries."
  },
  {
    icon: <Activity className="w-6 h-6" />,
    title: "We monitor & optimize",
    description: "We track performance, improve speed, and refine for better results."
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "You scale your business",
    description: "With a strong online foundation, you grow faster and more confidently."
  }
]

export default function AfterLaunch() {
  return (
    <section id="after-launch" className="relative z-40 -mt-[4rem] rounded-t-[4rem] py-36 md:py-48 bg-white shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.05)] border-t border-black/5 overflow-hidden">
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
              What happens <br/>
              <span className="text-black/30">after we launch?</span>
            </h2>
            <p className="text-xl md:text-2xl text-black/60 font-medium max-w-xl leading-relaxed">
              Launching your website is just the beginning. Here's what comes next.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, i) => (
             <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, scale: 0.95, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as any }}
              className="relative p-10 rounded-[2.5rem] bg-[#fafafa] border border-black/5 transition-all duration-500 hover:bg-white hover:shadow-xl hover:shadow-black/5 group"
            >
              <div className="w-14 h-14 rounded-full bg-white border border-black/10 flex items-center justify-center text-black mb-8 shadow-sm group-hover:scale-110 group-hover:bg-black group-hover:text-white transition-all duration-500">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold text-black mb-4 tracking-tight">{step.title}</h3>
              <p className="text-black/60 font-medium leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
