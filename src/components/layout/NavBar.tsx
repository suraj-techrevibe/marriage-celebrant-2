import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import logo from "../../assets/logo/nirava_logo.png"; // adjust relative path

interface NavItem {
  name: string;
  to: string;
  isDropdown?: boolean;
  dropdownItems?: NavItem[];
}

const NavBar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // ========= Scroll detection =========
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ========= Nav Links =========
  const leftLinks: NavItem[] = [
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

  const rightLinks: NavItem[] = [
    { name: "Referral Form", to: "/referralform" },
    { name: "Contact Us", to: "/contact" },
  ];

  const allLinks: NavItem[] = [...leftLinks, ...rightLinks];

  // ========= Functions =========
  const navLinkStyle = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? `text-red-600 font-bold underline underline-offset-4 decoration-2 decoration-[#f26c18] transition-all duration-500 ${
          scrolled ? "text-sm" : "text-base"
        }`
      : `text-gray-700 hover:text-red-600 font-bold transition-all duration-500 ${
          scrolled ? "text-sm" : "text-base"
        }`;

  const handleLinkClick = (itemName: string, isMobile?: boolean) => {
    if (isMobile) setIsOpen(false);
    if (allLinks.find((l) => l.name === itemName)?.isDropdown) {
      setOpenDropdown(openDropdown === itemName ? null : itemName);
    } else {
      setOpenDropdown(null);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        scrolled ? "bg-white/95 shadow-md backdrop-blur" : "bg-white"
      }`}
    >
      {/* ===== Desktop Nav ===== */}
      <div className="hidden md:flex max-w-6xl mx-auto justify-between items-center py-4">
        {/* Left Links */}
        <ul className="flex items-center pl-24 gap-8">
          {leftLinks.map((link) => (
            <li key={link.name} className={`relative ${link.isDropdown ? "group" : ""}`}>
              <div
                className="flex items-center cursor-pointer"
                onClick={() => handleLinkClick(link.name)}
              >
                <NavLink
                  to={link.to}
                  className={navLinkStyle}
                  onClick={(e) => link.isDropdown && e.preventDefault()}
                >
                  {link.name}
                </NavLink>
                {link.isDropdown && (
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                      openDropdown === link.name ? "rotate-180" : ""
                    }`}
                  />
                )}
              </div>

              {/* Dropdown */}
              {link.dropdownItems && (
                <div className="absolute top-full left-0 mt-2 w-60 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-white shadow-xl rounded-xl z-50 py-2">
                  {link.dropdownItems.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.to}
                      className="block px-4 py-2 hover:bg-gray-50 text-gray-600 hover:text-red-600 font-semibold"
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Center Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="Nirava"
            className={`transition-all duration-500 ${scrolled ? "h-12" : "h-24"}`}
          />
        </Link>

        {/* Right Links */}
        <ul className="flex items-start pr-36 gap-8">
          {rightLinks.map((link) => (
            <li key={link.name}>
              <NavLink to={link.to} className={navLinkStyle}>
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
        <button onClick={() => setIsOpen(!isOpen)} className="text-2xl font-bold">
          {isOpen ? "X" : "≡"}
        </button>
      </div>

      {/* ===== Mobile Overlay ===== */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 z-40" onClick={() => setIsOpen(false)} />
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
                  className={navLinkStyle}
                  onClick={() => handleLinkClick(link.name, true)}
                >
                  {link.name}
                </NavLink>

                {/* Mobile Dropdown */}
                {link.dropdownItems && (
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openDropdown === link.name
                        ? "max-h-[500px] py-2 flex flex-col space-y-2"
                        : "max-h-0 py-0"
                    }`}
                  >
                    {link.dropdownItems.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.to}
                        className="block px-4 py-2 hover:bg-gray-50 text-gray-600 hover:text-red-600 font-semibold"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default NavBar;