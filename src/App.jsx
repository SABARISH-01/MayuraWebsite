import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CareersPage from './pages/CareersPage'
import ContactPage from './pages/ContactPage'
import Navbar from './components/Navbar'
import './styles-site.css'

function App() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Navbar 
                mobileOpen={mobileOpen}
                onToggleMobile={() => setMobileOpen((prev) => !prev)}
                onCloseMobile={() => setMobileOpen(false)}
              />
              <HomePage />
            </>
          } 
        />
        <Route 
          path="/careers" 
          element={
            <>
              <Navbar 
                mobileOpen={mobileOpen}
                onToggleMobile={() => setMobileOpen((prev) => !prev)}
                onCloseMobile={() => setMobileOpen(false)}
              />
              <CareersPage />
            </>
          } 
        />
        <Route 
          path="/contact" 
          element={
            <>
              <Navbar 
                mobileOpen={mobileOpen}
                onToggleMobile={() => setMobileOpen((prev) => !prev)}
                onCloseMobile={() => setMobileOpen(false)}
              />
              <ContactPage />
            </>
          } 
        />
      </Routes>
    </Router>
  )
}

export default App
