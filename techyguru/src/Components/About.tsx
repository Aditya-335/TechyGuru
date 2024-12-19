import React from 'react';
import { Award, Users, BookOpen, Trophy } from 'lucide-react';
import { StatCard } from './ui/StatCard';
import { BulletPoint } from './ui/BulletPoint';

const About = () => {
  const stats = [
    { icon: <Users size={28} />, value: "1000+", label: "Students Trained" },
    { icon: <BookOpen size={28} />, value: "200+", label: "Hours of Training" },
    { icon: <Trophy size={28} />, value: "98%", label: "Success Rate" },
    { icon: <Award size={28} />, value: "50+", label: "Corporate Clients" }
  ];

  const bulletPoints = [
    "Industry-experienced instructors",
    "Hands-on practical training",
    "Real-world project experience",
    "Placement assistance",
    "Flexible learning schedule"
  ];

  return (
    <section 
      id="about" 
      className="min-h-screen flex items-center bg-white py-20 px-4"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-center md:text-left">
              Why Choose TechyGuru Academy?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 md:mb-8 text-center md:text-left leading-relaxed">
              At TechyGuru Academy, we're dedicated to transforming aspiring developers and testers into 
              industry-ready professionals. Our comprehensive curriculum, hands-on projects, 
              and expert instructors ensure you're well-prepared for real-world challenges.
            </p>
            <ul className="space-y-4 md:space-y-6 max-w-xl mx-auto md:mx-0">
              {bulletPoints.map((point, index) => (
                <BulletPoint key={index} text={point} />
              ))}
            </ul>
          </div>
          <div 
            className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 order-1 md:order-2"
          >
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;