"use client"

import { motion } from "framer-motion"
import { BarChart3, Magnet, Zap } from "lucide-react"

const points = [
  {
    icon: <Magnet className="w-8 h-8" />,
    title: "More leads",
    description: "Designed with a singular focus: capturing attention and turning casual visitors into inquiries."
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Better conversion",
    description: "Through clear copywriting and intuitive user flows, we maximize the percentage of visitors who take action."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Faster performance",
    description: "Every millisecond counts. We build lightweight, blazing-fast sites that Google and your customers love."
  }
]

export default function ValueProp() {
  return (
    <section id="services" className="relative z-10 -mt-[4rem] rounded-t-[4rem] py-36 md:py-48 bg-[#fafafa] shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.05)] border-t border-black/5 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -50, scale: 0.9, filter: "blur(15px)" }}
            whileInView={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as any }}
            className="lg:w-5/12 sticky top-32"
          >
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[1.05]">
              We don't just <br/>
              <span className="text-black/30">build websites.</span>
            </h2>
            <p className="text-xl md:text-2xl text-black/60 font-medium leading-relaxed">
              We build digital experiences that bring you customers. Shift your focus from aesthetics to measurable ROI.
            </p>
          </motion.div>

          <div className="lg:w-7/12 flex flex-col gap-12 md:gap-20 pt-10">
            {points.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50, scale: 0.95, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] as any }}
                className="flex flex-col sm:flex-row items-start gap-8 group"
              >
                <div className="w-20 h-20 rounded-3xl bg-black/5 flex items-center justify-center text-black flex-shrink-0 group-hover:scale-110 group-hover:bg-black group-hover:text-white transition-all duration-500 shadow-sm">
                  {point.icon}
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-4 tracking-tight">{point.title}</h3>
                  <p className="text-xl text-black/60 font-medium leading-relaxed max-w-md">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
