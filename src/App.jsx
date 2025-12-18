import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import './App.css'
import { Navbar, Footer } from './components'
import {
  HomePage,
  AboutPage,
  ExperiencePage,
  ProjectsPage,
  GaragePage,
  BlogPage,
  BlogPostPage,
  ContactPage
} from './pages'

// Page transition wrapper
const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  )
}

function App() {
  const location = useLocation()

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-[#09090b] text-white">
      {/* Subtle Grid Background */}
      <div className="fixed inset-0 grid-bg pointer-events-none" />

      {/* Navigation */}
      <Navbar />

      {/* Main Content with Page Transitions */}
      <main className="relative">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={
              <PageWrapper>
                <HomePage />
              </PageWrapper>
            } />
            <Route path="/about" element={
              <PageWrapper>
                <AboutPage />
              </PageWrapper>
            } />
            <Route path="/experience" element={
              <PageWrapper>
                <ExperiencePage />
              </PageWrapper>
            } />
            <Route path="/projects" element={
              <PageWrapper>
                <ProjectsPage />
              </PageWrapper>
            } />
            <Route path="/garage" element={
              <PageWrapper>
                <GaragePage />
              </PageWrapper>
            } />
            <Route path="/blog" element={
              <PageWrapper>
                <BlogPage />
              </PageWrapper>
            } />
            <Route path="/blog/:slug" element={
              <PageWrapper>
                <BlogPostPage />
              </PageWrapper>
            } />
            <Route path="/contact" element={
              <PageWrapper>
                <ContactPage />
              </PageWrapper>
            } />
          </Routes>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
