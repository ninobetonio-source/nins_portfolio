import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaCode, FaRocket, FaLightbulb, FaGraduationCap } from 'react-icons/fa'

const highlights = [
  {
    icon: FaGraduationCap,
    title: 'CS Student',
    desc: 'Currently pursuing a degree in Computer Science',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: FaCode,
    title: 'Developer',
    desc: 'Passionate about building systems & applications',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    icon: FaLightbulb,
    title: 'Problem Solver',
    desc: 'Enjoy tackling complex challenges with code',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: FaRocket,
    title: 'Innovator',
    desc: 'Building innovative solutions for real-world impact',
    color: 'from-pink-500 to-rose-500',
  },
]

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="about" className="relative py-32 lg:py-40">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-mono font-medium tracking-[0.2em] text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 rounded-full uppercase">
            About Me
          </span>
          <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Get To Know <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - About Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed">
                Hello! I'm a dedicated <span className="text-white font-medium">Computer Science student</span> with a deep passion for 
                software development, system building, and problem-solving. I thrive on turning 
                ideas into functional, elegant solutions.
              </p>
              <p className="text-lg text-slate-400 leading-relaxed">
                My goal is to build <span className="text-indigo-400 font-medium">useful and innovative systems</span> that address 
                real-world problems. From mobile applications to web-based platforms, I'm always 
                eager to explore new technologies and push the boundaries of what's possible.
              </p>
              <p className="text-lg text-slate-400 leading-relaxed">
                When I'm not coding, you'll find me learning new frameworks, contributing to 
                projects, and exploring the latest in tech. I believe in continuous growth and 
                creating software that makes a difference.
              </p>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              {[
                { num: '3+', label: 'Projects' },
                { num: '8+', label: 'Languages' },
                { num: '3+', label: 'Frameworks' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="text-center p-4 rounded-xl bg-white/[0.03] border border-white/5"
                >
                  <div className="text-2xl lg:text-3xl font-bold gradient-text">{stat.num}</div>
                  <div className="text-xs text-slate-500 mt-1 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.15 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass-card rounded-2xl p-6 group cursor-pointer transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="text-white text-lg" />
                </div>
                <h3 className="text-base font-semibold text-white mb-1">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
