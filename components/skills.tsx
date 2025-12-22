"use client"

import { useEffect, useRef, useState } from "react"

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const skillCategories = [
    {
      title: "Data & Analytics",
      icon: "📊",
      skills: [
        "Python",
        "SQL",
        "Pandas",
        "NumPy",
        "Power BI",
        "Data Visualization",
        "Machine Learning",
        "Excel",
        "Jupyter",
        "Statistical Analysis",
      ],
    },
    {
      title: "AI & Tools",
      icon: "⚙️",
      skills: [
        "Face-api.js",
        "Gemini API",
        "Git/GitHub",
        "REST APIs",
        "Postman",
        "Vercel",
        "Netlify",
        "Docker",
        "LaTeX",
      ],
    },
  ]

  return (
    <section id="skills" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-accent-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-foreground-secondary max-w-2xl mx-auto">
            Leveraging modern technologies to build scalable solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={category.title}
              className={`backdrop-blur-md bg-surface-light/40 border border-accent/10 hover:border-accent transition-all duration-300 p-8 rounded-xl ${isVisible ? `animate-in-up stagger-${idx + 1}` : ""}`}
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-2 bg-surface rounded-lg text-sm text-accent border border-accent/20 hover:border-accent transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
