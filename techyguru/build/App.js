import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutPage';
import ContactUs from './pages/ContactPage';
import ManualTesting from './pages/ManualTesting';
import ScrollToTop from './Components/ScrollingWidget/ScrollToTop';
import AutomationTesting from './pages/AutomationTesting';
import CorporateTraining from './pages/CorporateTraining';
import Testimonials from './Components/Testimonials/Testimonials';
import Footer from './Components/Footer';
import Enroll from './pages/Enroll';
function App() {
    return (_jsxs("div", { className: "min-h-screen bg-white", children: [_jsxs(Router, { children: [_jsx(ScrollToTop, {}), _jsxs("div", { className: "App", children: [_jsx(Navbar, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/about", element: _jsx(AboutUs, {}) }), _jsx(Route, { path: "/contact", element: _jsx(ContactUs, {}) }), _jsx(Route, { path: "/testimonials", element: _jsx(Testimonials, {}) }), _jsx(Route, { path: "/services/manual-testing", element: _jsx(ManualTesting, {}) }), _jsx(Route, { path: "/services/automation-testing", element: _jsx(AutomationTesting, {}) }), _jsx(Route, { path: "/services/corporate-training", element: _jsx(CorporateTraining, {}) }), _jsx(Route, { path: "/enroll", element: _jsx(Enroll, {}) })] })] })] }), _jsx(Footer, {})] }));
}
export default App;
