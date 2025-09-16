interface ProjectProps {
  title: string
  category: string
  description: string
  technologies: Array<{ name: string; color: string }>
  status: string
  icon: string
  categoryColor: string
}

function ProjectCard({ title, category, description, technologies, status, icon, categoryColor }: ProjectProps) {
  return (
    <div className="project-card rounded-lg p-6 relative">
      <div className="scan-line"></div>
      <div className="flex items-center justify-between mb-4">
        <div className={`font-mono ${categoryColor} font-semibold`}>[{category}]</div>
        <div className="text-2xl">{icon}</div>
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400 mb-4 text-sm leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className={`font-mono text-xs bg-${tech.color}-900 text-${tech.color}-400 px-2 py-1 rounded`}
          >
            {tech.name}
          </span>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <button className="font-mono text-green-400 hover:text-green-300 text-sm">[VIEW_CODE]</button>
        <div className="font-mono text-xs text-gray-500">STATUS: {status}</div>
      </div>
    </div>
  )
}

export default function ProjectsSection() {
  const projects = [
    {
      title: "Microservices Gateway",
      category: "API_GATEWAY",
      categoryColor: "text-green-400",
      description:
        "High-performance API gateway with rate limiting, authentication, and service discovery. Handles 10k+ requests per second.",
      technologies: [
        { name: "Node.js", color: "green" },
        { name: "Redis", color: "blue" },
        { name: "Docker", color: "purple" },
      ],
      status: "LIVE",
      icon: "🌐",
    },
    {
      title: "WebSocket Chat Engine",
      category: "REAL_TIME",
      categoryColor: "text-blue-400",
      description:
        "Scalable real-time messaging system with room management, message persistence, and presence indicators.",
      technologies: [
        { name: "Socket.io", color: "green" },
        { name: "MongoDB", color: "orange" },
        { name: "Redis", color: "red" },
      ],
      status: "BETA",
      icon: "⚡",
    },
    {
      title: "DeFi Analytics API",
      category: "BLOCKCHAIN",
      categoryColor: "text-purple-400",
      description:
        "Cryptocurrency data aggregation service with real-time price feeds, portfolio tracking, and market analysis.",
      technologies: [
        { name: "Web3.js", color: "yellow" },
        { name: "GraphQL", color: "blue" },
        { name: "PostgreSQL", color: "green" },
      ],
      status: "DEV",
      icon: "🔗",
    },
  ]

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 font-mono">
            <span className="text-green-400">&gt;</span> projects.db
          </h2>
          <div className="w-32 h-1 bg-green-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
