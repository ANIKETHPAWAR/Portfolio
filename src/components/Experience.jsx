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
    logo: 'stealth', // Custom stealth logo
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

const skills = [
  // Languages
  { name: "JavaScript", icon: "devicon-javascript-plain" },
  { name: "TypeScript", icon: "devicon-typescript-plain" },
  { name: "Python", icon: "devicon-python-plain" },
  { name: "C++", icon: "devicon-cplusplus-plain" },
  
  // Frontend
  { name: "React", icon: "devicon-react-original" },
  { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain" },
  { name: "Figma", icon: "devicon-figma-plain" },
  
  // Backend
  { name: "Node.js", icon: "devicon-nodejs-plain" },
  { name: "Express.js", icon: "devicon-express-original" },
  
  // Databases
  { name: "MongoDB", icon: "devicon-mongodb-plain" },
  { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
  { name: "MySQL", icon: "devicon-mysql-plain" },
  { name: "Redis", icon: "devicon-redis-plain" },
  { name: "Firebase", icon: "devicon-firebase-plain" },
  
  // DevOps & Cloud
  { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark" },
  { name: "Docker", icon: "devicon-docker-plain" },
  { name: "Vercel", icon: "devicon-vercel-original" },
  
  // Tools
  { name: "Git", icon: "devicon-git-plain" },
  { name: "Postman", icon: "devicon-postman-plain" },
  { name: "Cursor", icon: "custom-cursor" },
  { name: "Render", icon: "custom-render" },
]

// Custom SVG icons for tools not in Devicons
const CustomIcon = ({ name }) => {
  if (name === "Cursor") {
    return (
      <svg className="w-7 h-7 md:w-8 md:h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M5.5 3.21V20.8c0 .45.54.67.86.35l4.86-4.86h7.28c.45 0 .67-.54.35-.86L6.35 2.93c-.31-.32-.85-.1-.85.28z"/>
      </svg>
    )
  }
  if (name === "Render") {
    return (
      <svg className="w-7 h-7 md:w-8 md:h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    )
  }
  return null
}

// Stealth logo component
const StealthLogo = () => (
  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 2L4 6v6c0 5.5 3.4 10.2 8 12 4.6-1.8 8-6.5 8-12V6l-8-4z" />
    <path d="M12 8v4m0 4h.01" strokeLinecap="round" />
  </svg>
)

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
            {exp.logo === 'stealth' ? (
              <div className="w-full h-full text-zinc-400">
                <StealthLogo />
              </div>
            ) : (
              <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain" />
            )}
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
  const skillsRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const skillsInView = useInView(skillsRef, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3 }
    }
  }

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

        {/* Tech Stack Section */}
        <div className="mt-20 pt-16 border-t border-zinc-800">
          <motion.div
            ref={skillsRef}
            initial={{ opacity: 0, y: 20 }}
            animate={skillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <div className="section-label mb-4">Tech Stack</div>
            <h3 className="heading-md text-white">
              Tools I Work With
            </h3>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={skillsInView ? "visible" : "hidden"}
            className="flex flex-wrap justify-center gap-3 md:gap-4"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.08, 
                  y: -4,
                  transition: { duration: 0.2 } 
                }}
                className="flex flex-col items-center justify-center w-[72px] h-[72px] md:w-20 md:h-20
                           bg-zinc-900 border border-zinc-800 rounded-xl
                           hover:border-zinc-600 hover:bg-zinc-800/50
                           transition-all duration-300 cursor-default group"
              >
                {skill.icon.startsWith('custom-') ? (
                  <div className="text-zinc-400 group-hover:text-white transition-colors mb-1">
                    <CustomIcon name={skill.name} />
                  </div>
                ) : (
                  <i className={`${skill.icon} colored text-2xl md:text-[28px] mb-1 group-hover:scale-110 transition-transform`} />
                )}
                <span className="text-[9px] md:text-[10px] text-zinc-500 group-hover:text-zinc-300 transition-colors font-medium text-center px-1 leading-tight">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Experience
