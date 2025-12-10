import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const highlights = [
  {
    text: "I'm not just a developer who writes code — I'm someone who genuinely cares about the problems I'm solving. Whether it's helping people discover hidden gems in their city with SneakOut or keeping hundreds informed with SangbadBangla news, I build with purpose."
  },
  {
    text: "At 21, I've already shipped production apps used by real users, worked with leading engineering teams. I've learned to move fast, ship quality, and iterate based on feedback."
  },
  {
    text: "I taught myself full-stack development while pursuing Electrical Engineering at NIT Durgapur. That same self-driven curiosity means I pick up new technologies quickly and never wait to be spoon-fed."
  }
]

const preferences = [
  {
    title: "Building products that matter.",
    description: "I'm most energized when working on products that solve real problems for real people. Give me a meaningful challenge over a cushy role any day."
  },
  {
    title: "Ownership & autonomy.",
    description: "I thrive when given ownership of features end-to-end. Trust me with a problem, and I'll figure out the solution — that's how I learn best."
  },
  {
    title: "Growth-focused environment.",
    description: "I want to be surrounded by people smarter than me. A team that pushes me to level up my craft is worth more than any perk."
  },
  {
    title: "Remote-friendly culture.",
    description: "I do my best work with flexibility. Whether it's 2 AM debugging sessions or early morning brainstorms, I optimize for output, not hours at a desk."
  }
]

const WhyHireMe = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <div className="h-full">
      {/* Why Hire Me */}
      <motion.div
        ref={sectionRef}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <div className="section-label mb-4">
          Why Me
        </div>
        <h2 className="heading-lg text-white mb-6">
          Why should you hire me?
        </h2>

        <div className="space-y-5">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex gap-3"
            >
              <span className="text-indigo-500 mt-0.5 flex-shrink-0">↳</span>
              <p className="text-zinc-400 leading-relaxed text-[15px]">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* My Preferences */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <div className="section-label mb-4">
          What I Look For
        </div>
        <h2 className="heading-lg text-white mb-6">
          My ideal opportunity
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {preferences.map((pref, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
              className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/50 hover:border-zinc-700 transition-colors"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-indigo-500">↳</span>
                <h3 className="font-medium text-white text-[15px]">{pref.title}</h3>
              </div>
              <p className="text-sm text-zinc-500 leading-relaxed pl-5">
                {pref.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default WhyHireMe
