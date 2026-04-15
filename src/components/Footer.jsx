import { motion } from 'framer-motion'
import { FaGithub, FaLinkedinIn, FaFacebookF, FaHeart } from 'react-icons/fa'
import { HiArrowUp } from 'react-icons/hi'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-white/5">
      {/* Gradient line */}
      <div className="h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="text-center md:text-left">
            <a href="#home" className="text-xl font-bold font-['Space_Grotesk'] tracking-tight">
              <span className="gradient-text">&lt;</span>
              <span className="text-white">Nins</span>
              <span className="gradient-text"> /&gt;</span>
            </a>
            <p className="text-xs text-slate-500 mt-2">
              Building the future, one line of code at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm text-slate-500 hover:text-white transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex gap-3">
            {[
              { icon: FaGithub, href: 'https://github.com/yourusername' },
              { icon: FaLinkedinIn, href: 'https://linkedin.com/in/yourprofile' },
              { icon: FaFacebookF, href: 'https://www.facebook.com/ninopiodos.betonio' },
            ].map(({ icon: Icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5 text-slate-500 hover:text-white hover:border-white/15 transition-all"
                whileHover={{ y: -2 }}
              >
                <Icon size={14} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-600 flex items-center gap-1">
            © {new Date().getFullYear()} Nins. Made with
            <FaHeart className="text-pink-500 text-[10px]" />
            and lots of ☕
          </p>

          <motion.button
            onClick={scrollToTop}
            className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5 text-slate-500 hover:text-white hover:border-indigo-500/30 transition-all"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            <HiArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
