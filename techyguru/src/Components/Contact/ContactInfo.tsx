import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ContactInfoProps {
  contactData: Array<{
    icon: LucideIcon;
    title: string;
    content: string;
  }>;
}

export const ContactInfo: React.FC<ContactInfoProps> = ({ contactData }) => {
  return (
    <div className="space-y-8">
      {contactData.map((info, index) => (
        <div 
          key={index} 
          className="flex items-start gap-6 opacity-0 animate-slide-up"
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          <div className="p-4 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl">
            <info.icon size={28} className="text-purple-600" />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">{info.title}</h3>
            <p className="text-xl text-gray-600">{info.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};