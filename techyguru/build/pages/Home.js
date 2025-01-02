import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import About from '../Components/About';
import Services from '../Components/Services';
import CTASection from '../Components/CTASection';
import Testimonials from '../Components/Testimonials/Testimonials';
import Contact from '../Components/Contact/Contact';
function Home() {
    return (_jsxs("div", { className: "min-h-screen bg-white", children: [_jsx(Navbar, {}), _jsx(Hero, {}), _jsx(About, {}), _jsx(Services, {}), _jsx(Testimonials, {}), _jsx(CTASection, { title: "Join TechyGuru Academy", description: "Unlock your full potential with our courses on Manual and Automation Testing, and Corporate Training." }), _jsx(Contact, {})] }));
}
export default Home;
