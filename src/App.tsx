import { CareerStory } from './components/CareerStory'
import { Hero } from './components/Hero'
import { OtherProjects } from './components/OtherProjects'
import { ProjectsSection } from './components/ProjectsSection'
import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'
import { TechStack } from './components/TechStack'
import './App.css'

function App() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main id="top">
        <Hero />
        <CareerStory />
        <TechStack />
        <ProjectsSection />
        <OtherProjects />
      </main>
      <SiteFooter />
    </div>
  )
}

export default App
