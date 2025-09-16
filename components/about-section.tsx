export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 font-mono">
            <span className="text-green-400">&gt;</span> about.exe
          </h2>
          <div className="w-32 h-1 bg-green-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500"></div>
                <div className="terminal-dot bg-yellow-500"></div>
                <div className="terminal-dot bg-green-500"></div>
                <span className="font-mono text-xs text-gray-400 ml-2">profile.js</span>
              </div>
              <div className="p-6 font-mono text-sm">
                <div className="text-purple-400 inline">class</div>{" "}
                <div className="text-yellow-400 inline">BackendDeveloper</div>{" "}
                <div className="text-white inline">{"{"}</div>
                <div className="ml-4 mt-2">
                  <div>
                    <span className="text-blue-400">constructor</span>() {"{"}
                  </div>
                  <div className="ml-4">
                    <div>
                      <span className="text-green-400">this</span>.name ={" "}
                      <span className="text-orange-400">"Rashedul Islam"</span>;
                    </div>
                    <div>
                      <span className="text-green-400">this</span>.experience ={" "}
                      <span className="text-orange-400">"2+ years"</span>;
                    </div>
                    <div>
                      <span className="text-green-400">this</span>.passion ={" "}
                      <span className="text-orange-400">"Clean Code"</span>;
                    </div>
                    <div>
                      <span className="text-green-400">this</span>.focus ={" "}
                      <span className="text-orange-400">"Scalability"</span>;
                    </div>
                  </div>
                  <div>{"}"}</div>
                </div>
                <div className="mt-2">{"}"}</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-green-400 font-mono">[SYSTEM_INFO]</h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              I'm a passionate backend developer who thrives on building robust, scalable systems. My expertise lies in
              creating high-performance APIs, designing efficient database architectures, and implementing DevOps
              practices that ensure seamless deployments.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              With a strong foundation in modern JavaScript ecosystems and a deep understanding of cloud technologies, I
              transform complex business requirements into elegant technical solutions.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="skill-card p-4 rounded-lg">
                <div className="text-green-400 text-2xl mb-2">⚡</div>
                <div className="font-mono text-sm font-semibold">Performance</div>
                <div className="text-xs text-gray-400">Optimized Solutions</div>
              </div>
              <div className="skill-card p-4 rounded-lg">
                <div className="text-blue-400 text-2xl mb-2">🔒</div>
                <div className="font-mono text-sm font-semibold">Security</div>
                <div className="text-xs text-gray-400">Enterprise Grade</div>
              </div>
              <div className="skill-card p-4 rounded-lg">
                <div className="text-purple-400 text-2xl mb-2">📈</div>
                <div className="font-mono text-sm font-semibold">Scalability</div>
                <div className="text-xs text-gray-400">Cloud Native</div>
              </div>
              <div className="skill-card p-4 rounded-lg">
                <div className="text-orange-400 text-2xl mb-2">🛠️</div>
                <div className="font-mono text-sm font-semibold">DevOps</div>
                <div className="text-xs text-gray-400">CI/CD Expert</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
