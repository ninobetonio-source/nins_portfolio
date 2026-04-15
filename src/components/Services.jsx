import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaMobile, FaGlobe, FaCog, FaDatabase } from 'react-icons/fa'

const services = [
  {
    icon: FaMobile,
    title: 'Mobile Applications',
    description: 'Cross-platform mobile apps with Flutter & Dart, delivering beautiful and performant user experiences.',
    color: 'from-cyan-500 to-blue-500',
    accent: 'cyan',
  },
  {
    icon: FaGlobe,
    title: 'Web Applications',
    description: 'Modern, responsive web applications using React.js, Tailwind CSS, and latest web technologies.',
    color: 'from-purple-500 to-pink-500',
    accent: 'purple',
  },
  {
    icon: FaCog,
    title: 'System Design',
    description: 'Scalable backend systems and APIs, focusing on clean architecture and efficient problem-solving.',
    color: 'from-pink-500 to-red-500',
    accent: 'pink',
  },
  {
    icon: FaDatabase,
    title: 'Database & Optimization',
    description: 'Database design, optimization, and management for high-performance applications.',
    color: 'from-orange-500 to-yellow-500',
    accent: 'orange',
  },
]

const Services = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section className="relative py-32 lg:py-40" ref={ref}>
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-mono text-purple-400 bg-purple-500/10 border border-purple-500/20 rounded-full uppercase">
            Services
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            What I Can <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Build</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Comprehensive solutions for your business needs, leveraging modern technologies and best practices.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mt-6" />
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full glass-card rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 bg-gradient-to-br ${service.color} rounded-2xl`} />

                {/* Icon */}
                <motion.div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                >
                  <service.icon className="text-white text-xl" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 leading-relaxed mb-4">{service.description}</p>

                {/* Learn more link */}
                <motion.div
                  className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 group-hover:gap-3 transition-all"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                >
                  Learn more
                  <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                    →
                  </motion.span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
