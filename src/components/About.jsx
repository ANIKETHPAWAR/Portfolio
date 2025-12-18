import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Label */}
          <div className="section-label">My Story</div>

          {/* Heading */}
          <h2 className="heading-lg text-white mb-8">
            A developer driven by curiosity and 
            <span className="text-zinc-500"> the desire to build things that matter.</span>
          </h2>

          {/* Story Content */}
          <div className="space-y-6 text-body">
            <p>
              My journey into tech started not in a classroom, but with a simple question: 
              <span className="text-white"> "How do websites actually work?"</span> That curiosity 
              led me down a rabbit hole of HTML, CSS, JavaScript, and eventually to building 
              full-stack applications.
            </p>
            
            <p>
              At <span className="text-white">NIT Durgapur</span>, while pursuing Electrical 
              Engineering, I found myself spending more time debugging code than solving 
              circuit problems. I realized that my true passion lay in creating digital 
              experiences that solve real problems.
            </p>

            <p>
              Today, I've shipped products used by real users — from a 
              <span className="text-white"> regional news platform</span> serving thousands of 
              readers to a <span className="text-white">location discovery app</span> helping 
              people find hidden gems in their city. Each project taught me that great software 
              isn't just about clean code — it's about understanding people.
            </p>

            <p>
              When I'm not coding, you'll find me exploring new frameworks, writing about 
              my learnings, or brainstorming the next problem to solve.
            </p>
          </div>

          {/* Resume Link */}
          <div className="mt-10 pt-8 border-t border-zinc-800">
            <a 
              href="https://drive.google.com/file/d/1Ra2nKCzuggAC7HkwFXEGR3mGAyJTvasR/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
              Download Resume
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

