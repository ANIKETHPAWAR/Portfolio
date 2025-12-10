import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { getCalApi } from "@calcom/embed-react"

const HomeCTA = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "secret" })
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" })
    })()
  }, [])

  return (
    <section className="py-32 px-6">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
        {/* Decorative Element */}
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-emerald-500 flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
            </svg>
          </div>
        </div>

        <h2 className="heading-lg mb-6">
          Let's Build Something <span className="gradient-text">Great Together</span>
        </h2>
        
        <p className="text-body text-lg mb-10 max-w-xl mx-auto">
          Whether you have a project in mind, want to discuss opportunities, 
          or just want to say hi — I'd love to hear from you.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            data-cal-namespace="secret"
            data-cal-link="anikethpawar/secret"
            data-cal-config='{"layout":"month_view"}'
            className="btn-primary text-base px-8 py-4"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>
            Schedule a Call
          </button>

          <Link 
            to="/contact" 
            className="btn-secondary text-base px-8 py-4"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            Send a Message
          </Link>
        </div>

        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-sm text-emerald-400 font-medium">
              Available for new opportunities
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HomeCTA

