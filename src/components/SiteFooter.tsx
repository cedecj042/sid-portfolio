import { ArrowIcon } from './ArrowIcon'

export function SiteFooter() {
  return (
    <footer>
      <p>Have a project in mind?</p>
      <a href="https://m.me/oporto.cedric" target="_blank" rel="noreferrer" aria-label="Message Cedric on Messenger">
        Let’s connect <ArrowIcon />
      </a>
      <p className="messenger-note">Message me on Messenger · @oporto.cedric</p>
      <div className="socials" aria-label="Social media links">
        <p>Find me online</p>
        <div>
          <a href="https://github.com/cedecj042" target="_blank" rel="noreferrer"><span>GitHub</span>github.com/cedecj042 ↗</a>
          <a href="https://linkedin.com/in/cedric-oporto" target="_blank" rel="noreferrer"><span>LinkedIn</span>linkedin.com/in/cedric-oporto ↗</a>
          <a href="https://m.me/oporto.cedric" target="_blank" rel="noreferrer"><span>Messenger</span>m.me/oporto.cedric ↗</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Cedric</span>
        <div className="footer-links">
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  )
}
