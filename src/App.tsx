import { CareerStory } from './components/CareerStory'
import { Hero } from './components/Hero'
import { ProjectsSection } from './components/ProjectsSection'
import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'
import './App.css'

function App() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main id="top">
        <Hero />
        <CareerStory />
        <ProjectsSection />
      </main>
      <SiteFooter />
    </div>
  )
}

export default App
