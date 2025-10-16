// "use client";

// import { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import LogoLink from "@/components/LogoLink";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [teamOpen, setTeamOpen] = useState(false);
//   const [brochureOpen, setBrochureOpen] = useState(false);
//   const [viewerOpen, setViewerOpen] = useState(false);
//   const [productsOpen, setProductsOpen] = useState(false);

//   const teamRef = useRef(null);
//   const teamButtonRef = useRef(null);
//   const brochureRef = useRef(null);
//   const brochureButtonRef = useRef(null);
//   const productsRef = useRef(null);
//   const productsButtonRef = useRef(null);

//   const pdfPath = "/docs/pdf/brochure.pdf";

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     const onDoc = (e) => {
//       if (teamRef.current && !teamRef.current.contains(e.target) &&
//           teamButtonRef.current && !teamButtonRef.current.contains(e.target)) setTeamOpen(false);
//       if (brochureRef.current && !brochureRef.current.contains(e.target) &&
//           brochureButtonRef.current && !brochureButtonRef.current.contains(e.target)) setBrochureOpen(false);
//       if (productsRef.current && !productsRef.current.contains(e.target) &&
//           productsButtonRef.current && !productsButtonRef.current.contains(e.target)) setProductsOpen(false);
//     };
//     document.addEventListener("click", onDoc);
//     return () => document.removeEventListener("click", onDoc);
//   }, []);

//   useEffect(() => {
//     const onKey = (e) => {
//       if (e.key === "Escape") {
//         setTeamOpen(false);
//         setBrochureOpen(false);
//         setProductsOpen(false);
//         setOpen(false);
//         setViewerOpen(false);
//       }
//     };
//     document.addEventListener("keydown", onKey);
//     return () => document.removeEventListener("keydown", onKey);
//   }, []);

//   useEffect(() => {
//     if (open) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }
//     return () => {
//       document.body.style.overflow = 'unset';
//     };
//   }, [open]);

//   return (
//     <>
//       <header
//         className={`w-full transition-all duration-500 ease-out border-b-2 ${
//           scrolled 
//             ? "fixed top-0 left-0 z-50 py-2 shadow-2xl border-purple-200/50 backdrop-blur-xl bg-[#DFC6F6]/95" 
//             : "relative py-4 shadow-lg border-purple-200/30 bg-[#DFC6F6]"
//         }`}
//       >
//         <div className="w-full max-w-[1920px] mx-auto flex items-center justify-between px-3 sm:px-4 lg:px-8">
//           {/* Logo and Brand */}
//           <div className="flex items-center flex-shrink-0 gap-2 sm:gap-3">
//             <LogoLink href="/" aria-label="Veer Bharat Home" className="block group">
//               <div className="w-[100px] h-[80px] sm:w-[120px] sm:h-[100px] md:w-[140px] md:h-[110px] lg:w-[150px] lg:h-[120px] overflow-hidden rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 bg-white/30 backdrop-blur-sm p-1">
//                 <Image
//                   src="/logo.png"
//                   alt="Veer Bharat logo"
//                   width={200}
//                   height={124}
//                   style={{ objectFit: "contain" }}
//                   priority
//                   className="w-full h-full"
//                 />
//               </div>
//             </LogoLink>
            
//             <div className="flex flex-col leading-tight">
//               <span className="font-extrabold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl tracking-tight bg-gradient-to-r from-[#08348b] via-[#0a4bb5] to-[#08348b] bg-clip-text text-transparent drop-shadow-sm">
//                 VEER BHARAT
//               </span>
//               <span className="italic text-xs sm:text-sm md:text-base lg:text-lg font-medium bg-gradient-to-r from-[#aa2266] to-[#d63384] bg-clip-text text-transparent">
//                 वाह! मज़ा आ गया
//               </span>
//             </div>
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex flex-1 justify-center items-center px-4">
//             <ul className="flex items-center gap-2 xl:gap-4 text-base xl:text-lg font-bold">
//               <li><NavLink href="/">Home</NavLink></li>
//               <li><NavLink href="/blog">Blog</NavLink></li>

//               {/* Products dropdown */}
//               <li className="relative" ref={productsRef}>
//                 <button
//                   ref={productsButtonRef}
//                   onClick={() => setProductsOpen((s) => !s)}
//                   onMouseEnter={() => setProductsOpen(true)}
//                   onFocus={() => setProductsOpen(true)}
//                   className="flex items-center gap-1.5 px-3 xl:px-4 py-2 xl:py-2.5 rounded-xl hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-[#08348b]/30 transition-all duration-300 hover:shadow-md text-gray-700 hover:text-[#08348b] font-bold group"
//                 >
//                   Products 
//                   <ChevronIcon open={productsOpen} />
//                 </button>
//                 <DropdownMenu isOpen={productsOpen} onMouseEnter={() => setProductsOpen(true)} onMouseLeave={() => setProductsOpen(false)}>
//                   <DropdownItem href="/products" onClick={() => setProductsOpen(false)}>🛍️ All Products</DropdownItem>
//                   <DropdownItem href="/soyabean-oil" onClick={() => setProductsOpen(false)}>🌿 Soyabean Oil</DropdownItem>
//                   <DropdownItem href="/mustard-oil" onClick={() => setProductsOpen(false)}>🌾 Mustard Oil</DropdownItem>
//                   <DropdownItem href="/palm-oil" onClick={() => setProductsOpen(false)}>🌴 Palm Oil</DropdownItem>
//                   <DropdownItem href="/brand-rice" onClick={() => setProductsOpen(false)}>🍚 Brand Rice</DropdownItem>
//                 </DropdownMenu>
//               </li>

//               {/* Brochure dropdown */}
//               <li className="relative" ref={brochureRef}>
//                 <button
//                   ref={brochureButtonRef}
//                   onClick={() => setBrochureOpen((s) => !s)}
//                   onMouseEnter={() => setBrochureOpen(true)}
//                   onFocus={() => setBrochureOpen(true)}
//                   className="flex items-center gap-1.5 px-3 xl:px-4 py-2 xl:py-2.5 rounded-xl hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-[#08348b]/30 transition-all duration-300 hover:shadow-md text-gray-700 hover:text-[#08348b] font-bold group"
//                 >
//                   Brochure 
//                   <ChevronIcon open={brochureOpen} />
//                 </button>
//                 <DropdownMenu isOpen={brochureOpen} onMouseEnter={() => setBrochureOpen(true)} onMouseLeave={() => setBrochureOpen(false)}>
//                   <li>
//                     <button
//                       onClick={() => { setViewerOpen(true); setBrochureOpen(false); setOpen(false); }}
//                       className="w-full text-left px-5 py-3.5 hover:bg-gradient-to-r hover:from-purple-100 hover:to-blue-100 text-base font-semibold text-[#082f63] rounded-lg transition-all duration-300 flex items-center gap-2 hover:pl-6"
//                     >
//                       👁️ View Brochure
//                     </button>
//                   </li>
//                   <li>
//                     <a 
//                       href={pdfPath} 
//                       download 
//                       className="block px-5 py-3.5 hover:bg-gradient-to-r hover:from-purple-100 hover:to-blue-100 text-base font-semibold text-[#082f63] rounded-lg transition-all duration-300 flex items-center gap-2 hover:pl-6"
//                     >
//                       📥 Download Brochure
//                     </a>
//                   </li>
//                 </DropdownMenu>
//               </li>

//               {/* Team dropdown */}
//               <li className="relative" ref={teamRef}>
//                 <button
//                   ref={teamButtonRef}
//                   onClick={() => setTeamOpen((s) => !s)}
//                   onMouseEnter={() => setTeamOpen(true)}
//                   onFocus={() => setTeamOpen(true)}
//                   className="flex items-center gap-1.5 px-3 xl:px-4 py-2 xl:py-2.5 rounded-xl hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-[#08348b]/30 transition-all duration-300 hover:shadow-md text-gray-700 hover:text-[#08348b] font-bold group"
//                 >
//                   Team 
//                   <ChevronIcon open={teamOpen} />
//                 </button>
//                 <DropdownMenu isOpen={teamOpen} onMouseEnter={() => setTeamOpen(true)} onMouseLeave={() => setTeamOpen(false)}>
//                   <DropdownItem href="/team" onClick={() => setTeamOpen(false)}>👥 Our Team</DropdownItem>
//                   <DropdownItem href="/gallery" onClick={() => setTeamOpen(false)}>📸 Gallery</DropdownItem>
//                   <DropdownItem href="/Managing-Director" onClick={() => setTeamOpen(false)}>👔 Managing Director</DropdownItem>
//                 </DropdownMenu>
//               </li>

//               <li><NavLink href="/about">About</NavLink></li>
//               <li><NavLink href="/contact">Contact</NavLink></li>
//             </ul>
//           </nav>

//           {/* Mobile Hamburger Button */}
//           <button
//             className="lg:hidden relative z-50 w-11 h-11 sm:w-12 sm:h-12 flex flex-col items-center justify-center gap-1.5 focus:outline-none bg-white/40 rounded-xl backdrop-blur-md hover:bg-white/60 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl border border-white/50"
//             onClick={() => setOpen(!open)}
//             aria-label="Toggle menu"
//             aria-expanded={open}
//           >
//             <span
//               className={`block w-6 sm:w-7 h-0.5 bg-gradient-to-r from-[#08348b] to-[#aa2266] rounded-full transition-all duration-300 ease-out ${
//                 open ? "rotate-45 translate-y-2" : ""
//               }`}
//             />
//             <span
//               className={`block w-6 sm:w-7 h-0.5 bg-gradient-to-r from-[#08348b] to-[#aa2266] rounded-full transition-all duration-200 ease-out ${
//                 open ? "opacity-0 scale-0" : "opacity-100 scale-100"
//               }`}
//             />
//             <span
//               className={`block w-6 sm:w-7 h-0.5 bg-gradient-to-r from-[#08348b] to-[#aa2266] rounded-full transition-all duration-300 ease-out ${
//                 open ? "-rotate-45 -translate-y-2" : ""
//               }`}
//             />
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         <div
//           className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-500 ${
//             open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
//           }`}
//           style={{ top: scrolled ? "70px" : "120px" }}
//         >
//           <div
//             className="absolute inset-0 bg-gradient-to-br from-black/70 via-purple-900/50 to-black/70 backdrop-blur-sm"
//             onClick={() => setOpen(false)}
//           />

//           <div
//             className={`absolute right-0 top-0 bottom-0 w-[85vw] max-w-[380px] bg-gradient-to-br from-[#DFC6F6] via-white to-[#f5ebff] shadow-2xl transform transition-all duration-500 ease-out overflow-y-auto ${
//               open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
//             }`}
//             style={{
//               boxShadow: '-20px 0 60px rgba(8, 52, 139, 0.4), -10px 0 30px rgba(170, 34, 102, 0.2)'
//             }}
//           >
//             {/* Decorative header */}
//             <div className="h-1.5 bg-gradient-to-r from-[#08348b] via-[#aa2266] to-[#08348b] animate-gradient-x" />
            
//             <div className="px-4 sm:px-6 py-6 sm:py-8 flex flex-col gap-2.5 sm:gap-3">
//               {/* Menu title */}
//               <div className={`text-center mb-3 sm:mb-4 transition-all duration-700 ${open ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
//                 <h3 className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-[#08348b] to-[#aa2266] bg-clip-text text-transparent tracking-tight">
//                   Navigation Menu
//                 </h3>
//                 <div className="w-20 h-1 bg-gradient-to-r from-[#08348b] via-[#aa2266] to-[#08348b] rounded-full mx-auto mt-2 shadow-md" />
//               </div>

//               <MobileLink href="/" onClick={() => setOpen(false)} icon="🏠" delay="100" isOpen={open}>
//                 Home
//               </MobileLink>
              
//               <MobileLink href="/blog" onClick={() => setOpen(false)} icon="📝" delay="150" isOpen={open}>
//                 Blog
//               </MobileLink>

//               <MobileDropdown title="Products" icon="🛍️" delay="200" isOpen={open}>
//                 <SubMenuLink href="/products" onClick={() => setOpen(false)}>All Products</SubMenuLink>
//                 <SubMenuLink href="/soyabean-oil" onClick={() => setOpen(false)}>Soyabean Oil</SubMenuLink>
//                 <SubMenuLink href="/mustard-oil" onClick={() => setOpen(false)}>Mustard Oil</SubMenuLink>
//                 <SubMenuLink href="/palm-oil" onClick={() => setOpen(false)}>Palm Oil</SubMenuLink>
//                 <SubMenuLink href="/brand-rice" onClick={() => setOpen(false)}>Brand Rice</SubMenuLink>
//               </MobileDropdown>

//               <MobileDropdown title="Brochure" icon="📄" delay="250" isOpen={open}>
//                 <button
//                   onClick={() => { setViewerOpen(true); setOpen(false); }}
//                   className="text-left px-4 py-3 rounded-lg text-[#08348b] hover:bg-white/90 bg-white/50 font-semibold transition-all text-sm sm:text-base border border-purple-100 hover:border-purple-200 hover:shadow-md w-full"
//                 >
//                   👁️ View Brochure
//                 </button>
//                 <a
//                   href={pdfPath}
//                   download
//                   className="block px-4 py-3 rounded-lg text-[#08348b] hover:bg-white/90 bg-white/50 font-semibold transition-all text-sm sm:text-base border border-purple-100 hover:border-purple-200 hover:shadow-md"
//                   onClick={() => setOpen(false)}
//                 >
//                   📥 Download Brochure
//                 </a>
//               </MobileDropdown>

//               <MobileDropdown title="Team" icon="👥" delay="300" isOpen={open}>
//                 <SubMenuLink href="/team" onClick={() => setOpen(false)}>Our Team</SubMenuLink>
//                 <SubMenuLink href="/gallery" onClick={() => setOpen(false)}>Gallery</SubMenuLink>
//                 <SubMenuLink href="/Managing-Director" onClick={() => setOpen(false)}>Managing Director</SubMenuLink>
//               </MobileDropdown>

//               <MobileLink href="/about" onClick={() => setOpen(false)} icon="ℹ️" delay="350" isOpen={open}>
//                 About
//               </MobileLink>
              
//               <MobileLink href="/contact" onClick={() => setOpen(false)} icon="📞" delay="400" isOpen={open}>
//                 Contact
//               </MobileLink>
//             </div>

//             <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#08348b]/5 via-purple-100/10 to-transparent pointer-events-none" />
//           </div>
//         </div>
//       </header>

//       {/* Brochure Modal */}
//       {viewerOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6">
//           <div 
//             className="absolute inset-0 bg-gradient-to-br from-black/70 via-purple-900/50 to-black/70 backdrop-blur-md animate-fadeIn" 
//             onClick={() => setViewerOpen(false)} 
//           />
//           <div className="relative w-full max-w-6xl h-[85vh] sm:h-[80vh] bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden animate-scaleIn border-2 border-purple-200/50">
//             <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 px-4 sm:px-6 py-3 sm:py-4 border-b-2 border-purple-200/50 bg-gradient-to-r from-[#DFC6F6] via-white to-[#f5ebff]">
//               <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-[#082f63] to-[#aa2266] bg-clip-text text-transparent">
//                 📄 Brochure Preview
//               </h3>
//               <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
//                 <a 
//                   href={pdfPath} 
//                   download 
//                   className="flex-1 sm:flex-initial px-3 sm:px-4 py-2 text-sm sm:text-base font-semibold rounded-lg sm:rounded-xl border-2 border-[#08348b] text-[#08348b] hover:bg-[#08348b] hover:text-white transition-all duration-300 hover:shadow-lg text-center"
//                 >
//                   📥 Download
//                 </a>
//                 <button 
//                   onClick={() => setViewerOpen(false)} 
//                   className="flex-1 sm:flex-initial px-3 sm:px-4 py-2 text-sm sm:text-base font-semibold rounded-lg sm:rounded-xl border-2 border-gray-300 hover:bg-gray-100 hover:border-gray-400 transition-all duration-300 hover:shadow-lg"
//                 >
//                   ✕ Close
//                 </button>
//               </div>
//             </div>
//             <iframe 
//               src={`${pdfPath}#view=FitH`} 
//               className="w-full h-[calc(100%-60px)] sm:h-[calc(100%-70px)]"
//               title="Brochure PDF Viewer"
//             />
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// /* Helper Components */
// function NavLink({ href, children }) {
//   return (
//     <LogoLink 
//       href={href} 
//       className="px-3 xl:px-4 py-2 xl:py-2.5 text-gray-700 hover:text-[#08348b] transition-all duration-300 hover:scale-105 rounded-xl hover:bg-white/30 font-bold relative group"
//     >
//       {children}
//       <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#08348b] to-[#aa2266] group-hover:w-3/4 transition-all duration-300 rounded-full" />
//     </LogoLink>
//   );
// }

// function DropdownMenu({ isOpen, children, onMouseEnter, onMouseLeave }) {
//   return (
//     <div
//       className={`absolute top-full mt-3 left-1/2 transform -translate-x-1/2 min-w-[260px] rounded-2xl bg-white/95 backdrop-blur-xl text-[#082f63] shadow-2xl ring-2 ring-purple-200/50 transition-all duration-300 z-50 ${
//         isOpen ? "opacity-100 pointer-events-auto translate-y-0 scale-100" : "opacity-0 pointer-events-none -translate-y-2 scale-95"
//       }`}
//       onMouseEnter={onMouseEnter}
//       onMouseLeave={onMouseLeave}
//     >
//       <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-l-2 border-t-2 border-purple-200/50" />
//       <ul className="py-3 relative">
//         {children}
//       </ul>
//     </div>
//   );
// }

// function DropdownItem({ href, onClick, children }) {
//   return (
//     <li>
//       <LogoLink 
//         href={href} 
//         className="block px-5 py-3.5 hover:bg-gradient-to-r hover:from-purple-100 hover:to-blue-100 text-base font-semibold text-[#082f63] rounded-lg mx-2 transition-all duration-300 hover:pl-6 hover:shadow-sm" 
//         onClick={onClick}
//       >
//         {children}
//       </LogoLink>
//     </li>
//   );
// }

// function MobileLink({ href, children, onClick, icon, delay, isOpen }) {
//   return (
//     <LogoLink
//       href={href}
//       className={`px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl text-[#08348b] font-bold text-base sm:text-lg bg-gradient-to-r from-white/80 to-white/60 hover:from-white hover:to-white/90 transition-all transform hover:scale-[1.02] active:scale-[0.98] hover:shadow-xl shadow-md backdrop-blur-sm border-2 border-purple-100/50 hover:border-purple-200 flex items-center gap-2.5 sm:gap-3 duration-700 ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
//       style={{ transitionDelay: `${delay}ms` }}
//       onClick={onClick}
//     >
//       <span className="text-xl sm:text-2xl">{icon}</span>
//       <span className="flex-1">{children}</span>
//       <span className="text-[#aa2266] opacity-60">→</span>
//     </LogoLink>
//   );
// }

// function MobileDropdown({ title, icon, delay, isOpen, children }) {
//   return (
//     <details 
//       className={`group transition-all duration-700 ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
//       style={{ transitionDelay: `${delay}ms` }}
//     >
//       <summary className="px-4 sm:px-5 py-3.5 sm:py-4 cursor-pointer list-none flex items-center justify-between bg-gradient-to-r from-white/80 to-white/60 hover:from-white hover:to-white/90 rounded-xl transition-all shadow-md hover:shadow-xl backdrop-blur-sm border-2 border-purple-100/50 hover:border-purple-200 active:scale-[0.98]">
//         <span className="flex items-center gap-2.5 sm:gap-3 text-[#08348b] font-bold text-base sm:text-lg">
//           <span className="text-xl sm:text-2xl">{icon}</span>
//           {title}
//         </span>
//         <span className="text-[#08348b] text-lg sm:text-xl font-bold group-open:rotate-180 transition-transform duration-300">▾</span>
//       </summary>
//       <div className="pl-6 sm:pl-8 pr-3 sm:pr-4 pb-2 pt-3 flex flex-col gap-2 animate-fadeIn">
//         {children}
//       </div>
//     </details>
//   );
// }

// function SubMenuLink({ href, children, onClick }) {
//   return (
//     <LogoLink
//       href={href}
//       className="px-4 py-3 rounded-lg text-[#08348b] hover:bg-white/90 bg-white/50 font-semibold transition-all transform hover:translate-x-1 active:scale-95 text-sm sm:text-base border border-purple-100 hover:border-purple-200 hover:shadow-md"
//       onClick={onClick}
//     >
//       {children}
//     </LogoLink>
//   );
// }

// function ChevronIcon({ open }) {
//   return (
//     <svg 
//       width="16" 
//       height="16" 
//       viewBox="0 0 24 24" 
//       fill="none" 
//       className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
//     >
//       <path 
//         d="M6 9l6 6 6-6" 
//         stroke="currentColor" 
//         strokeWidth="2.5" 
//         strokeLinecap="round" 
//         strokeLinejoin="round" 
//       />
//     </svg>
//   );
// }








// "use client";

// import { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import LogoLink from "@/components/LogoLink";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [teamOpen, setTeamOpen] = useState(false);
//   const [brochureOpen, setBrochureOpen] = useState(false);
//   const [viewerOpen, setViewerOpen] = useState(false);
//   const [productsOpen, setProductsOpen] = useState(false);

//   const teamRef = useRef(null);
//   const teamButtonRef = useRef(null);
//   const brochureRef = useRef(null);
//   const brochureButtonRef = useRef(null);
//   const productsRef = useRef(null);
//   const productsButtonRef = useRef(null);

//   const pdfPath = "/docs/pdf/brochure.pdf";

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     const onDoc = (e) => {
//       if (teamRef.current && !teamRef.current.contains(e.target) &&
//           teamButtonRef.current && !teamButtonRef.current.contains(e.target)) setTeamOpen(false);
//       if (brochureRef.current && !brochureRef.current.contains(e.target) &&
//           brochureButtonRef.current && !brochureButtonRef.current.contains(e.target)) setBrochureOpen(false);
//       if (productsRef.current && !productsRef.current.contains(e.target) &&
//           productsButtonRef.current && !productsButtonRef.current.contains(e.target)) setProductsOpen(false);
//     };
//     document.addEventListener("click", onDoc);
//     return () => document.removeEventListener("click", onDoc);
//   }, []);

//   useEffect(() => {
//     const onKey = (e) => {
//       if (e.key === "Escape") {
//         setTeamOpen(false);
//         setBrochureOpen(false);
//         setProductsOpen(false);
//         setOpen(false);
//         setViewerOpen(false);
//       }
//     };
//     document.addEventListener("keydown", onKey);
//     return () => document.removeEventListener("keydown", onKey);
//   }, []);

//   useEffect(() => {
//     if (open) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }
//     return () => {
//       document.body.style.overflow = 'unset';
//     };
//   }, [open]);

//   return (
//     <>
//       <header
//         className={`w-full transition-all duration-500 ease-out border-b-2 ${
//           scrolled 
//             ? "fixed top-0 left-0 z-50 py-2 shadow-2xl border-purple-200/50 backdrop-blur-xl bg-[#DFC6F6]/95" 
//             : "relative py-4 shadow-lg border-purple-200/30 bg-[#DFC6F6]"
//         }`}
//       >
//         <div className="w-full max-w-[1920px] mx-auto flex items-center justify-between px-3 sm:px-4 lg:px-8">
//           {/* Logo and Brand */}
//           <div className="flex items-center flex-shrink-0 gap-2 sm:gap-3">
//             <LogoLink href="/" aria-label="Veer Bharat Home" className="block group">
//               <div className="w-[100px] h-[80px] sm:w-[120px] sm:h-[100px] md:w-[140px] md:h-[110px] lg:w-[150px] lg:h-[120px] overflow-hidden rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 bg-white/30 backdrop-blur-sm p-1">
//                 <Image
//                   src="/logo.png"
//                   alt="Veer Bharat logo"
//                   width={200}
//                   height={124}
//                   style={{ objectFit: "contain" }}
//                   priority
//                   className="w-full h-full"
//                 />
//               </div>
//             </LogoLink>
            
//             <div className="flex flex-col leading-tight">
//               <span className="font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-tight bg-gradient-to-r from-[#08348b] via-[#0a4bb5] to-[#08348b] bg-clip-text text-transparent drop-shadow-sm">
//                 VEER BHARAT
//               </span>
//               <span className="italic text-sm sm:text-base md:text-lg lg:text-xl font-bold bg-gradient-to-r from-[#aa2266] to-[#d63384] bg-clip-text text-transparent">
//                 वाह! मज़ा आ गया
//               </span>
//             </div>
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex flex-1 justify-center items-center px-4">
//             <ul className="flex items-center gap-2 xl:gap-4 text-lg xl:text-xl font-black">
//               <li><NavLink href="/">Home</NavLink></li>
//               <li><NavLink href="/blog">Blog</NavLink></li>

//               {/* Products dropdown */}
//               <li className="relative" ref={productsRef}>
//                 <button
//                   ref={productsButtonRef}
//                   onClick={() => setProductsOpen((s) => !s)}
//                   onMouseEnter={() => setProductsOpen(true)}
//                   onFocus={() => setProductsOpen(true)}
//                   className="flex items-center gap-1.5 px-3 xl:px-4 py-2 xl:py-2.5 rounded-xl hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-[#08348b]/30 transition-all duration-300 hover:shadow-md text-gray-700 hover:text-[#08348b] font-black group"
//                 >
//                   Products 
//                   <ChevronIcon open={productsOpen} />
//                 </button>
//                 <DropdownMenu isOpen={productsOpen} onMouseEnter={() => setProductsOpen(true)} onMouseLeave={() => setProductsOpen(false)}>
//                   <DropdownItem href="/products" onClick={() => setProductsOpen(false)}>🛍️ All Products</DropdownItem>
//                   <DropdownItem href="/soyabean-oil" onClick={() => setProductsOpen(false)}>🌿 Soyabean Oil</DropdownItem>
//                   <DropdownItem href="/mustard-oil" onClick={() => setProductsOpen(false)}>🌾 Mustard Oil</DropdownItem>
//                   <DropdownItem href="/palm-oil" onClick={() => setProductsOpen(false)}>🌴 Palm Oil</DropdownItem>
//                   <DropdownItem href="/brand-rice" onClick={() => setProductsOpen(false)}>🍚 Brand Rice</DropdownItem>
//                 </DropdownMenu>
//               </li>

//               {/* Brochure dropdown */}
//               <li className="relative" ref={brochureRef}>
//                 <button
//                   ref={brochureButtonRef}
//                   onClick={() => setBrochureOpen((s) => !s)}
//                   onMouseEnter={() => setBrochureOpen(true)}
//                   onFocus={() => setBrochureOpen(true)}
//                   className="flex items-center gap-1.5 px-3 xl:px-4 py-2 xl:py-2.5 rounded-xl hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-[#08348b]/30 transition-all duration-300 hover:shadow-md text-gray-700 hover:text-[#08348b] font-black group"
//                 >
//                   Brochure 
//                   <ChevronIcon open={brochureOpen} />
//                 </button>
//                 <DropdownMenu isOpen={brochureOpen} onMouseEnter={() => setBrochureOpen(true)} onMouseLeave={() => setBrochureOpen(false)}>
//                   <li>
//                     <button
//                       onClick={() => { setViewerOpen(true); setBrochureOpen(false); setOpen(false); }}
//                       className="w-full text-left px-5 py-3.5 hover:bg-gradient-to-r hover:from-purple-100 hover:to-blue-100 text-lg font-black text-[#082f63] rounded-lg transition-all duration-300 flex items-center gap-2 hover:pl-6"
//                     >
//                       👁️ View Brochure
//                     </button>
//                   </li>
//                   <li>
//                     <a 
//                       href={pdfPath} 
//                       download 
//                       className="block px-5 py-3.5 hover:bg-gradient-to-r hover:from-purple-100 hover:to-blue-100 text-lg font-black text-[#082f63] rounded-lg transition-all duration-300 flex items-center gap-2 hover:pl-6"
//                     >
//                       📥 Download Brochure
//                     </a>
//                   </li>
//                 </DropdownMenu>
//               </li>

//               {/* Team dropdown */}
//               <li className="relative" ref={teamRef}>
//                 <button
//                   ref={teamButtonRef}
//                   onClick={() => setTeamOpen((s) => !s)}
//                   onMouseEnter={() => setTeamOpen(true)}
//                   onFocus={() => setTeamOpen(true)}
//                   className="flex items-center gap-1.5 px-3 xl:px-4 py-2 xl:py-2.5 rounded-xl hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-[#08348b]/30 transition-all duration-300 hover:shadow-md text-gray-700 hover:text-[#08348b] font-black group"
//                 >
//                   Team 
//                   <ChevronIcon open={teamOpen} />
//                 </button>
//                 <DropdownMenu isOpen={teamOpen} onMouseEnter={() => setTeamOpen(true)} onMouseLeave={() => setTeamOpen(false)}>
//                   <DropdownItem href="/team" onClick={() => setTeamOpen(false)}>👥 Our Team</DropdownItem>
//                   <DropdownItem href="/gallery" onClick={() => setTeamOpen(false)}>📸 Gallery</DropdownItem>
//                   <DropdownItem href="/Managing-Director" onClick={() => setTeamOpen(false)}>👔 Managing Director</DropdownItem>
//                 </DropdownMenu>
//               </li>

//               <li><NavLink href="/about">About</NavLink></li>
//               <li><NavLink href="/contact">Contact</NavLink></li>
//             </ul>
//           </nav>

//           {/* Mobile Hamburger Button */}
//           <button
//             className="lg:hidden relative z-50 w-11 h-11 sm:w-12 sm:h-12 flex flex-col items-center justify-center gap-1.5 focus:outline-none bg-white/40 rounded-xl backdrop-blur-md hover:bg-white/60 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl border border-white/50"
//             onClick={() => setOpen(!open)}
//             aria-label="Toggle menu"
//             aria-expanded={open}
//           >
//             <span
//               className={`block w-6 sm:w-7 h-0.5 bg-gradient-to-r from-[#08348b] to-[#aa2266] rounded-full transition-all duration-300 ease-out ${
//                 open ? "rotate-45 translate-y-2" : ""
//               }`}
//             />
//             <span
//               className={`block w-6 sm:w-7 h-0.5 bg-gradient-to-r from-[#08348b] to-[#aa2266] rounded-full transition-all duration-200 ease-out ${
//                 open ? "opacity-0 scale-0" : "opacity-100 scale-100"
//               }`}
//             />
//             <span
//               className={`block w-6 sm:w-7 h-0.5 bg-gradient-to-r from-[#08348b] to-[#aa2266] rounded-full transition-all duration-300 ease-out ${
//                 open ? "-rotate-45 -translate-y-2" : ""
//               }`}
//             />
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         <div
//           className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-500 ${
//             open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
//           }`}
//           style={{ top: scrolled ? "70px" : "120px" }}
//         >
//           <div
//             className="absolute inset-0 bg-gradient-to-br from-black/70 via-purple-900/50 to-black/70 backdrop-blur-sm"
//             onClick={() => setOpen(false)}
//           />

//           <div
//             className={`absolute right-0 top-0 bottom-0 w-[85vw] max-w-[380px] bg-gradient-to-br from-[#DFC6F6] via-white to-[#f5ebff] shadow-2xl transform transition-all duration-500 ease-out overflow-y-auto ${
//               open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
//             }`}
//             style={{
//               boxShadow: '-20px 0 60px rgba(8, 52, 139, 0.4), -10px 0 30px rgba(170, 34, 102, 0.2)'
//             }}
//           >
//             {/* Decorative header */}
//             <div className="h-1.5 bg-gradient-to-r from-[#08348b] via-[#aa2266] to-[#08348b] animate-gradient-x" />
            
//             <div className="px-4 sm:px-6 py-6 sm:py-8 flex flex-col gap-2.5 sm:gap-3">
//               {/* Menu title */}
//               <div className={`text-center mb-3 sm:mb-4 transition-all duration-700 ${open ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
//                 <h3 className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-[#08348b] to-[#aa2266] bg-clip-text text-transparent tracking-tight">
//                   Navigation Menu
//                 </h3>
//                 <div className="w-20 h-1 bg-gradient-to-r from-[#08348b] via-[#aa2266] to-[#08348b] rounded-full mx-auto mt-2 shadow-md" />
//               </div>

//               <MobileLink href="/" onClick={() => setOpen(false)} icon="🏠" delay="100" isOpen={open}>
//                 Home
//               </MobileLink>
              
//               <MobileLink href="/blog" onClick={() => setOpen(false)} icon="📝" delay="150" isOpen={open}>
//                 Blog
//               </MobileLink>

//               <MobileDropdown title="Products" icon="🛍️" delay="200" isOpen={open}>
//                 <SubMenuLink href="/products" onClick={() => setOpen(false)}>All Products</SubMenuLink>
//                 <SubMenuLink href="/soyabean-oil" onClick={() => setOpen(false)}>Soyabean Oil</SubMenuLink>
//                 <SubMenuLink href="/mustard-oil" onClick={() => setOpen(false)}>Mustard Oil</SubMenuLink>
//                 <SubMenuLink href="/palm-oil" onClick={() => setOpen(false)}>Palm Oil</SubMenuLink>
//                 <SubMenuLink href="/brand-rice" onClick={() => setOpen(false)}>Brand Rice</SubMenuLink>
//               </MobileDropdown>

//               <MobileDropdown title="Brochure" icon="📄" delay="250" isOpen={open}>
//                 <button
//                   onClick={() => { setViewerOpen(true); setOpen(false); }}
//                   className="text-left px-4 py-3 rounded-lg text-[#08348b] hover:bg-white/90 bg-white/50 font-black transition-all text-base sm:text-lg border border-purple-100 hover:border-purple-200 hover:shadow-md w-full"
//                 >
//                   👁️ View Brochure
//                 </button>
//                 <a
//                   href={pdfPath}
//                   download
//                   className="block px-4 py-3 rounded-lg text-[#08348b] hover:bg-white/90 bg-white/50 font-black transition-all text-base sm:text-lg border border-purple-100 hover:border-purple-200 hover:shadow-md"
//                   onClick={() => setOpen(false)}
//                 >
//                   📥 Download Brochure
//                 </a>
//               </MobileDropdown>

//               <MobileDropdown title="Team" icon="👥" delay="300" isOpen={open}>
//                 <SubMenuLink href="/team" onClick={() => setOpen(false)}>Our Team</SubMenuLink>
//                 <SubMenuLink href="/gallery" onClick={() => setOpen(false)}>Gallery</SubMenuLink>
//                 <SubMenuLink href="/Managing-Director" onClick={() => setOpen(false)}>Managing Director</SubMenuLink>
//               </MobileDropdown>

//               <MobileLink href="/about" onClick={() => setOpen(false)} icon="ℹ️" delay="350" isOpen={open}>
//                 About
//               </MobileLink>
              
//               <MobileLink href="/contact" onClick={() => setOpen(false)} icon="📞" delay="400" isOpen={open}>
//                 Contact
//               </MobileLink>
//             </div>

//             <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#08348b]/5 via-purple-100/10 to-transparent pointer-events-none" />
//           </div>
//         </div>
//       </header>

//       {/* Brochure Modal */}
//       {viewerOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6">
//           <div 
//             className="absolute inset-0 bg-gradient-to-br from-black/70 via-purple-900/50 to-black/70 backdrop-blur-md animate-fadeIn" 
//             onClick={() => setViewerOpen(false)} 
//           />
//           <div className="relative w-full max-w-6xl h-[85vh] sm:h-[80vh] bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden animate-scaleIn border-2 border-purple-200/50">
//             <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 px-4 sm:px-6 py-3 sm:py-4 border-b-2 border-purple-200/50 bg-gradient-to-r from-[#DFC6F6] via-white to-[#f5ebff]">
//               <h3 className="text-xl sm:text-2xl font-black bg-gradient-to-r from-[#082f63] to-[#aa2266] bg-clip-text text-transparent">
//                 📄 Brochure Preview
//               </h3>
//               <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
//                 <a 
//                   href={pdfPath} 
//                   download 
//                   className="flex-1 sm:flex-initial px-3 sm:px-4 py-2 text-base sm:text-lg font-black rounded-lg sm:rounded-xl border-2 border-[#08348b] text-[#08348b] hover:bg-[#08348b] hover:text-white transition-all duration-300 hover:shadow-lg text-center"
//                 >
//                   📥 Download
//                 </a>
//                 <button 
//                   onClick={() => setViewerOpen(false)} 
//                   className="flex-1 sm:flex-initial px-3 sm:px-4 py-2 text-base sm:text-lg font-black rounded-lg sm:rounded-xl border-2 border-gray-300 hover:bg-gray-100 hover:border-gray-400 transition-all duration-300 hover:shadow-lg"
//                 >
//                   ✕ Close
//                 </button>
//               </div>
//             </div>
//             <iframe 
//               src={`${pdfPath}#view=FitH`} 
//               className="w-full h-[calc(100%-60px)] sm:h-[calc(100%-70px)]"
//               title="Brochure PDF Viewer"
//             />
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// /* Helper Components */
// function NavLink({ href, children }) {
//   return (
//     <LogoLink 
//       href={href} 
//       className="px-3 xl:px-4 py-2 xl:py-2.5 text-gray-700 hover:text-[#08348b] transition-all duration-300 hover:scale-105 rounded-xl hover:bg-white/30 font-black relative group"
//     >
//       {children}
//       <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#08348b] to-[#aa2266] group-hover:w-3/4 transition-all duration-300 rounded-full" />
//     </LogoLink>
//   );
// }

// function DropdownMenu({ isOpen, children, onMouseEnter, onMouseLeave }) {
//   return (
//     <div
//       className={`absolute top-full mt-3 left-1/2 transform -translate-x-1/2 min-w-[260px] rounded-2xl bg-white/95 backdrop-blur-xl text-[#082f63] shadow-2xl ring-2 ring-purple-200/50 transition-all duration-300 z-50 ${
//         isOpen ? "opacity-100 pointer-events-auto translate-y-0 scale-100" : "opacity-0 pointer-events-none -translate-y-2 scale-95"
//       }`}
//       onMouseEnter={onMouseEnter}
//       onMouseLeave={onMouseLeave}
//     >
//       <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-l-2 border-t-2 border-purple-200/50" />
//       <ul className="py-3 relative">
//         {children}
//       </ul>
//     </div>
//   );
// }

// function DropdownItem({ href, onClick, children }) {
//   return (
//     <li>
//       <LogoLink 
//         href={href} 
//         className="block px-5 py-3.5 hover:bg-gradient-to-r hover:from-purple-100 hover:to-blue-100 text-lg font-black text-[#082f63] rounded-lg mx-2 transition-all duration-300 hover:pl-6 hover:shadow-sm" 
//         onClick={onClick}
//       >
//         {children}
//       </LogoLink>
//     </li>
//   );
// }

// function MobileLink({ href, children, onClick, icon, delay, isOpen }) {
//   return (
//     <LogoLink
//       href={href}
//       className={`px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl text-[#08348b] font-black text-lg sm:text-xl bg-gradient-to-r from-white/80 to-white/60 hover:from-white hover:to-white/90 transition-all transform hover:scale-[1.02] active:scale-[0.98] hover:shadow-xl shadow-md backdrop-blur-sm border-2 border-purple-100/50 hover:border-purple-200 flex items-center gap-2.5 sm:gap-3 duration-700 ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
//       style={{ transitionDelay: `${delay}ms` }}
//       onClick={onClick}
//     >
//       <span className="text-2xl sm:text-3xl">{icon}</span>
//       <span className="flex-1">{children}</span>
//       <span className="text-[#aa2266] opacity-60">→</span>
//     </LogoLink>
//   );
// }

// function MobileDropdown({ title, icon, delay, isOpen, children }) {
//   return (
//     <details 
//       className={`group transition-all duration-700 ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
//       style={{ transitionDelay: `${delay}ms` }}
//     >
//       <summary className="px-4 sm:px-5 py-3.5 sm:py-4 cursor-pointer list-none flex items-center justify-between bg-gradient-to-r from-white/80 to-white/60 hover:from-white hover:to-white/90 rounded-xl transition-all shadow-md hover:shadow-xl backdrop-blur-sm border-2 border-purple-100/50 hover:border-purple-200 active:scale-[0.98]">
//         <span className="flex items-center gap-2.5 sm:gap-3 text-[#08348b] font-black text-lg sm:text-xl">
//           <span className="text-2xl sm:text-3xl">{icon}</span>
//           {title}
//         </span>
//         <span className="text-[#08348b] text-xl sm:text-2xl font-black group-open:rotate-180 transition-transform duration-300">▾</span>
//       </summary>
//       <div className="pl-6 sm:pl-8 pr-3 sm:pr-4 pb-2 pt-3 flex flex-col gap-2 animate-fadeIn">
//         {children}
//       </div>
//     </details>
//   );
// }

// function SubMenuLink({ href, children, onClick }) {
//   return (
//     <LogoLink
//       href={href}
//       className="px-4 py-3 rounded-lg text-[#08348b] hover:bg-white/90 bg-white/50 font-black transition-all transform hover:translate-x-1 active:scale-95 text-base sm:text-lg border border-purple-100 hover:border-purple-200 hover:shadow-md"
//       onClick={onClick}
//     >
//       {children}
//     </LogoLink>
//   );
// }

// function ChevronIcon({ open }) {
//   return (
//     <svg 
//       width="16" 
//       height="16" 
//       viewBox="0 0 24 24" 
//       fill="none" 
//       className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
//     >
//       <path 
//         d="M6 9l6 6 6-6" 
//         stroke="currentColor" 
//         strokeWidth="2.5" 
//         strokeLinecap="round" 
//         strokeLinejoin="round" 
//       />
//     </svg>
//   );
// }






"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import LogoLink from "@/components/LogoLink";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [teamOpen, setTeamOpen] = useState(false);
  const [brochureOpen, setBrochureOpen] = useState(false);
  const [viewerOpen, setViewerOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  const teamRef = useRef(null);
  const teamButtonRef = useRef(null);
  const brochureRef = useRef(null);
  const brochureButtonRef = useRef(null);
  const productsRef = useRef(null);
  const productsButtonRef = useRef(null);

  const pdfPath = "/docs/pdf/brochure.pdf";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const onDoc = (e) => {
      if (teamRef.current && !teamRef.current.contains(e.target) &&
          teamButtonRef.current && !teamButtonRef.current.contains(e.target)) setTeamOpen(false);
      if (brochureRef.current && !brochureRef.current.contains(e.target) &&
          brochureButtonRef.current && !brochureButtonRef.current.contains(e.target)) setBrochureOpen(false);
      if (productsRef.current && !productsRef.current.contains(e.target) &&
          productsButtonRef.current && !productsButtonRef.current.contains(e.target)) setProductsOpen(false);
    };
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setTeamOpen(false);
        setBrochureOpen(false);
        setProductsOpen(false);
        setOpen(false);
        setViewerOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  return (
    <>
      <header
        className={`w-full transition-all duration-500 ease-out border-b-2 ${
          scrolled 
            ? "fixed top-0 left-0 z-[100] py-2 shadow-2xl border-purple-200/50 backdrop-blur-xl bg-[#DFC6F6]/95" 
            : "relative py-4 shadow-lg border-purple-200/30 bg-[#DFC6F6]"
        }`}
      >
        <div className="w-full max-w-[1920px] mx-auto flex items-center justify-between px-3 sm:px-4 lg:px-8">
          {/* Logo and Brand */}
          <div className="flex items-center flex-shrink-0 gap-2 sm:gap-3">
            <LogoLink href="/" aria-label="Veer Bharat Home" className="block group">
              <div className="w-[100px] h-[80px] sm:w-[120px] sm:h-[100px] md:w-[140px] md:h-[110px] lg:w-[150px] lg:h-[120px] overflow-hidden rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 bg-white/30 backdrop-blur-sm p-1">
                <Image
                  src="/logo.png"
                  alt="Veer Bharat logo"
                  width={200}
                  height={124}
                  style={{ objectFit: "contain" }}
                  priority
                  className="w-full h-full"
                />
              </div>
            </LogoLink>
            
            <div className="flex flex-col leading-tight">
              <span className="font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-tight bg-gradient-to-r from-[#08348b] via-[#0a4bb5] to-[#08348b] bg-clip-text text-transparent drop-shadow-sm">
                VEER BHARAT
              </span>
              <span className="italic text-sm sm:text-base md:text-lg lg:text-xl font-bold bg-gradient-to-r from-[#aa2266] to-[#d63384] bg-clip-text text-transparent">
                वाह! मज़ा आ गया
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex flex-1 justify-center items-center px-4">
            <ul className="flex items-center gap-2 xl:gap-4 text-lg xl:text-xl font-black">
              <li><NavLink href="/">Home</NavLink></li>
              <li><NavLink href="/blog">Blog</NavLink></li>

              {/* Products dropdown */}
              <li className="relative" ref={productsRef}>
                <button
                  ref={productsButtonRef}
                  onClick={() => setProductsOpen((s) => !s)}
                  onMouseEnter={() => setProductsOpen(true)}
                  onFocus={() => setProductsOpen(true)}
                  className="flex items-center gap-1.5 px-3 xl:px-4 py-2 xl:py-2.5 rounded-xl hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-[#08348b]/30 transition-all duration-300 hover:shadow-md text-gray-700 hover:text-[#08348b] font-black group"
                >
                  Products 
                  <ChevronIcon open={productsOpen} />
                </button>
                <DropdownMenu isOpen={productsOpen} onMouseEnter={() => setProductsOpen(true)} onMouseLeave={() => setProductsOpen(false)}>
                  <DropdownItem href="/products" onClick={() => setProductsOpen(false)}>🛍️ All Products</DropdownItem>
                  <DropdownItem href="/soyabean-oil" onClick={() => setProductsOpen(false)}>🌿 Soyabean Oil</DropdownItem>
                  <DropdownItem href="/mustard-oil" onClick={() => setProductsOpen(false)}>🌾 Mustard Oil</DropdownItem>
                  <DropdownItem href="/palm-oil" onClick={() => setProductsOpen(false)}>🌴 Palm Oil</DropdownItem>
                  <DropdownItem href="/brand-rice" onClick={() => setProductsOpen(false)}>🍚 Brand Rice</DropdownItem>
                </DropdownMenu>
              </li>

              {/* Brochure dropdown */}
              <li className="relative" ref={brochureRef}>
                <button
                  ref={brochureButtonRef}
                  onClick={() => setBrochureOpen((s) => !s)}
                  onMouseEnter={() => setBrochureOpen(true)}
                  onFocus={() => setBrochureOpen(true)}
                  className="flex items-center gap-1.5 px-3 xl:px-4 py-2 xl:py-2.5 rounded-xl hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-[#08348b]/30 transition-all duration-300 hover:shadow-md text-gray-700 hover:text-[#08348b] font-black group"
                >
                  Brochure 
                  <ChevronIcon open={brochureOpen} />
                </button>
                <DropdownMenu isOpen={brochureOpen} onMouseEnter={() => setBrochureOpen(true)} onMouseLeave={() => setBrochureOpen(false)}>
                  <li>
                    <button
                      onClick={() => { setViewerOpen(true); setBrochureOpen(false); setOpen(false); }}
                      className="w-full text-left px-5 py-3.5 hover:bg-gradient-to-r hover:from-purple-100 hover:to-blue-100 text-lg font-black text-[#082f63] rounded-lg transition-all duration-300 flex items-center gap-2 hover:pl-6"
                    >
                      👁️ View Brochure
                    </button>
                  </li>
                  <li>
                    <a 
                      href={pdfPath} 
                      download 
                      className="block px-5 py-3.5 hover:bg-gradient-to-r hover:from-purple-100 hover:to-blue-100 text-lg font-black text-[#082f63] rounded-lg transition-all duration-300 flex items-center gap-2 hover:pl-6"
                    >
                      📥 Download Brochure
                    </a>
                  </li>
                </DropdownMenu>
              </li>

              {/* Team dropdown */}
              <li className="relative" ref={teamRef}>
                <button
                  ref={teamButtonRef}
                  onClick={() => setTeamOpen((s) => !s)}
                  onMouseEnter={() => setTeamOpen(true)}
                  onFocus={() => setTeamOpen(true)}
                  className="flex items-center gap-1.5 px-3 xl:px-4 py-2 xl:py-2.5 rounded-xl hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-[#08348b]/30 transition-all duration-300 hover:shadow-md text-gray-700 hover:text-[#08348b] font-black group"
                >
                  Team 
                  <ChevronIcon open={teamOpen} />
                </button>
                <DropdownMenu isOpen={teamOpen} onMouseEnter={() => setTeamOpen(true)} onMouseLeave={() => setTeamOpen(false)}>
                  <DropdownItem href="/team" onClick={() => setTeamOpen(false)}>👥 Our Team</DropdownItem>
                  <DropdownItem href="/gallery" onClick={() => setTeamOpen(false)}>📸 Gallery</DropdownItem>
                  <DropdownItem href="/Managing-Director" onClick={() => setTeamOpen(false)}>👔 Managing Director</DropdownItem>
                </DropdownMenu>
              </li>

              <li><NavLink href="/about">About</NavLink></li>
              <li><NavLink href="/contact">Contact</NavLink></li>
            </ul>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            className="lg:hidden relative z-[150] w-11 h-11 sm:w-12 sm:h-12 flex flex-col items-center justify-center gap-1.5 focus:outline-none bg-white/40 rounded-xl backdrop-blur-md hover:bg-white/60 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl border border-white/50"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span
              className={`block w-6 sm:w-7 h-0.5 bg-gradient-to-r from-[#08348b] to-[#aa2266] rounded-full transition-all duration-300 ease-out ${
                open ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 sm:w-7 h-0.5 bg-gradient-to-r from-[#08348b] to-[#aa2266] rounded-full transition-all duration-200 ease-out ${
                open ? "opacity-0 scale-0" : "opacity-100 scale-100"
              }`}
            />
            <span
              className={`block w-6 sm:w-7 h-0.5 bg-gradient-to-r from-[#08348b] to-[#aa2266] rounded-full transition-all duration-300 ease-out ${
                open ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu - FIXED Z-INDEX */}
      {open && (
        <div className="lg:hidden fixed inset-0 z-[110] flex justify-end">
          <div
            className="absolute inset-0 bg-gradient-to-br from-black/70 via-purple-900/50 to-black/70 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          <div
            className="relative w-[85vw] max-w-[380px] h-full bg-gradient-to-br from-[#DFC6F6] via-white to-[#f5ebff] shadow-2xl overflow-y-auto"
            style={{
              boxShadow: '-20px 0 60px rgba(8, 52, 139, 0.4), -10px 0 30px rgba(170, 34, 102, 0.2)'
            }}
          >
            {/* Decorative header */}
            <div className="h-1.5 bg-gradient-to-r from-[#08348b] via-[#aa2266] to-[#08348b]" />
            
            <div className="px-4 sm:px-6 py-6 sm:py-8 flex flex-col gap-2.5 sm:gap-3">
              {/* Menu title */}
              <div className="text-center mb-3 sm:mb-4">
                <h3 className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-[#08348b] to-[#aa2266] bg-clip-text text-transparent tracking-tight">
                  Navigation Menu
                </h3>
                <div className="w-20 h-1 bg-gradient-to-r from-[#08348b] via-[#aa2266] to-[#08348b] rounded-full mx-auto mt-2 shadow-md" />
              </div>

              <MobileLink href="/" onClick={() => setOpen(false)} icon="🏠">
                Home
              </MobileLink>
              
              <MobileLink href="/blog" onClick={() => setOpen(false)} icon="📝">
                Blog
              </MobileLink>

              <MobileDropdown title="Products" icon="🛍️">
                <SubMenuLink href="/products" onClick={() => setOpen(false)}>All Products</SubMenuLink>
                <SubMenuLink href="/soyabean-oil" onClick={() => setOpen(false)}>Soyabean Oil</SubMenuLink>
                <SubMenuLink href="/mustard-oil" onClick={() => setOpen(false)}>Mustard Oil</SubMenuLink>
                <SubMenuLink href="/palm-oil" onClick={() => setOpen(false)}>Palm Oil</SubMenuLink>
                <SubMenuLink href="/brand-rice" onClick={() => setOpen(false)}>Brand Rice</SubMenuLink>
              </MobileDropdown>

              <MobileDropdown title="Brochure" icon="📄">
                <button
                  onClick={() => { setViewerOpen(true); setOpen(false); }}
                  className="text-left px-4 py-3 rounded-lg text-[#08348b] hover:bg-white/90 bg-white/50 font-black transition-all text-base sm:text-lg border border-purple-100 hover:border-purple-200 hover:shadow-md w-full"
                >
                  👁️ View Brochure
                </button>
                <a
                  href={pdfPath}
                  download
                  className="block px-4 py-3 rounded-lg text-[#08348b] hover:bg-white/90 bg-white/50 font-black transition-all text-base sm:text-lg border border-purple-100 hover:border-purple-200 hover:shadow-md"
                  onClick={() => setOpen(false)}
                >
                  📥 Download Brochure
                </a>
              </MobileDropdown>

              <MobileDropdown title="Team" icon="👥">
                <SubMenuLink href="/team" onClick={() => setOpen(false)}>Our Team</SubMenuLink>
                <SubMenuLink href="/gallery" onClick={() => setOpen(false)}>Gallery</SubMenuLink>
                <SubMenuLink href="/Managing-Director" onClick={() => setOpen(false)}>Managing Director</SubMenuLink>
              </MobileDropdown>

              <MobileLink href="/about" onClick={() => setOpen(false)} icon="ℹ️">
                About
              </MobileLink>
              
              <MobileLink href="/contact" onClick={() => setOpen(false)} icon="📞">
                Contact
              </MobileLink>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#08348b]/5 via-purple-100/10 to-transparent pointer-events-none" />
          </div>
        </div>
      )}

      {/* Brochure Modal */}
      {viewerOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-4 md:p-6">
          <div 
            className="absolute inset-0 bg-gradient-to-br from-black/70 via-purple-900/50 to-black/70 backdrop-blur-md" 
            onClick={() => setViewerOpen(false)} 
          />
          <div className="relative w-full max-w-6xl h-[85vh] sm:h-[80vh] bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border-2 border-purple-200/50">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 px-4 sm:px-6 py-3 sm:py-4 border-b-2 border-purple-200/50 bg-gradient-to-r from-[#DFC6F6] via-white to-[#f5ebff]">
              <h3 className="text-xl sm:text-2xl font-black bg-gradient-to-r from-[#082f63] to-[#aa2266] bg-clip-text text-transparent">
                📄 Brochure Preview
              </h3>
              <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
                <a 
                  href={pdfPath} 
                  download 
                  className="flex-1 sm:flex-initial px-3 sm:px-4 py-2 text-base sm:text-lg font-black rounded-lg sm:rounded-xl border-2 border-[#08348b] text-[#08348b] hover:bg-[#08348b] hover:text-white transition-all duration-300 hover:shadow-lg text-center"
                >
                  📥 Download
                </a>
                <button 
                  onClick={() => setViewerOpen(false)} 
                  className="flex-1 sm:flex-initial px-3 sm:px-4 py-2 text-base sm:text-lg font-black rounded-lg sm:rounded-xl border-2 border-gray-300 hover:bg-gray-100 hover:border-gray-400 transition-all duration-300 hover:shadow-lg"
                >
                  ✕ Close
                </button>
              </div>
            </div>
            <iframe 
              src={`${pdfPath}#view=FitH`} 
              className="w-full h-[calc(100%-60px)] sm:h-[calc(100%-70px)]"
              title="Brochure PDF Viewer"
            />
          </div>
        </div>
      )}
    </>
  );
}

/* Helper Components */
function NavLink({ href, children }) {
  return (
    <LogoLink 
      href={href} 
      className="px-3 xl:px-4 py-2 xl:py-2.5 text-gray-700 hover:text-[#08348b] transition-all duration-300 hover:scale-105 rounded-xl hover:bg-white/30 font-black relative group"
    >
      {children}
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#08348b] to-[#aa2266] group-hover:w-3/4 transition-all duration-300 rounded-full" />
    </LogoLink>
  );
}

function DropdownMenu({ isOpen, children, onMouseEnter, onMouseLeave }) {
  return (
    <div
      className={`absolute top-full mt-3 left-1/2 transform -translate-x-1/2 min-w-[260px] rounded-2xl bg-white/95 backdrop-blur-xl text-[#082f63] shadow-2xl ring-2 ring-purple-200/50 transition-all duration-300 z-50 ${
        isOpen ? "opacity-100 pointer-events-auto translate-y-0 scale-100" : "opacity-0 pointer-events-none -translate-y-2 scale-95"
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-l-2 border-t-2 border-purple-200/50" />
      <ul className="py-3 relative">
        {children}
      </ul>
    </div>
  );
}

function DropdownItem({ href, onClick, children }) {
  return (
    <li>
      <LogoLink 
        href={href} 
        className="block px-5 py-3.5 hover:bg-gradient-to-r hover:from-purple-100 hover:to-blue-100 text-lg font-black text-[#082f63] rounded-lg mx-2 transition-all duration-300 hover:pl-6 hover:shadow-sm" 
        onClick={onClick}
      >
        {children}
      </LogoLink>
    </li>
  );
}

function MobileLink({ href, children, onClick, icon }) {
  return (
    <LogoLink
      href={href}
      className="px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl text-[#08348b] font-black text-lg sm:text-xl bg-gradient-to-r from-white/80 to-white/60 hover:from-white hover:to-white/90 transition-all transform hover:scale-[1.02] active:scale-[0.98] hover:shadow-xl shadow-md backdrop-blur-sm border-2 border-purple-100/50 hover:border-purple-200 flex items-center gap-2.5 sm:gap-3"
      onClick={onClick}
    >
      <span className="text-2xl sm:text-3xl">{icon}</span>
      <span className="flex-1">{children}</span>
      <span className="text-[#aa2266] opacity-60">→</span>
    </LogoLink>
  );
}

function MobileDropdown({ title, icon, children }) {
  return (
    <details className="group">
      <summary className="px-4 sm:px-5 py-3.5 sm:py-4 cursor-pointer list-none flex items-center justify-between bg-gradient-to-r from-white/80 to-white/60 hover:from-white hover:to-white/90 rounded-xl transition-all shadow-md hover:shadow-xl backdrop-blur-sm border-2 border-purple-100/50 hover:border-purple-200 active:scale-[0.98]">
        <span className="flex items-center gap-2.5 sm:gap-3 text-[#08348b] font-black text-lg sm:text-xl">
          <span className="text-2xl sm:text-3xl">{icon}</span>
          {title}
        </span>
        <span className="text-[#08348b] text-xl sm:text-2xl font-black group-open:rotate-180 transition-transform duration-300">▾</span>
      </summary>
      <div className="pl-6 sm:pl-8 pr-3 sm:pr-4 pb-2 pt-3 flex flex-col gap-2">
        {children}
      </div>
    </details>
  );
}

function SubMenuLink({ href, children, onClick }) {
  return (
    <LogoLink
      href={href}
      className="px-4 py-3 rounded-lg text-[#08348b] hover:bg-white/90 bg-white/50 font-black transition-all transform hover:translate-x-1 active:scale-95 text-base sm:text-lg border border-purple-100 hover:border-purple-200 hover:shadow-md"
      onClick={onClick}
    >
      {children}
    </LogoLink>
  );
}

function ChevronIcon({ open }) {
  return (
    <svg 
      width="16" 
      height="16" 
      viewBox="0 0 24 24" 
      fill="none" 
      className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
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
