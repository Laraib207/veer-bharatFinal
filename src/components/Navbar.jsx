"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import LogoLink from "@/components/LogoLink";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [viewerOpen, setViewerOpen] = useState(false);

  const navRef = useRef(null);
  const pdfPath = "/docs/pdf/brochure.pdf";

  // Navigation data
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
  ];

  const productsItems = [
    { href: "/products", label: "All Products" },
    { href: "/soyabean-oil", label: "Soyabean Oil" },
    { href: "/mustard-oil", label: "Mustard Oil" },
    { href: "/palm-oil", label: "Palm Oil" },
    { href: "/brand-rice", label: "Brand Rice" },
  ];

  const brochureItems = [
    { action: "view", label: "View Brochure" },
    { action: "download", label: "Download Brochure", href: pdfPath },
  ];

  const teamItems = [
    { href: "/team", label: "Our Team" },
    { href: "/gallery", label: "Gallery" },
    { href: "/Managing-Director", label: "Managing Director" },
  ];

  const additionalItems = [
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  // Scroll handler
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setActiveDropdown(null);
        setOpen(false);
        setViewerOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Body scroll lock for mobile
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeAll = () => {
    setOpen(false);
    setActiveDropdown(null);
  };

  const handleBrochureAction = (action) => {
    if (action === "view") setViewerOpen(true);
    closeAll();
  };

  const Dropdown = ({ items, isOpen, onClose }) => (
    <div className={`absolute top-full mt-2 left-1/2 transform -translate-x-1/2 min-w-[220px] rounded-xl bg-white/95 backdrop-blur-xl border border-white/20 shadow-2xl transition-all duration-300 z-[60] ${
      isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
    }`}>
      <ul className="py-2">
        {items.map((item, index) => (
          <li key={index}>
            {item.href ? (
              <LogoLink
                href={item.href}
                className="block px-5 py-3 text-[#082f63] hover:bg-gradient-to-r hover:from-purple-50/80 hover:to-blue-50/80 text-base font-medium transition-all duration-200 border-b border-gray-100/50 last:border-b-0"
                onClick={onClose}
              >
                {item.label}
              </LogoLink>
            ) : (
              <button
                onClick={() => handleBrochureAction(item.action)}
                className="w-full text-left px-5 py-3 text-[#082f63] hover:bg-gradient-to-r hover:from-purple-50/80 hover:to-blue-50/80 text-base font-medium transition-all duration-200 border-b border-gray-100/50 last:border-b-0"
              >
                {item.label}
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      <header
        ref={navRef}
        className={`w-full transition-all duration-500 border-b border-white/20 backdrop-blur-md z-50 ${
          scrolled 
            ? "fixed top-0 left-0 py-3 bg-[#DFC6F6]/95 shadow-lg" 
            : "relative py-4 bg-[#DFC6F6] shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo and Brand */}
            <div className="flex items-center space-x-3 flex-shrink-0">
              <LogoLink href="/" aria-label="Veer Bharat Home" className="block hover:scale-105 transition-transform duration-300">
                <div className="w-20 h-16 md:w-24 md:h-20 overflow-hidden relative">
                  <Image
                    src="/logo.png"
                    alt="Veer Bharat logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </LogoLink>
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-xl sm:text-2xl tracking-tight text-[#08348b]">
                  VEER BHARAT
                </span>
                <span className="italic text-xs sm:text-sm text-[#aa2266] font-medium">
                  वाह! मज़ा आ गया
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <NavLink key={item.href} href={item.href}>
                  {item.label}
                </NavLink>
              ))}

              {/* Products Dropdown */}
              <div className="relative">
                <DropdownButton
                  label="Products"
                  isOpen={activeDropdown === 'products'}
                  onClick={() => toggleDropdown('products')}
                />
                <Dropdown
                  items={productsItems}
                  isOpen={activeDropdown === 'products'}
                  onClose={closeAll}
                />
              </div>

              {/* Brochure Dropdown */}
              <div className="relative">
                <DropdownButton
                  label="Brochure"
                  isOpen={activeDropdown === 'brochure'}
                  onClick={() => toggleDropdown('brochure')}
                />
                <Dropdown
                  items={brochureItems}
                  isOpen={activeDropdown === 'brochure'}
                  onClose={closeAll}
                />
              </div>

              {/* Team Dropdown */}
              <div className="relative">
                <DropdownButton
                  label="Team"
                  isOpen={activeDropdown === 'team'}
                  onClick={() => toggleDropdown('team')}
                />
                <Dropdown
                  items={teamItems}
                  isOpen={activeDropdown === 'team'}
                  onClose={closeAll}
                />
              </div>

              {additionalItems.map((item) => (
                <NavLink key={item.href} href={item.href}>
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden relative w-12 h-12 flex flex-col items-center justify-center gap-1.5 focus:outline-none bg-white/30 rounded-xl backdrop-blur-sm hover:bg-white/50 transition-all duration-300 shadow-lg hover:shadow-xl z-50"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-0.5 bg-gradient-to-r from-[#08348b] to-[#aa2266] rounded-full transition-all duration-300 ${
                open ? "rotate-45 translate-y-2" : ""
              }`} />
              <span className={`block w-6 h-0.5 bg-gradient-to-r from-[#08348b] to-[#aa2266] rounded-full transition-all duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`} />
              <span className={`block w-6 h-0.5 bg-gradient-to-r from-[#08348b] to-[#aa2266] rounded-full transition-all duration-300 ${
                open ? "-rotate-45 -translate-y-2" : ""
              }`} />
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {open && (
          <div 
            className="lg:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            onClick={closeAll}
          />
        )}

        {/* Mobile Menu Content */}
        <div className={`lg:hidden fixed top-0 left-0 right-0 bottom-0 z-40 transition-all duration-500 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`} style={{ top: scrolled ? '80px' : '96px' }}>
          <div className={`absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-gradient-to-br from-[#DFC6F6] via-white to-[#f0e6ff] shadow-2xl transform transition-all duration-500 ease-out overflow-y-auto ${
            open ? "translate-x-0" : "translate-x-full"
          }`}>
            <div className="h-1 bg-gradient-to-r from-[#08348b] via-[#aa2266] to-[#08348b]" />
            
            <div className="px-6 py-8 space-y-2">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-[#08348b]">Navigation</h3>
                <div className="w-12 h-0.5 bg-gradient-to-r from-[#08348b] to-[#aa2266] rounded-full mx-auto mt-2" />
              </div>

              {navItems.map((item, index) => (
                <MobileLink
                  key={item.href}
                  href={item.href}
                  onClick={closeAll}
                  delay={index * 100}
                  isOpen={open}
                >
                  {item.label}
                </MobileLink>
              ))}

              <MobileDropdown
                label="Products"
                items={productsItems}
                isOpen={open}
                onClose={closeAll}
                delay={200}
              />

              <MobileDropdown
                label="Brochure"
                items={brochureItems}
                isOpen={open}
                onClose={closeAll}
                delay={300}
                isBrochure
                onBrochureAction={handleBrochureAction}
              />

              <MobileDropdown
                label="Team"
                items={teamItems}
                isOpen={open}
                onClose={closeAll}
                delay={400}
              />

              {additionalItems.map((item, index) => (
                <MobileLink
                  key={item.href}
                  href={item.href}
                  onClick={closeAll}
                  delay={500 + index * 100}
                  isOpen={open}
                >
                  {item.label}
                </MobileLink>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Brochure Modal */}
      {viewerOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setViewerOpen(false)}
          />
          <div className="relative w-full max-w-6xl h-[80vh] bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b bg-gradient-to-r from-[#DFC6F6] to-white">
              <h3 className="text-xl font-bold text-[#082f63]">Brochure Preview</h3>
              <div className="flex items-center gap-3">
                <a
                  href={pdfPath}
                  download
                  className="px-4 py-2 text-sm font-semibold rounded-lg bg-[#08348b] text-white hover:bg-[#1e4da8] transition-colors duration-200"
                >
                  Download
                </a>
                <button
                  onClick={() => setViewerOpen(false)}
                  className="px-4 py-2 text-sm font-semibold rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                >
                  Close
                </button>
              </div>
            </div>
            <iframe 
              src={`${pdfPath}#view=FitH`} 
              className="w-full h-full"
              title="Brochure Preview"
            />
          </div>
        </div>
      )}
    </>
  );
}

// Component Definitions
function NavLink({ href, children }) {
  return (
    <LogoLink
      href={href}
      className="px-4 py-2 text-[#082f63] font-medium rounded-lg hover:bg-white/40 transition-all duration-200 hover:scale-105 mx-1"
    >
      {children}
    </LogoLink>
  );
}

function DropdownButton({ label, isOpen, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-4 py-2 text-[#082f63] font-medium rounded-lg hover:bg-white/40 transition-all duration-200 mx-1"
    >
      {label}
      <ChevronIcon open={isOpen} />
    </button>
  );
}

function MobileLink({ href, children, onClick, delay, isOpen }) {
  return (
    <LogoLink
      href={href}
      className={`block px-5 py-4 rounded-xl text-[#08348b] font-semibold bg-white/60 hover:bg-white/90 transition-all duration-500 transform backdrop-blur-sm border border-white/30 ${
        isOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
      }`}
      style={{ transitionDelay: isOpen ? `${delay}ms` : '0ms' }}
      onClick={onClick}
    >
      {children}
    </LogoLink>
  );
}

function MobileDropdown({ label, items, isOpen, onClose, delay, isBrochure = false, onBrochureAction }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleItemClick = (item) => {
    if (isBrochure && item.action === 'view') {
      onBrochureAction('view');
    }
    onClose();
  };

  return (
    <div 
      className={`transition-all duration-500 transform ${
        isOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
      }`}
      style={{ transitionDelay: isOpen ? `${delay}ms` : '0ms' }}
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-5 py-4 text-left rounded-xl text-[#08348b] font-semibold bg-white/60 hover:bg-white/90 transition-all duration-200 backdrop-blur-sm border border-white/30 flex items-center justify-between"
      >
        {label}
        <ChevronIcon open={isExpanded} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${
        isExpanded ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
      }`}>
        <div className="pl-4 pr-2 space-y-2">
          {items.map((item, index) => (
            isBrochure && !item.href ? (
              <button
                key={index}
                onClick={() => handleItemClick(item)}
                className="w-full text-left px-4 py-3 rounded-lg text-[#08348b] font-medium bg-white/40 hover:bg-white/80 transition-all duration-200 border border-white/20"
              >
                {item.label}
              </button>
            ) : (
              <LogoLink
                key={item.href}
                href={item.href}
                className="block px-4 py-3 rounded-lg text-[#08348b] font-medium bg-white/40 hover:bg-white/80 transition-all duration-200 border border-white/20"
                onClick={onClose}
              >
                {item.label}
              </LogoLink>
            )
          ))}
        </div>
      </div>
    </div>
  );
}

function ChevronIcon({ open }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      className={`transition-transform duration-300 ${
        open ? "rotate-180" : ""
      }`}
    >
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}