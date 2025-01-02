import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Award, Users, BookOpen, Trophy } from 'lucide-react';
import { StatCard } from './ui/StatCard';
import { BulletPoint } from './ui/BulletPoint';
const About = () => {
    const stats = [
        { icon: _jsx(Users, { size: 28 }), value: "1000+", label: "Students Trained" },
        { icon: _jsx(BookOpen, { size: 28 }), value: "200+", label: "Hours of Training" },
        { icon: _jsx(Trophy, { size: 28 }), value: "98%", label: "Success Rate" },
        { icon: _jsx(Award, { size: 28 }), value: "50+", label: "Corporate Clients" }
    ];
    const bulletPoints = [
        "Industry-experienced instructors",
        "Hands-on practical training",
        "Real-world project experience",
        "Placement assistance",
        "Flexible learning schedule"
    ];
    return (_jsx("section", { id: "about", className: "min-h-screen flex items-center bg-white py-20 px-4", children: _jsx("div", { className: "max-w-7xl mx-auto w-full", children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center", children: [_jsxs("div", { className: "order-2 md:order-1 ", children: [_jsx("h2", { className: "text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-center md:text-left", children: "Why Choose TechyGuru Academy?" }), _jsx("p", { className: "text-base sm:text-lg md:text-xl text-gray-600 mb-6 md:mb-8 text-center md:text-left leading-relaxed", children: "At TechyGuru Academy, we're dedicated to transforming aspiring developers and testers into industry-ready professionals. Our comprehensive curriculum, hands-on projects, and expert instructors ensure you're well-prepared for real-world challenges." }), _jsx("ul", { className: "space-y-4 md:space-y-6 max-w-xl mx-auto md:mx-0", children: bulletPoints.map((point, index) => (_jsx(BulletPoint, { text: point }, index))) })] }), _jsx("div", { className: "grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 order-1 md:order-2", children: stats.map((stat, index) => (_jsx(StatCard, Object.assign({}, stat), index))) })] }) }) }));
};
export default About;
