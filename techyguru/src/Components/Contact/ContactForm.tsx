import React from 'react';
import { Input } from '../ui/Input';
import { TextArea } from '../ui/TextArea';

export const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        label="Full Name"
        type="text"
        placeholder="Enter your full name"
        required
      />
      <Input
        label="Email"
        type="email"
        placeholder="Enter your email"
        required
      />
      <Input
        label="Phone"
        type="tel"
        placeholder="Enter your phone number"
      />
      <TextArea
        label="Message"
        placeholder="How can we help you?"
        required
      />
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:opacity-90 transition-opacity"
      >
        Send Message
      </button>
    </form>
  );
};