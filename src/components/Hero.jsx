import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/90 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-black/5 px-3 py-1 text-xs font-medium text-gray-700 ring-1 ring-inset ring-black/10 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            CS Student · AI + Web · Open to Internships
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.1]">
            Hi, I'm Avery — I build delightful, human‑centered software.
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            I love crafting interactive experiences, shipping useful tools, and exploring the edges of AI.
            Currently focused on full‑stack web and creative coding.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="inline-flex items-center rounded-lg bg-black text-white px-5 py-3 text-sm font-semibold hover:-translate-y-0.5 active:translate-y-0 transition-transform">
              View Projects
            </a>
            <a href="#contact" className="inline-flex items-center rounded-lg bg-white text-gray-900 ring-1 ring-inset ring-gray-200 px-5 py-3 text-sm font-semibold hover:bg-gray-50">
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
