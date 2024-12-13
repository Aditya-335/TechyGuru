import React from 'react';
import { ContactInfo } from './ContactInfo';
import { ContactForm } from './ContactForm';
import { contactData } from './contactData';

const ContactSection = () => {
  return (
    <section id="contact" className="h-[100vh] flex items-center bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-6">Get in Touch</h2>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll
            respond as soon as possible.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <ContactInfo contactData={contactData} />
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;