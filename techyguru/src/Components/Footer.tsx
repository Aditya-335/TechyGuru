import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '#services' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '/contact' }
  ];

  const courses = [
    { label: 'Manual Testing', href: '/services/manual-testing' },
    { label: 'Automation Testing', href: '/services/automation-testing' },
    { label: 'Corporate Training', href: '/services/corporate-training' },
  ];

  const socials = [
    { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61570153401488&mibextid=ZbWKwL', label: 'Facebook' },

    { icon: Instagram, href: 'https://www.instagram.com/techyguruacademy/profilecard/?igsh=b2Rkc2E4czIzc3F6', label: 'Instagram' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-purple-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">TechyGuru Academy</h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              Empowering the next generation of software testing professionals through
              comprehensive training and hands-on experience.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors inline-block text-lg"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-6">Courses</h4>
            <ul className="space-y-4">
              {courses.map((course, index) => (
                <li key={index}>
                  <a 
                    href={course.href}
                    className="text-gray-300 hover:text-white transition-colors inline-block text-lg"
                  >
                    {course.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-6">Connect With Us</h4>
            <div className="flex space-x-4">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-gray-800/50 p-3 rounded-full hover:bg-gray-700 transition-colors hover:scale-110 transform"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-lg">© {currentYear} TechyGuru Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;