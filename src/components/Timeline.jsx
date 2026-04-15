import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const timelineEvents = [
  {
    year: '2023',
    title: 'Started CS Journey',
    description: 'Began pursuing a degree in Computer Science with a passion for building systems.',
    icon: '🎓',
  },
  {
    year: '2024',
    title: 'Built BaligyaScan',
    description: 'Created a comprehensive POS & Inventory system for small retailers using Flutter.',
    icon: '📱',
  },
  {
    year: '2024-2025',
    title: 'Multiple Projects',
    description: 'Developed Cafe Management System and Smart Electricity Predictor applications.',
    icon: '🚀',
  },
  {
    year: '2026',
    title: 'Continuing Growth',
    description: 'Seeking opportunities to build innovative solutions and contribute to real-world projects.',
    icon: '⭐',
  },
]

const Timeline = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section className="relative py-32 lg:py-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 rounded-full uppercase">
            My Journey
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Education & <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 lg:-translate-x-1/2" />

          {/* Events */}
          <div className="space-y-12 pl-12 lg:pl-0">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className={`relative lg:grid lg:grid-cols-2 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Left content */}
                <div className={`${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <motion.div
                    className="glass-card rounded-xl p-6 backdrop-blur-sm"
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-3xl">{event.icon}</span>
                      <div className="lg:hidden">
                        <p className="text-xl font-bold text-cyan-400">{event.year}</p>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{event.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{event.description}</p>
                  </motion.div>
                </div>

                {/* Center dot */}
                <div className="hidden lg:flex justify-center">
                  <motion.div
                    className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 border-4 border-slate-900 relative"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  />
                </div>

                {/* Right content */}
                {index !== 0 && (
                  <div className={`hidden lg:block ${index % 2 !== 0 ? 'lg:col-start-1' : ''}`}>
                    <p className="text-xl font-bold text-cyan-400 text-center py-2">{event.year}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline
