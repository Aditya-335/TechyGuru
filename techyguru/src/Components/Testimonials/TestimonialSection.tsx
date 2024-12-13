import React from 'react';
import { TestimonialCard } from './TestimonialCard';
import { testimonialData } from './testimonialData';

const TestimonialSection = () => {
  return (
    <section id="testimonials" className="h-[100vh] flex items-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-6">Student Success Stories</h2>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            Hear from our graduates who have successfully transformed their careers
            through our training programs
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonialData.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;