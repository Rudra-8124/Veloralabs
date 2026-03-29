"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, ArrowRight, Loader2, CheckCircle2, AlertCircle, ChevronDown, Search } from "lucide-react"
import emailjs from "emailjs-com"

const COUNTRY_CODES = [
  { code: "+91", country: "India", flag: "🇮🇳" },
  { code: "+1", country: "USA/Canada", flag: "🇺🇸" },
  { code: "+44", country: "UK", flag: "🇬🇧" },
  { code: "+61", country: "Australia", flag: "🇦🇺" },
  { code: "+971", country: "UAE", flag: "🇦🇪" },
  { code: "+65", country: "Singapore", flag: "🇸🇬" },
  { code: "+49", country: "Germany", flag: "🇩🇪" },
  { code: "+33", country: "France", flag: "🇫🇷" },
  { code: "+81", country: "Japan", flag: "🇯🇵" },
  { code: "+86", country: "China", flag: "🇨🇳" },
  { code: "+7", country: "Russia", flag: "🇷🇺" },
  { code: "+55", country: "Brazil", flag: "🇧🇷" },
  { code: "+27", country: "South Africa", flag: "🇿🇦" },
  { code: "+82", country: "South Korea", flag: "🇰🇷" },
  { code: "+39", country: "Italy", flag: "🇮🇹" },
  { code: "+34", country: "Spain", flag: "🇪🇸" },
  { code: "+1", country: "Canada", flag: "🇨🇦" },
  { code: "+41", country: "Switzerland", flag: "🇨🇭" },
  { code: "+46", country: "Sweden", flag: "🇸🇪" },
  { code: "+31", country: "Netherlands", flag: "🇳🇱" },
  { code: "+64", country: "New Zealand", flag: "🇳🇿" },
  { code: "+353", country: "Ireland", flag: "🇮🇪" },
  { code: "+43", country: "Austria", flag: "🇦🇹" },
  { code: "+32", country: "Belgium", flag: "🇧🇪" },
  { code: "+45", country: "Denmark", flag: "🇩🇰" },
  { code: "+358", country: "Finland", flag: "🇫🇮" },
  { code: "+47", country: "Norway", flag: "🇳🇴" },
  { code: "+351", country: "Portugal", flag: "🇵🇹" },
  { code: "+30", country: "Greece", flag: "🇬🇷" },
  { code: "+90", country: "Turkey", flag: "🇹🇷" },
  { code: "+966", country: "Saudi Arabia", flag: "🇸🇦" },
  { code: "+62", country: "Indonesia", flag: "🇮🇩" },
  { code: "+60", country: "Malaysia", flag: "🇲🇾" },
  { code: "+66", country: "Thailand", flag: "🇹🇭" },
  { code: "+84", country: "Vietnam", flag: "🇻🇳" },
  { code: "+63", country: "Philippines", flag: "🇵🇭" },
  { code: "+52", country: "Mexico", flag: "🇲🇽" },
  { code: "+54", country: "Argentina", flag: "🇦🇷" },
  { code: "+56", country: "Chile", flag: "🇨🇱" },
  { code: "+57", country: "Colombia", flag: "🇨🇴" },
  { code: "+20", country: "Egypt", flag: "🇪🇬" },
  { code: "+234", country: "Nigeria", flag: "🇳🇬" },
  { code: "+254", country: "Kenya", flag: "🇰🇪" },
  { code: "+92", country: "Pakistan", flag: "🇵🇰" },
  { code: "+880", country: "Bangladesh", flag: "🇧🇩" },
  { code: "+94", country: "Sri Lanka", flag: "🇱🇰" },
].sort((a, b) => a.country.localeCompare(b.country))

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    business: "",
    message: ""
  })
  const [countryCode, setCountryCode] = useState("+91")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  const filteredCodes = COUNTRY_CODES.filter(item => 
    item.country.toLowerCase().includes(searchQuery.toLowerCase()) || 
    item.code.includes(searchQuery)
  )

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.message) {
      return
    }

    setIsSubmitting(true)
    setStatus("idle")

    try {
      await emailjs.send(
        "service_or4avbc",
        "template_knv65ze",
        {
          name: formData.name,
          phone: `${countryCode} ${formData.phone}`,
          business: formData.business || "Not provided",
          message: formData.message,
        },
        "DlVd-qypQkfjItNTW"
      )
      
      setStatus("success")
      setFormData({ name: "", phone: "", business: "", message: "" })
      
      // GA4 Event Tracking
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'submit', {
          event_category: 'Form',
          event_label: 'Contact Form Submitted'
        });
      }
    } catch (error) {
      console.error("Email send failed:", error)
      setStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    
    // Strict digit validation for phone field
    if (id === "phone") {
      const digitsOnly = value.replace(/\D/g, "")
      setFormData(prev => ({ ...prev, [id]: digitsOnly }))
      return
    }

    setFormData(prev => ({
      ...prev,
      [id]: value
    }))
  }

  return (
    <section id="contact" className="relative z-[70] -mt-[4rem] rounded-t-[4rem] py-36 md:py-56 bg-white shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.05)] border-t border-black/5 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.95, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as any }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-[1.05]">
              Let's build <br className="md:hidden" />
              <span className="text-black/30">something great.</span>
            </h2>
            <p className="text-xl md:text-2xl text-black/60 font-medium">
              Ready to grow your business? Drop us a line or message us directly.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50, scale: 0.9, filter: "blur(15px)" }}
              whileInView={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as any }}
              className="bg-[#fafafa] p-10 md:p-12 rounded-[2.5rem] border border-black/5 relative"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold mb-2 text-black/80">Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-5 py-4 rounded-2xl border border-black/10 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all bg-white font-medium"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold mb-2 text-black/80">Phone Number *</label>
                  <div className="flex gap-2">
                    {/* Country Code Dropdown */}
                    <div className="relative w-32 flex-shrink-0">
                      <button
                        type="button"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="w-full h-full px-4 py-4 rounded-2xl border border-black/10 bg-white hover:border-black transition-all flex items-center justify-between gap-2 font-medium overflow-hidden"
                      >
                        <span className="whitespace-nowrap">{COUNTRY_CODES.find(c => c.code === countryCode)?.flag} {countryCode}</span>
                        <ChevronDown size={16} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>

                      <AnimatePresence>
                        {isDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 4, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            className="absolute top-full left-0 w-64 max-h-80 bg-white border border-black/10 rounded-2xl shadow-2xl z-[80] overflow-hidden flex flex-col"
                          >
                            <div className="p-3 border-b border-black/5 sticky top-0 bg-white z-10">
                              <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-black/30" size={14} />
                                <input 
                                  type="text"
                                  placeholder="Search Country..."
                                  value={searchQuery}
                                  onChange={(e) => setSearchQuery(e.target.value)}
                                  className="w-full pl-9 pr-4 py-2 rounded-xl border border-black/5 bg-[#fafafa] focus:bg-white focus:outline-none focus:ring-1 focus:ring-black transition-all text-sm"
                                />
                              </div>
                            </div>
                            <div className="overflow-y-auto flex-1 h-full" data-lenis-prevent>
                              {filteredCodes.map((item, idx) => (
                                <button
                                  key={`${item.code}-${idx}`}
                                  type="button"
                                  onClick={() => {
                                    setCountryCode(item.code)
                                    setIsDropdownOpen(false)
                                    setSearchQuery("")
                                  }}
                                  className={`w-full px-4 py-3 flex items-center gap-3 hover:bg-black/5 transition-colors text-left ${countryCode === item.code ? 'bg-black/5' : ''}`}
                                >
                                  <span className="text-xl">{item.flag}</span>
                                  <div className="flex flex-col">
                                    <span className="text-sm font-bold text-black">{item.country}</span>
                                    <span className="text-xs text-black/40">{item.code}</span>
                                  </div>
                                </button>
                              ))}
                              {filteredCodes.length === 0 && (
                                <div className="p-8 text-center text-black/40 text-sm">No country found</div>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Phone Input */}
                    <input 
                      type="text" 
                      id="phone" 
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="9876543210"
                      className="flex-1 px-5 py-4 rounded-2xl border border-black/10 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all bg-white font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="business" className="block text-sm font-bold mb-2 text-black/80">Business Name (Optional)</label>
                  <input 
                    type="text" 
                    id="business" 
                    value={formData.business}
                    onChange={handleChange}
                    placeholder="Acme Corp"
                    className="w-full px-5 py-4 rounded-2xl border border-black/10 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all bg-white font-medium"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-bold mb-2 text-black/80">Message *</label>
                  <textarea 
                    id="message" 
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="w-full px-5 py-4 rounded-2xl border border-black/10 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all bg-white resize-none font-medium"
                  ></textarea>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-black text-white px-6 py-5 rounded-2xl font-bold text-lg hover:bg-black/80 transition-all duration-300 shadow-xl shadow-black/10 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </motion.button>

                {status === "success" && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-50 text-green-700 rounded-2xl flex items-center gap-3 font-medium border border-green-100"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    Thanks! We’ll get back to you shortly.
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-50 text-red-700 rounded-2xl flex items-center gap-3 font-medium border border-red-100"
                  >
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                    Something went wrong. Please try again.
                  </motion.div>
                )}
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.9, filter: "blur(15px)" }}
              whileInView={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] as any }}
              className="flex flex-col justify-center"
            >
              <div className="bg-black text-white p-12 md:p-16 rounded-[2.5rem] h-full flex flex-col justify-center items-center text-center relative overflow-hidden shadow-[0_30px_100px_-15px_rgba(0,0,0,0.5)]">
                <div className="absolute inset-0 bg-noise opacity-15 mix-blend-overlay pointer-events-none" />
                <div className="relative z-10 w-full flex flex-col items-center">
                  <div className="w-20 h-20 bg-white/10 border border-white/20 text-white rounded-full flex items-center justify-center mb-10 backdrop-blur-sm">
                    <MessageCircle size={36} />
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Prefer WhatsApp?</h3>
                  <p className="text-white/60 text-lg font-medium mb-12 max-w-sm">
                    Get a faster response. Chat with our team directly right now to discuss your project.
                  </p>
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://wa.me/919201655878?text=Hi%20Velora%20Labs%2C%20I%E2%80%99m%20interested%20in%20getting%20a%20website%20for%20my%20business.%20Can%20we%20discuss%3F"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      if (typeof window !== 'undefined' && (window as any).gtag) {
                        (window as any).gtag('event', 'click', {
                          event_category: 'CTA',
                          event_label: 'WhatsApp Click'
                        });
                      }
                    }}
                    className="flex items-center justify-center gap-3 bg-white text-black px-10 py-5 rounded-full font-bold text-lg hover:bg-white/90 transition-all duration-300 shadow-2xl shadow-white/20 w-full sm:w-auto"
                  >
                    <MessageCircle size={24} />
                    Chat on WhatsApp
                  </motion.a>
                  
                  <div className="mt-20 pt-12 border-t border-white/10 w-full text-center">
                    <p className="text-white/40 text-sm font-bold uppercase tracking-widest mb-4">Or email us directly at</p>
                    <a href="mailto:veloralabs481@gmail.com" className="text-2xl font-bold tracking-tight hover:text-white/80 transition-colors">
                      veloralabs481@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
