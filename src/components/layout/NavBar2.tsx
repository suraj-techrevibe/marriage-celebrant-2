import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/logo/nirava_logo.png";

interface NavItem {
  name: string;
  to: string;
}

const NavBar2: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const leftLinks: NavItem[] = [
    { name: "Home", to: "/" },
    { name: "About Us", to: "/about" },
    { name: "Our Services", to: "/service" },
  ];

  const rightLinks: NavItem[] = [
    { name: "Gallery", to: "/gallery" },
    { name: "FAQ", to: "/faq" },
    { name: "Contact Us", to: "/contact" },
  ];

  const allLinks: NavItem[] = [...leftLinks, ...rightLinks];

  const navLinkStyle = ({ isActive }: { isActive: boolean }) =>
    `
    font-semibold transition-all duration-300
    ${scrolled ? "text-sm" : "text-base"}
  `;

  return (
    <header
    className={`fixed top-0 left-0 right-0 z-[999] transition-all ${
      scrolled
        ? "bg-white/95 backdrop-blur shadow-md"
        : "bg-white"
    }`}
    style={{
      borderBottom: "1px solid",
      borderImage:
        "linear-gradient(to right, transparent, var(--color-primary), transparent) 1",
    }}
  >
      {/* ===== Desktop Nav ===== */}
      <div className="hidden md:flex max-w-6xl mx-auto justify-between items-center py-4">

        {/* Left Links */}
        <ul className="flex items-center pl-24 gap-16">
          {leftLinks.map((link) => (
            <li key={link.name}>
            <NavLink
  to={link.to}
  onClick={() => setIsOpen(false)}
  className={({ isActive }) =>
    `group relative font-semibold transition-all duration-300 ${
      scrolled ? "text-sm" : "text-base"
    }`
  }
  style={({ isActive }) => ({
    color: isActive
      ? "var(--color-primary)"
      : "var(--color-text-main)",
  })}
>
  {({ isActive }) => (
    <span className="relative inline-block">
      {link.name}

      {/* Animated underline */}
      <span
        className={`absolute left-0 -bottom-1 h-[2px] transition-all duration-300`}
        style={{
          width: isActive ? "100%" : "0%",
          background: "var(--color-primary)",
        }}
      />

      {/* Hover effect */}
      <span
        className="absolute left-0 -bottom-1 h-[2px] w-0 group-hover:w-full transition-all duration-300"
        style={{ background: "var(--color-primary)" }}
      />
    </span>
  )}
</NavLink>
            </li>
          ))}
        </ul>

        {/* Center Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="Nirava"
            className={`transition-all duration-500 ${
              scrolled ? "h-12" : "h-24"
            }`}
          />
        </Link>

        {/* Right Links */}
        <ul className="flex items-start pr-36 gap-16">
          {rightLinks.map((link) => (
            <li key={link.name}>
             <NavLink
  to={link.to}
  onClick={() => setIsOpen(false)}
  className={({ isActive }) =>
    `
    relative font-semibold transition-all duration-300
    ${scrolled ? "text-sm" : "text-base"}
    ${isActive ? "after:w-full" : ""}
  
    after:content-['']
    after:absolute
    after:left-0
    after:-bottom-1
    after:h-[2px]
    after:w-0
    after:bg-[var(--color-primary)]
    after:transition-all
    after:duration-300
    hover:after:w-full
  `
  }
  style={({ isActive }) => ({
    color: isActive
      ? "var(--color-primary)"
      : "var(--color-text-main)",
  })}
>
  {link.name}
</NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* ===== Mobile Top Bar ===== */}
      <div className="md:hidden flex items-center justify-between px-6 py-4">
        <Link to="/">
          <img src={logo} alt="Nirava" className="h-16 w-auto" />
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl font-bold"
          style={{ color: "var(--color-text-main)" }}
        >
          {isOpen ? "X" : "≡"}
        </button>
      </div>

      {/* ===== Mobile Overlay ===== */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          style={{ background: "rgba(0,0,0,0.4)" }}
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* ===== Mobile Drawer ===== */}
      <div
        className={`fixed top-0 right-0 w-64 h-screen bg-white shadow-xl z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          <ul className="flex flex-col space-y-4">
            {allLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `${navLinkStyle({ isActive })}`
                  }
                  style={({ isActive }) => ({
                    color: isActive
                      ? "var(--color-primary)"
                      : "var(--color-text-main)",
                    textDecoration: isActive ? "underline" : "none",
                    textUnderlineOffset: "6px",
                  })}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default NavBar2;