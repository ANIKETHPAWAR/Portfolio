import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

// Current projects you're working on
const currentProjects = [
  {
    id: 1,
    title: "AI-Powered Blog Creation",
    description: "Transform your ideas into compelling articles in seconds. Professional content creation powered by advanced AI.",
    status: "In Progress",
    progress: 50,
    technologies: ["React.js", "OpenAI API", "TailwindCss","Shadcn UI","Accertinity UI"],
    startDate: "Dec 2025",
    link: "https://draft-iq.vercel.app/" // Add link when available
  },
  {
    id: 2,
    title: "Portfolio V2",
    description: "Redesigning my portfolio with improved animations and better UX.",
    status: "Almost Done",
    progress: 85,
    technologies: ["React", "Framer Motion", "Tailwind"],
    startDate: "Dec 2025",
    link: "https://aniketh.xyz"
  },
  {
    id: 3,
    title: "Route Mate",
    description: "Connect with verified travelers heading your way. Share rides, split costs, and make your solo journey safer and more memorable.",
    status: "In Progress",
    progress: 50,
    technologies: ["React", "Framer Motion", "Tailwind"],
    startDate: "Dec 2025",
    link: "https://route-mate-sage.vercel.app"
  }
  // Add more current projects here
]

// Things you're learning
const learningItems = [
  {
    id: 1,
    title: "System Design",
    description: "Deep diving into distributed systems, scalability patterns, and architecture decisions.",
    icon: "🏗️",
    resources: ["Designing Data-Intensive Applications", "System Design Interview"]
  },
 
  {
    id: 2,
    title: "DevOps & Infrastructure",
    description: "Learning Docker, Kubernetes, and cloud deployment strategies.",
    icon: "☁️",
    resources: ["AWS", "Docker", "CI/CD pipelines"]
  },
  {
    id: 3,
    title: "TypeScript Advanced Patterns",
    description: "Mastering type-level programming and advanced TypeScript patterns.",
    icon: "📘",
    resources: ["Total TypeScript", "Type Challenges"]
  },
]

// Current interests/experiments
const experiments = [
  "Learning Advanced development concepts ",
  "Deep diving into scalability from first principles",
  "Building something everyday!",
]

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const CardWrapper = project.link ? motion.a : motion.div
  const linkProps = project.link ? {
    href: project.link,
    target: "_blank",
    rel: "noopener noreferrer"
  } : {}

  return (
    <CardWrapper
      ref={ref}
      {...linkProps}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={`relative p-5 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-all group ${project.link ? 'cursor-pointer' : ''}`}
    >
      {/* Status Badge */}
      <div className="flex items-center justify-between mb-3">
        <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
          project.status === 'In Progress' 
            ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' 
            : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
        }`}>
          {project.status}
        </span>
        <span className="text-xs text-zinc-600">{project.startDate}</span>
      </div>

      {/* Title & Description */}
      <div className="flex items-start justify-between mb-2">
        <h3 className="font-semibold text-white group-hover:text-indigo-400 transition-colors">
          {project.title}
        </h3>
        {project.link && (
          <svg className="w-4 h-4 text-zinc-600 group-hover:text-indigo-400 transition-colors flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
          </svg>
        )}
      </div>
      <p className="text-sm text-zinc-500 leading-relaxed mb-4">
        {project.description}
      </p>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex justify-between text-xs mb-1.5">
          <span className="text-zinc-500">Progress</span>
          <span className="text-zinc-400">{project.progress}%</span>
        </div>
        <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={isInView ? { width: `${project.progress}%` } : { width: 0 }}
            transition={{ delay: 0.3 + index * 0.1, duration: 0.8, ease: "easeOut" }}
            className={`h-full rounded-full ${
              project.progress >= 80 ? 'bg-emerald-500' : 
              project.progress >= 50 ? 'bg-amber-500' : 'bg-indigo-500'
            }`}
          />
        </div>
      </div>

      {/* Technologies */}
      <div className="flex flex-wrap gap-1.5">
        {project.technologies.map((tech) => (
          <span 
            key={tech} 
            className="text-[10px] px-2 py-0.5 rounded bg-zinc-800 text-zinc-500"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Status indicator dot (static, no animation) */}
      <div className="absolute top-3 right-3 w-2 h-2">
        <span className="inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
      </div>
    </CardWrapper>
  )
}

const LearningCard = ({ item, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="p-4 rounded-xl bg-zinc-900/30 border border-zinc-800/50 hover:border-zinc-700 hover:bg-zinc-900/50 transition-all group"
    >
      <div className="flex items-start gap-3">
        <span className="text-2xl">{item.icon}</span>
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-white text-sm mb-1 group-hover:text-indigo-400 transition-colors">
            {item.title}
          </h3>
          <p className="text-xs text-zinc-500 leading-relaxed mb-2">
            {item.description}
          </p>
          <div className="flex flex-wrap gap-1">
            {item.resources.map((resource) => (
              <span 
                key={resource} 
                className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-800/50 text-zinc-600"
              >
                {resource}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const Garage = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-label mb-6">
            🔧 The Garage
          </div>
          <h2 className="heading-lg mb-4">
            What I'm <span className="gradient-text">Building</span>
          </h2>
          <p className="text-body max-w-xl mx-auto">
            A peek into my current projects, experiments, and learning journey. 
            Always tinkering, always shipping.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Current Projects - Takes 2 columns */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg">🚀</span>
                <h3 className="font-semibold text-white">Currently Building</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {currentProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </div>
            </motion.div>

            {/* Experiments */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="p-5 rounded-xl bg-gradient-to-br from-indigo-500/5 to-purple-500/5 border border-indigo-500/10"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg">⚡</span>
                <h3 className="font-semibold text-white">Quick Experiments</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {experiments.map((exp, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ delay: 0.5 + index * 0.05, duration: 0.3 }}
                    className="text-xs px-3 py-1.5 rounded-full bg-zinc-800/50 text-zinc-400 border border-zinc-700/50 hover:border-indigo-500/50 hover:text-indigo-400 transition-all cursor-default"
                  >
                    {exp}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Learning - Side column */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg">📚</span>
                <h3 className="font-semibold text-white">Currently Learning</h3>
              </div>
              <div className="space-y-3">
                {learningItems.map((item, index) => (
                  <LearningCard key={item.id} item={item} index={index} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Garage

