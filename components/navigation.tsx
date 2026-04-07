"use client"

import { useState } from "react"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <nav className="fixed top-0 w-full z-50 hologram">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="font-mono text-xl font-bold neon-text">
            <span className="text-green-400">&gt;</span> rashedul.dev
          </div>
          <div className="hidden md:flex space-x-8 font-mono text-sm">
            <button onClick={() => scrollToSection("home")} className="hover:text-green-400 transition-colors">
              [home]
            </button>
            <button onClick={() => scrollToSection("about")} className="hover:text-green-400 transition-colors">
              [about]
            </button>
            <button onClick={() => scrollToSection("work")} className="hover:text-green-400 transition-colors">
              [work]
            </button>
            <button onClick={() => scrollToSection("skills")} className="hover:text-green-400 transition-colors">
              [skills]
            </button>
            <button onClick={() => scrollToSection("education")} className="hover:text-green-400 transition-colors">
              [education]
            </button>
            <button onClick={() => scrollToSection("projects")} className="hover:text-green-400 transition-colors">
              [projects]
            </button>
            <button onClick={() => scrollToSection("contact")} className="hover:text-green-400 transition-colors">
              [contact]
            </button>
          </div>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-green-400">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 flex flex-col space-y-4 font-mono text-sm bg-gray-900 p-4 rounded-lg">
            <button onClick={() => { scrollToSection("home"); setIsMenuOpen(false); }} className="hover:text-green-400 transition-colors text-left">
              [home]
            </button>
            <button onClick={() => { scrollToSection("about"); setIsMenuOpen(false); }} className="hover:text-green-400 transition-colors text-left">
              [about]
            </button>
            <button onClick={() => { scrollToSection("work"); setIsMenuOpen(false); }} className="hover:text-green-400 transition-colors text-left">
              [work]
            </button>
            <button onClick={() => { scrollToSection("skills"); setIsMenuOpen(false); }} className="hover:text-green-400 transition-colors text-left">
              [skills]
            </button>
            <button onClick={() => { scrollToSection("education"); setIsMenuOpen(false); }} className="hover:text-green-400 transition-colors text-left">
              [education]
            </button>
            <button onClick={() => { scrollToSection("projects"); setIsMenuOpen(false); }} className="hover:text-green-400 transition-colors text-left">
              [projects]
            </button>
            <button onClick={() => { scrollToSection("contact"); setIsMenuOpen(false); }} className="hover:text-green-400 transition-colors text-left">
              [contact]
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
