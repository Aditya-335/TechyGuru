import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const CourseModule = ({ title, topics, index }) => {
    return (_jsxs("div", { className: "bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all hover:scale-105 opacity-0 animate-slide-up", style: { animationDelay: `${0.2 * index}s` }, children: [_jsx("h3", { className: "text-2xl font-semibold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent", children: title }), _jsx("ul", { className: "space-y-4", children: topics.map((topic, i) => (_jsxs("li", { className: "flex items-center gap-3", children: [_jsx("div", { className: "w-2 h-2 bg-purple-600 rounded-full" }), _jsx("span", { className: "text-lg text-gray-700", children: topic })] }, i))) })] }));
};
