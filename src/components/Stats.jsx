import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'

const stats = [
  { label: 'Projects Built', value: 3, icon: '🚀' },
  { label: 'Languages', value: 8, icon: '💻' },
  { label: 'Frameworks', value: 3, icon: '⚡' },
  { label: 'Years Experience', value: 2, icon: '🎓' },
]

const Counter = ({ value, inView }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return

    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps
    const increment = value / steps

    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [inView, value])

  return <span>{count}+</span>
}

const Stats = () => {
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true })

  return (
    <section className="relative py-20 lg:py-28" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="text-center"
            >
              {/* Icon */}
              <motion.div
                className="text-4xl mb-4"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.15 }}
              >
                {stat.icon}
              </motion.div>

              {/* Counter */}
              <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                <Counter value={stat.value} inView={inView} />
              </div>

              {/* Label */}
              <p className="text-sm lg:text-base text-slate-400 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
