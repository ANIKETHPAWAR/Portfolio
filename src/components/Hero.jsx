import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getCalApi } from "@calcom/embed-react"
import ProfileImage from '../assets/image.png'

const Hero = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "secret" })
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" })
    })()
  }, [])

  return (
    <section className="relative min-h-screen flex items-center px-6 pt-24">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Section Label */}
            <div className="section-label mb-6">
              Welcome to my portfolio
            </div>

            {/* Main Heading */}
            <h1 className="heading-xl mb-6">
              <span className="text-zinc-400">I'm </span>
              <span className="text-white">Aniketh,</span>
              <br />
              <span className="gradient-text">building digital</span>
              <br />
              <span className="gradient-text">experiences.</span>
            </h1>

            {/* Description - Storytelling */}
            <p className="text-body max-w-lg mb-8">
              A final-year engineering student at NIT Durgapur who fell in love with 
              turning ideas into reality through code. From building election systems to 
              news platforms, I craft solutions that matter.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <button 
                data-cal-namespace="secret"
                data-cal-link="anikethpawar/secret"
                data-cal-config='{"layout":"month_view"}'
                className="btn-primary"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                Book a call
              </button>
              
              <Link to="/projects" className="btn-secondary">
                View my work
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </Link>

              {/* Divider */}
              <div className="hidden sm:block w-px h-8 bg-zinc-800 mx-1" />

              {/* Social Icons */}
              <div className="flex items-center gap-1">
                <a 
                  href="https://github.com/ANIKETHPAWAR" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg text-zinc-500 hover:text-white hover:bg-zinc-800 transition-all"
                  title="GitHub"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/in/aniketh-pawar-070162210" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg text-zinc-500 hover:text-white hover:bg-zinc-800 transition-all"
                  title="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a 
                  href="https://x.com/aniketh_pawar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg text-zinc-500 hover:text-white hover:bg-zinc-800 transition-all"
                  title="Twitter"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a 
                  href="mailto:anikethpawar.dev@gmail.com"
                  className="p-2.5 rounded-lg text-zinc-500 hover:text-white hover:bg-zinc-800 transition-all"
                  title="Email"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </a>
                <a 
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg text-zinc-500 hover:text-white hover:bg-zinc-800 transition-all"
                  title="Resume"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="flex gap-8 mt-12 pt-8 border-t border-zinc-800">
              <div>
                <p className="text-2xl font-semibold text-white">8+</p>
                <p className="text-sm text-zinc-500">Months Experience</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-white">4+</p>
                <p className="text-sm text-zinc-500">Projects Shipped</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-white">500+</p>
                <p className="text-sm text-zinc-500">GitHub Contributions</p>
              </div>
            </div>
          </motion.div>

          {/* Right - Profile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Profile Image */}
              <div className="relative">
                <div 
                  className="w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden"
                  style={{ border: '1px solid rgba(255,255,255,0.1)' }}
                >
                  <img 
                    src={ProfileImage} 
                    alt="Aniketh Pawar"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating Card - Currently */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -right-12 -top-12 px-4 py-3 rounded-lg"
                  style={{
                    background: 'rgba(9, 9, 11, 0.9)',
                    backdropFilter: 'blur(8px)',
                    border: '3px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <p className="text-[10px] text-zinc-500 uppercase tracking-wider mb-1">Currently</p>
                  <p className="text-sm text-white font-medium">Learning & Building 🌍</p>
                </motion.div>

                {/* Floating Card - Location */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="absolute -left-4 bottom-12 px-4 py-3 rounded-lg"
                  style={{
                    background: 'rgba(9, 9, 11, 0.9)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <p className="text-[10px] text-zinc-500 uppercase tracking-wider mb-1">Based in</p>
                  <p className="text-sm text-white font-medium">HYD,India 🇮🇳</p>
                </motion.div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -z-10 top-4 left-4 w-full h-full rounded-2xl border border-zinc-800" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
