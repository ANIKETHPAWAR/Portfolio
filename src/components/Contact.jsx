import { useState, useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { getCalApi } from "@calcom/embed-react"

const socials = [
  { 
    name: 'GitHub', 
    href: 'https://github.com/ANIKETHPAWAR',
    icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'
  },
  { 
    name: 'LinkedIn', 
    href: 'https://www.linkedin.com/in/aniketh-pawar-070162210',
    icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
  },
  { 
    name: 'Twitter', 
    href: 'https://x.com/aniketh_pawar',
    icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z'
  },
  { 
    name: 'Email', 
    href: 'mailto:anikethpawar.dev@gmail.com',
    icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    stroke: true
  },
]

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "secret" })
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" })
    })()
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const mailtoLink = `mailto:anikethpawar.dev@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.email}`
    window.location.href = mailtoLink
  }

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="section-label justify-center">Contact</div>
          <h2 className="heading-lg text-white mb-4">
            Let's work together
          </h2>
          <p className="text-body max-w-lg mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-zinc-400 mb-1.5">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-sm text-zinc-400 mb-1.5">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input"
                  placeholder="you@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm text-zinc-400 mb-1.5">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="input resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button type="submit" className="btn-primary w-full justify-center">
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="space-y-6"
          >
            {/* Book a Call */}
            <div className="card p-6">
              <h3 className="font-medium text-white mb-2">Prefer a call?</h3>
              <p className="text-sm text-zinc-500 mb-4">
                Schedule a 15-minute intro call to discuss your project.
              </p>
              <button
                data-cal-namespace="secret"
                data-cal-link="anikethpawar/secret"
                data-cal-config='{"layout":"month_view"}'
                className="btn-secondary w-full justify-center"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                Schedule a call
              </button>
            </div>

            {/* Socials */}
            <div className="card p-6">
              <h3 className="font-medium text-white mb-4">Connect with me</h3>
              <div className="grid grid-cols-2 gap-3">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg bg-zinc-800/50 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all"
                  >
                    <svg 
                      className="w-4 h-4" 
                      fill={social.stroke ? 'none' : 'currentColor'}
                      stroke={social.stroke ? 'currentColor' : 'none'}
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={social.stroke ? 1.5 : 0}
                        d={social.icon}
                      />
                    </svg>
                    <span className="text-sm">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Response */}
            <p className="text-xs text-zinc-500 text-center">
              I typically respond within 24 hours
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
