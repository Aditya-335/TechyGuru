import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              TechyGuru Academy
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-purple-600 transition-colors">Home</a>
            <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors">About</a>
            <a href="#services" className="text-gray-700 hover:text-purple-600 transition-colors">Services</a>
            <a href="#testimonials" className="text-gray-700 hover:text-purple-600 transition-colors">Testimonials</a>
            <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors">Contact</a>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity">
              Enroll Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Home</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-purple-600">About</a>
            <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Services</a>
            <a href="#testimonials" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Testimonials</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Contact</a>
            <button className="w-full mt-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full">
              Enroll Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;