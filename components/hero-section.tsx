"use client"

import { useEffect, useState } from "react"

export default function HeroSection() {
  const [roleText, setRoleText] = useState("Backend Developer")
  const [showCursor, setShowCursor] = useState(true)

  const roles = ["Backend Developer", "API Designer", "Database Engineer", "DevOps Enthusiast", "System Architect"]

    const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  useEffect(() => {
    let roleIndex = 0
    let charIndex = 0
    let isDeleting = false

    const typeRole = () => {
      const currentRole = roles[roleIndex]

      if (isDeleting) {
        setRoleText(currentRole.substring(0, charIndex - 1))
        charIndex--
      } else {
        setRoleText(currentRole.substring(0, charIndex + 1))
        charIndex++
      }

      let typeSpeed = isDeleting ? 50 : 100

      if (!isDeleting && charIndex === currentRole.length) {
        typeSpeed = 2000
        isDeleting = true
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false
        roleIndex = (roleIndex + 1) % roles.length
        typeSpeed = 500
      }

      setTimeout(typeRole, typeSpeed)
    }

    typeRole()

    // Cursor blinking
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 1000)

    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative cyber-grid">
      <div className="scan-line"></div>

      <div className="text-center z-10 px-6">
        {/* Profile Image */}
        <div className="relative mb-8 mt-12">
          <div className="w-48 h-48 md:w-64 md:h-64 mx-auto relative">
            {/* Outer Neon Ring */}
            <div className="absolute inset-0 rounded-full neon-border animate-pulse"></div>

            <div className="absolute inset-2 rounded-full overflow-hidden bg-gradient-to-br from-gray-900 to-black border-2 border-green-400/20">
              <div className="w-full h-full bg-black flex items-center justify-center relative">
                <div className="text-center">
                  <img
                    src="/Image2.png"
                    alt="Rashedul Islam"
                    className="w-full h-full object-cover rounded-full border-4 border-green-400/50"
                  />
                </div>
                {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-400 to-transparent opacity-5 animate-pulse"></div> */}
              </div>
            </div>

            {/* Corner Brackets */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-l-2 border-t-2 border-green-400"></div>
            <div className="absolute -top-2 -right-2 w-8 h-8 border-r-2 border-t-2 border-green-400"></div>
            <div className="absolute -bottom-2 -left-2 w-8 h-8 border-l-2 border-b-2 border-green-400"></div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-2 border-b-2 border-green-400"></div>
          </div>

          {/* Status Indicator */}
          <div className="absolute top-4 right-4 md:top-8 md:right-8">
            <div className="flex items-center space-x-2 bg-black/80 backdrop-blur-sm rounded-full px-3 py-1 border border-green-400/30">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="font-mono text-xs text-green-400">ONLINE</span>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <div className="terminal-window w-80 mx-auto mb-8">
            <div className="terminal-header">
              <div className="terminal-dot bg-red-500"></div>
              <div className="terminal-dot bg-yellow-500"></div>
              <div className="terminal-dot bg-green-500"></div>
              <span className="font-mono text-xs text-gray-400 ml-2">terminal</span>
            </div>
            <div className="p-4 font-mono text-sm">
              <div className="text-green-400">$ whoami</div>
              <div className="text-white">rashedul_islam</div>
              <div className="text-green-400 mt-2">$ cat role.txt</div>
              <div className="text-white">
                {roleText}
                <span className={`typing-cursor ${showCursor ? "opacity-100" : "opacity-0"}`}>|</span>
              </div>
            </div>
          </div>
        </div>


        <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-gray-300 leading-relaxed">
          Crafting scalable backend architectures with cutting-edge technologies. Specializing in high-performance APIs,
          microservices, and cloud-native solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button onClick={() => scrollToSection("projects")}  className="neon-border bg-transparent text-green-400 px-8 py-4 font-mono font-semibold hover:bg-green-400 hover:text-black transition-all duration-300">
            [VIEW_PROJECTS]
          </button>
          <a href="/Resume_Rashedul_Islam_Backend_Developer.pdf" download="Resume_Rashedul_Islam_Backend_Developer.pdf" className="border border-gray-600 text-white px-8 py-4 font-mono font-semibold hover:border-green-400 hover:text-green-400 transition-all duration-300">
            [DOWNLOAD_CV]
          </a>
        </div>
      </div>

      <div className="data-stream">
        <div>CPU: 98%</div>
        <div>RAM: 16GB</div>
        <div>NET: 1Gbps</div>
        <div>API: ONLINE</div>
        <div>DB: CONNECTED</div>
      </div>
    </section>
  )
}
