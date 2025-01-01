import React, { useState } from 'react';
import { ArrowRight, Calendar, MapPin, User, Mail, Phone, BookOpen, Info } from 'lucide-react';
import axios from 'axios';

const courses = [
  "Manual Testing with JIRA",
  "Automation Testing with Selenium",
  "Corporate Training Program",
  "Complete Software Testing Bundle"
];

const referralSources = [
  "Google Search",
  "Social Media",
  "Friend/Family",
  "Professional Network",
  "Online Review",
  "Other"
];

const Enroll : React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    courseInterest: '',
    gender: '',
    dob: '',
    city: '',
    referralSource: ''
  });

  
  const [loading, setLoading] = useState(false); // Track loading state
  const [responseMessage, setResponseMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when submission starts
    setResponseMessage('');
    setErrorMessage('');

    try {
      console.log('Submitting form data:', formData);
      const response = await axios.post('http://localhost:5000/enroll', formData);
      console.log('Server response:', response.data);
      setResponseMessage(response.data.message);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        courseInterest: '',
        gender: '',
        dob: '',
        city: '',
        referralSource: ''
      })
    } catch (error: unknown) {
      // Type the error explicitly
      if (axios.isAxiosError(error) && error.response) {
        setErrorMessage(error.response.data?.message || 'An error occurred');
      } else {
        setErrorMessage('An unexpected error occurred');
      }
      console.error('Error occurred:', error);
    } finally {
      setLoading(false); // Reset loading state when submission finishes
    }
  };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <section className="h-[40vh] relative flex items-center justify-center bg-gradient-to-br from-purple-900 to-blue-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 to-blue-900/90"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-up">Begin Your Journey</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Take the first step towards becoming a software testing professional
          </p>
        </div>
      </section>

      {/* Enrollment Form */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl p-8 md:p-12 space-y-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Required Fields */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-2">
                  {/* <Info className="text-purple-600" /> */}
                  
                </h2>

                <div>
                  <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                    <User className="text-purple-600" size={18} />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                    <Mail className="text-purple-600" size={18} />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                    <Phone className="text-purple-600" size={18} />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                    <BookOpen className="text-purple-600" size={18} />
                    Course Interest *
                  </label>
                  <select
                    name="courseInterest"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all"
                    value={formData.courseInterest}
                    onChange={handleChange}
                  >
                    <option value="">Select a course</option>
                    {courses.map((course, index) => (
                      <option key={index} value={course}>{course}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Optional Fields */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-2">
                  {/* <Info className="text-purple-600" /> */}
                  {/* Additional Information */}
                </h2>

                <div>
                  <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                    <User className="text-purple-600" size={18} />
                    Gender
                  </label>
                  <select
                    name="gender"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all"
                    value={formData.gender}
                    onChange={handleChange}
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    <option value="prefer-not-to-say">Prefer not to say</option>
                  </select>
                </div>

                <div>
                  <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                    <Calendar className="text-purple-600" size={18} />
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    name="dob"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all"
                    value={formData.dob}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                    <MapPin className="text-purple-600" size={18} />
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all"
                    placeholder="Enter your city"
                    value={formData.city}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                    <Info className="text-purple-600" size={18} />
                    How Did You Hear About Us?
                  </label>
                  <select
                    name="referralSource"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all"
                    value={formData.referralSource}
                    onChange={handleChange}
                  >
                    <option value="">Select source</option>
                    {referralSources.map((source, index) => (
                      <option key={index} value={source}>{source}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all flex items-center justify-center gap-2 group ${
                  loading
                    ? 'opacity-70 cursor-not-allowed' // Apply this when loading is true
                    : 'hover:opacity-90 hover:scale-105' // Apply this when loading is false
                }`}
                disabled={loading}
              >
                {loading ? (
                    <span>
                      <span className="spinner"></span> Submitting...
                    </span>
                  ) : (
                    <div className="flex items-center space-x-2">
                    Submit Application<ArrowRight className="group-hover:translate-x-1 transition-transform"  />
                    </div>
                  )}
                
                
              </button>
            </div>
          </form>
          {responseMessage && <p style={{ color: 'green' }}>{responseMessage}</p>}
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </div>
      </section>
    </div>
  );
};

export default Enroll;