import { FC } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import Contact from './components/Contact'
// import Hero from './components/Hero'
// import FeaturedProjects from './components/FeaturedProjects'
// import ClientLogos from './components/ClientLogos'
// import Footer from './components/Footer'

const App: FC = () => (
  <Router>
    <div className="w-full min-h-screen flex flex-col bg-white">
      <main className="flex-grow w-full bg-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  </Router>
)

export default App