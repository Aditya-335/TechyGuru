import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Facebook, Instagram } from 'lucide-react';
const Footer = () => {
    const currentYear = new Date().getFullYear();
    const quickLinks = [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Services', href: '#services' },
        { label: 'Testimonials', href: '/testimonials' },
        { label: 'Contact', href: '/contact' }
    ];
    const courses = [
        { label: 'Manual Testing', href: '/services/manual-testing' },
        { label: 'Automation Testing', href: '/services/automation-testing' },
        { label: 'Corporate Training', href: '/services/corporate-training' },
    ];
    const socials = [
        { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61570153401488&mibextid=ZbWKwL', label: 'Facebook' },
        { icon: Instagram, href: 'https://www.instagram.com/techyguruacademy/profilecard/?igsh=b2Rkc2E4czIzc3F6', label: 'Instagram' }
    ];
    return (_jsx("footer", { className: "bg-gradient-to-br from-gray-900 to-purple-900 text-white py-16", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "grid md:grid-cols-4 gap-12 mb-12", children: [_jsxs("div", { children: [_jsx("h3", { className: "text-2xl font-bold mb-6", children: "TechyGuru Academy" }), _jsx("p", { className: "text-gray-300 leading-relaxed text-lg", children: "Empowering the next generation of software testing professionals through comprehensive training and hands-on experience." })] }), _jsxs("div", { children: [_jsx("h4", { className: "text-xl font-semibold mb-6", children: "Quick Links" }), _jsx("ul", { className: "space-y-4", children: quickLinks.map((link, index) => (_jsx("li", { children: _jsx("a", { href: link.href, className: "text-gray-300 hover:text-white transition-colors inline-block text-lg", children: link.label }) }, index))) })] }), _jsxs("div", { children: [_jsx("h4", { className: "text-xl font-semibold mb-6", children: "Courses" }), _jsx("ul", { className: "space-y-4", children: courses.map((course, index) => (_jsx("li", { children: _jsx("a", { href: course.href, className: "text-gray-300 hover:text-white transition-colors inline-block text-lg", children: course.label }) }, index))) })] }), _jsxs("div", { children: [_jsx("h4", { className: "text-xl font-semibold mb-6", children: "Connect With Us" }), _jsx("div", { className: "flex space-x-4", children: socials.map((social, index) => (_jsx("a", { href: social.href, className: "bg-gray-800/50 p-3 rounded-full hover:bg-gray-700 transition-colors hover:scale-110 transform", "aria-label": social.label, children: _jsx(social.icon, { size: 24 }) }, index))) })] })] }), _jsx("div", { className: "border-t border-gray-800 pt-8 text-center", children: _jsxs("p", { className: "text-gray-400 text-lg", children: ["\u00A9 ", currentYear, " TechyGuru Academy. All rights reserved."] }) })] }) }));
};
export default Footer;
