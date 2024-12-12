import React from 'react';
import { Code2, TestTube, Users } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, index }) => (
  <div 
    className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105 opacity-0 animate-slide-up"
    style={{ animationDelay: `${0.2 * index}s` }}
  >
    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white mb-6 animate-pulse-glow">
      {icon}
    </div>
    <h3 className="text-2xl font-semibold mb-4">{title}</h3>
    <p className="text-gray-600 mb-6">{description}</p>
    <button className="text-purple-600 font-semibold hover:text-purple-700 transition-colors group flex items-center gap-2">
      Learn More 
      <span className="group-hover:translate-x-1 transition-transform">→</span>
    </button>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: <TestTube size={32} />,
      title: "Manual Testing",
      description: "Master manual testing concepts with hands-on experience in JIRA and SPIRATEST. Learn test planning, execution, and defect management."
    },
    {
      icon: <Code2 size={32} />,
      title: "Automation Testing",
      description: "Learn Selenium with Java, including test automation frameworks, CI/CD integration, and best practices for automated testing."
    },
    {
      icon: <Users size={32} />,
      title: "Corporate Training",
      description: "Customized training programs for organizations to upskill their testing teams with the latest tools and methodologies."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive software testing courses designed to help you master both manual
            and automation testing skills
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;