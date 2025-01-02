import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Input } from '../ui/Input';
import { TextArea } from '../ui/TextArea';
import { ArrowRight } from 'lucide-react';
export const ContactForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
    };
    return (_jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsx(Input, { label: "Full Name", type: "text", placeholder: "Enter your full name", required: true }), _jsx(Input, { label: "Email", type: "email", placeholder: "Enter your email", required: true }), _jsx(Input, { label: "Phone", type: "tel", placeholder: "Enter your phone number" }), _jsx(TextArea, { label: "Message", placeholder: "How can we help you?", required: true }), _jsxs("button", { type: "submit", className: "w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl text-lg font-semibold hover:opacity-90 transition-all hover:scale-105 flex items-center justify-center gap-2 group", children: ["Send Message", _jsx(ArrowRight, { className: "group-hover:translate-x-1 transition-transform" })] })] }));
};
