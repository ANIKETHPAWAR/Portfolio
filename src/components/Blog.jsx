import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { getAllPosts, hasPosts } from '../data/blogPosts'

const BlogCard = ({ post, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Link 
        to={post.slug}
        className="block bg-zinc-900 border border-zinc-800 rounded-xl group cursor-pointer hover:border-zinc-700 transition-colors"
      >
        <div className="p-6">
          {/* Meta */}
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs text-zinc-500">{post.date}</span>
            <span className="w-1 h-1 rounded-full bg-zinc-700" />
            <span className="text-xs text-zinc-500">{post.readTime}</span>
          </div>

          {/* Title */}
          <h3 className="font-medium text-white mb-2 group-hover:text-indigo-400 transition-colors">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-sm text-zinc-500 mb-4 line-clamp-2">
            {post.excerpt}
          </p>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="text-[10px] px-2 py-0.5 rounded bg-zinc-800 text-zinc-500">
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Read More */}
          <div className="mt-4 pt-4 border-t border-zinc-800">
            <span className="text-xs text-zinc-500 group-hover:text-indigo-400 transition-colors inline-flex items-center gap-1">
              Read article
              <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}

const Blog = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const posts = getAllPosts()
  const showPosts = hasPosts()

  return (
    <section id="blog" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="section-label mb-4">Blog</div>
          <h2 className="heading-lg text-white mb-2">
            Thoughts & Writings
          </h2>
          <p className="text-body max-w-lg">
            I write about development, career growth, and things I learn along the way.
          </p>
        </motion.div>

        {/* Coming Soon State */}
        {!showPosts && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center py-20"
          >
            <div className="max-w-md mx-auto">
              {/* Icon */}
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
                className="w-24 h-24 mx-auto rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6"
              >
                <svg className="w-12 h-12 text-zinc-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
                </svg>
              </motion.div>

              {/* Text */}
              <h3 className="text-xl font-semibold text-white mb-3">
                Posting Soon
              </h3>
              <p className="text-zinc-500 mb-8">
                I'm working on my first blog post. It'll be about web development, 
                my learning journey, and insights from building real-world projects.
              </p>

              {/* Topics Preview */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {["React", "Node.js", "Career", "Projects", "Learnings"].map((topic) => (
                  <span 
                    key={topic}
                    className="px-3 py-1 text-xs font-medium text-zinc-500 bg-zinc-900 border border-zinc-800 rounded-full"
                  >
                    {topic}
                  </span>
                ))}
              </div>

              {/* Status */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20">
                <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />
                <span className="text-sm text-indigo-400 font-medium">
                  First article in progress
                </span>
              </div>
            </div>
          </motion.div>
        )}

        {/* Blog Grid - Shows when posts are available */}
        {showPosts && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>
        )}

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-16 p-8 bg-zinc-900 border border-zinc-800 rounded-xl text-center"
        >
          <h3 className="font-medium text-white mb-2">Get Notified</h3>
          <p className="text-sm text-zinc-500 mb-6 max-w-md mx-auto">
            Be the first to know when I publish new articles. No spam, unsubscribe anytime.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="your@email.com" 
              className="flex-1 px-4 py-3 rounded-lg bg-zinc-950 border border-zinc-700 text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Notify Me
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Blog
