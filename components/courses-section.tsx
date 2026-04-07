export default function CoursesSection() {
  return (
    <section id="courses" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 font-mono">
            <span className="text-green-400">&gt;</span> courses.json
          </h2>
          <div className="w-32 h-1 bg-green-400 mx-auto"></div>
        </div>

        <div className="space-y-6">
          {/* Next Level Web development */}
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-dot bg-red-500"></div>
              <div className="terminal-dot bg-yellow-500"></div>
              <div className="terminal-dot bg-green-500"></div>
              <span className="font-mono text-xs text-gray-400 ml-2">next_level_web_dev.cert</span>
            </div>
            <div className="p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-green-400 font-mono mb-2">
                    Next Level Web Development 
                  </h3>
                  <p className="text-blue-400 font-mono">Programming Hero</p>
                </div>
                <div className="flex items-center gap-4 mt-2 md:mt-0">
                  <div className="text-orange-400 font-mono text-sm bg-gray-800 px-3 py-1 rounded">
                    Oct 2025 - Running
                  </div>
                  <div className="text-green-400 text-xl">💻</div>
                </div>
              </div>
            </div>
          </div>

          {/* DevOps Bootcamp */}
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-dot bg-red-500"></div>
              <div className="terminal-dot bg-yellow-500"></div>
              <div className="terminal-dot bg-green-500"></div>
              <span className="font-mono text-xs text-gray-400 ml-2">devops_bootcamp.cert</span>
            </div>
            <div className="p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-green-400 font-mono mb-2">
                    Bootcamp: DevOps and Cloud Engineering
                  </h3>
                  <p className="text-blue-400 font-mono">BongoDev</p>
                </div>
                <div className="flex items-center gap-4 mt-2 md:mt-0">
                  <div className="text-orange-400 font-mono text-sm bg-gray-800 px-3 py-1 rounded">
                    May 2025 - Running
                  </div>
                  <div className="text-green-400 text-xl">☁️</div>
                </div>
              </div>
            </div>
          </div>

          {/* IBM Specialization */}
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-dot bg-red-500"></div>
              <div className="terminal-dot bg-yellow-500"></div>
              <div className="terminal-dot bg-green-500"></div>
              <span className="font-mono text-xs text-gray-400 ml-2">ibm_fullstack.cert</span>
            </div>
            <div className="p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-green-400 font-mono mb-2">
                    IBM Full-Stack JavaScript Developer Specialization
                  </h3>
                  <p className="text-blue-400 font-mono">Coursera</p>
                </div>
                <div className="flex items-center gap-4 mt-2 md:mt-0">
                  <div className="text-orange-400 font-mono text-sm bg-gray-800 px-3 py-1 rounded">
                    Oct 2024 - Dec 2024
                  </div>
                  <div className="text-blue-400 text-xl">🔧</div>
                </div>
              </div>
            </div>
          </div>

          {/* MERN Stack */}
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-dot bg-red-500"></div>
              <div className="terminal-dot bg-yellow-500"></div>
              <div className="terminal-dot bg-green-500"></div>
              <span className="font-mono text-xs text-gray-400 ml-2">mern_stack.cert</span>
            </div>
            <div className="p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-green-400 font-mono mb-2">
                    MERN Full Stack Web Development (batch-2)
                  </h3>
                  <p className="text-blue-400 font-mono">Ostad Ltd.</p>
                </div>
                <div className="flex items-center gap-4 mt-2 md:mt-0">
                  <div className="text-orange-400 font-mono text-sm bg-gray-800 px-3 py-1 rounded">
                    Nov 2023 - Jul 2024
                  </div>
                  <div className="text-purple-400 text-xl">⚛️</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
