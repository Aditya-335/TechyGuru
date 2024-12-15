import React from 'react';
import { Users, Target, Briefcase, LineChart, Settings, Shield } from 'lucide-react';
import { ServiceHero } from '../Components/service/ServiceHero';
import { CourseModule } from '../Components/service/CourseModule';
import { FeatureCard } from '../Components/service/FeatureCard';
import { CTASection } from '../Components/service/CTASection';

const CorporateTraining = () => {
  const features = [
    {
      icon: Target,
      title: "Customized Programs",
      description: "Training programs tailored to your organization's specific needs"
    },
    {
      icon: Users,
      title: "Team Development",
      description: "Comprehensive skill development for testing teams"
    },
    {
      icon: LineChart,
      title: "Progress Tracking",
      description: "Regular assessments and progress monitoring"
    }
  ];

  const modules = [
    {
      title: "Testing Strategy",
      topics: [
        "Test Planning",
        "Risk Assessment",
        "Resource Allocation",
        "Quality Metrics"
      ]
    },
    {
      title: "Tools & Technologies",
      topics: [
        "Test Management Tools",
        "Automation Frameworks",
        "Performance Testing",
        "Security Testing"
      ]
    },
    {
      title: "Process Implementation",
      topics: [
        "Agile Testing",
        "DevOps Integration",
        "Best Practices",
        "Team Collaboration"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <ServiceHero 
        title="Corporate Training Solutions"
        description="Empower your testing team with customized training programs"
        image="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200"
      />

      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Training Features</h2>
            <p className="text-xl text-gray-600">Comprehensive corporate training solutions</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Training Modules</h2>
            <p className="text-xl text-gray-600">Customizable modules for your team</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {modules.map((module, index) => (
              <CourseModule key={index} {...module} index={index} />
            ))}
          </div>
        </div>
      </section>

      <CTASection 
        title="Transform Your Testing Team"
        description="Partner with us to develop a customized training program for your organization"
        buttonText="Get Started"
      />
    </div>
  );
};

export default CorporateTraining;