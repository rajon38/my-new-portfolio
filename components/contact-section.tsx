"use client"

import type React from "react"

import { useState } from "react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("[SENDING...]")

    // Simulate form processing
    setTimeout(() => {
      setSubmitStatus("[MESSAGE_SENT]")
      setTimeout(() => {
        setSubmitStatus("")
        setIsSubmitting(false)
        setFormData({ name: "", email: "", subject: "", message: "" })
      }, 2000)
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 font-mono">
          <span className="text-green-400">&gt;</span> contact.init()
        </h2>
        <div className="w-32 h-1 bg-green-400 mx-auto mb-12"></div>

        <p className="text-xl mb-12 text-gray-300 font-mono">
          Ready to build something extraordinary? Let's connect and create the future together.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <a href="mailto:rashedul.rajon@gmail.com" className="skill-card p-6 rounded-lg hover:scale-105 transition-transform cursor-pointer">
            <div className="text-3xl mb-4">📧</div>
            <div className="font-mono text-green-400 font-semibold mb-2">[EMAIL]</div>
            <div className="text-gray-400 text-sm hover:text-green-400 transition-colors">rashedul.rajon@gmail.com</div>
          </a>
          <a href="https://linkedin.com/in/rashedul-islam-mern-developer" target="_blank" rel="noopener noreferrer" className="skill-card p-6 rounded-lg hover:scale-105 transition-transform cursor-pointer">
            <div className="text-3xl mb-4">💼</div>
            <div className="font-mono text-blue-400 font-semibold mb-2">[LINKEDIN]</div>
            <div className="text-gray-400 text-sm hover:text-blue-400 transition-colors">linkedin.com/in/rashedul-islam-mern-developer</div>
          </a>
          <a href="https://github.com/rajon38" target="_blank" rel="noopener noreferrer" className="skill-card p-6 rounded-lg hover:scale-105 transition-transform cursor-pointer">
            <div className="text-3xl mb-4">🐙</div>
            <div className="font-mono text-purple-400 font-semibold mb-2">[GITHUB]</div>
            <div className="text-gray-400 text-sm hover:text-purple-400 transition-colors">github.com/rajon38</div>
          </a>
        </div>

        <div className="terminal-window max-w-2xl mx-auto">
          <div className="terminal-header">
            <div className="terminal-dot bg-red-500"></div>
            <div className="terminal-dot bg-yellow-500"></div>
            <div className="terminal-dot bg-green-500"></div>
            <span className="font-mono text-xs text-gray-400 ml-2">contact-form.js</span>
          </div>
          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="font-mono text-green-400 text-sm block mb-2">name:</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-black border border-gray-600 rounded px-3 py-2 font-mono text-sm focus:border-green-400 focus:outline-none"
                    placeholder="your_name"
                    required
                  />
                </div>
                <div>
                  <label className="font-mono text-green-400 text-sm block mb-2">email:</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-black border border-gray-600 rounded px-3 py-2 font-mono text-sm focus:border-green-400 focus:outline-none"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="font-mono text-green-400 text-sm block mb-2">subject:</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-black border border-gray-600 rounded px-3 py-2 font-mono text-sm focus:border-green-400 focus:outline-none"
                  placeholder="project_inquiry"
                  required
                />
              </div>
              <div>
                <label className="font-mono text-green-400 text-sm block mb-2">message:</label>
                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-black border border-gray-600 rounded px-3 py-2 font-mono text-sm focus:border-green-400 focus:outline-none resize-none"
                  placeholder="tell_me_about_your_project()"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full neon-border bg-transparent text-green-400 py-3 font-mono font-semibold hover:bg-green-400 hover:text-black transition-all duration-300 disabled:opacity-50"
              >
                {submitStatus || "[SEND_MESSAGE]"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
