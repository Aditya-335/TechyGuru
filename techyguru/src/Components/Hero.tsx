import React from 'react';
import { ArrowRight, Code2, TestTube, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 animate-gradient opacity-50"></div>
      
      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 2}s`,
            }}
          >
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 opacity-10"></div>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 opacity-0 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Master Software Testing
            </span>
            <br />
            with TechyGuru Academy
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto opacity-0 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            Transform your career with industry-leading courses in Manual Testing, 
            Automation Testing, and more. Learn from experts and join our community 
            of successful testers.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 opacity-0 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:opacity-90 transition-all hover:scale-105 flex items-center justify-center gap-2 group">
              Get Started
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full hover:bg-purple-50 transition-all hover:scale-105">
              View Courses
            </button>
          </div>
        </div>

        {/* Floating icons */}
        <div className="mt-16 grid grid-cols-3 gap-8 opacity-0 animate-slide-up" style={{ animationDelay: '0.8s' }}>
          {[
            { icon: <TestTube size={32} />, label: "Manual Testing" },
            { icon: <Code2 size={32} />, label: "Automation Testing" },
            { icon: <Users size={32} />, label: "Corporate Training" }
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center animate-float" style={{ animationDelay: `${index}s` }}>
              <div className="w-16 h-16 bg-white/30 backdrop-blur-sm rounded-2xl flex items-center justify-center text-purple-600 mb-4 animate-pulse-glow">
                {item.icon}
              </div>
              <span className="text-gray-700 font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;