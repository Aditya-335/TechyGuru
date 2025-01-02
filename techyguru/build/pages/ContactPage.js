import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Mail, Phone, MapPin, ArrowRight, } from 'lucide-react';
import { ServiceHero } from '../Components/service/ServiceHero';
const Contact = () => {
    const contactInfo = [
        {
            icon: Mail,
            title: "Email Us",
            content: "techyguruacademy@gmail.com",
            description: "We'll respond within 24 hours"
        },
        {
            icon: Phone,
            title: "Call Us",
            content: "+91 74200 09855",
            description: "Give us a call for a fast response"
        },
        {
            icon: MapPin,
            title: "Visit Us",
            content: "BT Kawade Rd, Dombi Wadi, Ghorpadi, Pune, Maharashtra",
            description: "411001, India"
        },
        // {
        //   icon: Clock,
        //   title: "Working Hours",
        //   content: "Monday to Friday",
        //   description: "9:00 AM - 6:00 PM"
        // }
    ];
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
    };
    return (_jsxs("div", { className: "min-h-screen bg-white", children: [_jsx(ServiceHero, { title: "Get in Touch", description: "Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200" }), _jsx("section", { className: "py-20", children: _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "grid lg:grid-cols-2 gap-16", children: [_jsxs("div", { children: [_jsx("h2", { className: "text-4xl font-bold mb-8", children: "Contact Information" }), _jsx("div", { className: "grid sm:grid-cols-2 gap-8", children: contactInfo.map((info, index) => (_jsxs("div", { className: "bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl transform hover:scale-105 transition-all", children: [_jsx("div", { className: "bg-white p-3 rounded-xl w-fit mb-4", children: _jsx(info.icon, { className: "text-purple-600", size: 24 }) }), _jsx("h3", { className: "text-xl font-semibold mb-2", children: info.title }), _jsx("p", { className: "text-gray-800 font-medium mb-1", children: info.content }), _jsx("p", { className: "text-gray-600", children: info.description })] }, index))) })] }), _jsxs("div", { className: "bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl", children: [_jsx("h2", { className: "text-3xl font-bold mb-8", children: "Send us a Message" }), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Full Name" }), _jsx("input", { type: "text", className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all", placeholder: "John Doe", required: true })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Email" }), _jsx("input", { type: "email", className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all", placeholder: "john@example.com", required: true })] })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Phone" }), _jsx("input", { type: "tel", className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all", placeholder: "+91 74200 09855", required: true })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Message" }), _jsx("textarea", { className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all min-h-[150px]", placeholder: "Your message...", required: true })] }), _jsxs("button", { type: "submit", className: "w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:opacity-90 transition-all hover:scale-105 flex items-center justify-center gap-2 group", children: ["Send Message", _jsx(ArrowRight, { className: "group-hover:translate-x-1 transition-transform" })] })] })] })] }) }) }), _jsx("section", { className: "py-20 bg-gradient-to-br from-blue-50 to-purple-50", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl font-bold mb-6", children: "Our Location" }), _jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: "Visit our state-of-the-art training facility" })] }), _jsx("div", { className: "aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-xl", children: _jsx("iframe", { src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.676379408727!2d73.9041669!3d18.5178149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1beadaa7d45%3A0x65b9ce17e2bd98b6!2sBhagwan%20Tatyasaheb%20Kawade%20Rd%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1702831500000!5m2!1sen!2sin", width: "100%", height: "500", style: { border: 0 }, allowFullScreen: true, loading: "lazy", referrerPolicy: "no-referrer-when-downgrade" }) })] }) })] }));
};
export default Contact;
