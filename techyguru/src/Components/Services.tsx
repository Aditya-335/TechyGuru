import { Code2, TestTube, Users } from 'lucide-react';
import { ServiceCard } from './ui/ServiceCard';

const Services = () => {
  const services = [
    {
      icon: <TestTube size={32} />,
      title: "Manual Testing",
      description: "Master manual testing concepts with hands-on experience in JIRA and SPIRATEST.",
      link: "/services/manual-testing" // Add respective route
    },
    {
      icon: <Code2 size={32} />,
      title: "Automation Testing",
      description: "Learn Selenium with Java, including test automation frameworks, CI/CD integration, and best practices for automated testing.",
      link: "/services/automation-testing" // Add respective route
    },
    {
      icon: <Users size={32} />,
      title: "Web Development and Analytics",  
      description: "Building web applications and providing actionable insights.",  
      link: "/services/corporate-training" // Add respective route
    }
  ];

  return (
    <section 
      id="services" 
      className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-purple-50 py-20 px-4"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
            Our Services
          </h2>
          <p className="text-base sm:text-lg md:text-2xl text-gray-600 max-w-3xl mx-auto px-4">
            Comprehensive software testing courses designed to help you master both manual
            and automation testing skills
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
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
