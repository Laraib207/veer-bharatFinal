// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// const Footer = () => {
//   return (
//     <footer className="bg-gradient-to-r from-amber-50 to-purple-100 border-t-4 border-purple-300">
//       {/* Main Footer Content */}
//       <div className="max-w-7xl mx-auto px-6 py-16">
//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
//           {/* Brand Column */}
//           <div className="lg:col-span-1">
//             <div className="flex items-center gap-4 mb-8">
//               <div className="relative w-16 h-16">
//                 <Image
//                   src="/logo.png"
//                   alt="Veer Bharat Logo"
//                   width={64}
//                   height={64}
//                   className="object-contain"
//                   priority
//                 />
//               </div>
//               <div>
//                 <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
//                   VEER BHARAT
//                 </h2>
//                 <p className="text-lg text-gray-700 font-medium mt-1">
//                   वाह! मज़ा आ गया
//                 </p>
//               </div>
//             </div>
//             <p className="text-gray-600 leading-relaxed mb-6">
//               Premium quality edible oils crafted with traditional wisdom 
//               and modern technology for healthier living.
//             </p>
            
//             {/* FSSAI Certification */}
//             <div className="bg-white/80 rounded-xl p-5 border border-gray-200 shadow-sm">
//               <div className="flex items-center gap-4">
//                 <div className="relative w-16 h-16">
//                   <Image
//                     src="/FSSAI_Logo.png"
//                     alt="FSSAI Certified"
//                     width={64}
//                     height={64}
//                     className="object-contain"
//                     priority
//                   />
//                 </div>
//                 <div>
//                   <p className="text-sm font-semibold text-gray-900 mb-1">
//                     FSSAI Certified
//                   </p>
//                   <p className="text-base font-bold text-gray-900">
//                     10012022000234
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Products Column */}
//           <div>
//             <h3 className="text-lg font-bold text-gray-900 mb-6 pb-3 border-b-2 border-purple-400">
//               Our Products
//             </h3>
//             <ul className="space-y-4">
//               {[
//                 { name: "Kachi Ghani Pure Mustard Oil", href: "/mustard-oil" },
//                 { name: "Soyabean Oil", href: "/soyabean-oil" },
//                 { name: "Sunflower Oil", href: "/sunflower-oil" },
//                 { name: "Rice Bran Oil", href: "/rice-bran-oil" }
//               ].map((product) => (
//                 <li key={product.name}>
//                   <Link
//                     href={product.href}
//                     className="text-gray-700 hover:text-purple-700 hover:translate-x-1 transition-all duration-300 flex items-center group"
//                   >
//                     <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 group-hover:bg-purple-600 transition-colors"></span>
//                     {product.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Quick Links Column */}
//           <div>
//             <h3 className="text-lg font-bold text-gray-900 mb-6 pb-3 border-b-2 border-purple-400">
//               Quick Links
//             </h3>
//             <ul className="space-y-4">
//               {[
//                 { name: "Home", href: "/" },
//                 { name: "About Us", href: "/about" },
//                 { name: "Recipes", href: "/recipes" },
//                 { name: "Contact Us", href: "/contact" },
//                 { name: "Blogs", href: "/blog" },
//                 { name: "Media", href: "/media" }
//               ].map((link) => (
//                 <li key={link.name}>
//                   <Link
//                     href={link.href}
//                     className="text-gray-700 hover:text-purple-700 transition-colors duration-300 font-medium"
//                   >
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact & Social Column */}
//           <div>
//             <h3 className="text-lg font-bold text-gray-900 mb-6 pb-3 border-b-2 border-purple-400">
//               Connect With Us
//             </h3>
            
//             {/* Contact Info */}
//             <div className="mb-8">
//               <div className="space-y-3">
//                 <div className="flex items-start gap-3">
//                   <span className="text-purple-600 mt-1">📍</span>
//                   <p className="text-gray-700 text-sm leading-relaxed">
//                     "Fortune House", Near Navrangpura Railway Crossing,<br />
//                     Ahmedabad-380009, Gujarat (India)
//                   </p>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <span className="text-purple-600">📞</span>
//                   <div>
//                     <a href="tel:8802000091" className="text-gray-700 hover:text-purple-700 transition-colors block">
//                       +91 8802000091
//                     </a>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <span className="text-purple-600">✉️</span>
//                   <a 
//                     href="mailto:info@arihantoilmills.com" 
//                     className="text-gray-700 hover:text-purple-700 transition-colors text-sm break-all"
//                   >
//                     info@arihantoilmills.com
//                   </a>
//                 </div>
//               </div>
//             </div>

//             {/* Social Media */}
//             <div>
//               <p className="text-sm font-semibold text-gray-900 mb-4">
//                 Follow Our Journey
//               </p>
//               <div className="flex gap-3">
//                 {[
//                   { icon: "📘", label: "Facebook", href: "https://facebook.com" },
//                   { icon: "🐦", label: "Twitter", href: "https://twitter.com" },
//                   { icon: "💼", label: "LinkedIn", href: "https://linkedin.com" },
//                   { icon: "📷", label: "Instagram", href: "https://instagram.com" },
//                   { icon: "▶️", label: "YouTube", href: "https://youtube.com" },
//                   { icon: "💬", label: "WhatsApp", href: "https://wa.me/918802000091", color: "bg-green-500 hover:bg-green-600" }
//                 ].map((social) => (
//                   <a
//                     key={social.label}
//                     href={social.href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className={`w-10 h-10 bg-gray-800 text-white rounded-lg flex items-center justify-center hover:bg-purple-700 transition-all duration-300 transform hover:scale-110 ${social.color || ''}`}
//                     aria-label={social.label}
//                   >
//                     <span className="text-sm">{social.icon}</span>
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="mt-16 pt-8 border-t border-gray-300">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//             <p className="text-gray-700 text-sm font-medium text-center md:text-left">
//               © 2025 <span className="font-bold text-gray-900">VEER BHARAT</span>. 
//               All rights reserved. Crafted with passion for quality.
//             </p>
//             <div className="flex gap-6 text-sm font-medium">
//               <Link href="/privacy-policy" className="text-gray-600 hover:text-purple-700 transition-colors">
//                 Privacy Policy
//               </Link>
//               <Link href="/terms" className="text-gray-600 hover:text-purple-700 transition-colors">
//                 Terms of Service
//               </Link>
//               <Link href="/sitemap" className="text-gray-600 hover:text-purple-700 transition-colors">
//                 Sitemap
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;





import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer 
      className="relative overflow-hidden border-t-4 border-purple-300" 
      style={{ 
        background: 'linear-gradient(to right, #fef9c3 0%, #DFC6F6 100%)',
        minHeight: '40vh'
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
              {[
                { name: "Kachi Ghani Pure Mustard Oil", href: "/mustard-oil" },
                { name: "Soyabean Oil", href: "/soyabean-oil" },
                { name: "Sunflower Oil", href: "/sunflower-oil" },
                { name: "Rice Bran Oil", href: "/rice-bran-oil" }
              ].map((product) => (
                <li key={product.name}>
                  <Link 
                    href={product.href} 
                    className="text-gray-800 text-lg font-bold hover:text-purple-700 transition-colors duration-200"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Company Logo */}
            <div className="mt-8 flex items-center gap-4">
              <div className="relative w-32 h-auto">
                <Image
                  src="/logo.png"
                  alt="Veer Bharat Logo"
                  width={128}
                  height={64}
                  style={{ width: "100%", height: "auto", objectFit: "contain" }}
                  priority
                />
              </div>
              <div>
                <p className="text-gray-900 font-black text-xl">Shri Shyam Agro Industries</p>
                {/* <p className="text-base text-gray-800 font-bold mt-1">वाह! मज़ा आ गया</p> */}
              </div>
            </div>
          </div>

          {/* MIDDLE COLUMN: Quick Links */}
          <div>
            <h3 className="text-gray-900 font-extrabold text-2xl mb-5 pb-2 border-b-3 border-gray-800 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-3 mt-6">
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
                    className="text-gray-800 text-lg font-bold hover:text-purple-700 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
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
                    style={{ width: "100%", height: "auto", objectFit: "contain" }}
                    priority
                  />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">FSSAI Certified</p>
                  <p className="text-base font-black text-gray-900 mt-1">10012022000234</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Contact & Social */}
          <div>
            <h3 className="text-gray-900 font-extrabold text-2xl mb-5 pb-2 border-b-3 border-gray-800 inline-block">
              Contact
            </h3>
            <div className="mt-6 space-y-3">
              <p className="text-gray-800 font-bold text-base leading-relaxed">
                8th Floor, Tower B, Ithum,Plot No-A-40, Sector 62, Noida, Uttar Pradesh 201301(India)
              </p>
              <div>
                <p className="text-sm font-bold text-gray-900 mb-1">Phone:</p>
                <a href="tel:8802000091" className="block text-base font-bold text-gray-800 hover:text-purple-700 transition-colors">
                  +91 9266328444
                </a>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900 mb-1">Email:</p>
                <a 
                  href="mailto:info@arihantoilmills.com" 
                  className="text-base font-bold text-gray-800 hover:text-purple-700 transition-colors break-all"
                >
                  info@veerbharat.com
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <p className="text-sm font-bold text-gray-900 mb-3">Follow Us:</p>
              <div className="flex gap-3">
                {[
                  { icon: 'f', href: 'https://www.facebook.com/veerbharatofficial' },
                  { icon: '𝕏', href: 'https://twitter.com' },
                  { icon: 'in', href: 'https://linkedin.com' },
                  { icon: '📷', href: 'https://www.instagram.com/veerbharatofficial' },
                  { icon: '▶', href: 'https://youtube.com/@veerbharatofficial' },
                  { icon: '💬', href: 'https://wa.me/918802000091', color: 'bg-green-600 hover:bg-green-700' }
                ].map((social) => (
                  <a 
                    key={social.icon}
                    href={social.href}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`w-10 h-10 ${social.color || 'bg-gray-800 hover:bg-purple-700'} text-white rounded-lg flex items-center justify-center transition-colors font-bold`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* COPYRIGHT SECTION */}
        <div className="mt-10 pt-5 border-t-2 border-gray-400">
          <p className="text-center text-base font-bold text-gray-900">
            Copyright © 2025 <span className="font-black">VEER BHARAT</span>. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
