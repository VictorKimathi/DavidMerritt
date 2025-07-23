import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Portfolio from './pages/Portfolio';
import Articles from './pages/Articles';
import Guides from './pages/Guides';
import Interests from './pages/Interests';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
export function App() {
  return <Router>
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/guides" element={<Guides />} />
            <Route path="/interests" element={<Interests />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </main>
      </div>
    </Router>;
}