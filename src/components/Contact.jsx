import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiOutlineMail, HiOutlineLocationMarker, HiOutlinePhone } from 'react-icons/hi'
import { FaGithub, FaLinkedinIn, FaFacebookF, FaPaperPlane } from 'react-icons/fa'

const contactInfo = [
  {
    icon: HiOutlineMail,
    label: 'Email',
    value: 'nbetonio470@gmail.com',
    href: 'mailto:nbetonio470@gmail.com',
    color: '#6366f1',
  },
  {
    icon: HiOutlineLocationMarker,
    label: 'Location',
    value: 'Philippines',
    href: '#',
    color: '#a855f7',
  },
  {
    icon: HiOutlinePhone,
    label: 'Phone',
    value: '09939030749',
    href: '#',
    color: '#06b6d4',
  },
]

const socials = [
  { icon: FaGithub, href: 'https://github.com/yourusername', label: 'GitHub', color: '#fff' },
  { icon: FaLinkedinIn, href: 'https://linkedin.com/in/yourprofile', label: 'LinkedIn', color: '#0A66C2' },
  { icon: FaFacebookF, href: 'https://www.facebook.com/ninopiodos.betonio', label: 'Facebook', color: '#1877F2' },
]

const Contact = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSending(true)
    setTimeout(() => {
      setSending(false)
      setSent(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setSent(false), 3000)
    }, 1500)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="relative py-32 lg:py-40">
      {/* Background */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-mono font-medium tracking-[0.2em] text-pink-400 bg-pink-500/10 border border-pink-500/20 rounded-full uppercase">
            Get In Touch
          </span>
          <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Let's Work <span className="gradient-text">Together</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass-card rounded-2xl p-6 lg:p-8">
              <h3 className="text-lg font-semibold text-white font-['Space_Grotesk'] mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/[0.03] transition-colors group"
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: `${item.color}15`, border: `1px solid ${item.color}25` }}
                    >
                      <item.icon style={{ color: item.color }} size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium">{item.label}</p>
                      <p className="text-sm text-slate-300 group-hover:text-white transition-colors">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-white/5">
                <p className="text-xs text-slate-500 font-medium mb-4">Find me on</p>
                <div className="flex gap-3">
                  {socials.map(({ icon: Icon, href, label, color }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="p-3 rounded-xl bg-white/[0.04] border border-white/8 text-slate-400 hover:text-white hover:border-white/20 transition-all duration-300"
                      whileHover={{ y: -3, scale: 1.05, borderColor: `${color}50` }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon size={18} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-6 lg:p-8">
              <h3 className="text-lg font-semibold text-white font-['Space_Grotesk'] mb-6">
                Send a Message
              </h3>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-xs text-slate-500 font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/8 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.05] transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs text-slate-500 font-medium mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/8 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.05] transition-all duration-300"
                    placeholder="john@email.com"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="subject" className="block text-xs text-slate-500 font-medium mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/8 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.05] transition-all duration-300"
                  placeholder="Project Collaboration"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-xs text-slate-500 font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/8 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.05] transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={sending}
                className="w-full sm:w-auto btn-primary px-8 py-3.5 rounded-xl text-sm font-semibold text-white flex items-center justify-center gap-2 disabled:opacity-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {sending ? (
                  <>
                    <motion.div
                      className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                    />
                    Sending...
                  </>
                ) : sent ? (
                  <>✓ Message Sent!</>
                ) : (
                  <>
                    <FaPaperPlane size={14} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
