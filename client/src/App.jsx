import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Venues from './pages/Venues'
import VenueDetails from './pages/VenueDetails'
import MyBookings from './pages/MyBookings'
import Tournaments from './pages/Tournaments'
import About from './pages/About'

// Automatically scrolls window to top on route navigation
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900 selection:bg-black selection:text-white">
      <ScrollToTop />
      {/* Navigation bar adhering to 22:08 - 42:51 & wireframe */}
      <Navbar />

      {/* Core Application Routes */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/venues" element={<Venues />} />
          <Route path="/venue/:id" element={<VenueDetails />} />
          <Route path="/my-bookings" element={<MyBookings />} />
          <Route path="/tournaments" element={<Tournaments />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  )
}

export default App
