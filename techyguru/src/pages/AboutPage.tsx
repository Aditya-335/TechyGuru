import { Award, Users, BookOpen, Trophy, Star } from "lucide-react";
import { ServiceHero } from "../Components/service/ServiceHero";
// import reel from "../assets/reels.mp4";
//this ia a comment


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

            {/* Enhanced iPhone Frame */}
            <div className="relative mx-auto w-full max-w-[300px] md:max-w-[380px]">
              {/* iPhone Frame */}
              <div className="relative aspect-[9/19.5] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-2 shadow-2xl ring-1 ring-gray-700">
                {/* Dynamic Island */}
                <div className="absolute top-0 inset-x-0 h-7 bg-black rounded-t-[3rem] flex justify-center items-end pb-1">
                  <div className="w-[120px] h-[35px] bg-black rounded-[20px] flex items-center justify-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-gray-800"></div>
                    <div className="w-12 h-2 bg-gray-800 rounded-full"></div>
                  </div>
                </div>

                {/* Volume Buttons */}
                <div className="absolute top-[20%] -left-1">
                  <div className="w-[3px] h-8 bg-gray-700 rounded-l-lg mb-2"></div>
                  <div className="w-[3px] h-8 bg-gray-700 rounded-l-lg"></div>
                </div>

                {/* Power Button */}
                <div className="absolute top-[20%] -right-1 w-[3px] h-12 bg-gray-700 rounded-r-lg"></div>

                {/* Screen */}
                <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden">
                  {/* Screen Glass Effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/10 to-gray-600/10 z-10"></div>
                  
                  {/* Video Container */}
                  <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden bg-black">
                    <video

                      className="w-full h-full"
                      autoPlay
                      loop
                      playsInline
                    >
                    {/* <source src={reel} type="video/mp4" /> */}
                      Your browser does not support the video tag.
                    </video>
                  </div>

                  {/* Screen Glare */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none"></div>
                </div>

                {/* Home Indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[100px] h-1 bg-white/30 rounded-full"></div>
              </div>

              {/* Background Glow Effect */}
              <div className="absolute -inset-x-20 -inset-y-10 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-[4rem] -z-10 blur-2xl"></div>
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
    </div>
  );
};

export default About;