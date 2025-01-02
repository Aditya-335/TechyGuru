import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Mail, Phone, MapPin } from 'lucide-react';
import { ContactForm } from './ContactForm';
const Contact = () => {
    const contactInfo = [
        {
            icon: _jsx(Mail, { className: "text-purple-600" }),
            title: "Email",
            content: "techyguruacademy@gmail.com"
        },
        {
            icon: _jsx(Phone, { className: "text-purple-600" }),
            title: "Phone",
            content: "+91 74200 09855"
        },
        {
            icon: _jsx(MapPin, { className: "text-purple-600" }),
            title: "Location",
            content: "BT Kawade Rd, Dombi Wadi, Ghorpadi, Pune, Maharashtra"
        }
    ];
    return (_jsx("section", { id: "contact", className: "py-20 bg-white", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl font-bold mb-4", children: "Get in Touch" }), _jsx("p", { className: "text-xl text-gray-600 max-w-2xl mx-auto", children: "Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible." })] }), _jsxs("div", { className: "grid md:grid-cols-2 gap-12", children: [_jsx("div", { children: _jsx("div", { className: "space-y-8 mb-8", children: contactInfo.map((info, index) => (_jsxs("div", { className: "flex items-start gap-4", children: [_jsx("div", { className: "p-3 bg-purple-50 rounded-lg", children: info.icon }), _jsxs("div", { children: [_jsx("h3", { className: "font-semibold mb-1", children: info.title }), _jsx("p", { className: "text-gray-600", children: info.content })] })] }, index))) }) }), _jsx("div", { className: "bg-gray-50 p-8 rounded-2xl", children: _jsx(ContactForm, {}) })] })] }) }));
};
export default Contact;
