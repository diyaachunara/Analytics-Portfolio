"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError(false)

    try {
      const formElement = e.currentTarget
      const formData = new FormData(formElement)

      const response = await fetch("https://formspree.io/f/meoyzqdn", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setSubmitted(true)
        formElement.reset()
        setTimeout(() => {
          setSubmitted(false)
        }, 4000)
      } else {
        setError(true)
        setTimeout(() => setError(false), 4000)
      }
    } catch (err) {
      setError(true)
      setTimeout(() => setError(false), 4000)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-accent to-purple-500 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-muted-foreground">Have a project in mind? Let's create something amazing together.</p>
        </div>

        <div
          className={`backdrop-blur-md bg-surface-light/40 border border-accent/10 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/20 hover:-translate-y-2 p-8 rounded-xl ${isVisible ? "animate-in-up" : ""}`}
        >
          {submitted ? (
            <div className="text-center py-8">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-2xl font-bold text-accent mb-2">Message Received!</h3>
              <p className="text-muted-foreground">Thanks for reaching out. I'll get back to you soon.</p>
            </div>
          ) : error ? (
            <div className="text-center py-8">
              <div className="text-5xl mb-4">⚠️</div>
              <h3 className="text-2xl font-bold text-red-500 mb-2">Oops! Something went wrong</h3>
              <p className="text-muted-foreground">Please try again or email me directly at locuscollor@gmail.com</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  disabled={isLoading}
                  className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  disabled={isLoading}
                  className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 bg-gradient-to-r from-accent to-purple-500 text-background rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>

        <div className="mt-12 grid grid-cols-3 gap-4 text-center">
          <a
            href="https://github.com/diyaachunara"
            target="_blank"
            rel="noopener noreferrer"
            className="backdrop-blur-md bg-surface-light/40 border border-accent/10 hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent p-4 rounded-lg"
          >
            <div className="text-2xl mb-2">{"<>"}</div>
            <div className="text-sm font-medium text-muted-foreground">GitHub</div>
          </a>
          <a
            href="https://linkedin.com/in/diya-chunara-844031342"
            target="_blank"
            rel="noopener noreferrer"
            className="backdrop-blur-md bg-surface-light/40 border border-accent/10 hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent p-4 rounded-lg"
          >
            <div className="text-2xl mb-2">💼</div>
            <div className="text-sm font-medium text-muted-foreground">LinkedIn</div>
          </a>
          <a
            href="mailto:locuscollor@gmail.com"
            className="backdrop-blur-md bg-surface-light/40 border border-accent/10 hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent p-4 rounded-lg"
          >
            <div className="text-2xl mb-2">✉️</div>
            <div className="text-sm font-medium text-muted-foreground">Email</div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
