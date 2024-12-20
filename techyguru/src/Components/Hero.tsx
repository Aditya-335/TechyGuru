import React from 'react';
import { ArrowRight, Code2, TestTube, Users } from 'lucide-react';
import { FeatureIcon } from './ui/FeatureIcon';
import { Link, useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  const features = [
    { icon: <TestTube size={32} />, label: 'Manual Testing' },
    { icon: <Code2 size={32} />, label: 'Automation Testing' },
    { icon: <Users size={32} />, label: 'Corporate Training' },
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
  };
  const size = Math.random() * 70 + 96;

  return (
    <section
      id="home"
      className="min-h-5 md:min-h-screen relative overflow-hidden flex items-center justify-center py-20 px-4"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-300 to-pink-400 animate-gradient opacity-50 z-0"></div>

      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float hidden md:block"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${Math.random() * 4 + 2}s`,
            }}
          >
            <div
              className="rounded-full bg-gradient-to-br from-blue-400 to-purple-400 opacity-10"
              style={{
                width: `${size}px`,
                height: `${size}px`,
              }}
            ></div>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="text-center">
          <h1
            className="text-5xl pt-10 sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 opacity-0 animate-slide-up"
            style={{ animationDelay: '0.2s' }}
          >
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Master Software Engineering
            </span>
            <br />
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl block mt-2">
              with TechyGuru Academy
            </span>
          </h1>
          <p
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 mb-8 md:mb-10 max-w-3xl mx-auto px-4 opacity-0 animate-slide-up"
            style={{ animationDelay: '0.4s' }}
          >
            Transform your career with industry-leading courses in Manual Testing, Automation Testing, and more.
          </p>
          <div
            className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8 md:mb-12 opacity-0 animate-slide-up"
            style={{ animationDelay: '0.6s' }}
          >
            <button
              onClick={() => handleNavigation('/enroll')}
              className="text-base sm:text-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-10 py-3 sm:py-5 rounded-full hover:opacity-90 transition-all hover:scale-105 flex items-center justify-center gap-2 group w-auto"
            >
              Get Started
              <ArrowRight className="group-hover:translate-x-1 transition-transform w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={() => handleNavigation('/about')}
              className="text-base sm:text-lg border-2 border-purple-600 text-purple-600 px-6 sm:px-10 py-3 sm:py-5 rounded-full hover:bg-purple-50 transition-all hover:scale-105 w-auto"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Feature Icons Section */}
        <div
          className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 pt-5 opacity-0 animate-slide-up"
          style={{ animationDelay: '0.8s' }}
        >
          {features.map((item, index) => (
            <FeatureIcon key={index} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
