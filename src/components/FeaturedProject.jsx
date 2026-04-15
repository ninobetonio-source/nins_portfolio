import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { HiOutlineQrcode, HiOutlineChartBar, HiOutlineBell, HiOutlineDocumentText } from 'react-icons/hi'

const FeaturedProject = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  const features = [
    { icon: HiOutlineQrcode, text: 'Barcode Scanning' },
    { icon: HiOutlineChartBar, text: 'Real-time Analytics' },
    { icon: HiOutlineBell, text: 'Smart Alerts' },
    { icon: HiOutlineDocumentText, text: 'Digital Receipts' },
  ]

  return (
    <section className="relative py-32 lg:py-40" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] -translate-y-1/2" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 rounded-full uppercase">
            Featured Project
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              BaligyaScan
            </span>
            <br />
            <span className="text-white text-2xl lg:text-3xl font-normal">
              Barcode-Based POS & Inventory System
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto" />
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="relative group"
        >
          <div className="glass-card rounded-3xl overflow-hidden border border-white/10 hover:border-cyan-500/30 transition-all duration-500">
            {/* Top gradient accent */}
            <div className="h-2 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500" />

            <div className="p-8 lg:p-12">
              {/* Main content */}
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
                {/* Left - Description */}
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 }}
                >
                  <p className="text-slate-300 text-lg leading-relaxed mb-8">
                    A comprehensive Flutter-based Point of Sale system designed for small retailers to streamline their operations with modern barcode technology. Includes real-time inventory management, automated billing, and comprehensive sales analytics.
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-8">
                    <p className="text-sm text-slate-500 mb-4 font-mono">TECH STACK</p>
                    <div className="flex flex-wrap gap-3">
                      {['Flutter', 'Dart', 'Firebase', 'SQLite'].map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-medium text-cyan-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <motion.a
                      href="#"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub /> View Code
                    </motion.a>
                    <motion.a
                      href="#"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-cyan-500/50 text-cyan-300 font-semibold hover:bg-cyan-500/10 transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </motion.a>
                  </div>
                </motion.div>

                {/* Right - Key Features */}
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 }}
                >
                  <div className="grid grid-cols-2 gap-4">
                    {features.map((feature, i) => (
                      <motion.div
                        key={feature.text}
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className="p-4 rounded-xl bg-white/[0.03] border border-white/10 group/item hover:border-cyan-500/50 transition-all"
                      >
                        <feature.icon
                          className="text-cyan-400 text-xl mb-2 group-hover/item:scale-110 transition-transform"
                        />
                        <p className="text-sm text-slate-300 font-medium">{feature.text}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Key Benefits */}
              <div className="border-t border-white/10 pt-8">
                <p className="text-sm text-slate-500 mb-4 font-mono">KEY BENEFITS</p>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      title: 'User-Friendly',
                      desc: 'Intuitive interface designed for quick learning and efficient operation by retail staff',
                    },
                    {
                      title: 'Real-Time Data',
                      desc: 'Instant inventory updates and sales tracking for informed business decisions',
                    },
                    {
                      title: 'Scalable',
                      desc: 'Built to handle growing business needs with comprehensive analytics and reporting',
                    },
                  ].map((benefit, i) => (
                    <motion.div
                      key={benefit.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.6 + i * 0.1 }}
                    >
                      <h4 className="font-semibold text-white mb-2">{benefit.title}</h4>
                      <p className="text-sm text-slate-400">{benefit.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom gradient line */}
            <motion.div className="h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedProject
