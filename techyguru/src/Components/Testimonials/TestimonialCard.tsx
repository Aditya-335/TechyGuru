import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  index: number;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  content,
  rating,
  index
}) => (
  <div 
    className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all hover:scale-105 opacity-0 animate-slide-up"
    style={{ animationDelay: `${0.2 * index}s` }}
  >
    <div className="flex items-center gap-4 mb-6">
      <img 
        alt={name} 
        className="w-16 h-16 rounded-full object-cover ring-2 ring-purple-100 hover:ring-purple-300 transition-all"
      />
      <div>
        <h4 className="font-semibold text-lg">{name}</h4>
        <p className="text-gray-600">{role}</p>
      </div>
    </div>
    <div className="flex gap-1 mb-4">
      {[...Array(rating)].map((_, i) => (
        <Star 
          key={i} 
          size={20} 
          className="fill-yellow-400 text-yellow-400 animate-pulse-glow"
          style={{ animationDelay: `${i * 0.2}s` }}
        />
      ))}
    </div>
    <p className="text-gray-700">{content}</p>
  </div>
);