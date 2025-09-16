"use client"

import { useEffect, useState } from "react"

export default function FloatingCode() {
  const [codeElements, setCodeElements] = useState<
    Array<{
      id: number
      text: string
      left: string
      animationDelay: string
    }>
  >([])

  useEffect(() => {
    const codes = [
      "const server = express();",
      "app.use(cors());",
      "mongoose.connect();",
      "JWT.sign(payload);",
      "docker build -t app .",
      "npm run dev",
      "git push origin main",
      "kubectl apply -f deployment.yaml",
    ]

    const elements = codes.map((code, index) => ({
      id: index,
      text: code,
      left: `${10 + index * 12}%`,
      animationDelay: `${index * 2}s`,
    }))

    setCodeElements(elements)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {codeElements.map((element) => (
        <div
          key={element.id}
          className="absolute bg-black/60 backdrop-blur-sm border border-green-400/20 rounded px-2 py-1 text-green-400 font-mono text-xs"
          style={{
            left: element.left,
            animation: `float 15s linear infinite`,
            animationDelay: element.animationDelay,
          }}
        >
          {element.text}
        </div>
      ))}
    </div>
  )
}
