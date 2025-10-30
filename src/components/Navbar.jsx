import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/WhatsApp Image 2025-08-14 at 01.30.11_60fbe58c.jpg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const links = [
    "Buy",
    "Sell",
    "Rent",
    "Commercial",
    "Our Services",
    "Contact",
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-700 ease-in-out ${
          scrolled
            ? "bg-black/40 backdrop-blur-lg shadow-[0_4px_24px_rgba(59,130,246,0.15)] border-b border-blue-500/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            
            {/* Logo with Glow Effect */}
            <Link 
              to="/" 
              className="relative z-50 group flex items-center gap-3"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>
                <img
                  src={logo}
                  alt="IndianAgency Logo"
                  className={`relative object-cover rounded-full border-2 border-blue-400/50 shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-700 group-hover:border-blue-400 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.8)] group-hover:scale-105 ${
                    scrolled ? "w-12 h-12 lg:w-14 lg:h-14" : "w-14 h-14 lg:w-16 lg:h-16"
                  }`}
                />
              </div>
              <span className={`hidden sm:block font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent transition-all duration-500 ${
                scrolled ? "text-lg lg:text-xl" : "text-xl lg:text-2xl"
              }`}>
                IndianAgency
              </span>
            </Link>

            {/* Desktop Navigation with Premium Styling */}
            <ul className="hidden lg:flex items-center gap-1 xl:gap-2">
              {links.map((item, index) => (
                <li key={item} className="relative group px-3 py-2">
                  <Link
                    to={`/${item.toLowerCase().replace(/\s/g, "")}`}
                    className="relative text-white/90 font-medium tracking-wide text-sm xl:text-base hover:text-white transition-all duration-300"
                  >
                    <span className="relative z-10">{item}</span>
                    
                    {/* Animated Background */}
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-cyan-500/0 to-blue-500/0 group-hover:from-blue-500/20 group-hover:via-cyan-500/20 group-hover:to-blue-500/20 rounded-lg transition-all duration-500 -z-0"></span>
                    
                    {/* Bottom Border Animation */}
                    <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 rounded-full transition-all duration-500 group-hover:w-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"></span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button with Animation */}
            <button
              className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center text-blue-400 hover:text-blue-300 transition-all duration-300 hover:scale-110 focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <div className="absolute inset-0 bg-blue-500/10 rounded-lg blur group-hover:bg-blue-500/20 transition-all duration-300"></div>
              {menuOpen ? (
                <FiX className="text-2xl relative z-10" />
              ) : (
                <FiMenu className="text-2xl relative z-10" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay with Premium Design */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ${
          menuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/70 backdrop-blur-2xl"
          onClick={toggleMenu}
        ></div>
        
        {/* Sliding Menu Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-4/5 sm:w-2/3 max-w-sm bg-gradient-to-br from-gray-900/95 via-black/95 to-gray-900/95 backdrop-blur-xl border-l border-blue-500/20 shadow-[-10px_0_50px_rgba(59,130,246,0.3)] transform transition-transform duration-500 ease-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-cyan-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-cyan-500/20 to-blue-600/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          
          {/* Menu Content */}
          <div className="relative h-full flex flex-col items-center justify-center gap-6 sm:gap-8 px-8 py-20">
            {links.map((item, index) => (
              <Link
                key={item}
                to={`/${item.toLowerCase().replace(/\s/g, "")}`}
                className={`relative group text-2xl sm:text-3xl font-medium text-white/90 hover:text-white transition-all duration-500 hover:scale-110 transform ${
                  menuOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                }`}
                style={{
                  transitionDelay: menuOpen ? `${index * 75}ms` : "0ms",
                }}
                onClick={toggleMenu}
              >
                <span className="relative z-10">{item}</span>
                
                {/* Glow Effect on Hover */}
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-cyan-500/0 to-blue-500/0 group-hover:from-blue-500/30 group-hover:via-cyan-500/30 group-hover:to-blue-500/30 blur-xl rounded-lg transition-all duration-500 -z-0"></span>
                
                {/* Underline */}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-500 group-hover:w-full shadow-[0_0_15px_rgba(59,130,246,0.9)]"></span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;