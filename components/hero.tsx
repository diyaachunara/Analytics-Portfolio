"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-20 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl opacity-30" />
      <div className="absolute -bottom-20 -right-40 w-80 h-80 bg-accent-secondary/10 rounded-full blur-3xl opacity-30" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left content */}
          <div className={`${isLoaded ? "animate-in-left" : ""}`}>
            <div className="space-y-6">
              <div>
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  <span className="text-foreground">Hi, I'm</span>
                  <br />
                  <span className="bg-gradient-to-r from-accent via-accent-secondary to-accent-tertiary bg-clip-text text-transparent">
                    Diya Chunara
                  </span>
                </h1>
              </div>

              <p className="text-xl md:text-2xl text-foreground-secondary font-medium">
                Data Analyst
              </p>

              <p className="text-foreground-secondary leading-relaxed max-w-md">
                Aspiring Data Analyst with a strong analytical mindset and practical experience in
                Python, SQL, Excel, and Power BI. Experienced in transforming raw data into meaningful insights through EDA, visualization,
                and business-focused dashboards.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="#projects"
                  className="px-8 py-3 bg-gradient-to-r from-accent to-accent-secondary text-background rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all duration-300"
                >
                  View Projects
                </a>
                <a
                  href="https://github.com/diyaachunara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 backdrop-blur-md bg-surface-light/40 border border-accent/50 hover:border-accent text-accent rounded-lg font-semibold transition-all duration-300"
                >
                  GitHub
                </a>
              </div>

              <div className="flex gap-4 pt-4">
                <a
                  href="https://linkedin.com/in/diya-chunara-844031342"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 backdrop-blur-md bg-surface-light/40 flex items-center justify-center rounded-lg hover:border-accent border border-border transition-all"
                >
                  <span className="text-accent">in</span>
                </a>
                <a
                  href="mailto:diyaachunara@gmail.com"
                  className="w-10 h-10 backdrop-blur-md bg-surface-light/40 flex items-center justify-center rounded-lg hover:border-accent border border-border transition-all"
                >
                  <span className="text-accent">@</span>
                </a>
              </div>
            </div>
          </div>

          <div className={`hidden md:flex justify-center items-center ${isLoaded ? "animate-in-right" : ""}`}>
            <div className="relative w-80 h-80">
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-accent-secondary/30 rounded-full blur-3xl animate-pulse" />

              {/* Character image container */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full rectangle-full overflow-hidden float-animation">

                  <Image
                    src="/images/pf-20image.jpg"
                    alt="Diya Chunara - Tech Developer"
                    fill
                    className="object-cover"
                    priority
                  />

                  {/* Border glow only */}
                  <div className="absolute inset-0 -full border-2 border-accent/40 shadow-lg shadow-accent/50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
