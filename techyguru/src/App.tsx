import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Services from './Components/Services';
import About from './Components/About';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;