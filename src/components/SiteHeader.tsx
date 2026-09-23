import { useEffect, useState } from 'react'

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={scrolled ? 'site-header is-scrolled' : 'site-header'}>
      <a className="brand" href="#top" aria-label="Cedric, home">C<span>J</span></a>
      <nav aria-label="Primary navigation">
        <a href="#story">Story</a>
        <a href="#work">Work</a>
        <a className="resume-nav" href="/Cedric-Oporto-Resume.pdf" download>Résumé ↓</a>
      </nav>
    </header>
  )
}
