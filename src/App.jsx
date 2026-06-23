import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Skill from './components/Skills/Skill'
import Experience from './components/Experience/Experience'
import Work from './components/Work/Work'
import Education from './components/Education/Education'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import ConstellationBackground from './components/Background/ConstellationBackground'

function App() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--color-bg)' }}>
      <ConstellationBackground />
      <Navbar />
      <main>
        <About />
        <Skill />
        <Experience />
        <Education />
        <Work />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
