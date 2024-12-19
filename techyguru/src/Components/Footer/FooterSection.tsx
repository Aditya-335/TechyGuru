import React from 'react';
import { SocialLinks } from './SocialLinks';
import { QuickLinks } from './QuickLinks';
import { CourseLinks } from './CourseLinks';
import { footerData } from './footerData';

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-purple-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">TechyGuru Academy</h3>
            <p className="text-gray-300 leading-relaxed">
              Empowering the next generation of software professionals through
              comprehensive training and hands-on experience.
            </p>
          </div>
          <QuickLinks links={footerData.quickLinks} />
          <CourseLinks courses={footerData.courses} />
          <div>
            <h4 className="text-xl font-semibold mb-6">Connect With Us</h4>
            <SocialLinks socials={footerData.socials} />
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">© {currentYear} TechyGuru Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;