import React from 'react';
import { Code2, Cpu, GitBranch, Terminal, Database, Workflow } from 'lucide-react';
import { ServiceHero } from '../Components/service/ServiceHero';
import { CourseModule } from '../Components/service/CourseModule';
import { FeatureCard } from '../Components/service/FeatureCard';
import { CTASection } from '../Components/service/CTASection';

const AutomationTesting = () => {
  const features = [
    {
      icon: Code2,
      title: "Selenium with Java",
      description: "Master Selenium WebDriver with Java programming fundamentals"
    },
    {
      icon: GitBranch,
      title: "CI/CD Integration",
      description: "Learn to integrate automated tests with CI/CD pipelines"
    },
    {
      icon: Terminal,
      title: "Framework Design",
      description: "Build robust test automation frameworks from scratch"
    }
  ];

  const modules = [
    {
      title: "Java Programming Essentials",
      topics: [
        "Core Java Concepts",
        "Object-Oriented Programming",
        "Exception Handling",
        "Collections Framework"
      ]
    },
    {
      title: "Selenium WebDriver",
      topics: [
        "WebDriver Architecture",
        "Element Locators",
        "Advanced Interactions",
        "Wait Strategies"
      ]
    },
    {
      title: "Test Automation Framework",
      topics: [
        "TestNG Framework",
        "Page Object Model",
        "Data-Driven Testing",
        "Report Generation"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <ServiceHero 
        title="Automation Testing Course"
        description="Learn advanced test automation with Selenium and Java"
        image="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200"
      />

      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Course Features</h2>
            <p className="text-xl text-gray-600">Master automation testing with industry-standard tools</p>
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
            <h2 className="text-4xl font-bold mb-4">Course Modules</h2>
            <p className="text-xl text-gray-600">Comprehensive automation testing curriculum</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {modules.map((module, index) => (
              <CourseModule key={index} {...module} index={index} />
            ))}
          </div>
        </div>
      </section>

      <CTASection 
        title="Launch Your Automation Testing Career"
        description="Master test automation with our comprehensive Selenium with Java course"
        buttonText="Start Learning"
      />
    </div>
  );
};

export default AutomationTesting;