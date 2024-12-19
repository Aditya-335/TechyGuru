import React from 'react';
import { Award, Users, BookOpen, Trophy, Target, Star } from 'lucide-react';

interface ServiceHeroProps {
  title: string;
  description: string;
  image: string;
}

export const ServiceHero: React.FC<ServiceHeroProps> = ({ title, description, image }) => (
  <div className="relative py-20 overflow-hidden">
    {/* Background image with overlay */}
    <div className="absolute inset-0">
      <img
        src={image}
        alt="Hero background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90"></div>
    </div>

    {/* Hero content */}
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center sm:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto sm:mx-0">
          {description}
        </p>
      </div>
    </div>
  </div>
);

const About = () => {
  const stats = [
    { icon: Users, value: "1000+", label: "Students Trained" },
    { icon: BookOpen, value: "15+", label: "Courses" },
    { icon: Trophy, value: "98%", label: "Success Rate" },
    { icon: Award, value: "50+", label: "Corporate Clients" }
  ];

  const values = [
    {
      title: "Excellence",
      description: "We strive for excellence in every aspect of our training programs, ensuring the highest quality education."
    },
    {
      title: "Innovation",
      description: "Continuously updating our curriculum to keep pace with the latest industry trends and technologies."
    },
    {
      title: "Student Success",
      description: "Dedicated to helping our students achieve their career goals through comprehensive support."
    }
  ];

  const team = [
    {
      name: "John Smith",
      role: "Lead Instructor",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400",
      experience: "15+ years in Software Testing"
    },
    {
      name: "Sarah Johnson",
      role: "Automation Expert",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400",
      experience: "10+ years in Test Automation"
    },
    {
      name: "Michael Chen",
      role: "JIRA Specialist",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400",
      experience: "8+ years in Test Management"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <ServiceHero 
        title="About TechyGuru Academy"
        description="Empowering the next generation of software testing professionals"
        image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200"
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                At TechyGuru Academy, we're dedicated to transforming aspiring testers into 
                industry-ready professionals. Our comprehensive curriculum, hands-on projects, 
                and expert instructors ensure you're well-prepared for real-world challenges.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl transform hover:scale-105 transition-all flex flex-col items-center md:items-start"
                  >
                    <stat.icon className="text-purple-600 mb-4" size={32} />
                    <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative mt-8 md:mt-0">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800"
                alt="Team collaboration"
                className="rounded-3xl shadow-xl relative z-10 w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built on strong principles that drive our commitment to excellence
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:scale-105 text-center md:text-left"
              >
                <Star className="text-purple-600 mb-6 mx-auto md:mx-0" size={40} />
                <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-600 text-lg">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;