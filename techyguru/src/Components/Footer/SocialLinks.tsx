import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

interface SocialLinksProps {
  socials: Array<{
    name: string;
    href: string;
  }>;
}

const socialIcons = {
  Facebook,
  Twitter,
  LinkedIn: Linkedin,
  Instagram
};

export const SocialLinks: React.FC<SocialLinksProps> = ({ socials }) => (
  <div className="flex space-x-4">
    {socials.map((social, index) => {
      const Icon = socialIcons[social.name as keyof typeof socialIcons];
      return (
        <a
          key={index}
          href={social.href}
          className="bg-gray-800/50 p-3 rounded-full hover:bg-gray-700 transition-colors"
          aria-label={social.name}
        >
          <Icon size={20} />
        </a>
      );
    })}
  </div>
);