import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CTASectionProps {
  title: string;
  description: string;
  stats?: Array<{
    value: string;
    label: string;
  }>;
}

const CTASection: React.FC<CTASectionProps> = ({ 
  title, 
  description, 
  stats 
}) => {
  return (
    <section className="py-24 bg-gradient-to-br from-purple-900 to-blue-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 1.5}s`,
            }}
          >
            <Star 
              size={24} 
              className="text-white/10 transform rotate-45"
            />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-white mb-6 opacity-0 animate-slide-up">
            {title}
          </h2>
          <p className="text-2xl text-gray-200 mb-12 max-w-3xl mx-auto opacity-0 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {description}
          </p>

          {stats && (
            <div className="grid md:grid-cols-3 gap-8 mb-12 opacity-0 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition-all"
                >
                  <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          )}

          <div 
            className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:justify-center opacity-0 animate-slide-up" 
            style={{ animationDelay: '0.6s' }}
          >
            <Link to='/enroll'>
              <button className="bg-white text-purple-900 px-8 py-4 rounded-full text-xl font-semibold hover:bg-gray-100 transition-all hover:scale-105 flex items-center justify-center gap-2 group">
                Start Your Journey
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTASection