import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  SiC, SiDart, SiJavascript, SiPython, SiPhp,
  SiFlutter, SiReact, SiTailwindcss
} from 'react-icons/si'
import { FaJava, FaHtml5, FaCss3Alt } from 'react-icons/fa'

const languages = [
  { name: 'C', icon: SiC, level: 70, color: '#A8B9CC' },
  { name: 'Dart', icon: SiDart, level: 85, color: '#0175C2' },
  { name: 'Java', icon: FaJava, level: 75, color: '#ED8B00' },
  { name: 'Python', icon: SiPython, level: 70, color: '#3776AB' },
  { name: 'HTML', icon: FaHtml5, level: 90, color: '#E34F26' },
  { name: 'CSS', icon: FaCss3Alt, level: 85, color: '#1572B6' },
  { name: 'JavaScript', icon: SiJavascript, level: 80, color: '#F7DF1E' },
  { name: 'PHP', icon: SiPhp, level: 75, color: '#777BB4' },
]

const frameworks = [
  { name: 'Flutter', icon: SiFlutter, level: 85, color: '#02569B' },
  { name: 'React.js', icon: SiReact, level: 75, color: '#61DAFB' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, level: 85, color: '#06B6D4' },
]

const SkillCard = ({ skill, index, inView }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ delay: 0.1 * index, duration: 0.5 }}
    whileHover={{ y: -5, scale: 1.03 }}
    className="glass-card rounded-2xl p-5 group cursor-pointer transition-all duration-300"
  >
    <div className="flex items-center gap-3 mb-4">
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
        style={{ backgroundColor: `${skill.color}15`, border: `1px solid ${skill.color}30` }}
      >
        <skill.icon style={{ color: skill.color }} className="text-lg" />
      </div>
      <div>
        <h4 className="text-sm font-semibold text-white">{skill.name}</h4>
        <span className="text-xs text-slate-500">{skill.level}%</span>
      </div>
    </div>

    {/* Progress bar */}
    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
      <motion.div
        className="h-full rounded-full"
        style={{
          background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)`,
          boxShadow: `0 0 10px ${skill.color}40`,
        }}
        initial={{ width: 0 }}
        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
        transition={{ duration: 1.2, delay: 0.2 + index * 0.1, ease: 'easeOut' }}
      />
    </div>
  </motion.div>
)

const Skills = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="skills" className="relative py-32 lg:py-40">
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-mono font-medium tracking-[0.2em] text-purple-400 bg-purple-500/10 border border-purple-500/20 rounded-full uppercase">
            My Skills
          </span>
          <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Tech <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">
            A collection of languages, frameworks, and tools I use to bring ideas to life
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-indigo-500" />
            <h3 className="text-lg font-semibold text-white font-['Space_Grotesk']">Programming Languages</h3>
            <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {languages.map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} index={i} inView={inView} />
            ))}
          </div>
        </motion.div>

        {/* Frameworks & Tools */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-purple-500" />
            <h3 className="text-lg font-semibold text-white font-['Space_Grotesk']">Frameworks & Tools</h3>
            <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {frameworks.map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} index={i} inView={inView} />
            ))}
          </div>
        </motion.div>

        {/* Orbiting tech icons decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2"
        >
          <div className="relative w-20 h-20">
            <motion.div
              className="absolute inset-0 border border-white/5 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-indigo-500/50" />
            </motion.div>
            <motion.div
              className="absolute -inset-6 border border-white/3 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            >
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-purple-500/50" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
