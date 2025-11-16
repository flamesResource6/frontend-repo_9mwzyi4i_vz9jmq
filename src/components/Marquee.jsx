import { useEffect, useRef } from 'react'

export default function Marquee({ items = [] }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let start = null
    let raf

    const speed = 50 // px/s
    const step = (ts) => {
      if (!start) start = ts
      const delta = (ts - start) / 1000
      start = ts
      el.scrollLeft += speed * delta
      if (el.scrollLeft >= el.scrollWidth - el.clientWidth) {
        el.scrollLeft = 0
      }
      raf = requestAnimationFrame(step)
    }

    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [])

  const doubled = [...items, ...items]

  return (
    <div className="w-full overflow-x-auto no-scrollbar" ref={ref}>
      <div className="flex gap-6 py-4 min-w-max">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 bg-white/70 backdrop-blur text-sm text-gray-700">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
