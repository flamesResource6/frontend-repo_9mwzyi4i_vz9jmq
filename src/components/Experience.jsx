import { motion } from 'framer-motion'

const experiences = [
  {
    role: 'Software Engineering Intern',
    org: 'Acme Robotics Club',
    time: '2024',
    points: [
      'Built a control dashboard for robot fleet using React and WebSockets',
      'Optimized path planning scripts in Python (25% faster)',
    ],
  },
  {
    role: 'Teaching Assistant',
    org: 'Intro to CS',
    time: '2023',
    points: [
      'Led weekly labs and created visual aids for algorithms',
      'Mentored 40+ students on projects and debugging',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-2 w-2 rounded-full bg-fuchsia-600" />
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Experience</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {experiences.map((e, idx) => (
            <motion.div
              key={e.role}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="rounded-2xl border bg-white p-6 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{e.role}</h3>
                <span className="text-xs rounded-full bg-black/5 px-2 py-1">{e.time}</span>
              </div>
              <p className="text-sm text-gray-600">{e.org}</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                {e.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gray-400 mt-2" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
