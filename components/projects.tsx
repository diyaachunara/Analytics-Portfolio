"use client"

import { useEffect, useRef, useState } from "react"

const Projects = () => {
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

  const projects = [
    {
      title: "AI Friend",
      description:
        "An emotionally intelligent AI companion using facial expressions and voice to provide empathetic support.",
      tech: ["Next.js", "face-api.js", "Conversational AI", "TypeScript"],
      link: "https://github.com/diyaachunara/My-AI-Friend",
      highlight: true,
    },
    {
      title: "AI chatbot",
      description:
        "Chat SDK is a free, open-source template built with Next.js and the AI SDK that helps you quickly build powerful chatbot applications.",
      tech: ["Next.js", "auth.js", "AI SDK", "Tailwind CSS"],
      link: "https://github.com/diyaachunara/ai-chatbot",
      highlight: true,
    },
    {
      title: "Calender view",
      description:
        "It is designed for a hiring assignment and follows strict requirements for accessibility, performance, and code quality.",
      tech: ["React", "vite", "Typescript", "Tailwind CSS"],
      link: "https://github.com/diyaachunara/Calendar-View-Interactive-UI-Component",
      highlight: true,
    },
    {
      title: "Food Delivery App",
      description:
        "A modern Food Delivery Web Application built using Next.js and modern frontend tools.",
      tech: ["Next.js", "Typescript", "Javascript", "Tailwind CSS"],
      link: "https://github.com/diyaachunara/Food-Delivery-App",
      highlight: true,
    },
    {
      title: "Business Sale Dashboard",
      description: "Interactive analytics dashboard for tracking sales metrics and business performance insights.",
      tech: ["Power BI", "Data Analysis", "Excel", "Visualization"],
      link: "https://github.com/diyaachunara/Business-Sale-Dashboard",
    },
    {
      title: "Instagram Ad Campaign Analysis",
      description: "Data-driven analysis of ad performance with insights on conversion rates and audience engagement.",
      tech: ["Python", "Data Analytics", "Pandas", "Visualization"],
      link: "https://github.com/diyaachunara/Instagram-Ad-Campaign",
    },
    {
      title: "Real Time Stock Analysis",
      description: "It fetches live stock data using an API and presents insights through graphical representations to support data-driven decision making.",
      tech: ["Python", "Matplotlib", "Pandas", "Numpy", "yfinance API"],
      link: "https://github.com/diyaachunara/Real-Time-Stock-Analysis",
    },
    {
      title: "Student Feedback Analysis",
      description:
        "Machine learning project analyzing student feedback to identify patterns and improve educational outcomes.",
      tech: ["Python", "Jupyter", "ML", "Data Science"],
      link: "https://github.com/diyaachunara/Student-Feedback-Analysis",
    },
    {
      title: "Bizzops Platform",
      description: "Business operations management platform with modern Angular architecture.",
      tech: ["Angular", "JavaScript", "Business Tools"],
      link: "https://github.com/diyaachunara/Bizzops-Angular",
    },
    {
      title: "Interactive Tour",
      description: "Immersive tour experience with responsive design and smooth animations.",
      tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      link: "https://github.com/diyaachunara/Tour",
    },
  ]

  return (
    <section id="projects" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-accent to-accent-tertiary bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-foreground-secondary max-w-2xl mx-auto">
            Innovative projects combining web development, AI, and data analytics
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`backdrop-blur-md bg-surface-light/40 border border-accent/10 hover:border-accent transition-all duration-300 hover:shadow-2xl hover:shadow-accent/20 hover:-translate-y-2 p-6 rounded-xl group relative overflow-hidden ${isVisible ? `animate-in-up stagger-${(idx % 5) + 1}` : ""
                } ${project.highlight ? "md:col-span-2 lg:col-span-3" : ""}`}
            >
              {/* Animated gradient border on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/10 to-accent-secondary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                {project.highlight && (
                  <div className="inline-block px-3 py-1 bg-accent/20 text-accent text-xs rounded-full mb-4 border border-accent/50">
                    Featured
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground-secondary mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-surface rounded-md text-xs text-accent border border-accent/20 group-hover:border-accent transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
