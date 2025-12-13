import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { projects } from './Projects'

// Get featured projects from the shared projects data
const featuredProjects = projects.filter(p => p.featured)

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  // Debug: Log image URL
  if (project.image) {
    console.log(`Featured Project "${project.title}" image:`, project.image)
  }

  return (
    <motion.a
      ref={ref}
      href={project.website}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group relative block overflow-hidden rounded-2xl"
    >
      {/* Background Image */}
      {project.image && (
        <>
          {/* Hidden img to preload and verify image loads */}
          <img 
            src={project.image}
            alt=""
            style={{ display: 'none' }}
            onLoad={() => console.log(`✓ Image loaded for ${project.title}`)}
            onError={() => console.error(`✗ Image failed to load for ${project.title}:`, project.image)}
          />
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-500 z-0"
            style={{ backgroundImage: `url(${project.image})` }}
          />
        </>
      )}
      
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/70 to-zinc-900/65 group-hover:from-zinc-900/60 group-hover:to-zinc-900/55 transition-all duration-500 z-0" />
      
      <div className="relative bg-zinc-900/30 border border-zinc-800 rounded-2xl p-6 h-full transition-all duration-300 group-hover:border-zinc-700 backdrop-blur-sm z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div>
              <h3 className="font-semibold text-lg text-white group-hover:text-indigo-400 transition-colors">
                {project.title}
              </h3>
              <span className="text-xs text-zinc-500 font-jetbrains-mono uppercase tracking-wider">
                {project.category}
              </span>
            </div>
          </div>
          <svg 
            className="w-5 h-5 text-zinc-600 group-hover:text-indigo-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
          </svg>
        </div>

        {/* Description */}
        <p className="text-zinc-400 text-sm leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span 
              key={tech} 
              className="px-2.5 py-1 text-xs font-medium text-zinc-400 bg-zinc-800/50 rounded-md border border-zinc-700/50"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  )
}

const FeaturedProjects = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-label mb-6">
            Selected Work
          </div>
          <h2 className="heading-lg mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-body max-w-xl mx-auto">
            A few highlights from my recent work. Each project taught me something new.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center"
        >
          <Link 
            to="/projects" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-zinc-700 text-zinc-300 hover:border-indigo-500 hover:text-indigo-400 transition-all group"
          >
            View all projects
            <svg 
              className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedProjects

