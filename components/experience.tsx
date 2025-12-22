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
  title: "Data Science Intern",
  type: "Internship (1 Month) | Future Intern",
  description:
    "Completed a 1-month Data Science internship at Future Intern, working on real-world data analytics projects including an E-commerce Sales Dashboard, Social Media Campaign Performance Dashboard, and Student Feedback & Event Analysis to derive actionable insights.",
  skills: ["Python", "Power BI", "SQL", "Excel", "Data Analysis"],
},
  ]

  return (
  <section
    id="experience"
    ref={ref}
    className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
  >
    <div className="absolute -bottom-20 right-0 w-96 h-96 bg-accent-secondary/5 rounded-full blur-3xl" />

    <div className="max-w-6xl mx-auto relative z-10">
      <div className="grid md:grid-cols-1 gap-12">
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
                className={`backdrop-blur-md bg-surface-light/40 border border-accent/10 hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent p-6 rounded-lg relative pl-6 border-l-2 border-accent/50 ${
                  isVisible ? `animate-in-left stagger-${idx + 1}` : ""
                }`}
              >
                <div className="absolute -left-4 top-6 w-5 h-5 bg-accent rounded-full border-4 border-background" />
                <p className="text-accent text-sm font-semibold mb-2">
                  {exp.type}
                </p>
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {exp.title}
                </h3>
                <p className="text-foreground-secondary mb-4 text-sm">
                  {exp.description}
                </p>

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
      </div>
    </div>
  </section>
)
}
export default Experience
