import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const projects = [
  {
    id: 1,
    title: "SneakOut",
    tagline: "Discover hidden gems in your city",
    description: "A hyperlocal spot discovery platform where users crowdsource and explore nearby hangout locations. Search by category, proximity, or community ratings.",
    technologies: ["React", "Node.js", "MongoDB", "Leaflet.js", "JWT"],
    category: "Full Stack",
    website: "https://sneakout.me",
    source: "https://github.com/ANIKETHPAWAR/SneakOut",
    image: null, // Add image path here
    featured: true,
  },
  {
    id: 2,
    title: "SangbadBangla",
    tagline: "Regional news platform",
    description: "Dynamic Bengali news website serving thousands of readers with live cricket scores, breaking news, and an admin dashboard for content management.",
    technologies: ["React", "Node.js", "Firebase", "Auth0"],
    category: "Full Stack",
    website: "https://sangbadbangla.news",
    source: "https://github.com/ANIKETHPAWAR/Sangbad-bangla",
    image: null,
    featured: true,
  },
  {
    id: 3,
    title: "Voting App",
    tagline: "Secure election system",
    description: "Real-time voting application with Aadhar-based authentication. Users can vote for candidates and view live vote counts as they update.",
    technologies: ["Node.js", "Express", "MongoDB"],
    category: "Backend",
    website: "https://github.com/ANIKETHPAWAR/Voting-App",
    source: "https://github.com/ANIKETHPAWAR/Voting-App",
    image: null,
    featured: false,
  },
  {
    id: 4,
    title: "YT Comment Finder",
    tagline: "Chrome extension",
    description: "Browser extension for fast, keyword-based comment searches within YouTube videos. Makes finding specific discussions effortless.",
    technologies: ["JavaScript", "Chrome APIs", "YouTube API"],
    category: "Frontend",
    website: "https://github.com/ANIKETHPAWAR/Youtube-Extension-V1",
    source: "https://github.com/ANIKETHPAWAR/Youtube-Extension-V1",
    image: null,
    featured: false,
  }
]

const filters = ["All", "Full Stack", "Frontend", "Backend"]

const ProjectCard = ({ project, index, featured }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  if (featured) {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        className="project-card group"
      >
        {/* Background Image */}
        {project.image && (
          <div 
            className="project-card-image bg-cover bg-center"
            style={{ backgroundImage: `url(${project.image})` }}
          />
        )}

        <div className="relative p-6 md:p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <span className="badge mb-2">{project.category}</span>
              <h3 className="heading-md text-white group-hover:text-zinc-100 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-zinc-500">{project.tagline}</p>
            </div>
            <div className="flex gap-2">
              <a 
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
              </a>
              <a 
                href={project.source}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="text-xs px-2.5 py-1 rounded-full bg-zinc-800/80 text-zinc-400 border border-zinc-700/50">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="card p-5 group hover:bg-zinc-800/30 transition-colors"
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="font-medium text-white text-sm">{project.title}</h3>
          <p className="text-xs text-zinc-500">{project.tagline}</p>
        </div>
        <div className="flex gap-1.5">
          <a 
            href={project.website}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded text-zinc-500 hover:text-white transition-colors"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
            </svg>
          </a>
          <a 
            href={project.source}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded text-zinc-500 hover:text-white transition-colors"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {project.technologies.slice(0, 3).map((tech) => (
          <span key={tech} className="text-[10px] px-2 py-0.5 rounded bg-zinc-800 text-zinc-500">
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = activeFilter === 'All' 
    ? projects.filter(p => !p.featured)
    : projects.filter(p => !p.featured && p.category === activeFilter)

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="section-label">Portfolio</div>
          <h2 className="heading-lg text-white mb-2">
            Featured Projects
          </h2>
          <p className="text-body max-w-lg">
            A selection of projects I've built. Each one taught me something new.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} featured />
          ))}
        </div>

        {/* Other Projects */}
        <div className="mb-8">
          <h3 className="text-sm font-medium text-zinc-400 mb-4">Other Projects</h3>
          <div className="flex gap-2 mb-6">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`text-xs px-3 py-1.5 rounded-lg transition-all ${
                  activeFilter === filter 
                    ? 'bg-white text-black' 
                    : 'bg-zinc-800 text-zinc-400 hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid sm:grid-cols-2 gap-4">
          <AnimatePresence mode="popLayout">
            {otherProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} featured={false} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* GitHub Link */}
        <div className="mt-12 text-center">
          <a 
            href="https://github.com/ANIKETHPAWAR"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors"
          >
            View all projects on GitHub
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
