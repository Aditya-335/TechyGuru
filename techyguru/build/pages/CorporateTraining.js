import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Code, PieChart, TrendingUp } from 'lucide-react';
import { ServiceHero } from '../Components/service/ServiceHero';
import { CourseModule } from '../Components/service/CourseModule';
import { FeatureCard } from '../Components/service/FeatureCard';
import { CTASection } from '../Components/service/CTASection';
const WebDevelopmentAndAnalytics = () => {
    const features = [
        {
            icon: Code,
            title: "Modern Web Development",
            description: "Build responsive and scalable web applications."
        },
        {
            icon: PieChart,
            title: "Analytics Insights",
            description: "Turn data into actionable insights for better decision-making."
        },
        {
            icon: TrendingUp,
            title: "Performance Optimization",
            description: "Ensure top-notch performance and user experience."
        }
    ];
    const modules = [
        {
            title: "Web Development",
            topics: [
                "Frontend Development",
                "Backend Development",
                "API Integration",
                "Responsive Design"
            ]
        },
        {
            title: "Data Analytics",
            topics: [
                "Data Visualization",
                "Analytics Tools",
                "Dashboard Creation",
                "Predictive Analytics"
            ]
        },
        {
            title: "Optimization Techniques",
            topics: [
                "SEO Best Practices",
                "Performance Monitoring",
                "Code Optimization",
                "User Experience (UX) Testing"
            ]
        }
    ];
    return (_jsxs("div", { className: "min-h-screen bg-white", children: [_jsx(ServiceHero, { title: "Web Development & Analytics Solutions", description: "Empowering businesses with tailored web solutions and data-driven insights.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200" }), _jsx("section", { className: "py-20 bg-gradient-to-br from-blue-50 to-green-50", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl font-bold mb-4", children: "Service Features" }), _jsx("p", { className: "text-xl text-gray-600", children: "Comprehensive solutions for web development and analytics" })] }), _jsx("div", { className: "grid md:grid-cols-3 gap-8", children: features.map((feature, index) => (_jsx(FeatureCard, Object.assign({}, feature, { index: index }), index))) })] }) }), _jsx("section", { className: "py-20", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl font-bold mb-4", children: "Service Modules" }), _jsx("p", { className: "text-xl text-gray-600", children: "Flexible modules tailored to your needs" })] }), _jsx("div", { className: "grid md:grid-cols-3 gap-8", children: modules.map((module, index) => (_jsx(CourseModule, Object.assign({}, module, { index: index }), index))) })] }) }), _jsx(CTASection, { title: "Enhance Your Digital Presence", description: "Let us help you create impactful web solutions and harness the power of analytics." })] }));
};
export default WebDevelopmentAndAnalytics;
