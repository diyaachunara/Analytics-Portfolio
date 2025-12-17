const Footer = () => {
  return (
    <footer className="backdrop-blur-md bg-foreground/5 border-t border-border py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-foreground-secondary text-sm">© 2025 Diya Chunara. All rights reserved.</p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com/diyaachunara"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground-secondary hover:text-accent transition-colors text-sm"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/diya-chunara-844031342"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground-secondary hover:text-accent transition-colors text-sm"
            >
              LinkedIn
            </a>
            <a
              href="mailto:diyaachunara@gmail.com"
              className="text-foreground-secondary hover:text-accent transition-colors text-sm"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
