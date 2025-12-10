import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

const AboutPreview = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="section-label mb-6">
            A Little About Me
          </div>
          
          <h2 className="heading-lg mb-8">
            From <span className="gradient-text">Curiosity</span> to Code
          </h2>
          
          <p className="text-body text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
            I'm a final-year Electrical Engineering student at NIT Durgapur who discovered 
            the magic of building things with code. What started as tinkering with websites 
            turned into a full-blown passion for creating digital experiences that solve real problems.
          </p>
          
          <p className="text-body leading-relaxed mb-10 max-w-2xl mx-auto">
            Today, I specialize in building full-stack applications with React, Node.js, and 
            modern cloud technologies. I believe great software is a blend of clean code, 
            thoughtful design, and genuine empathy for users.
          </p>
          
          <Link 
            to="/about" 
            className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium transition-colors group"
          >
            Read my full story
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

export default AboutPreview

