import React from 'react';

import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import About from '../Components/About';
import Services from '../Components/Services';
import CTASection  from '../Components/CTASection';
import Testimonials from '../Components/Testimonials/Testimonials';
import Contact from '../Components/Contact/Contact';

function Home() {
  return (
    <div className="min-h-screen bg-white">
    
       <Navbar /> 
       <Hero />
      <About />
      <Services /> 
    <Testimonials />
    <CTASection 
    title="Join TechyGuru Academy" 
    description="Unlock your full potential with our courses on Manual and Automation Testing, and Corporate Training."
    
  />
    
      <Contact /> 
    </div>
  );
}

export default Home;