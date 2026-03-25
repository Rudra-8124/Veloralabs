"use client"

import { ArrowUpRight } from "lucide-react"

export default function Footer() {
  return (
    <footer data-theme="dark" className="bg-black text-white py-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-2">
            <a href="#" className="text-2xl font-bold tracking-tighter mb-6 block">
              Velora Labs.
            </a>
            <p className="text-white/60 font-medium max-w-sm leading-relaxed mb-8">
              We design and build high-performance, strictly modern websites for local businesses and startups.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Navigation</h4>
            <ul className="space-y-4">
              <li><a href="#features" className="text-white/60 hover:text-white transition-colors">Features</a></li>
              <li><a href="#services" className="text-white/60 hover:text-white transition-colors">Services</a></li>
              <li><a href="#process" className="text-white/60 hover:text-white transition-colors">Process</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Socials</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="flex items-center gap-1 text-white/60 hover:text-white transition-colors group">
                  Twitter
                  <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-1 text-white/60 hover:text-white transition-colors group">
                  LinkedIn
                  <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-1 text-white/60 hover:text-white transition-colors group">
                  Instagram
                  <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Velora Labs. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/40 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/40 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
