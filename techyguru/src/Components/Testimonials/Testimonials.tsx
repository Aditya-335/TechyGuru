import { TestimonialCard } from './TestimonialCard';

const Testimonials = () => {
  const testimonials = [
    {
      index:1,
      name: "Sneha Singh",
      role: "QA Engineer at tcs",
      // image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150",
      content: "The Selenium automation course was exactly what I needed to advance my career. The hands-on projects and mentorship were invaluable.",
      rating: 5
    },
    {
      index:2,
      name: "Omkar Patil",
      role: "Test Lead at wipro",
      // image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150",
      content: "TechyGuru's manual testing course helped me understand the fundamentals thoroughly. Their JIRA and SPIRATEST training is top-notch.",
      rating: 5
    },
    {
      index:3,
      name: "Rakesh Sharma",
      role: "QA Analyst at Infosys",
      // image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150",
      content: "The corporate training program transformed our testing team. The customized curriculum addressed our specific needs perfectly.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Student Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from our graduates who have successfully transformed their careers
            through our training programs
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;