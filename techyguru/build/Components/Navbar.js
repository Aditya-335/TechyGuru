import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/components/Navbar.tsx
import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import logo from '../assets/logo1.png';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null); // Type the ref
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const navigate = useNavigate();
    // Close dropdown if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    // Handle dropdown navigation and close menus
    const handleNavigation = (path) => {
        navigate(path);
        setIsOpen(false);
        setDropdownOpen(false);
        setMobileServicesOpen(false);
    };
    return (_jsxs("nav", { className: "fixed w-full z-50  bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 backdrop-blur-3xl shadow-lg", children: [_jsx("div", { className: "max-w-8xl px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "flex justify-between h-16", children: [_jsx("div", { className: "flex items-center", children: _jsx(Link, { to: "/", children: _jsx("img", { src: logo, alt: "", className: 'h-10' }) }) }), _jsxs("div", { className: "hidden md:flex items-center space-x-8", children: [_jsx(Link, { to: "/", className: "text-gray-300 hover:text-purple-600 transition-colors", children: "Home" }), _jsx(Link, { to: "/about", className: "text-gray-300 hover:text-purple-600 transition-colors", children: "About" }), _jsxs("div", { className: "relative", onClick: () => setDropdownOpen(!dropdownOpen), children: [_jsxs("div", { className: "text-gray-300 hover:text-purple-600 transition-colors cursor-pointer flex items-center", children: ["Services", dropdownOpen ? _jsx(ChevronUp, { size: 16, className: "ml-1" }) : _jsx(ChevronDown, { size: 16, className: "ml-1" })] }), dropdownOpen && (_jsxs("div", { ref: dropdownRef, className: "absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10", children: [_jsx("div", { onClick: () => handleNavigation('/services/manual-testing'), className: "block px-4 py-2 text-gray-700 bg-gray-50 hover:bg-gray-100 hover:text-purple-600 cursor-pointer", children: "Manual Testing" }), _jsx("div", { onClick: () => handleNavigation('/services/automation-testing'), className: "block px-4 py-2 text-gray-700 bg-slate-100 hover:bg-gray-100 hover:text-purple-600 cursor-pointer", children: "Automation Testing" }), _jsx("div", { onClick: () => handleNavigation('/services/corporate-training'), className: "block px-4 py-2 text-gray-700 bg-slate-50 hover:bg-gray-100 hover:text-purple-600 cursor-pointer", children: "Web Development & Analytics" })] }))] }), _jsx(Link, { to: "/contact", className: "text-gray-300 hover:text-purple-600 transition-colors", children: "Contact Us" }), _jsx(Link, { to: "/enroll", children: _jsx("button", { className: "bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity", children: "Get Started" }) })] }), _jsx("div", { className: "md:hidden flex items-center", children: _jsx("button", { onClick: () => setIsOpen(!isOpen), className: "text-gray-700", children: isOpen ? _jsx(X, { size: 24 }) : _jsx(Menu, { size: 24 }) }) })] }) }), isOpen && (_jsx("div", { className: "md:hidden", children: _jsxs("div", { className: "px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg", children: [_jsx(Link, { to: "/", className: "block px-3 py-2 text-gray-700 hover:text-purple-600", children: "Home" }), _jsx(Link, { to: "/about", className: "block px-3 py-2 text-gray-700 hover:text-purple-600", children: "About" }), _jsxs("div", { className: "relative", children: [_jsxs("div", { className: "flex justify-between items-center px-3 py-2 text-gray-700 hover:text-purple-600", onClick: () => setMobileServicesOpen(!mobileServicesOpen), children: [_jsx("span", { children: "Services" }), mobileServicesOpen ? _jsx(ChevronUp, { size: 20 }) : _jsx(ChevronDown, { size: 20 })] }), mobileServicesOpen && (_jsxs("div", { className: "pl-4 bg-gray-50", children: [_jsx("div", { onClick: () => handleNavigation('/services/manual-testing'), className: "block px-3 py-2 text-gray-700 hover:text-purple-600 cursor-pointer", children: "Manual Testing" }), _jsx("div", { onClick: () => handleNavigation('/services/automation-testing'), className: "block px-3 py-2 text-gray-700 hover:text-purple-600 cursor-pointer", children: "Automation Testing" }), _jsx("div", { onClick: () => handleNavigation('/services/corporate-training'), className: "block px-3 py-2 text-gray-700 hover:text-purple-600 cursor-pointer", children: "Web Development & Analytics" })] }))] }), _jsx(Link, { to: "/contact", className: "block px-3 py-2 text-gray-700 hover:text-purple-600", children: "Contact" }), _jsx("button", { onClick: () => handleNavigation('/enroll'), className: "w-full mt-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full", children: "Enroll Now" })] }) }))] }));
};
export default Navbar;
