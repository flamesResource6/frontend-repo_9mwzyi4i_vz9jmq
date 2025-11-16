export default function Footer() {
  return (
    <footer className="py-10 border-t bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} Avery Chen — Built with React + Tailwind</p>
        <div className="flex items-center gap-4">
          <a className="hover:text-gray-900" href="#">Resume</a>
          <a className="hover:text-gray-900" href="#">GitHub</a>
          <a className="hover:text-gray-900" href="#">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
