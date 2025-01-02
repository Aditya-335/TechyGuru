// src/components/Navbar.tsx
import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import logo from '../assets/logo1.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null); // Type the ref
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const navigate = useNavigate();

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle dropdown navigation and close menus
  const handleNavigation = (path: string) => {
    navigate(path);
    setIsOpen(false);
    setDropdownOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <nav className="fixed w-full z-50  bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 backdrop-blur-3xl shadow-lg">
      <div className="max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link 
              to="/" 
              
            >

              <img src={logo} alt="" className='h-10' />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-purple-600 transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-purple-600 transition-colors">
              About
            </Link>

            {/* Desktop Services Dropdown */}
            <div
              className="relative"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <div
                className="text-gray-300 hover:text-purple-600 transition-colors cursor-pointer flex items-center"
              >
                Services
                {dropdownOpen ? <ChevronUp size={16} className="ml-1" /> : <ChevronDown size={16} className="ml-1" />}
              </div>
              {dropdownOpen && (
                <div
                  ref={dropdownRef}
                  className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10"
                >
                  <div
                    onClick={() => handleNavigation('/services/manual-testing')}
                    className="block px-4 py-2 text-gray-700 bg-gray-50 hover:bg-gray-100 hover:text-purple-600 cursor-pointer"
                  >
                    Manual Testing
                  </div>
                  <div
                    onClick={() => handleNavigation('/services/automation-testing')}
                    className="block px-4 py-2 text-gray-700 bg-slate-100 hover:bg-gray-100 hover:text-purple-600 cursor-pointer"
                  >
                    Automation Testing
                  </div>
                  <div
                    onClick={() => handleNavigation('/services/corporate-training')}
                    className="block px-4 py-2 text-gray-700 bg-slate-50 hover:bg-gray-100 hover:text-purple-600 cursor-pointer"
                  >
                    Web Development & Analytics
                  </div>
                </div>
              )}
            </div>

            <Link to="/contact" className="text-gray-300 hover:text-purple-600 transition-colors">
              Contact Us
            </Link>

            
            <Link to="/enroll">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity">
                Get Started
              </button>
            </Link>
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
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-purple-600">
              Home
            </Link>
            <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-purple-600">
              About
            </Link>
            
            {/* Mobile Services Dropdown */}
            <div className="relative">
              <div 
                className="flex justify-between items-center px-3 py-2 text-gray-700 hover:text-purple-600"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              >
                <span>Services</span>
                {mobileServicesOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
              
              {mobileServicesOpen && (
                <div className="pl-4 bg-gray-50">
                  <div 
                    onClick={() => handleNavigation('/services/manual-testing')}
                    className="block px-3 py-2 text-gray-700 hover:text-purple-600 cursor-pointer"
                  >
                    Manual Testing
                  </div>
                  <div 
                    onClick={() => handleNavigation('/services/automation-testing')}
                    className="block px-3 py-2 text-gray-700 hover:text-purple-600 cursor-pointer"
                  >
                    Automation Testing
                  </div>
                  <div 
                    onClick={() => handleNavigation('/services/corporate-training')}
                    className="block px-3 py-2 text-gray-700 hover:text-purple-600 cursor-pointer"
                  >
                    Web Development & Analytics
                  </div>
                </div>
              )}
            </div>

            
            <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-purple-600">
              Contact
            </Link>
            <button 
              onClick={() => handleNavigation('/enroll')}
              className="w-full mt-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full"
            >
              Enroll Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;