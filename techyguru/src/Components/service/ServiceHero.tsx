import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ServiceHeroProps {
  title: string;
  description: string;
  image: string;
}

export const ServiceHero: React.FC<ServiceHeroProps> = ({ title, description, image }) => {
  return (
    <section className="relative h-[100vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-blue-900/80"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-white">
        <h1 className="text-6xl font-bold mb-6 opacity-0 animate-slide-up">
          {title}
        </h1>
        <p className="text-2xl text-gray-200 mb-8 max-w-2xl opacity-0 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {description}
        </p>
        <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full text-xl font-semibold hover:opacity-90 transition-all hover:scale-105 flex items-center gap-2 group opacity-0 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          Enroll Now
          <ArrowRight className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};