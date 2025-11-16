import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Campus Compass',
    desc: 'A campus navigation app with indoor mapping and real-time events.',
    tags: ['React', 'Mapbox', 'Firebase'],
    link: '#',
  },
  {
    title: 'StudyBuddy AI',
    desc: 'An AI-powered note summarizer and quiz generator for students.',
    tags: ['FastAPI', 'Python', 'OpenAI'],
    link: '#',
  },
  {
    title: 'Pixel Playground',
    desc: 'Generative art toy with shaders and physics-based interactions.',
    tags: ['Three.js', 'WebGL'],
    link: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-2 w-2 rounded-full bg-indigo-600" />
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
            >
              <div className="aspect-video rounded-xl bg-gradient-to-br from-indigo-200 via-fuchsia-200 to-cyan-200 mb-4" />
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-semibold group-hover:text-indigo-600 transition-colors">{p.title}</h3>
                <span className="text-xs rounded-full bg-black/5 px-2 py-1">Student</span>
              </div>
              <p className="mt-2 text-sm text-gray-600">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs rounded-full bg-gray-100 px-2 py-1 text-gray-700">{t}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
