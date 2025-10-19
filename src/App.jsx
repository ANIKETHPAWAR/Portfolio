import { useState, useEffect } from 'react'
import { getCalApi } from "@calcom/embed-react"
import './App.css'
import Icon2Svg from './assets/ICON 2.svg'

function App() {
  const [activeFilter, setActiveFilter] = useState('Full Stack')
  const [githubData, setGithubData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const response = await fetch('https://github-contributions-api.jogruber.de/v4/ANIKETHPAWAR?y=last')
        const data = await response.json()
        setGithubData(data)
      } catch (error) {
        console.error('Error fetching GitHub data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchGitHubData()
  }, [])

  // Cal.com integration
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"secret"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])

  const projects = [
    {
      id: 1,
      title: "Enrich Salon Management",
      description: "Enrich Hair Salon is a salon booking system with online payments and an admin dashboard for managing services and bookings.",
      technologies: ["React", "MUI", "Tailwind CSS", "Razorpay", "Nodemailer", "React Charts", "Node.js", "Express.js", "MongoDB"],
      category: "Full Stack",
      website: "#",
      source: "#",
      icon: "🎨"
    },
    {
      id: 2,
      title: "Flick.AI",
      description: "An AI-Powered tool with 200+ users designed to refine your tweets with full customizations and make them stand out—because GPT just doesn't get it.",
      technologies: ["Next.js", "TypeScript", "Google Gemini", "Prisma", "PostgreSQL", "NextAuth", "Tailwind CSS"],
      category: "Full Stack",
      website: "#",
      source: "#",
      icon: "🐦"
    },
    {
      id: 3,
      title: "OrbitToken",
      description: "An decentralized platform enables users launch their custom tokens, transfer tokens, view token balances, transfer SOL, and more on the Solana blockchain.",
      technologies: ["React", "TypeScript", "Solana", "Web3", "Anchor", "Rust", "Next.js"],
      category: "Full Stack",
      website: "#",
      source: "#",
      icon: "🚀"
    },
    {
      id: 4,
      title: "GhostGram - SaaS platform",
      description: "GhostGram is an anonymous messaging platform that lets users securely send and receive messages through unique, disposable links with end-to-end encryption.",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "NextAuth", "Tailwind CSS", "Vercel"],
      category: "Full Stack",
      website: "#",
      source: "#",
      icon: "👻"
    }
  ]

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <div className="min-h-screen bg-white text-gray-900 bricolage-grotesque">
      {/* Navigation */}
      <nav className="fixed top-4 sm:top-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-white/80 backdrop-blur-md rounded-full px-3 sm:px-6 py-2 sm:py-3 shadow-lg border border-white/20">
          <div className="flex items-center space-x-3 sm:space-x-6">
            {/* Home Icon */}
            <a href="#home" className="group relative text-yellow-500 hover:text-yellow-600 transition-all duration-300 hover:scale-110 active:scale-95">
              <div className="absolute -inset-2 rounded-full bg-yellow-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                Home
              </div>
              <svg className="relative w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
              </svg>
            </a>
            
            {/* Code Icon */}
            <a href="#projects" className="group relative text-gray-700 hover:text-gray-900 transition-all duration-300 hover:scale-110 active:scale-95">
              <div className="absolute -inset-2 rounded-full bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                Projects
              </div>
              <svg className="relative w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
              </svg>
            </a>
            
            {/* Resume Icon */}
            <a href="https://drive.google.com/file/d/1ZnB8pwQxh892CDah_8uA-gzS2XI1jRrN/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" className="group relative text-gray-700 hover:text-gray-900 transition-all duration-300 hover:scale-110 active:scale-95">
              <div className="absolute -inset-2 rounded-full bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                Resume
              </div>
              <svg className="relative w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:rotate-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
            </a>
            
            {/* Profile Icon */}
            <a href="#contact" className="group relative text-gray-700 hover:text-gray-900 transition-all duration-300 hover:scale-110 active:scale-95">
              <div className="absolute -inset-2 rounded-full bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                Contact
              </div>
              <svg className="relative w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              </svg>
            </a>
            
            {/* Divider */}
            <div className="w-px h-4 sm:h-6 bg-gray-300 transition-all duration-300 hover:bg-gray-400"></div>
            
            {/* Document Icon */}
            <a href="#education" className="group relative text-gray-700 hover:text-gray-900 transition-all duration-300 hover:scale-110 active:scale-95">
              <div className="absolute -inset-2 rounded-full bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                Education
              </div>
              <svg className="relative w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:rotate-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
              </svg>
            </a>
            
            {/* GitHub Icon */}
            <a href="https://github.com" className="group relative text-gray-700 hover:text-gray-900 transition-all duration-300 hover:scale-110 active:scale-95" target="_blank" rel="noopener noreferrer">
              <div className="absolute -inset-2 rounded-full bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                GitHub
              </div>
              <svg className="relative w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            
            {/* X/Twitter Icon */}
            <a href="https://twitter.com" className="group relative text-gray-700 hover:text-gray-900 transition-all duration-300 hover:scale-110 active:scale-95" target="_blank" rel="noopener noreferrer">
              <div className="absolute -inset-2 rounded-full bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                Twitter
              </div>
              <svg className="relative w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            
            {/* LinkedIn Icon */}
            <a href="https://linkedin.com" className="group relative text-gray-700 hover:text-gray-900 transition-all duration-300 hover:scale-110 active:scale-95" target="_blank" rel="noopener noreferrer">
              <div className="absolute -inset-2 rounded-full bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                LinkedIn
              </div>
              <svg className="relative w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            
            {/* Divider */}
            <div className="w-px h-4 sm:h-6 bg-gray-300 transition-all duration-300 hover:bg-gray-400"></div>
            
            {/* Sun/Dark Mode Toggle */}
            <button className="group relative text-gray-700 hover:text-gray-900 transition-all duration-300 hover:scale-110 active:scale-95">
              <div className="absolute -inset-2 rounded-full bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                Toggle Theme
              </div>
              <svg className="relative w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-6 sm:mb-8 rounded-full overflow-hidden">
            <img 
              src="/src/assets/image.png" 
              alt="Aniketh Pawar"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-4">
            Hey, I'm Aniketh Pawar
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
          Final-year student at NIT Durgapur with 8 months of hands-on experience as a full-stack developer. I love building things that solve real problems. When I’m not coding, I’m usually brainstorming real-world challenges and finding ways to bring them to life with code.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <button 
              data-cal-namespace="secret"
              data-cal-link="anikethpawar/secret"
              data-cal-config='{"layout":"month_view"}'
              className="bg-gray-900 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg hover:bg-gray-800 transition-colors text-sm sm:text-base"
            >
              Book a meet
            </button>
            <a href="#contact" className="bg-gray-900 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg hover:bg-gray-800 transition-colors text-sm sm:text-base inline-block">
              Get in touch
            </a>
            <a href="https://drive.google.com/file/d/1ZnB8pwQxh892CDah_8uA-gzS2XI1jRrN/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" className="bg-gray-900 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg hover:bg-gray-800 transition-colors text-sm sm:text-base inline-block">
              Resume
            </a>
          </div>
        </div>
      </section>

      {/* Proof of Work Section */}
      <section id="projects" className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center text-gray-900">Proof of Work</h2>
          

          {/* Projects Grid */}
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mr-3 sm:mr-4 text-xl sm:text-2xl">
                    {project.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{project.title}</h3>
                </div>
                <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-gray-100 text-gray-700 text-xs font-medium px-2 py-1 rounded-full hover:bg-gray-200 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 sm:gap-4">
                  <a href={project.website} className="text-gray-500 hover:text-gray-900 text-xs sm:text-sm font-medium flex items-center transition-colors">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"/>
                    </svg>
                    Website
                  </a>
                  <a href={project.source} className="text-gray-500 hover:text-gray-900 text-xs sm:text-sm font-medium flex items-center transition-colors">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Source
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="text-gray-600 hover:text-gray-900 flex items-center mx-auto text-sm font-medium transition-colors">
              Load More
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center text-gray-900">Experience</h2>
          <div className="space-y-6 sm:space-y-8">
            <div className="flex items-start">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mr-4 sm:mr-6 flex-shrink-0 overflow-hidden">
                <img 
                  src="https://imgs.search.brave.com/Z6_xOTfU5sfmMMfwuHRz3Z9hwVZm56gVolxk_ns2Bp8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGVh/bHRoLXN0YXJ0dXBz/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyNS8wMi9zdGVh/bHRoTEdYMS0wMS0x/LnBuZw" 
                  alt="Stealth Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Full Stack Developer</h3>
                  <span className="text-gray-600 text-xs sm:text-sm">2023 - Present</span>
                </div>
                <p className="text-gray-600 mt-1 text-sm sm:text-base">Stealth</p>
                <p className="text-gray-600 mt-2 text-sm sm:text-base">Building scalable web applications and leading development initiatives.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mr-4 sm:mr-6 flex-shrink-0 overflow-hidden">
                <img 
                  src={Icon2Svg} 
                  alt="Mande Network Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Frontend Developer</h3>
                  <span className="text-gray-600 text-xs sm:text-sm">2022 - 2023</span>
                </div>
                <p className="text-gray-600 mt-1 text-sm sm:text-base">Mande Network</p>
                <p className="text-gray-600 mt-2 text-sm sm:text-base">Creating responsive user interfaces and optimizing web performance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center text-gray-900">Education</h2>
          
          <div className="space-y-6 sm:space-y-8">
            {/* Education Entry 1 */}
            <div className="flex items-center bg-white border border-gray-200 rounded-lg p-4 sm:p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mr-4 sm:mr-6 flex-shrink-0 overflow-hidden">
                <img 
                  src="https://imgs.search.brave.com/lMfNGQWZW7LFpzaE6SpA5aKCeTPYo2cIKkvraFxTuuE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/Zi9mMS9OSVRfRHVy/Z2FwdXJfTG9nby5z/dmcvMjUwcHgtTklU/X0R1cmdhcHVyX0xv/Z28uc3ZnLnBuZw" 
                  alt="NIT Durgapur Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">Electrical Engineering</h3>
                <p className="text-sm sm:text-base text-gray-600">NIT Durgapur</p>
              </div>
              <div className="text-sm sm:text-base text-gray-500 font-medium">
                2022 - 2026
              </div>
            </div>

            {/* Education Entry 2 */}
            <div className="flex items-center bg-white border border-gray-200 rounded-lg p-4 sm:p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mr-4 sm:mr-6 flex-shrink-0 overflow-hidden">
                <img 
                  src="https://imgs.search.brave.com/TOOPJ_OPGmxrdEfdh5Vwp-o17Zfzvs1Z-6fwNGLrlNk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/cG5na2l0LmNvbS9w/bmcvZnVsbC8yNDgt/MjQ4NzA2OF9hLWZl/dy13b3Jkcy1hYm91/dC1zcmktY2hhaXRh/bnlhLXNyaS1jaGFp/dGFueWEucG5n" 
                  alt="Sri Chaitanya Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">Sri Chaitanya</h3>
                <p className="text-sm sm:text-base text-gray-600">Telangana State Board of Secondary Education</p>
              </div>
              <div className="text-sm sm:text-base text-gray-500 font-medium">
                May 2022
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* GitHub Contributions Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center text-gray-900">GitHub Contributions</h2>
          
          {loading ? (
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
              <p className="text-gray-600 mt-4">Loading contributions...</p>
            </div>
          ) : githubData ? (
            <div className="flex flex-col items-center">
              {/* Month Labels */}
              <div className="mb-2">
                <div className="grid gap-0.5" style={{gridTemplateColumns: 'repeat(53, 12px)'}}>
                  {['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'].map((month, index) => (
                    <div key={month} className="text-xs text-gray-500 text-center" style={{gridColumn: `${index * 4 + 1} / span 4`}}>
                      {month}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Contribution Grid */}
              <div className="mb-4">
                <div 
                  className="grid gap-0.5"
                  style={{
                    gridTemplateColumns: 'repeat(53, 12px)',
                    gridTemplateRows: 'repeat(7, 12px)'
                  }}
                >
                  {githubData.contributions.map((day, index) => (
                    <div
                      key={index}
                      className={`w-3 h-3 rounded-sm ${
                        day.level === 0 ? 'bg-green-200' :
                        day.level === 1 ? 'bg-green-300' :
                        day.level === 2 ? 'bg-green-400' :
                        day.level === 3 ? 'bg-green-500' :
                        'bg-green-600'
                      }`}
                      title={`${day.date}: ${day.count} contributions`}
                    />
                  ))}
                </div>
              </div>
              
              {/* Bottom Section with Stats and Legend */}
              <div className="flex items-center justify-between w-full max-w-2xl">
                {/* Contribution Count */}
                <div className="text-sm text-gray-600">
                  {githubData.total.lastYear} contributions in the last year
                </div>
                
                {/* Legend */}
                <div className="flex items-center space-x-2 text-xs text-gray-600">
                  <span>Less</span>
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 bg-gray-200 rounded-sm"></div>
                    <div className="w-3 h-3 bg-green-200 rounded-sm"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-sm"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-sm"></div>
                    <div className="w-3 h-3 bg-green-600 rounded-sm"></div>
                  </div>
                  <span>More</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <p className="text-gray-600">Unable to load GitHub contributions</p>
            </div>
          )}
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center text-gray-900">Skills</h2>
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            {["JavaScript", "TypeScript", "React", "Node.js", "Python", "MongoDB", "PostgreSQL", "AWS", "Docker", "Git", "Figma", "Tailwind CSS", "Express.js","Css3","HTML5","Firebase","Supabase","C++","Framer","DSA"].map((skill) => (
              <span key={skill} className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center text-gray-900">Get In Touch</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Ready to work together? Choose your preferred way to connect with me.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {/* Book a Meet */}
            <button 
              data-cal-namespace="secret"
              data-cal-link="anikethpawar/secret"
              data-cal-config='{"layout":"month_view"}'
              className="flex items-center gap-3 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              Book a Meet
            </button>

            {/* WhatsApp */}
            <a 
              href="https://wa.me/919392956096" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              WhatsApp
            </a>

            {/* Twitter */}
            <a 
              href="https://x.com/aniketh_pawar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              Twitter
            </a>

            {/* Email */}
            <a 
              href="mailto:anikethpawar.dev@gmail.com" 
              className="flex items-center gap-3 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 sm:px-6 text-center text-gray-500">
        <p className="text-xs sm:text-sm">designed and developed by aniketh</p>
      </footer>
    </div>
  )
}

export default App
