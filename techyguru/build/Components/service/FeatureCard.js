import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const FeatureCard = ({ icon: Icon, title, description, index }) => {
    return (_jsxs("div", { className: "bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105 opacity-0 animate-slide-up flex flex-col items-center text-center", style: { animationDelay: `${0.2 * index}s` }, children: [_jsx("div", { className: "w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white mb-6", children: _jsx(Icon, { size: 32 }) }), _jsx("h3", { className: "text-2xl font-semibold mb-4", children: title }), _jsx("p", { className: "text-lg text-gray-600", children: description })] }));
};
