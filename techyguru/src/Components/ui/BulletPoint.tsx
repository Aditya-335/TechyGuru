import React from 'react';

interface BulletPointProps {
  text: string;
}

export const BulletPoint: React.FC<BulletPointProps> = ({ text }) => (
  <li className="flex items-center gap-4">
    <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
    <span className="text-lg text-gray-700">{text}</span>
  </li>
);