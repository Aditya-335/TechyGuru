import React from 'react';

interface CourseModuleProps {
  title: string;
  topics: string[];
  index: number;
}

export const CourseModule: React.FC<CourseModuleProps> = ({ title, topics, index }) => {
  return (
    <div 
      className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all hover:scale-105 opacity-0 animate-slide-up"
      style={{ animationDelay: `${0.2 * index}s` }}
    >
      <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        {title}
      </h3>
      <ul className="space-y-4">
        {topics.map((topic, i) => (
          <li key={i} className="flex items-center gap-3">
            <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
            <span className="text-lg text-gray-700">{topic}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};