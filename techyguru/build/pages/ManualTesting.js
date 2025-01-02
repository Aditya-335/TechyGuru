import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { TestTube, CheckCircle, Users } from 'lucide-react';
import { ServiceHero } from '../Components/service/ServiceHero';
import { CourseModule } from '../Components/service/CourseModule';
import { FeatureCard } from '../Components/service/FeatureCard';
import { CTASection } from '../Components/service/CTASection';
const ManualTesting = () => {
    const features = [
        {
            icon: TestTube,
            title: "Hands-on Practice",
            description: "Real-world testing scenarios and projects using JIRA and SPIRATEST"
        },
        {
            icon: CheckCircle,
            title: "Industry Standards",
            description: "Learn testing methodologies aligned with current industry practices"
        },
        {
            icon: Users,
            title: "Expert Guidance",
            description: "Learn from experienced testing professionals with proven track records"
        }
    ];
    const modules = [
        {
            title: "Software Testing Fundamentals",
            topics: [
                "Introduction to Software Testing",
                "Testing Life Cycle (STLC)",
                "Testing Types and Levels",
                "Test Case Design Techniques"
            ]
        },
        {
            title: "JIRA for Test Management",
            topics: [
                "JIRA Project Setup",
                "Issue Tracking and Management",
                "Test Case Management",
                "Defect Lifecycle Management"
            ]
        },
        {
            title: "SPIRATEST Mastery",
            topics: [
                "Test Planning and Organization",
                "Requirements Management",
                "Test Execution and Tracking",
                "Reporting and Analytics"
            ]
        }
    ];
    return (_jsxs("div", { className: "min-h-screen bg-white", children: [_jsx(ServiceHero, { title: "Manual Testing Certification", description: "Master the art of software testing with comprehensive training in JIRA and SPIRATEST", image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200" }), _jsx("section", { className: "py-20 bg-gradient-to-br from-blue-50 to-purple-50", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl font-bold mb-4", children: "Course Features" }), _jsx("p", { className: "text-xl text-gray-600", children: "Comprehensive training designed for aspiring test professionals" })] }), _jsx("div", { className: "grid md:grid-cols-3 gap-8", children: features.map((feature, index) => (_jsx(FeatureCard, Object.assign({}, feature, { index: index }), index))) })] }) }), _jsx("section", { className: "py-20", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl font-bold mb-4", children: "Course Modules" }), _jsx("p", { className: "text-xl text-gray-600", children: "Structured learning path to master manual testing" })] }), _jsx("div", { className: "grid md:grid-cols-3 gap-8", children: modules.map((module, index) => (_jsx(CourseModule, Object.assign({}, module, { index: index }), index))) })] }) }), _jsx(CTASection, { title: "Start Your Manual Testing Journey Today", description: "Join our comprehensive manual testing program and become a certified testing professional" })] }));
};
export default ManualTesting;
