export default function WorkSection() {
  return (
    <section id="work" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 font-mono">
            <span className="text-green-400">&gt;</span> work.log
          </h2>
          <div className="w-32 h-1 bg-green-400 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {/* Current Position */}
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-dot bg-red-500"></div>
              <div className="terminal-dot bg-yellow-500"></div>
              <div className="terminal-dot bg-green-500"></div>
              <span className="font-mono text-xs text-gray-400 ml-2">backend_position.js</span>
            </div>
            <div className="p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-green-400 font-mono">Backend Developer</h3>
                  <p className="text-blue-400 font-mono text-lg">SM Technology, Betopia, Dhaka</p>
                </div>
                <div className="text-orange-400 font-mono text-sm bg-gray-800 px-3 py-1 rounded mt-2 md:mt-0">
                  Dec 2024 - Dec 2025
                </div>
              </div>
              <div className="text-gray-300 leading-relaxed">
                <p className="mb-4">
                  I'm a Backend Developer at SM Technology, working closely with both the app and web teams to build and
                  maintain scalable, high-performance APIs and backend systems. I focus on developing robust server-side
                  logic, database architecture, and seamless integrations to support mobile and web applications.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 bg-green-900 text-green-300 rounded-full text-xs font-mono">Node.js</span>
                  <span className="px-3 py-1 bg-blue-900 text-blue-300 rounded-full text-xs font-mono">
                    API Development
                  </span>
                  <span className="px-3 py-1 bg-purple-900 text-purple-300 rounded-full text-xs font-mono">
                    Database Design
                  </span>
                  <span className="px-3 py-1 bg-orange-900 text-orange-300 rounded-full text-xs font-mono">
                    Team Collaboration
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Previous Position */}
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-dot bg-red-500"></div>
              <div className="terminal-dot bg-yellow-500"></div>
              <div className="terminal-dot bg-green-500"></div>
              <span className="font-mono text-xs text-gray-400 ml-2">internship.js</span>
            </div>
            <div className="p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-green-400 font-mono">Backend Developer Internship</h3>
                  <p className="text-blue-400 font-mono text-lg">Solutiya Pvt Ltd, Dhaka</p>
                </div>
                <div className="text-orange-400 font-mono text-sm bg-gray-800 px-3 py-1 rounded mt-2 md:mt-0">
                  Jun 2024 - Nov 2024
                </div>
              </div>
              <div className="text-gray-300 leading-relaxed">
                <p className="mb-4">
                  Solutya is a technology solutions company specializing in software development and digital
                  transformation. During my internship, I gained hands-on experience in real-world projects,
                  collaborating with developers to build scalable web applications and enhance backend functionalities.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 bg-green-900 text-green-300 rounded-full text-xs font-mono">
                    Web Development
                  </span>
                  <span className="px-3 py-1 bg-blue-900 text-blue-300 rounded-full text-xs font-mono">
                    Backend Systems
                  </span>
                  <span className="px-3 py-1 bg-purple-900 text-purple-300 rounded-full text-xs font-mono">
                    Real-world Projects
                  </span>
                  <span className="px-3 py-1 bg-orange-900 text-orange-300 rounded-full text-xs font-mono">
                    Team Collaboration
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
