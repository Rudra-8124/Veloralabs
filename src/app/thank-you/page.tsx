import Link from "next/link"
import { MessageCircle, ArrowLeft } from "lucide-react"

export default function ThankYou() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="max-w-2xl mx-auto text-center animate-in fade-in zoom-in duration-700 ease-out">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-black">
          Thank you.
          <span className="block text-black/40 mt-2 text-4xl md:text-5xl">We've received your request.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-black/60 font-medium mb-12 max-w-lg mx-auto">
          We'll get back to you shortly. For a faster response, contact us on WhatsApp.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/919201655878?text=Hi%20Velora%20Labs,%20I%20just%20submitted%20a%20form%20on%20your%20website."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-black/80 transition-all duration-300 shadow-xl shadow-black/10 w-full sm:w-auto"
          >
            <MessageCircle size={24} />
            Chat on WhatsApp
          </a>
          
          <Link
            href="/"
            className="flex items-center justify-center gap-2 bg-white text-black border-2 border-black/10 px-8 py-4 rounded-full font-bold text-lg hover:border-black/30 hover:bg-black/5 transition-all duration-300 w-full sm:w-auto"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
