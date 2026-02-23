import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "../global/navbar/NavBar";
import logo from "../../assets/logo/nirava_logo.png";

// Define Nav links
const leftLinks = [
  {
    name: "Our Services",
    to: "/services",
    isDropdown: true,
    dropdownItems: [
      { name: "Support Coordination", to: "/services/supportcoordination" },
      { name: "Supported Independent Living", to: "/services/supportindependlive" },
      { name: "Short-Term Accommodation", to: "/services/shortterm" },
      { name: "Medium-Term Accommodation", to: "/services/mediumterm" },
      { name: "In Home Support", to: "/services/inhomesupport" },
    ],
  },
  { name: "About Us", to: "/about" },
];

const rightLinks = [
  { name: "Referral Form", to: "/referralform" },
  { name: "Contact Us", to: "/contact" },
];

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all ${scrolled ? "bg-white/95 shadow-md backdrop-blur" : "bg-transparent"}`}>
      {/* Desktop Nav */}
      <div className="hidden md:flex max-w-6xl mx-auto justify-between items-center py-6 px-8">
        <NavBar links={leftLinks} isMobile={false} scrolled={scrolled} />
        <Link to="/">
          <img src={logo} alt="Nirava" className={`transition-all duration-500 ${scrolled ? "h-16" : "h-24"}`} />
        </Link>
        <NavBar links={rightLinks} isMobile={false} scrolled={scrolled} />
      </div>

      {/* Mobile Top Bar */}
      <div className="md:hidden flex items-center justify-between px-6 py-4">
        <Link to="/">
          <img src={logo} alt="Nirava" className="h-16 w-auto" />
        </Link>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "X" : "≡"}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 z-40" onClick={() => setIsOpen(false)} />
      )}
      <div className={`fixed top-0 right-0 w-64 h-screen bg-white shadow-xl z-50 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="p-6">
          <NavBar  links={[...leftLinks, ...rightLinks]} isMobile closeMobileMenu={() => setIsOpen(false)} scrolled={false} />
        </div>
      </div>
    </header>
  );
};

export default Header;