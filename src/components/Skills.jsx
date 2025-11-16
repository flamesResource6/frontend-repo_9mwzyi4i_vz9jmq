import { motion } from 'framer-motion'
import { Code2, Cpu, Rocket, Sparkles } from 'lucide-react'

const skills = [
  { title: 'Frontend', items: ['React', 'Next.js', 'Tailwind', 'Framer Motion'] },
  { title: 'Backend', items: ['Node', 'FastAPI', 'MongoDB', 'REST'] },
  { title: 'AI/ML', items: ['Python', 'NumPy', 'Pandas', 'Prompting'] },
  { title: 'Other', items: ['Git', 'Figma', 'CI/CD', 'Testing'] },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <Sparkles className="text-indigo-600" />
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Skills</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((group, idx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3">
                {idx % 3 === 0 && <Code2 className="text-indigo-600" />}
                {idx % 3 === 1 && <Cpu className="text-fuchsia-600" />}
                {idx % 3 === 2 && <Rocket className="text-cyan-600" />}
                <h3 className="font-semibold">{group.title}</h3>
              </div>
              <ul className="mt-4 space-y-2 text-gray-600 text-sm">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gray-400" />
                    {item}
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
