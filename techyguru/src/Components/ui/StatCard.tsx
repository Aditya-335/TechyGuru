import React from 'react';

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

export const StatCard: React.FC<StatCardProps> = ({ icon, value, label }) => (
  <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl transform hover:scale-105 transition-all hover:shadow-lg group">
    <div className="text-purple-600 mb-3 group-hover:animate-wave">{icon}</div>
    <div className="text-3xl font-bold text-gray-800 mb-1 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
      {value}
    </div>
    <div className="text-gray-600">{label}</div>
  </div>
);