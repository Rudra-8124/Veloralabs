"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles, CheckCircle2, TrendingUp, Users } from "lucide-react"
import { useState, useEffect } from "react"

export default function Hero() {
  const [text, setText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  
  useEffect(() => {
    const fullText = "customers."
    const typeSpeed = 100
    const deleteSpeed = 50
    const delayBeforeDelete = 2000
    const delayBeforeType = 500

    let timer: NodeJS.Timeout
    if (!isDeleting && text === fullText) {
      timer = setTimeout(() => setIsDeleting(true), delayBeforeDelete)
    } else if (isDeleting && text === "") {
      timer = setTimeout(() => setIsDeleting(false), delayBeforeType)
    } else if (isDeleting) {
      timer = setTimeout(() => setText(fullText.substring(0, text.length - 1)), deleteSpeed)
    } else {
      timer = setTimeout(() => setText(fullText.substring(0, text.length + 1)), typeSpeed)
    }
    return () => clearTimeout(timer)
  }, [text, isDeleting])



  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-white group"
    >
      {/* Interactive Cursor Spotlight Glow */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-20"
        style={{
          background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0,0,0,0.03), transparent 40%)`
        }}
      />
      
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 z-0 bg-grid opacity-50 
        [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" 
      />
      
      {/* Animated glowing orbs for subtle modern feel (pure monochrome) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.03, 0.06, 0.03] 
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          className="absolute top-1/4 -left-1/4 w-3/4 h-3/4 bg-black/5 rounded-full blur-[140px]"
        />
        <motion.div 
          animate={{ 
            y: [0, 20, 0],
            opacity: [0.03, 0.06, 0.03] 
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-1/4 -right-1/4 w-3/4 h-3/4 bg-black/10 rounded-full blur-[120px]"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as any }}
            style={{ willChange: "transform, opacity" }}
          >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: false }}
            transition={{ delay: 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] as any }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 text-sm font-semibold mb-8 bg-white shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-black" />
            <span>Built different.</span>
          </motion.div>
          
          <h1 className="flex flex-col items-center text-5xl md:text-8xl lg:text-[7.5rem] font-bold tracking-tighter text-black mb-10 leading-[1.1] md:leading-[1.05]">
            <span className="block whitespace-nowrap">Turn visitors into</span>
            <span className="relative inline-block h-[1.1em] min-w-[280px] md:min-w-[500px] text-black/30 text-center">
              {text}
              <motion.span 
                animate={{ opacity: [1, 0, 1] }} 
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-[3px] h-[0.8em] bg-black/30 ml-1 mb-[-0.1em] align-middle"
              >
              </motion.span>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-black/60 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            We design high-performance websites that actually grow your business. No templates. Just results.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <motion.a 
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="group flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 w-full sm:w-auto shadow-2xl shadow-black/20 hover:shadow-black/40"
            >
              Book a Free Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#services"
              className="flex items-center justify-center gap-2 bg-white text-black border-2 border-black/10 px-8 py-4 rounded-full font-semibold text-lg hover:border-black/30 hover:bg-black/[0.02] transition-all duration-300 w-full sm:w-auto shadow-sm"
            >
              Get Started
            </motion.a>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: false }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] as any }}
            className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-sm font-semibold text-black/50"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-black" />
              <span>Delivered in 3 days</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-black" />
              <span>Built for growth</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-black" />
              <span>Trusted by local businesses</span>
            </div>
          </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
