import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
}

export const CTASection: React.FC<CTASectionProps> = ({ title, description, buttonText }) => {
  return (
    <section className="bg-gradient-to-br from-purple-900 to-blue-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-6">{title}</h2>
        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">{description}</p>
        <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full text-xl font-semibold hover:opacity-90 transition-all hover:scale-105 flex items-center gap-2 group mx-auto">
          {buttonText}
          <ArrowRight className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};