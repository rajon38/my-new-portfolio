"use client"

interface BlogProps {
  title: string
  category: string
  description: string
  date: string
  tags: Array<{ name: string; color: string }>
  icon: string
  categoryColor: string
  link?: string
  image: string
}

function BlogCard({ title, category, description, date, tags, icon, categoryColor, link, image }: BlogProps) {
  return (
    <div className="project-card rounded-lg overflow-hidden relative">
      <div className="scan-line"></div>
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className={`font-mono ${categoryColor} font-semibold`}>[{category}]</div>
          <div className="text-2xl">{icon}</div>
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 text-xs mb-4 font-mono">{date}</p>
        <p className="text-gray-400 mb-4 text-sm leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`font-mono text-xs bg-${tag.color}-900 text-${tag.color}-400 px-2 py-1 rounded`}
            >
              #{tag.name}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center">
          {link && (
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-mono text-green-400 hover:text-green-300 text-sm transition-colors hover:underline"
            >
              [READ_MORE]
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function BlogsSection() {
  const blogs = [
    {
      title: "Radis Guidebook for Learners: From Basics to Best Practices",
      category: "Radis",
      categoryColor: "text-orange-400",
      description:
        "A Redis Guidebook designed to help beginners understand Redis in a simple and practical way. Covers Redis fundamentals and core concepts, how Redis actually works, essential Redis commands and workflows, and real-world use cases for developers. Built with focus on clarity and hands-on understanding.",
      date: "April 12, 2026",
      tags: [
        { name: "redis", color: "blue" },
        { name: "tutorial", color: "orange" },
        { name: "beginner", color: "red" },
      ],
      icon: "📚",
      image: "https://www.kevsrobots.com/learn/redis/assets/redis-cover.jpg",
      link: "https://radis-guidbook.vercel.app",
    },
    {
      title: "Docker Guidebook for Learners: From Basics to Best Practices",
      category: "Docker",
      categoryColor: "text-blue-400",
      description:
        "A Docker Guidebook designed to help beginners understand Docker in a simple and practical way. Covers Docker fundamentals and core concepts, how containers actually work, essential Docker commands and workflows, and real-world use cases for developers. Built with focus on clarity and hands-on understanding.",
      date: "April 14, 2026",
      tags: [
        { name: "docker", color: "blue" },
        { name: "devops", color: "green" },
        { name: "containers", color: "purple" },
      ],
      icon: "🐳",
      image: "https://i.ibb.co.com/v4y06MTZ/1-37q-DVEfc-M-fb-Q3ps-FL-4-A.webp",
      link: "https://docker-guidbook.vercel.app",
    },
    {
      title: "Socket.IO Guidebook for Learners: From Basics to Best Practices",
      category: "Socket.IO",
      categoryColor: "text-green-400",
      description:
        "A Socket.IO Guidebook designed to help beginners understand Socket.IO in a simple and practical way. Covers Socket.IO fundamentals and core concepts, how real-time communication actually works, essential Socket.IO commands and workflows, and real-world use cases for developers. Built with focus on clarity and hands-on understanding.",
      date: "March 28, 2026",
      tags: [
        { name: "socket.io", color: "purple" },
        { name: "realtime", color: "blue" },
        { name: "websockets", color: "green" },
      ],
      icon: "🚀",
      image: "https://blog.sngine.com/wp-content/uploads/2025/08/502591571_1215910113663716_4146382509682417071_n-1300x754.jpg",
      link: "https://socket-io-guidbook.vercel.app",
    },
  ]

  return (
    <section id="blogs" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 font-mono">
            <span className="text-green-400">&gt;</span> blogs.md
          </h2>
          <div className="w-32 h-1 bg-green-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
        </div>
      </div>
    </section>
  )
}
