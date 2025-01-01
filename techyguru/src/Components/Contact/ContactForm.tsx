import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import axios from "axios";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    Message: "",
  });

  const [loading, setLoading] = useState(false); // Track loading state
  const [responseMessage, setResponseMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when submission starts
    setResponseMessage("");
    setErrorMessage("");

    try {
      console.log("Submitting form data:", formData);
      const response = await axios.post(
        "http://localhost:5000/enroll",
        formData
      );
      console.log("Server response:", response.data);
      setResponseMessage(response.data.message);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        Message: "",
      });
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

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div >
      <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name
                          </label>
                          <input
                            type="text"
                            name="fullName"
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all"
                            placeholder="John Doe"
                            value={formData.fullName}
                            required
                            onChange={handleChange}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email
                          </label>
                          <input
                            name="email"
                            type="email"
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all"
                            placeholder="john@example.com"
                            value={formData.email}
                            required
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all"
                          placeholder="+91 74200 09855"
                          value={formData.phone}
                          required
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Message
                        </label>
                        <textarea
                          name="Message"
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all min-h-[150px]"
                          placeholder="Your message..."
                          value={formData.Message}
                          onChange={handleChange}
                          required
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all flex items-center justify-center gap-2 group ${
                          loading
                            ? "opacity-70 cursor-not-allowed" // Apply this when loading is true
                            : "hover:opacity-90 hover:scale-105" // Apply this when loading is false
                        }`}
                        disabled={loading}
                      >
                        {loading ? (
                          <span>
                            <span className="spinner"></span> Submitting...
                          </span>
                        ) : (
                          <div className="flex items-center space-x-2">
                            Submit Application
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                          </div>
                        )}
                      </button>
                    </form>
                    {responseMessage && (
                      <p style={{ color: "green" }}>{responseMessage}</p>
                    )}
                    {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </div>
  );
};