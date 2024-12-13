import React from 'react';

interface QuickLinksProps {
  links: Array<{
    label: string;
    href: string;
  }>;
}

export const QuickLinks: React.FC<QuickLinksProps> = ({ links }) => (
  <div>
    <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
    <ul className="space-y-3">
      {links.map((link, index) => (
        <li key={index}>
          <a 
            href={link.href}
            className="text-gray-300 hover:text-white transition-colors inline-block"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);