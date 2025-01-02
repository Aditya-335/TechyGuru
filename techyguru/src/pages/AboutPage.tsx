import { Award, Users, BookOpen, Trophy, Star } from "lucide-react";
import { ServiceHero } from "../Components/service/ServiceHero";

const About = () => {
  const stats = [
    { icon: Users, value: "1000+", label: "Students Trained" },
    { icon: BookOpen, value: "200+", label: "Hours of Training" },
    { icon: Trophy, value: "98%", label: "Success Rate" },
    { icon: Award, value: "50+", label: "Corporate Clients" },
  ];

  const values = [
    {
      title: "Excellence",
      description:
        "We strive for excellence in every aspect of our training programs, ensuring the highest quality education.",
    },
    {
      title: "Innovation",
      description:
        "Continuously updating our curriculum to keep pace with the latest industry trends and technologies.",
    },
    {
      title: "Student Success",
      description:
        "Dedicated to helping our students achieve their career goals through comprehensive support.",
    },
  ];

  
  return (
    <div className="min-h-screen bg-white">
      <ServiceHero
        title="About TechyGuru Academy"
        description="Empowering the next generation of software engineering professionals"
        image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200"
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                At TechyGuru Academy, we're dedicated to transforming aspiring developers and
                testers into industry-ready professionals. Our comprehensive
                curriculum, hands-on projects, and expert instructors ensure
                you're well-prepared for real-world challenges.
              </p>
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl transform hover:scale-105 transition-all"
                  >
                    <stat.icon className="text-purple-600 mb-4" size={32} />
                    <div className="text-3xl font-bold text-gray-800 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800"
                alt="Team collaboration"
                className="rounded-3xl shadow-xl relative z-10"
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
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:scale-105 flex flex-col items-center text-center"
              >
                <Star className="text-purple-600 mb-6" size={40} />
                <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-600 text-lg">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn from industry experts with extensive real-world experience
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:scale-105 text-center"
              >
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover ring-4 ring-purple-100"
                />
                <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
                <p className="text-purple-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default About;
