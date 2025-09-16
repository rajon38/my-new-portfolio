export default function EducationSection() {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 font-mono">
            <span className="text-green-400">&gt;</span> education.db
          </h2>
          <div className="w-32 h-1 bg-green-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Masters Degree */}
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-dot bg-red-500"></div>
              <div className="terminal-dot bg-yellow-500"></div>
              <div className="terminal-dot bg-green-500"></div>
              <span className="font-mono text-xs text-gray-400 ml-2">masters.edu</span>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-green-400 font-mono mb-2">
                  MSc in Computer Science and Engineering
                </h3>
                <p className="text-blue-400 font-mono">Daffodil International University</p>
                <p className="text-gray-400 font-mono text-sm">Savar, Dhaka</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-orange-400 font-mono text-sm bg-gray-800 px-3 py-1 rounded">Running</div>
                <div className="text-green-400 text-2xl">🎓</div>
              </div>
              <div className="mt-4 text-gray-300 text-sm">
                Advanced studies in computer science, focusing on software engineering principles and modern development
                practices.
              </div>
            </div>
          </div>

          {/* Bachelor's Degree */}
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-dot bg-red-500"></div>
              <div className="terminal-dot bg-yellow-500"></div>
              <div className="terminal-dot bg-green-500"></div>
              <span className="font-mono text-xs text-gray-400 ml-2">bachelor.edu</span>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-green-400 font-mono mb-2">
                  BSc in Computer Science and Engineering
                </h3>
                <p className="text-blue-400 font-mono">Daffodil Institute of IT</p>
                <p className="text-gray-400 font-mono text-sm">Dhanmondi, Dhaka</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-orange-400 font-mono text-sm bg-gray-800 px-3 py-1 rounded">2017 - 2020</div>
                <div className="text-blue-400 text-2xl">🎯</div>
              </div>
              <div className="mt-4 text-gray-300 text-sm">
                Foundation in computer science fundamentals, programming languages, and software development
                methodologies.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
