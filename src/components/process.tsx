"use client"

import { motion } from "framer-motion"

const steps = [
  {
    number: "01",
    title: "Tell us about your business",
    description: "We start with a quick chat to understand your goals, your brand, and what you need your website to achieve."
  },
  {
    number: "02",
    title: "We build your website",
    description: "Our team designs and develops a high-performance, strictly modern website tailored precisely to your needs."
  },
  {
    number: "03",
    title: "You get more customers",
    description: "Launch your new site and watch as the improved user experience and SEO bring in more leads and sales."
  }
]

export default function Process() {
  return (
    <section id="process" className="relative z-30 -mt-[4rem] rounded-t-[4rem] py-36 md:py-48 bg-[#fafafa] shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.05)] border-t border-black/5 overflow-hidden">
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
              How it works. <br/>
              <span className="text-black/30">Fast and simple.</span>
            </h2>
            <p className="text-xl md:text-2xl text-black/60 font-medium max-w-xl leading-relaxed">
              We've refined our process to get your website live quickly without compromising on quality or performance.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative">
          <div className="hidden md:block absolute top-[4.5rem] left-[10%] right-[10%] h-px bg-black/10 z-0" />
          
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, scale: 0.95, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] as any }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative z-10 p-10 md:p-12 rounded-[2.5rem] bg-white border border-black/5 hover:border-black/10 transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-black/5 group"
            >
              <div className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center text-xl font-bold mb-8 relative z-10 mx-auto md:mx-0 shadow-xl group-hover:bg-indigo-600 transition-colors duration-300">
                {step.number}
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                <p className="text-black/60 font-medium leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
