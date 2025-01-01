import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { ServiceHero } from "../Components/service/ServiceHero";
import { ContactForm } from "../Components/Contact/ContactForm";


const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "info@techyguru.academy",
      description: "We'll respond within 24 hours",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      description: "Mon-Fri from 9am to 6pm",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "123 Tech Street, Silicon Valley",
      description: "CA 94025, United States",
    },
    {
      icon: Clock,
      title: "Working Hours",
      content: "Monday to Friday",
      description: "9:00 AM - 6:00 PM",
    },
  ];
 


  return (
    <div className="min-h-screen bg-white">
      <ServiceHero
        title="Get in Touch"
        description="Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible."
        image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200"
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold mb-8">Contact Information</h2>
              <div className="grid sm:grid-cols-2 gap-8">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl transform hover:scale-105 transition-all"
                  >
                    <div className="bg-white p-3 rounded-xl w-fit mb-4">
                      <info.icon className="text-purple-600" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
                    <p className="text-gray-800 font-medium mb-1">
                      {info.content}
                    </p>
                    <p className="text-gray-600">{info.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
                <div className="flex space-x-4">
                  {["Facebook", "Twitter", "LinkedIn", "Instagram"].map(
                    ( index) => (
                      <a
                        key={index}
                        href="#"
                        className="bg-gradient-to-br from-blue-600 to-purple-600 p-3 rounded-full text-white hover:opacity-90 transition-all hover:scale-110"
                      >
                        <Send size={20} />
                      </a>
                    )
                  )}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Location</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visit our state-of-the-art training facility
            </p>
          </div>
          <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.6282365564086!2d-122.08374688469227!3d37.42199987982362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba02425dad8f%3A0x6c296c66619367e0!2sGoogleplex!5e0!3m2!1sen!2sus!4v1623164185539!5m2!1sen!2sus"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
