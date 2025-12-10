import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

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
  { name: "Cursor", icon: "custom-cursor" }, // Custom icon
  { name: "Render", icon: "custom-render" }, // Custom icon
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

const SkillsPreview = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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
    <section className="py-24 px-6 bg-zinc-900/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="section-label mb-6">
            Tech Stack
          </div>
          <h2 className="heading-lg mb-4">
            Tools I <span className="gradient-text">Work With</span>
          </h2>
          <p className="text-body max-w-lg mx-auto">
            Technologies I use daily to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
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
    </section>
  )
}

export default SkillsPreview
