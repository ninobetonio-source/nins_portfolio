import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  HiOutlineQrcode, HiOutlineShoppingCart, HiOutlineChartBar,
  HiOutlineCog, HiOutlineBell, HiOutlineDocumentText,
  HiOutlineDatabase, HiOutlineUsers, HiOutlineRefresh,
  HiOutlineShieldCheck, HiOutlineLightningBolt, HiOutlineGlobe,
  HiOutlineChartPie, HiOutlineDesktopComputer
} from 'react-icons/hi'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const projects = [
  {
    id: 1,
    title: 'BaligyaScan',
    subtitle: 'Barcode-Based POS & Inventory System',
    description: 'A comprehensive Flutter-based Point of Sale system designed for small retailers to streamline their business operations with modern barcode technology.',
    tech: ['Flutter', 'Dart', 'Firebase', 'SQLite'],
    color: 'from-indigo-500 to-blue-600',
    accentColor: '#6366f1',
    features: [
      { icon: HiOutlineQrcode, text: 'Barcode Scanning' },
      { icon: HiOutlineShoppingCart, text: 'Manual Product Selection' },
      { icon: HiOutlineLightningBolt, text: 'Automated Billing' },
      { icon: HiOutlineChartBar, text: 'Real-time Inventory Tracking' },
      { icon: HiOutlineBell, text: 'Low Stock Notifications' },
      { icon: HiOutlineChartPie, text: 'Sales Reports (Daily/Weekly/Monthly/Annual)' },
      { icon: HiOutlineCog, text: 'Store Management Settings' },
      { icon: HiOutlineDocumentText, text: 'Digital Receipt Generation' },
    ],
  },
  {
    id: 2,
    title: 'Cafe Shop Management',
    subtitle: 'Admin & Staff Management System',
    description: 'A database-driven management system for cafe operations with role-based access control for administrators and staff members.',
    tech: ['PHP', 'MySQL', 'JavaScript', 'CSS'],
    color: 'from-purple-500 to-pink-600',
    accentColor: '#a855f7',
    features: [
      { icon: HiOutlineShoppingCart, text: 'Order Management' },
      { icon: HiOutlineDatabase, text: 'Inventory Tracking' },
      { icon: HiOutlineChartBar, text: 'Sales Monitoring' },
      { icon: HiOutlineUsers, text: 'Role-based Access (Admin & Staff)' },
      { icon: HiOutlineRefresh, text: 'Real-time Updates' },
    ],
  },
  {
    id: 3,
    title: 'Smart Electricity Predictor',
    subtitle: 'Web-Based Usage Risk Predictor',
    description: 'An intelligent web-based system for predicting electricity consumption risk with interactive dashboards and personalized recommendations.',
    tech: ['PHP', 'Python', 'JavaScript', 'MySQL'],
    color: 'from-cyan-500 to-emerald-600',
    accentColor: '#06b6d4',
    features: [
      { icon: HiOutlineShieldCheck, text: 'User Authentication' },
      { icon: HiOutlineDesktopComputer, text: 'Usage Tracking' },
      { icon: HiOutlineChartPie, text: 'Interactive Dashboards' },
      { icon: HiOutlineGlobe, text: 'Real-time Analytics' },
      { icon: HiOutlineLightningBolt, text: 'Energy-Saving Recommendations' },
    ],
  },
]

const ProjectCard = ({ project, index, inView }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
      className="group relative"
    >
      <div className="glass-card rounded-2xl overflow-hidden transition-all duration-500 hover:border-white/15">
        {/* Top gradient accent */}
        <div className={`h-1.5 bg-gradient-to-r ${project.color}`} />

        <div className="p-6 lg:p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg font-bold text-white"
                  style={{ background: `linear-gradient(135deg, ${project.accentColor}40, ${project.accentColor}15)`, border: `1px solid ${project.accentColor}30` }}
                >
                  {project.id}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-['Space_Grotesk'] group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-mono">{project.subtitle}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-white/20 transition-all"
                aria-label="View on GitHub"
              >
                <FaGithub size={14} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-white/20 transition-all"
                aria-label="View live demo"
              >
                <FaExternalLinkAlt size={12} />
              </motion.button>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-slate-400 mb-5 leading-relaxed">{project.description}</p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 text-xs font-mono font-medium rounded-full border"
                style={{
                  color: project.accentColor,
                  borderColor: `${project.accentColor}30`,
                  backgroundColor: `${project.accentColor}08`,
                }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Features */}
          <div>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors mb-3 cursor-hover"
            >
              <span className="font-medium">Key Features</span>
              <motion.span
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-lg"
              >
                ↓
              </motion.span>
            </button>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                    {project.features.map((feature, i) => (
                      <motion.div
                        key={feature.text}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04]"
                      >
                        <feature.icon
                          className="flex-shrink-0"
                          style={{ color: project.accentColor }}
                          size={16}
                        />
                        <span className="text-xs text-slate-300">{feature.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom decorative gradient line on hover */}
        <motion.div
          className={`h-px bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        />
      </div>
    </motion.div>
  )
}

const Projects = () => {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true })

  return (
    <section id="projects" className="relative py-32 lg:py-40">
      {/* Background accents */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-mono font-medium tracking-[0.2em] text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 rounded-full uppercase">
            My Projects
          </span>
          <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">
            Real-world applications I've built to solve problems and showcase my skills
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
