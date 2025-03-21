import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutPage';
import ContactUs from './pages/ContactPage';
import ManualTesting from './pages/ManualTesting';
import ScrollToTop from './Components/ScrollingWidget/ScrollToTop';
import AutomationTesting from './pages/AutomationTesting';
import CorporateTraining from './pages/CorporateTraining';
import Testimonials from './Components/Testimonials/Testimonials';
import Footer from './Components/Footer';
import Enroll from './pages/Enroll';

function App() {
  return (
    <div className="min-h-screen bg-white">
       <Router>
        <ScrollToTop/>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/testimonials" element={<Testimonials />} />
          {/* Services Routes */}
          <Route path="/services/manual-testing" element={<ManualTesting />} />
          <Route path="/services/automation-testing" element={<AutomationTesting />} />
          <Route path="/services/corporate-training" element={<CorporateTraining />} />
          {/*Enroll Path*/}
          <Route path="/enroll" element={<Enroll />} />


        </Routes>
      </div>
    </Router>
      
      <Footer />
    </div>
  );
}

export default App;