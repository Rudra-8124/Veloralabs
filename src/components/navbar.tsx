"use client"

import { useState } from "react"
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Check if scrolled
    if (latest > 10) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }

    // Dynamic color adaptation
    if (typeof window !== 'undefined') {
      const darkSections = document.querySelectorAll('[data-theme="dark"]');
      let overDark = false;
      const navHeight = 90; // approximate height of navbar
      
      darkSections.forEach(section => {
        const rect = section.getBoundingClientRect();
        // Check if the navbar overlaps with the dark section
        if (rect.top <= navHeight / 2 && rect.bottom >= navHeight / 2) {
          overDark = true;
        }
      });
      setIsDark(overDark);
    }
  })

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-[9999] transition-colors duration-300 border-b ${
        isScrolled 
          ? isDark 
            ? "bg-black/70 backdrop-blur-md border-white/10 text-white" 
            : "bg-white/70 backdrop-blur-md border-black/5 text-black" 
          : "bg-transparent border-transparent text-black"
      } ${isScrolled ? "py-4" : "py-6"}`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tighter">
          Velora Labs.
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className={`text-sm font-medium transition-colors duration-300 ${isDark ? "text-white/70 hover:text-white" : "text-black/70 hover:text-black"}`}>Features</a>
          <a href="#services" className={`text-sm font-medium transition-colors duration-300 ${isDark ? "text-white/70 hover:text-white" : "text-black/70 hover:text-black"}`}>Services</a>
          <a href="#process" className={`text-sm font-medium transition-colors duration-300 ${isDark ? "text-white/70 hover:text-white" : "text-black/70 hover:text-black"}`}>Process</a>
          <a 
            href="#contact" 
            className={`text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-300 ${
              isDark 
                ? "bg-white text-black hover:bg-white/90" 
                : "bg-black text-white hover:bg-black/80"
            }`}
          >
            Get in touch
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`md:hidden absolute top-full left-0 right-0 border-t p-6 flex flex-col space-y-4 shadow-lg backdrop-blur-md transition-colors duration-300 ${
              isDark 
                ? "bg-black/90 border-white/10" 
                : "bg-white/90 border-black/5"
            }`}
          >
            <a href="#features" onClick={() => setMobileMenuOpen(false)} className={`text-lg font-medium transition-colors duration-300 ${isDark ? "text-white/80 hover:text-white" : "text-black/80 hover:text-black"}`}>Features</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className={`text-lg font-medium transition-colors duration-300 ${isDark ? "text-white/80 hover:text-white" : "text-black/80 hover:text-black"}`}>Services</a>
            <a href="#process" onClick={() => setMobileMenuOpen(false)} className={`text-lg font-medium transition-colors duration-300 ${isDark ? "text-white/80 hover:text-white" : "text-black/80 hover:text-black"}`}>Process</a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className={`text-center font-medium px-5 py-3 rounded-full mt-4 transition-all duration-300 ${
                isDark 
                  ? "bg-white text-black" 
                  : "bg-black text-white"
              }`}
            >
              Get in touch
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
