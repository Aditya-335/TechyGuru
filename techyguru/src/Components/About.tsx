import { Award, Users, BookOpen, Trophy } from 'lucide-react';
import { StatCard } from './ui/StatCard';

const About = () => {
  const stats = [
    { icon: <Users size={24} />, value: "1000+", label: "Students Trained" },
    { icon: <BookOpen size={24} />, value: "15+", label: "Courses" },
    { icon: <Trophy size={24} />, value: "98%", label: "Success Rate" },
    { icon: <Award size={24} />, value: "50+", label: "Corporate Clients" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Why Choose TechyGuru Academy?</h2>
            <p className="text-gray-600 mb-6">
              At TechyGuru Academy, we're dedicated to transforming aspiring testers into 
              industry-ready professionals. Our comprehensive curriculum, hands-on projects, 
              and expert instructors ensure you're well-prepared for real-world challenges.
            </p>
            <ul className="space-y-4">
              {[
                "Industry-experienced instructors",
                "Hands-on practical training",
                "Real-world project experience",
                "Placement assistance",
                "Flexible learning schedule"
              ].map((point, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-6">
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