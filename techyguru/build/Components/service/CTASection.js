import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const CTASection = ({ title, description }) => {
    return (_jsx("section", { className: "bg-gradient-to-br from-purple-900 to-blue-900 text-white py-20", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: [_jsx("h2", { className: "text-4xl font-bold mb-6", children: title }), _jsx("p", { className: "text-xl text-gray-200 mb-8 max-w-2xl mx-auto", children: description })] }) }));
};
