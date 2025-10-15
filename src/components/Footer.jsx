import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="relative overflow-hidden border-t-4 border-purple-300"
      style={{
        background: "linear-gradient(to right, #fef9c3 0%, #DFC6F6 100%)",
        minHeight: "40vh",
      }}
    >
      <div className="max-w-7xl mx-auto px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* LEFT COLUMN: Products */}
          <div>
            <h3 className="text-gray-900 font-extrabold text-2xl mb-5 pb-2 border-b-3 border-gray-800 inline-block">
              Products
            </h3>
            <ul className="space-y-3 mt-6">
              <li>
                <Link
                  href="/mustard-oil"
                  className="text-gray-800 text-lg font-bold hover:text-purple-700 transition-colors duration-200"
                >
                  Kachi Ghani Pure Mustard Oil
                </Link>
              </li>
              <li>
                <Link
                  href="/soyabean-oil"
                  className="text-gray-800 text-lg font-bold hover:text-purple-700 transition-colors duration-200"
                >
                  Soyabean Oil
                </Link>
              </li>
              <li>
                <Link
                  href="/sunflower-oil"
                  className="text-gray-800 text-lg font-bold hover:text-purple-700 transition-colors duration-200"
                >
                  Sunflower Oil
                </Link>
              </li>
              <li>
                <Link
                  href="/rice-bran-oil"
                  className="text-gray-800 text-lg font-bold hover:text-purple-700 transition-colors duration-200"
                >
                  Rice Bran Oil
                </Link>
              </li>
            </ul>

            {/* Company Logo */}
            <div className="mt-8 flex items-center gap-4">
              <div className="relative w-32 h-auto">
                <Image
                  src="/logo.png"
                  alt="Veer Bharat Logo"
                  width={128}
                  height={64}
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "contain",
                  }}
                  priority
                />
              </div>
              <div>
                <p className="text-gray-900 font-black text-xl">VEER BHARAT</p>
                <p className="text-base text-gray-800 font-bold mt-1">
                  वाह! मज़ा आ गया
                </p>
              </div>
            </div>
          </div>

          {/* MIDDLE COLUMN: Quick Links */}
          <div>
            <h3 className="text-gray-900 font-extrabold text-2xl mb-5 pb-2 border-b-3 border-gray-800 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-3 mt-6">
              <li>
                <Link
                  href="/"
                  className="text-gray-800 text-lg font-bold hover:text-purple-700 transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-800 text-lg font-bold hover:text-purple-700 transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/recipes"
                  className="text-gray-800 text-lg font-bold hover:text-purple-700 transition-colors duration-200"
                >
                  Recipes
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-800 text-lg font-bold hover:text-purple-700 transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </li>
            </ul>

            {/* FSSAI Logo */}
            <div className="mt-8 p-4 bg-white/60 rounded-lg border-2 border-gray-300">
              <div className="flex items-center gap-4">
                <div className="relative w-24 h-auto">
                  <Image
                    src="/FSSAI_Logo.png"
                    alt="FSSAI Certified"
                    width={96}
                    height={40}
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "contain",
                    }}
                    priority
                  />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">
                    FSSAI Certified
                  </p>
                  <p className="text-base font-black text-gray-900 mt-1">
                    10012022000234
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Important Links & Contact */}
          <div>
            <h3 className="text-gray-900 font-extrabold text-2xl mb-5 pb-2 border-b-3 border-gray-800 inline-block">
              Important Links
            </h3>
            <ul className="space-y-3 mt-6">
              <li>
                {/* <Link 
                  href="/privacy-policy" 
                  className="text-gray-800 text-lg font-bold hover:text-purple-700 transition-colors duration-200"
                >
                  Privacy Policy
                </Link> */}
              </li>
              <li>
                {/* <Link 
                  href="/infrastructure" 
                  className="text-gray-800 text-lg font-bold hover:text-purple-700 transition-colors duration-200"
                >
                  Infrastructure
                </Link> */}
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-800 text-lg font-bold hover:text-purple-700 transition-colors duration-200"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="/clients"
                  className="text-gray-800 text-lg font-bold hover:text-purple-700 transition-colors duration-200"
                >
                  Clients
                </Link>
              </li>
              <li>
                <Link
                  href="/media"
                  className="text-gray-800 text-lg font-bold hover:text-purple-700 transition-colors duration-200"
                >
                  Media
                </Link>
              </li>
            </ul>

            {/* Contact Info
            <div className="mt-6">
              <p className="text-base font-black text-gray-900 mb-2">
                SHREE ARIHANT OIL AND GENERAL MILLS
              </p>
              <p className="text-base font-bold text-gray-800 leading-relaxed">
                "Fortune House", Near Navrangpura Railway Crossing,<br />
                Ahmedabad-380009, Gujarat (India)
              </p>
              
              <div className="mt-4 space-y-2">
                <div>
                  <p className="text-sm font-bold text-gray-900 mb-1">Phone:</p>
                  <div className="space-y-1">
                    <a href="tel:8802000091" className="block text-base font-bold text-gray-800 hover:text-purple-700 transition-colors">
                      8802000091
                    </a>
                    <a href="tel:9216506091" className="block text-base font-bold text-gray-800 hover:text-purple-700 transition-colors">
                      9216506091
                    </a>
                    <a href="tel:9216806091" className="block text-base font-bold text-gray-800 hover:text-purple-700 transition-colors">
                      9216806091
                    </a>
                  </div>
                </div>
                
                <div className="mt-3">
                  <p className="text-sm font-bold text-gray-900 mb-1">Email:</p>
                  <a 
                    href="mailto:info@arihantoilmills.com" 
                    className="text-base font-bold text-gray-800 hover:text-purple-700 hover:underline transition-colors break-all"
                  >
                    info@arihantoilmills.com
                  </a>
                </div>
              </div>
            </div> */}

            {/* Social Media */}
            <div className="mt-6">
              <p className="text-sm font-bold text-gray-900 mb-3">Follow Us:</p>
              <div className="flex gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 text-white rounded-lg flex items-center justify-center hover:bg-purple-700 transition-colors font-bold"
                >
                  f
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 text-white rounded-lg flex items-center justify-center hover:bg-purple-700 transition-colors font-bold text-sm"
                >
                  𝕏
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 text-white rounded-lg flex items-center justify-center hover:bg-purple-700 transition-colors font-bold text-xs"
                >
                  in
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 text-white rounded-lg flex items-center justify-center hover:bg-purple-700 transition-colors"
                >
                  📷
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 text-white rounded-lg flex items-center justify-center hover:bg-purple-700 transition-colors"
                >
                  ▶
                </a>
                <a
                  href="https://wa.me/918802000091"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-green-600 text-white rounded-lg flex items-center justify-center hover:bg-green-700 transition-colors"
                >
                  💬
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* COPYRIGHT SECTION */}
        <div className="mt-10 pt-5 border-t-2 border-gray-400">
          <p className="text-center text-base font-bold text-gray-900">
            Copyright © 2025 <span className="font-black">VEER BHARAT</span>.
            All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
