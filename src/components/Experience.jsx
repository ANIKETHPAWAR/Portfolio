import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Icon2Svg from '../assets/ICON 2.svg'

const experiences = [
  {
    id: 1,
    role: 'Full Stack Developer',
    company: 'Stealth Startup',
    type: 'Full-time',
    duration: 'Aug 2025 - Oct 2025',
    description: 'Building the core product from ground up. Working across the entire stack to ship features fast while maintaining code quality.',
    skills: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    logo: 'https://imgs.search.brave.com/Z6_xOTfU5sfmMMfwuHRz3Z9hwVZm56gVolxk_ns2Bp8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGVh/bHRoLXN0YXJ0dXBz/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyNS8wMi9zdGVh/bHRoTEdYMS0wMS0x/LnBuZw',
  },
  {
    id: 2,
    role: 'Frontend Developer',
    company: 'Mande Network',
    type: 'Internship',
    duration: 'Sep 2024 - Jan 2025',
    description: 'Led frontend development for Web3 dashboard. Improved load times by 40% through code optimization and lazy loading strategies.',
    skills: ['React', 'TypeScript', 'Web3.js', 'Tailwind'],
    logo: Icon2Svg,
  }
]

const ExperienceCard = ({ exp, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      {/* Timeline */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-zinc-800" />
      <div className="absolute left-[-3px] top-1 timeline-dot" />

      {/* Content */}
      <div className="card p-6">
        <div className="flex items-start gap-4">
          {/* Logo */}
          <div className="w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center flex-shrink-0 overflow-hidden p-2">
            <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain" />
          </div>

          <div className="flex-1 min-w-0">
            {/* Header */}
            <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
              <div>
                <h3 className="heading-md text-white">{exp.role}</h3>
                <p className="text-sm text-zinc-400">{exp.company}</p>
              </div>
              <div className="text-right">
                <span className="badge">{exp.type}</span>
                <p className="text-xs text-zinc-500 mt-1">{exp.duration}</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-zinc-400 mb-4 leading-relaxed">
              {exp.description}
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {exp.skills.map((skill) => (
                <span key={skill} className="text-xs px-2 py-1 rounded bg-zinc-800/50 text-zinc-400">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const Experience = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="section-label">Career</div>
          <h2 className="heading-lg text-white">
            Work Experience
          </h2>
        </motion.div>

        <div className="relative">
          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.id} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
