import { Mail, Phone, MapPin } from 'lucide-react';
import { ContactForm } from './ContactForm';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="text-purple-600" />,
      title: "Email",
      content: "techyguruacademy@gmail.com"
    },
    {
      icon: <Phone className="text-purple-600" />,
      title: "Phone",
      content: "+91 74200 09855"
    },
    {
      icon: <MapPin className="text-purple-600" />,
      title: "Location",
      content: "BT Kawade Rd, Dombi Wadi, Ghorpadi, Pune, Maharashtra"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll
            respond as soon as possible.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="space-y-8 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="p-3 bg-purple-50 rounded-lg">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{info.title}</h3>
                    <p className="text-gray-600">{info.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-50 p-8 rounded-2xl">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;