import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">TechyGuru Academy</h3>
            <p className="text-gray-400">
              Empowering the next generation of software testing professionals through
              comprehensive training and hands-on experience.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Testimonials', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Courses</h4>
            <ul className="space-y-2">
              {[
                'Manual Testing',
                'Automation Testing',
                'JIRA Training',
                'Selenium with Java',
                'Corporate Training'
              ].map((course) => (
                <li key={course}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {course}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              {[
                { icon: <Facebook size={20} />, href: "#" },
                { icon: <Twitter size={20} />, href: "#" },
                { icon: <Linkedin size={20} />, href: "#" },
                { icon: <Instagram size={20} />, href: "#" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© {currentYear} TechyGuru Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;