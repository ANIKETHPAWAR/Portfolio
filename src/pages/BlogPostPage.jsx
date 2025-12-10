import { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { getPostBySlug, getAllPosts } from '../data/blogPosts'

const BlogPostPage = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [copied, setCopied] = useState(false)
  const post = getPostBySlug(`/blog/${slug}`)

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  // If post not found, show error
  if (!post) {
    return (
      <div className="min-h-screen pt-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Post Not Found</h1>
          <p className="text-zinc-500 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog" className="btn-primary">
            ← Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  // Get other posts for "More posts" section
  const otherPosts = getAllPosts().filter(p => p.id !== post.id).slice(0, 2)

  return (
    <div className="min-h-screen pt-28 pb-20 px-6">
      <article className="max-w-3xl mx-auto">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/blog')}
          className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-8 group"
        >
          <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
          </svg>
          Back to Blog
        </motion.button>

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="px-3 py-1 text-xs font-medium text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex items-center gap-4 text-zinc-500">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-emerald-500 flex items-center justify-center text-white font-semibold text-sm">
                AP
              </div>
              <div>
                <p className="text-white font-medium text-sm">Aniketh Pawar</p>
                <p className="text-xs">{post.date} · {post.readTime}</p>
              </div>
            </div>
          </div>
        </motion.header>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="prose prose-invert prose-zinc max-w-none"
        >
          {/* Render content with proper formatting */}
          <div className="text-zinc-300 leading-relaxed space-y-6">
            {post.content.split('\n\n').map((paragraph, index) => {
              // Check if it's a heading (starts with emoji or specific patterns)
              if (paragraph.match(/^[🔍🧠🎯📈🧭🚀⭐]/)) {
                return (
                  <h2 key={index} className="text-xl md:text-2xl font-semibold text-white mt-10 mb-4">
                    {paragraph}
                  </h2>
                )
              }
              
              // Check if it's a list (contains bullet points)
              if (paragraph.includes('•')) {
                const items = paragraph.split('\n').filter(line => line.trim())
                return (
                  <ul key={index} className="space-y-2 my-4">
                    {items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-zinc-400">
                        {item.startsWith('•') ? (
                          <>
                            <span className="text-indigo-400 mt-1">•</span>
                            <span>{item.replace('•', '').trim()}</span>
                          </>
                        ) : (
                          <span>{item}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                )
              }

              // Check if it's a quote or important text
              if (paragraph.includes('If you stop now') || paragraph.includes('Consistency beats')) {
                return (
                  <blockquote key={index} className="border-l-4 border-indigo-500 pl-4 py-2 my-6 bg-zinc-900/50 rounded-r-lg">
                    <p className="text-zinc-300 italic">{paragraph}</p>
                  </blockquote>
                )
              }

              // Regular paragraph
              return (
                <p key={index} className="text-zinc-400">
                  {paragraph.split('\n').map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < paragraph.split('\n').length - 1 && <br />}
                    </span>
                  ))}
                </p>
              )
            })}
          </div>
        </motion.div>

        {/* Share & Actions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-16 pt-8 border-t border-zinc-800"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-zinc-500 text-sm">Thanks for reading! Share this post:</p>
            <div className="flex gap-3">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <button
                onClick={handleCopyLink}
                className={`relative p-2.5 rounded-lg transition-all duration-300 ${
                  copied 
                    ? 'bg-emerald-500/20 text-emerald-400' 
                    : 'bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700'
                }`}
                title={copied ? "Copied!" : "Copy link"}
              >
                <AnimatePresence mode="wait">
                  {copied ? (
                    <motion.svg
                      key="check"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                    </motion.svg>
                  ) : (
                    <motion.svg
                      key="copy"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                    </motion.svg>
                  )}
                </AnimatePresence>
                
                {/* Copied tooltip */}
                <AnimatePresence>
                  {copied && (
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs font-medium text-emerald-400 bg-zinc-900 border border-emerald-500/20 rounded whitespace-nowrap"
                    >
                      Copied!
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </motion.div>

        {/* More Posts */}
        {otherPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-16"
          >
            <h3 className="text-xl font-semibold text-white mb-6">More Posts</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {otherPosts.map((p) => (
                <Link
                  key={p.id}
                  to={p.slug}
                  className="p-4 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-zinc-700 transition-colors group"
                >
                  <h4 className="font-medium text-white group-hover:text-indigo-400 transition-colors mb-2">
                    {p.title}
                  </h4>
                  <p className="text-xs text-zinc-500">{p.date} · {p.readTime}</p>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </article>
    </div>
  )
}

export default BlogPostPage

