import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-6 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-white flex items-center justify-center">
              <span className="text-black font-bold text-[10px]">AP</span>
            </div>
            <span className="text-sm text-zinc-500">
              © {currentYear} Aniketh Pawar
            </span>
          </div>

          {/* Right */}
          <div className="flex items-center gap-6">
            <Link to="/" className="text-xs text-zinc-500 hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/projects" className="text-xs text-zinc-500 hover:text-white transition-colors">
              Projects
            </Link>
            <Link to="/blog" className="text-xs text-zinc-500 hover:text-white transition-colors">
              Blog
            </Link>
            <Link to="/contact" className="text-xs text-zinc-500 hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
