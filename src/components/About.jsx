import { motion } from 'framer-motion'
import Marquee from './Marquee'

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">About Me</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              I'm Avery, a curious CS student who enjoys building playful, thoughtful interfaces and robust backends.
              I value clean design, accessibility, and performance. Outside of code, I sketch, play piano, and tinker with creative coding.
            </p>
            <div className="mt-6">
              <Marquee items={[
                'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node', 'Python', 'FastAPI', 'MongoDB', 'Tailwind', 'Framer Motion', 'Spline', 'Figma', 'Vercel'
              ]} />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-indigo-200 via-fuchsia-200 to-cyan-200" />
            <div className="absolute inset-6 rounded-2xl bg-white/70 backdrop-blur-lg border border-white/50 shadow-xl flex items-center justify-center text-center p-8">
              <div>
                <p className="text-6xl">👋</p>
                <p className="mt-4 text-gray-700">Always learning. Always building.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
