import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    await new Promise((r) => setTimeout(r, 1000))
    setStatus('Thanks! I will get back to you soon.')
  }

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-2 w-2 rounded-full bg-cyan-600" />
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Contact</h2>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-6 rounded-2xl border bg-white p-6 shadow-sm"
        >
          <div className="space-y-6">
            <div>
              <label className="text-sm text-gray-700">Name</label>
              <input required className="mt-2 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="text-sm text-gray-700">Email</label>
              <input required type="email" className="mt-2 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div className="md:col-span-2">
              <label className="text-sm text-gray-700">Message</label>
              <textarea required rows="4" className="mt-2 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div className="flex items-center gap-3">
              <button type="submit" className="inline-flex items-center rounded-lg bg-black text-white px-5 py-3 text-sm font-semibold hover:-translate-y-0.5 active:translate-y-0 transition-transform">Send Message</button>
              <span className="text-sm text-gray-600">{status}</span>
            </div>
          </div>

          <div className="rounded-xl bg-gradient-to-br from-indigo-50 via-fuchsia-50 to-cyan-50 p-6">
            <p className="text-gray-700">Prefer email?</p>
            <p className="font-semibold">avery.chen@university.edu</p>
            <p className="mt-6 text-sm text-gray-600">I’m open to internships, hackathons, and collabs. If you have an idea or opportunity, let’s chat!</p>
          </div>
        </motion.form>
      </div>
    </section>
  )
}
