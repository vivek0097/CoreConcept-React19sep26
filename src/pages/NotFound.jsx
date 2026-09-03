import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section>
      <h1 className="text-3xl sm:text-4xl">404 — Page not found</h1>
      <Link to="/" className="mt-4 inline-block text-brand-500 hover:underline">
        Back home
      </Link>
    </section>
  )
}

export default NotFound
