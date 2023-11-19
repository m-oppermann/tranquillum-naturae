import Link from "next/link"

export default function HeaderComponent() {
  return (
    <header className="p-6">
      <nav>
        <Link href="/" aria-label="Home">
          Home
        </Link>
        <span>, </span>
        <Link href="/about" aria-label="About">
          About
        </Link>
      </nav>
    </header>
  )
}
