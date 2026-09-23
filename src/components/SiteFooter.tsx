import { ArrowIcon } from './ArrowIcon'

export function SiteFooter() {
  return (
    <footer>
      <p>Have a project in mind?</p>
      <a href="https://github.com/cedecj042" target="_blank" rel="noreferrer">Let’s connect <ArrowIcon /></a>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Cedric</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  )
}
