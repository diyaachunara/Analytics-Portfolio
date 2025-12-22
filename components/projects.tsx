"use client"

import { useEffect, useRef, useState } from "react"

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  const projects = [
    {
      title: "Business Sale Dashboard",
      description:
        "Interactive analytics dashboard for tracking sales metrics, trends, and business performance insights.",
      tech: ["Power BI", "Data Analysis", "Excel", "Visualization"],
      link: "https://github.com/diyaachunara/Business-Sale-Dashboard",
    },
    {
      title: "Instagram Ad Campaign Analysis",
      description:
        "Data-driven analysis of Instagram ad campaigns to evaluate conversion rates, reach, and audience engagement.",
      tech: ["Python", "Pandas", "Data Analytics", "Visualization"],
      link: "https://github.com/diyaachunara/Instagram-Ad-Campaign",
    },
    {
      title: "Real Time Stock Analysis",
      description:
        "Python-based application that fetches live stock market data using APIs and visualizes trends to support data-driven investment decisions.",
      tech: ["Python", "Pandas", "Matplotlib", "NumPy", "yfinance API"],
      link: "https://github.com/diyaachunara/Real-Time-Stock-Analysis",
    },
    {
      title: "Student Feedback Analysis",
      description:
        "Machine learning project analyzing student feedback data to identify patterns, sentiment, and areas for educational improvement.",
      tech: ["Python", "Jupyter Notebook", "Machine Learning", "Data Science"],
      link: "https://github.com/diyaachunara/Student-Feedback-Analysis",
    },
    {
      title: "Fitness Tracker",
      description:
        "Python-based fitness tracker that calculates distance (in kilometers) and estimated calories burned based on the number of steps walked.",
      tech: ["Python", "TKinter", "Math Module","Health Analytics"],
      link: "https://github.com/diyaachunara/Fitness-Tracker",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-accent to-accent-tertiary bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-6 rounded-xl backdrop-blur-md bg-surface-light/40 border border-accent/10 hover:border-accent transition-all hover:-translate-y-2 ${
                isVisible ? `animate-in-up stagger-${idx + 1}` : ""
              }`}
            >
              <h3 className="text-xl font-bold mb-3 text-foreground">
                {project.title}
              </h3>
              <p className="text-foreground-secondary mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs bg-surface rounded-md text-accent border border-accent/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
