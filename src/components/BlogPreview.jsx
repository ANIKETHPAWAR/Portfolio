import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { getFeaturedPosts, hasPosts } from '../data/blogPosts'

const BlogPreview = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const posts = getFeaturedPosts(3)
  const showPosts = hasPosts()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 h-fit"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center">
            <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/>
            </svg>
          </div>
          <h3 className="font-semibold text-white">Blog</h3>
        </div>
        {showPosts && (
          <Link 
            to="/blog" 
            className="text-xs text-zinc-500 hover:text-indigo-400 transition-colors"
          >
            View all →
          </Link>
        )}
      </div>

      {/* Coming Soon State */}
      {!showPosts && (
        <div className="text-center py-6">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-4"
          >
            <div className="w-16 h-16 mx-auto rounded-full bg-zinc-800 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
              </svg>
            </div>
            <p className="text-zinc-400 font-medium mb-1">Posting Soon</p>
            <p className="text-xs text-zinc-600">
              First article coming shortly...
            </p>
          </motion.div>
          
          <div className="pt-4 border-t border-zinc-800">
            <p className="text-xs text-zinc-500">
              I'll be writing about web development, tech insights, and my learning journey.
            </p>
          </div>
        </div>
      )}

      {/* Posts List - Shows when posts are available */}
      {showPosts && (
        <>
          <div className="space-y-4">
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ delay: 0.1 + index * 0.1, duration: 0.4 }}
              >
                <Link 
                  to={post.slug}
                  className="block group"
                >
                  <h4 className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors line-clamp-2 mb-1">
                    {post.title}
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-zinc-600">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </Link>
                {index < posts.length - 1 && (
                  <div className="mt-4 border-b border-zinc-800" />
                )}
              </motion.div>
            ))}
          </div>

          {/* Read More CTA */}
          <div className="mt-6 pt-4 border-t border-zinc-800">
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors group"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/>
              </svg>
              Read my blog
              <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </>
      )}
    </motion.div>
  )
}

export default BlogPreview
