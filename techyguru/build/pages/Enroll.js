import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { ArrowRight, Calendar, MapPin, User, Mail, Phone, BookOpen, Info } from 'lucide-react';
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
const Enroll = () => {
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
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
    };
    const handleChange = (e) => {
        setFormData(Object.assign(Object.assign({}, formData), { [e.target.name]: e.target.value }));
    };
    return (_jsxs("div", { className: "min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50", children: [_jsxs("section", { className: "h-[40vh] relative flex items-center justify-center bg-gradient-to-br from-purple-900 to-blue-900 overflow-hidden", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-purple-900/90 to-blue-900/90" }), _jsxs("div", { className: "relative z-10 text-center text-white px-4", children: [_jsx("h1", { className: "text-4xl md:text-6xl font-bold mb-6 animate-slide-up", children: "Begin Your Journey" }), _jsx("p", { className: "text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto animate-slide-up", style: { animationDelay: '0.2s' }, children: "Take the first step towards becoming a software engineering professional" })] })] }), _jsx("section", { className: "py-16 px-4", children: _jsx("div", { className: "max-w-4xl mx-auto", children: _jsxs("form", { onSubmit: handleSubmit, className: "bg-white rounded-3xl shadow-xl p-8 md:p-12 space-y-8 animate-slide-up", style: { animationDelay: '0.4s' }, children: [_jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [_jsxs("div", { className: "space-y-6", children: [_jsx("h2", { className: "text-2xl font-bold text-gray-800 mb-8 flex items-center gap-2" }), _jsxs("div", { children: [_jsxs("label", { className: "flex items-center gap-2 text-gray-700 font-medium mb-2", children: [_jsx(User, { className: "text-purple-600", size: 18 }), "Full Name *"] }), _jsx("input", { type: "text", name: "fullName", required: true, className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all", placeholder: "Enter your full name", value: formData.fullName, onChange: handleChange })] }), _jsxs("div", { children: [_jsxs("label", { className: "flex items-center gap-2 text-gray-700 font-medium mb-2", children: [_jsx(Mail, { className: "text-purple-600", size: 18 }), "Email Address *"] }), _jsx("input", { type: "email", name: "email", required: true, className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all", placeholder: "Enter your email", value: formData.email, onChange: handleChange })] }), _jsxs("div", { children: [_jsxs("label", { className: "flex items-center gap-2 text-gray-700 font-medium mb-2", children: [_jsx(Phone, { className: "text-purple-600", size: 18 }), "Phone Number *"] }), _jsx("input", { type: "tel", name: "phone", required: true, className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all", placeholder: "Enter your phone number", value: formData.phone, onChange: handleChange })] }), _jsxs("div", { children: [_jsxs("label", { className: "flex items-center gap-2 text-gray-700 font-medium mb-2", children: [_jsx(BookOpen, { className: "text-purple-600", size: 18 }), "Course Interest *"] }), _jsxs("select", { name: "courseInterest", required: true, className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all", value: formData.courseInterest, onChange: handleChange, children: [_jsx("option", { value: "", children: "Select a course" }), courses.map((course, index) => (_jsx("option", { value: course, children: course }, index)))] })] })] }), _jsxs("div", { className: "space-y-6", children: [_jsx("h2", { className: "text-2xl font-bold text-gray-800 mb-8 flex items-center gap-2" }), _jsxs("div", { children: [_jsxs("label", { className: "flex items-center gap-2 text-gray-700 font-medium mb-2", children: [_jsx(User, { className: "text-purple-600", size: 18 }), "Gender"] }), _jsxs("select", { name: "gender", className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all", value: formData.gender, onChange: handleChange, children: [_jsx("option", { value: "", children: "Select gender" }), _jsx("option", { value: "male", children: "Male" }), _jsx("option", { value: "female", children: "Female" }), _jsx("option", { value: "other", children: "Other" }), _jsx("option", { value: "prefer-not-to-say", children: "Prefer not to say" })] })] }), _jsxs("div", { children: [_jsxs("label", { className: "flex items-center gap-2 text-gray-700 font-medium mb-2", children: [_jsx(Calendar, { className: "text-purple-600", size: 18 }), "Date of Birth"] }), _jsx("input", { type: "date", name: "dob", className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all", value: formData.dob, onChange: handleChange })] }), _jsxs("div", { children: [_jsxs("label", { className: "flex items-center gap-2 text-gray-700 font-medium mb-2", children: [_jsx(MapPin, { className: "text-purple-600", size: 18 }), "City"] }), _jsx("input", { type: "text", name: "city", className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all", placeholder: "Enter your city", value: formData.city, onChange: handleChange })] }), _jsxs("div", { children: [_jsxs("label", { className: "flex items-center gap-2 text-gray-700 font-medium mb-2", children: [_jsx(Info, { className: "text-purple-600", size: 18 }), "How Did You Hear About Us?"] }), _jsxs("select", { name: "referralSource", className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all", value: formData.referralSource, onChange: handleChange, children: [_jsx("option", { value: "", children: "Select source" }), referralSources.map((source, index) => (_jsx("option", { value: source, children: source }, index)))] })] })] })] }), _jsx("div", { className: "pt-6", children: _jsxs("button", { type: "submit", className: "w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:opacity-90 transition-all hover:scale-105 flex items-center justify-center gap-2 group", children: ["Submit Application", _jsx(ArrowRight, { className: "group-hover:translate-x-1 transition-transform" })] }) })] }) }) })] }));
};
export default Enroll;
