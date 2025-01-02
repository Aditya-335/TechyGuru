import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Code2, GitBranch, Terminal, } from 'lucide-react';
import { ServiceHero } from '../Components/service/ServiceHero';
import { CourseModule } from '../Components/service/CourseModule';
import { FeatureCard } from '../Components/service/FeatureCard';
import { CTASection } from '../Components/service/CTASection';
const AutomationTesting = () => {
    const features = [
        {
            icon: Code2,
            title: "Selenium with Java",
            description: "Master Selenium WebDriver with Java programming fundamentals"
        },
        {
            icon: GitBranch,
            title: "CI/CD Integration",
            description: "Learn to integrate automated tests with CI/CD pipelines"
        },
        {
            icon: Terminal,
            title: "Framework Design",
            description: "Build robust test automation frameworks from scratch"
        }
    ];
    const modules = [
        {
            title: "Java Programming Essentials",
            topics: [
                "Core Java Concepts",
                "Object-Oriented Programming",
                "Exception Handling",
                "Collections Framework"
            ]
        },
        {
            title: "Selenium WebDriver",
            topics: [
                "WebDriver Architecture",
                "Element Locators",
                "Advanced Interactions",
                "Wait Strategies"
            ]
        },
        {
            title: "Test Automation Framework",
            topics: [
                "TestNG Framework",
                "Page Object Model",
                "Data-Driven Testing",
                "Report Generation"
            ]
        }
    ];
    return (_jsxs("div", { className: "min-h-screen bg-white", children: [_jsx(ServiceHero, { title: "Automation Testing Course", description: "Learn advanced test automation with Selenium and Java", image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200" }), _jsx("section", { className: "py-20 bg-gradient-to-br from-blue-50 to-purple-50", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl font-bold mb-4", children: "Course Features" }), _jsx("p", { className: "text-xl text-gray-600", children: "Master automation testing with industry-standard tools" })] }), _jsx("div", { className: "grid md:grid-cols-3 gap-8", children: features.map((feature, index) => (_jsx(FeatureCard, Object.assign({}, feature, { index: index }), index))) })] }) }), _jsx("section", { className: "py-20", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl font-bold mb-4", children: "Course Modules" }), _jsx("p", { className: "text-xl text-gray-600", children: "Comprehensive automation testing curriculum" })] }), _jsx("div", { className: "grid md:grid-cols-3 gap-8", children: modules.map((module, index) => (_jsx(CourseModule, Object.assign({}, module, { index: index }), index))) })] }) }), _jsx(CTASection, { title: "Launch Your Automation Testing Career", description: "Master test automation with our comprehensive Selenium with Java course" })] }));
};
export default AutomationTesting;
