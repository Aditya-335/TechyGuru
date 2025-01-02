import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ArrowRight, Code2, TestTube, Users } from 'lucide-react';
import { FeatureIcon } from './ui/FeatureIcon';
import { useNavigate } from 'react-router-dom';
const Hero = () => {
    const navigate = useNavigate();
    const features = [
        { icon: _jsx(TestTube, { size: 32 }), label: 'Manual Testing' },
        { icon: _jsx(Code2, { size: 32 }), label: 'Automation Testing' },
        { icon: _jsx(Users, { size: 32 }), label: 'Corporate Training' },
    ];
    const handleNavigation = (path) => {
        navigate(path);
    };
    const size = Math.random() * 70 + 96;
    return (_jsxs("section", { id: "home", className: "min-h-5 md:min-h-screen relative overflow-hidden flex items-center justify-center py-20 px-4", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-300 to-pink-400 animate-gradient opacity-50 z-0" }), _jsx("div", { className: "absolute inset-0 overflow-hidden z-0", children: [...Array(15)].map((_, i) => (_jsx("div", { className: "absolute animate-float hidden md:block", style: {
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 2}s`,
                        animationDuration: `${Math.random() * 4 + 2}s`,
                    }, children: _jsx("div", { className: "rounded-full bg-gradient-to-br from-blue-400 to-purple-400 opacity-10", style: {
                            width: `${size}px`,
                            height: `${size}px`,
                        } }) }, i))) }), _jsxs("div", { className: "max-w-7xl mx-auto relative z-10 w-full", children: [_jsxs("div", { className: "text-center", children: [_jsxs("h1", { className: "text-5xl pt-10 sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 opacity-0 animate-slide-up", style: { animationDelay: '0.2s' }, children: [_jsx("span", { className: "bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent", children: "Master Software Engineering" }), _jsx("br", {}), _jsx("span", { className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl block mt-2", children: "with TechyGuru Academy" })] }), _jsx("p", { className: "text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 mb-8 md:mb-10 max-w-3xl mx-auto px-4 opacity-0 animate-slide-up", style: { animationDelay: '0.4s' }, children: "Transform your career with industry-leading courses in Manual Testing, Automation Testing, and more." }), _jsxs("div", { className: "flex flex-wrap justify-center gap-4 sm:gap-6 mb-8 md:mb-12 opacity-0 animate-slide-up", style: { animationDelay: '0.6s' }, children: [_jsxs("button", { onClick: () => handleNavigation('/enroll'), className: "text-base sm:text-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-10 py-3 sm:py-5 rounded-full hover:opacity-90 transition-all hover:scale-105 flex items-center justify-center gap-2 group w-auto", children: ["Get Started", _jsx(ArrowRight, { className: "group-hover:translate-x-1 transition-transform w-5 h-5 sm:w-6 sm:h-6" })] }), _jsx("button", { onClick: () => handleNavigation('/about'), className: "text-base sm:text-lg border-2 border-purple-600 text-purple-600 px-6 sm:px-10 py-3 sm:py-5 rounded-full hover:bg-purple-50 transition-all hover:scale-105 w-auto", children: "Learn More" })] })] }), _jsx("div", { className: "flex flex-wrap justify-center items-center gap-4 sm:gap-8 pt-5 opacity-0 animate-slide-up", style: { animationDelay: '0.8s' }, children: features.map((item, index) => (_jsx(FeatureIcon, Object.assign({}, item, { index: index }), index))) })] })] }));
};
export default Hero;
