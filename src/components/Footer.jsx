import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-amber-50 to-purple-100 border-t-4 border-purple-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-4 mb-8">
              <div className="relative w-16 h-16">
                <Image
                  src="/logo.png"
                  alt="Veer Bharat Logo"
                  width={64}
                  height={64}
                  className="object-contain"
                  priority
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
                  VEER BHARAT
                </h2>
                <p className="text-lg text-gray-700 font-medium mt-1">
                  वाह! मज़ा आ गया
                </p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              Premium quality edible oils crafted with traditional wisdom 
              and modern technology for healthier living.
            </p>
            
            {/* FSSAI Certification */}
            <div className="bg-white/80 rounded-xl p-5 border border-gray-200 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16">
                  <Image
                    src="/FSSAI_Logo.png"
                    alt="FSSAI Certified"
                    width={64}
                    height={64}
                    className="object-contain"
                    priority
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 mb-1">
                    FSSAI Certified
                  </p>
                  <p className="text-base font-bold text-gray-900">
                    10012022000234
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6 pb-3 border-b-2 border-purple-400">
              Our Products
            </h3>
            <ul className="space-y-4">
              {[
                { name: "Kachi Ghani Pure Mustard Oil", href: "/mustard-oil" },
                { name: "Soyabean Oil", href: "/soyabean-oil" },
                { name: "Sunflower Oil", href: "/sunflower-oil" },
                { name: "Rice Bran Oil", href: "/rice-bran-oil" }
              ].map((product) => (
                <li key={product.name}>
                  <Link
                    href={product.href}
                    className="text-gray-700 hover:text-purple-700 hover:translate-x-1 transition-all duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 group-hover:bg-purple-600 transition-colors"></span>
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6 pb-3 border-b-2 border-purple-400">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Recipes", href: "/recipes" },
                { name: "Contact Us", href: "/contact" },
                { name: "Blogs", href: "/blog" },
                { name: "Media", href: "/media" }
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-700 hover:text-purple-700 transition-colors duration-300 font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social Column */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6 pb-3 border-b-2 border-purple-400">
              Connect With Us
            </h3>
            
            {/* Contact Info */}
            <div className="mb-8">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 mt-1">📍</span>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    "Fortune House", Near Navrangpura Railway Crossing,<br />
                    Ahmedabad-380009, Gujarat (India)
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-purple-600">📞</span>
                  <div>
                    <a href="tel:8802000091" className="text-gray-700 hover:text-purple-700 transition-colors block">
                      +91 8802000091
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-purple-600">✉️</span>
                  <a 
                    href="mailto:info@arihantoilmills.com" 
                    className="text-gray-700 hover:text-purple-700 transition-colors text-sm break-all"
                  >
                    info@arihantoilmills.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-4">
                Follow Our Journey
              </p>
              <div className="flex gap-3">
                {[
                  { icon: "📘", label: "Facebook", href: "https://facebook.com" },
                  { icon: "🐦", label: "Twitter", href: "https://twitter.com" },
                  { icon: "💼", label: "LinkedIn", href: "https://linkedin.com" },
                  { icon: "📷", label: "Instagram", href: "https://instagram.com" },
                  { icon: "▶️", label: "YouTube", href: "https://youtube.com" },
                  { icon: "💬", label: "WhatsApp", href: "https://wa.me/918802000091", color: "bg-green-500 hover:bg-green-600" }
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-gray-800 text-white rounded-lg flex items-center justify-center hover:bg-purple-700 transition-all duration-300 transform hover:scale-110 ${social.color || ''}`}
                    aria-label={social.label}
                  >
                    <span className="text-sm">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-300">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-700 text-sm font-medium text-center md:text-left">
              © 2025 <span className="font-bold text-gray-900">VEER BHARAT</span>. 
              All rights reserved. Crafted with passion for quality.
            </p>
            <div className="flex gap-6 text-sm font-medium">
              <Link href="/privacy-policy" className="text-gray-600 hover:text-purple-700 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-600 hover:text-purple-700 transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-600 hover:text-purple-700 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;