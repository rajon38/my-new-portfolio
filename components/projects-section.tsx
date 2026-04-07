interface ProjectProps {
  title: string
  category: string
  description: string
  technologies: Array<{ name: string; color: string }>
  status: string
  icon: string
  categoryColor: string
  image: string
  codeLink?: string
  liveLink?: string
}

function ProjectCard({ title, category, description, technologies, status, icon, categoryColor, image, codeLink, liveLink}: ProjectProps) {
  return (
    <div className="project-card rounded-lg overflow-hidden relative">
      <div className="scan-line"></div>
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
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
          <div className="flex gap-3">
            {codeLink && (
              <a 
                href={codeLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-mono text-green-400 hover:text-green-300 text-sm transition-colors hover:underline"
              >
                [VIEW_CODE]
              </a>
            )}
            {liveLink && (
              <a 
                href={liveLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-mono text-blue-400 hover:text-blue-300 text-sm transition-colors hover:underline"
              >
                [LIVE_DEMO]
              </a>
            )}
          </div>
          <div className="font-mono text-xs text-gray-500">STATUS: {status}</div>
        </div>
      </div>
    </div>
  )
}

export default function ProjectsSection() {
  const projects = [
    {
      title: "CraveIt",
      category: "REAL_TIME_FOOD_DELIVERY_APP",
      categoryColor: "text-green-400",
      description:
        "A TypeScript-based Node.js backend with Express, Prisma, MongoDB, real-time WebSocket support, cloud storage, authentication, and Stripe payments.",
      technologies: [
        { name: "Node.js", color: "green" },
        { name: "WebSocket", color: "blue" },
        { name: "Stripe", color: "purple" },
      ],
      status: "LIVE",
      icon: "🌐",
      image: "https://i.imgur.com/EFJFa74.jpeg",
      codeLink: "https://github.com/rajon38/craveIt.git",
      liveLink: "https://play.google.com/store/search?q=craveit&c=apps&hl=en"
    },
    {
      title: "Salon-service",
      category: "REAL_TIME",
      categoryColor: "text-blue-400",
      description:
        "Scalable real-time messaging system with room management, message persistence, and presence indicators. A TypeScript-powered Node.js backend for a salon service app with Express, Prisma, MongoDB, real-time features, cloud storage, authentication, and Stripe payment integration.",
      technologies: [
        { name: "WebSocket", color: "green" },
        { name: "MongoDB", color: "orange" },
        { name: "Redis", color: "red" },
      ],
      status: "LIVE",
      icon: "🌐",
      image: "https://i.imgur.com/dUzTpAo.jpeg",
      codeLink: "https://github.com/rajon38/salon-service.git",
      liveLink: "https://apps.apple.com/co/app/timelify-book-instantly/id6756337642"
    },
    {
      title: "Water-bill",
      category: "Real-time Water Billing System",
      categoryColor: "text-purple-400",
      description:
        "Real-time water billing system with usage tracking, payment processing, and analytics.",
      technologies: [
        { name: "WebSocket", color: "green" },
        { name: "MongoDB", color: "orange" },
        { name: "Stripe", color: "purple" }
      ],
      status: "DEV",
      icon: "🔗",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      codeLink: "https://github.com/rajon38/water-bill.git"
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
