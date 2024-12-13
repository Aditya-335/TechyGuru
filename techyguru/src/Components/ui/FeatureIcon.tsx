import React from 'react';

interface FeatureIconProps {
  icon: React.ReactNode;
  label: string;
  index: number;
}

export const FeatureIcon: React.FC<FeatureIconProps> = ({ icon, label, index }) => (
  <div className="flex flex-col items-center animate-float" style={{ animationDelay: `${index}s` }}>
    <div className="w-16 h-16 bg-white/30 backdrop-blur-sm rounded-2xl flex items-center justify-center text-purple-600 mb-4 animate-pulse-glow">
      {icon}
    </div>
    <span className="text-gray-700 font-medium">{label}</span>
  </div>
);