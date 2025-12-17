"use client"

import { useEffect, useRef, useState } from "react"

const Experience = () => {
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

  const experiences = [
    {
      title: "Web Development Focus",
      type: "Technical Journey",
      description: "Building responsive, scalable web applications using modern frameworks and best practices.",
      skills: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    },
    {
      title: "Data Analytics Projects",
      type: "Professional Experience",
      description: "Analyzing complex datasets, creating dashboards, and extracting actionable business insights.",
      skills: ["Power BI", "Python", "SQL", "Excel"],
    },
    {
      title: "AI & ML Integration",
      type: "Current Focus",
      description: "Developing intelligent systems that combine computer vision, NLP, and emotion detection.",
      skills: ["TensorFlow", "Face-api.js", "Gemini API", "Python"],
    },
  ]

  const education = [
    {
      institution: "Pursuing B.Tech",
      field: "Computer Science & Technology",
      coursework: [
        "Web Development",
        "Data Structures",
        "Python Programming",
        "Database Management",
        "Machine Learning Basics",
      ],
    },
  ]

  return (
    <section id="experience" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute -bottom-20 right-0 w-96 h-96 bg-accent-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Experience Timeline */}
          <div>
            <h2 className="text-3xl font-bold mb-8">
              <span className="bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent">
                Experience
              </span>
            </h2>

            <div className="space-y-6">
              {experiences.map((exp, idx) => (
                <div
                  key={exp.title}
                  className={`backdrop-blur-md bg-surface-light/40 border border-accent/10 hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent p-6 rounded-lg relative pl-6 border-l-2 border-accent/50 ${isVisible ? `animate-in-left stagger-${idx + 1}` : ""
                    }`}
                >
                  <div className="absolute -left-4 top-6 w-5 h-5 bg-accent rounded-full border-4 border-background" />
                  <p className="text-accent text-sm font-semibold mb-2">{exp.type}</p>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{exp.title}</h3>
                  <p className="text-foreground-secondary mb-4 text-sm">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 text-xs bg-surface text-accent rounded border border-accent/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-3xl font-bold mb-8">
              <span className="bg-gradient-to-r from-accent-secondary to-accent-tertiary bg-clip-text text-transparent">
                Education
              </span>
            </h2>

            <div className="space-y-6">
              {education.map((edu, idx) => (
                <div
                  key={edu.institution}
                  className={`backdrop-blur-md bg-surface-light/40 border border-accent/10 hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent p-6 rounded-lg ${isVisible ? `animate-in-right stagger-${idx + 1}` : ""
                    }`}
                >
                  <h3 className="text-xl font-bold text-foreground mb-2">{edu.institution}</h3>
                  <p className="text-accent text-sm mb-4">{edu.field}</p>
                  <div>
                    <p className="text-sm font-semibold text-foreground-secondary mb-3">Relevant Coursework</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course) => (
                        <span
                          key={course}
                          className="px-3 py-1 text-xs bg-surface rounded-full text-foreground-secondary border border-border"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
