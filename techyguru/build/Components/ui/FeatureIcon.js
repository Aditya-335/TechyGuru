import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const FeatureIcon = ({ icon, index }) => (_jsxs("div", { className: "flex flex-col items-center animate-float", style: { animationDelay: `${index}s` }, children: [_jsx("div", { className: "w-16 h-16 bg-white/30 backdrop-blur-sm rounded-2xl flex items-center justify-center text-purple-600 mb-4 animate-pulse-glow", children: icon }), _jsx("span", { className: "text-gray-700 font-medium" })] }));
