interface SkillProps {
  name: string
  level: number
  color: string
}

function SkillBar({ name, level, color }: SkillProps) {
  return (
    <div className="flex justify-between items-center">
      <span className="font-mono text-sm">{name}</span>
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <div key={i} className={`w-2 h-2 rounded-full ${i < level ? `bg-${color}-400` : "bg-gray-600"}`}></div>
        ))}
      </div>
    </div>
  )
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 font-mono">
            <span className="text-green-400">&gt;</span> skills.json
          </h2>
          <div className="w-32 h-1 bg-green-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Languages */}
          <div className="skill-card p-6 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-mono font-semibold text-green-400">[LANGUAGES]</h3>
              <div className="text-2xl">💻</div>
            </div>
            <div className="space-y-3">
              <SkillBar name="JavaScript" level={5} color="green" />
              <SkillBar name="TypeScript" level={4} color="blue" />
              <SkillBar name="C++" level={3} color="purple" />
              <SkillBar name="C" level={3} color="orange" />
            </div>
          </div>

          {/* Backend */}
          <div className="skill-card p-6 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-mono font-semibold text-blue-400">[BACKEND]</h3>
              <div className="text-2xl">⚙️</div>
            </div>
            <div className="space-y-3">
              <SkillBar name="Node.js" level={5} color="green" />
              <SkillBar name="Express.js" level={5} color="green" />
              <SkillBar name="MongoDB" level={4} color="green" />
            </div>
          </div>

          {/* ORM/ODM */}
          <div className="skill-card p-6 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-mono font-semibold text-purple-400">[ORM/ODM]</h3>
              <div className="text-2xl">🗄️</div>
            </div>
            <div className="space-y-3">
              <SkillBar name="Prisma" level={4} color="purple" />
              <SkillBar name="Mongoose" level={5} color="green" />
            </div>
          </div>

          {/* DevOps */}
          <div className="skill-card p-6 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-mono font-semibold text-orange-400">[DEVOPS]</h3>
              <div className="text-2xl">🚀</div>
            </div>
            <div className="space-y-3">
              <SkillBar name="Docker" level={4} color="blue" />
              <SkillBar name="GitHub Actions" level={4} color="purple" />
              <SkillBar name="Nginx" level={3} color="green" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
