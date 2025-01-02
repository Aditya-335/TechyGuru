import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, index }) => {
  return (
    <div 
      className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105 opacity-0 animate-slide-up flex flex-col items-center text-center"
      style={{ animationDelay: `${0.2 * index}s` }}
    >
      <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white mb-6">
        <Icon size={32} />
      </div>
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-lg text-gray-600">{description}</p>
    </div>
  );
};