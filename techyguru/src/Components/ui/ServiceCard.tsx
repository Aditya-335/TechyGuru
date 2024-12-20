import React from 'react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  index: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, link, index }) => (
  <div 
    className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105 opacity-0 animate-slide-up flex flex-col items-center text-center"
    style={{ animationDelay: `${0.2 * index}s` }}
  >
    <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white mb-6 animate-pulse-glow mx-auto sm:mx-0">
      {icon}
    </div>
    <h3 className="text-3xl font-semibold mb-4">{title}</h3>
    <p className="text-lg text-gray-600 mb-6 leading-relaxed">{description}</p>
    <Link to={link} className="inline-block">
      <button className="text-lg text-purple-600 font-semibold hover:text-purple-700 transition-colors group flex items-center gap-2 mx-auto sm:mx-0">
        Learn More
        <span className="group-hover:translate-x-1 transition-transform">→</span>
      </button>
    </Link>
  </div>
);