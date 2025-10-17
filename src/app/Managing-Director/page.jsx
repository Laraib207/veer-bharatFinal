// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";

// /**
//  * MANAGING DIRECTOR PROFILE PAGE
//  * Mr. Nitish Kumar - Founder of Sri Shyam Agro Industries
//  * 
//  * Images in public/images/:
//  * - 6.jpg (Main formal portrait)
//  * - 7.jpg (Sitting formal photo)
//  * - WhatsApp-Image-2025-09-01-at-17.31.53.jpg (Office meeting)
//  * - banner2.jpg (Team meeting photo)
//  * - banner3.jpg (With company banner)
//  */

// export default function ManagingDirectorPage() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      
//       {/* HERO SECTION - Premium Introduction */}
//       <section className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-800 text-white">
//         {/* Animated background pattern */}
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute inset-0" style={{
//             backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
//             backgroundSize: "40px 40px"
//           }} />
//         </div>

//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
//             {/* Text Content */}
//             <motion.div
//               initial={{ opacity: 0, x: -60 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 1 }}
//               className="text-center lg:text-left"
//             >
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.2 }}
//                 className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
//               >
//                 <p className="text-sm md:text-base font-semibold tracking-wide text-yellow-300">
//                   Founder & Managing Director
//                 </p>
//               </motion.div>

//               <h1 
//                 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 md:mb-6 leading-tight"
//                 style={{
//                   fontFamily: "'Georgia', serif",
//                   background: "linear-gradient(to right, #ffffff, #fbbf24)",
//                   WebkitBackgroundClip: "text",
//                   WebkitTextFillColor: "transparent",
//                   backgroundClip: "text",
//                 }}
//               >
//                 Mr. Nitish Kumar
//               </h1>

//               <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mb-6 mx-auto lg:mx-0" />

//               <p className="text-lg sm:text-xl md:text-2xl text-slate-200 mb-6 md:mb-8 leading-relaxed">
//                 Visionary Leader | Industry Pioneer | Growth Architect
//               </p>

//               <p className="text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
//                 With over 30 years of exemplary experience in MNC companies and a proven track record of transforming challenges into opportunities, leading Sri Shyam Agro Industries toward unprecedented success since 2015.
//               </p>

//               <div className="mt-8 md:mt-10 flex flex-wrap gap-4 justify-center lg:justify-start">
//                 <motion.div
//                   whileHover={{ scale: 1.05 }}
//                   className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg font-bold text-slate-900 shadow-xl"
//                 >
//                   📈 30+ Years Experience
//                 </motion.div>
//                 <motion.div
//                   whileHover={{ scale: 1.05 }}
//                   className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg font-semibold border border-white/30"
//                 >
//                   🏆 Industry Leader
//                 </motion.div>
//               </div>
//             </motion.div>

//             {/* Hero Image */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.8 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 1, delay: 0.3 }}
//               className="relative"
//             >
//               <div className="relative w-full aspect-[3/4] max-w-md mx-auto">
//                 {/* Glowing border effect */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-orange-500 to-pink-500 rounded-3xl blur-2xl opacity-30 animate-pulse" />
                
//                 <div className="relative h-full rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl">
//                   <Image
//                     src="/images/6.jpg"
//                     alt="Mr. Nitish Kumar - Managing Director"
//                     fill
//                     className="object-cover"
//                     priority
//                   />
//                 </div>

//                 {/* Decorative elements */}
//                 <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full blur-3xl opacity-40" />
//                 <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500 rounded-full blur-3xl opacity-40" />
//               </div>
//             </motion.div>

//           </div>
//         </div>

//         {/* Wave separator */}
//         <div className="absolute bottom-0 left-0 right-0">
//           <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="rgb(248, 250, 252)"/>
//           </svg>
//         </div>
//       </section>

//       {/* JOURNEY SECTION */}
//       <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
          
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="text-center mb-12 md:mb-16 lg:mb-20"
//           >
//             <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-slate-900">
//               The Journey of Excellence
//             </h2>
//             <div className="w-32 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6" />
//             <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
//               From corporate excellence to entrepreneurial success, a story of dedication, innovation, and unwavering commitment to quality.
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 md:mb-24">
            
//             {/* Story Content */}
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//               className="space-y-6"
//             >
//               <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 md:p-8 border border-indigo-100 shadow-lg">
//                 <h3 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-4 flex items-center">
//                   <span className="mr-3 text-3xl">🎯</span>
//                   Three Decades of Corporate Mastery
//                 </h3>
//                 <p className="text-base md:text-lg text-slate-700 leading-relaxed">
//                   With 30 years of distinguished service in leading MNC companies, Mr. Nitish Kumar developed unparalleled expertise in marketing, business development, and strategic leadership. His corporate journey equipped him with invaluable insights into market dynamics, consumer behavior, and operational excellence.
//                 </p>
//               </div>

//               <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 md:p-8 border border-yellow-100 shadow-lg">
//                 <h3 className="text-2xl md:text-3xl font-bold text-orange-900 mb-4 flex items-center">
//                   <span className="mr-3 text-3xl">🚀</span>
//                   Birth of Veer Bharat - 2015
//                 </h3>
//                 <p className="text-base md:text-lg text-slate-700 leading-relaxed">
//                   Armed with decades of experience and a vision to serve quality products to Indian households, Mr. Kumar founded Sri Shyam Agro Industries in 2015. The flagship brand "Veer Bharat" was launched with a commitment to deliver pure, healthy, and authentic food products.
//                 </p>
//               </div>

//               <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 md:p-8 border border-green-100 shadow-lg">
//                 <h3 className="text-2xl md:text-3xl font-bold text-green-900 mb-4 flex items-center">
//                   <span className="mr-3 text-3xl">💪</span>
//                   Overcoming Challenges
//                 </h3>
//                 <p className="text-base md:text-lg text-slate-700 leading-relaxed">
//                   The entrepreneurial journey was not without obstacles. Through countless challenges, market fluctuations, and intense competition, Mr. Kumar's resilience and strategic thinking transformed every setback into a stepping stone for growth and innovation.
//                 </p>
//               </div>
//             </motion.div>

//             {/* Image Grid */}
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//               className="space-y-6"
//             >
//               <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl">
//                 <Image
//                   src="/images/7.jpg"
//                   alt="Mr. Nitish Kumar Professional"
//                   fill
//                   className="object-cover hover:scale-105 transition-transform duration-500"
//                 />
//               </div>
//               <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl">
//                 <Image
//                   src="/images/banner3.jpg"
//                   alt="With Veer Bharat Brand"
//                   fill
//                   className="object-cover hover:scale-105 transition-transform duration-500"
//                 />
//               </div>
//             </motion.div>

//           </div>

//         </div>
//       </section>

//       {/* LEADERSHIP & TEAM SECTION */}
//       <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="text-center mb-12 md:mb-16"
//           >
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6">
//               Leadership That Inspires
//             </h2>
//             <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-6" />
//             <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
//               Leading with vision, empowering with trust, and driving success through collaborative excellence.
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
//             {/* Leadership Image */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//               className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl"
//             >
//               <Image
//                 src="/images/banner2.jpg"
//                 alt="Team Leadership"
//                 fill
//                 className="object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
//             </motion.div>

//             {/* Leadership Philosophy */}
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//               className="space-y-6"
//             >
//               <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20">
//                 <h3 className="text-xl md:text-2xl font-bold mb-4 text-yellow-400">
//                   🎖️ Visionary Leadership
//                 </h3>
//                 <p className="text-slate-200 leading-relaxed">
//                   Mr. Kumar believes in empowering his team with autonomy, trust, and growth opportunities. His leadership style focuses on collaboration, innovation, and shared success.
//                 </p>
//               </div>

//               <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20">
//                 <h3 className="text-xl md:text-2xl font-bold mb-4 text-yellow-400">
//                   🤝 Team Development
//                 </h3>
//                 <p className="text-slate-200 leading-relaxed">
//                   Building a strong, motivated team is at the core of success. Regular training, mentorship programs, and performance recognition ensure every team member reaches their full potential.
//                 </p>
//               </div>

//               <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20">
//                 <h3 className="text-xl md:text-2xl font-bold mb-4 text-yellow-400">
//                   📊 Strategic Marketing Expertise
//                 </h3>
//                 <p className="text-slate-200 leading-relaxed">
//                   Leveraging decades of marketing experience, Mr. Kumar has positioned Veer Bharat as a trusted household name through innovative campaigns, customer-centric strategies, and brand authenticity.
//                 </p>
//               </div>
//             </motion.div>

//           </div>

//         </div>
//       </section>

//       {/* ACHIEVEMENTS & MILESTONES */}
//       <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
          
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="text-center mb-12 md:mb-16"
//           >
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 text-slate-900">
//               Milestones & Achievements
//             </h2>
//             <div className="w-32 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6" />
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            
//             {[
//               { icon: "🏢", title: "30+ Years", desc: "Corporate Experience" },
//               { icon: "📅", title: "Since 2015", desc: "Sri Shyam Agro Industries" },
//               { icon: "🌟", title: "Brand Leader", desc: "Veer Bharat Success" },
//               { icon: "👥", title: "Team Builder", desc: "Inspiring Leadership" },
//             ].map((item, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: idx * 0.1 }}
//                 whileHover={{ scale: 1.05, y: -8 }}
//                 className="bg-gradient-to-br from-white to-slate-50 rounded-2xl p-6 md:p-8 shadow-xl border border-slate-200 text-center"
//               >
//                 <div className="text-5xl md:text-6xl mb-4">{item.icon}</div>
//                 <h3 className="text-2xl md:text-3xl font-black text-indigo-900 mb-2">
//                   {item.title}
//                 </h3>
//                 <p className="text-slate-600 font-medium">{item.desc}</p>
//               </motion.div>
//             ))}

//           </div>

//         </div>
//       </section>

//       {/* VISION & PHILOSOPHY */}
//       <section className="py-16 md:py-24 bg-gradient-to-r from-yellow-50 via-orange-50 to-yellow-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//               className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl"
//             >
//               <Image
//                 src="/images/WhatsApp-Image-2025-09-01-at-17.31.53.jpg"
//                 alt="Office Leadership"
//                 fill
//                 className="object-cover"
//               />
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//               className="space-y-6"
//             >
//               <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-6">
//                 Vision & Philosophy
//               </h2>
              
//               <div className="prose prose-lg max-w-none">
//                 <p className="text-lg text-slate-700 leading-relaxed mb-4">
//                   <strong className="text-indigo-900">"Quality is not an act, it is a habit."</strong> This philosophy drives every decision at Sri Shyam Agro Industries.
//                 </p>

//                 <p className="text-lg text-slate-700 leading-relaxed mb-4">
//                   Mr. Kumar envisions Veer Bharat as a household name synonymous with purity, trust, and health. His commitment extends beyond business success to contribute positively to society by providing authentic, chemical-free products that enhance the well-being of Indian families.
//                 </p>

//                 <p className="text-lg text-slate-700 leading-relaxed">
//                   Through continuous innovation, market research, and customer feedback, the company adapts and evolves while staying true to its core values of integrity, excellence, and customer satisfaction.
//                 </p>
//               </div>

//               <div className="flex flex-wrap gap-4 mt-8">
//                 <div className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold shadow-lg">
//                   🎯 Quality First
//                 </div>
//                 <div className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 rounded-xl font-bold shadow-lg">
//                   💡 Innovation Driven
//                 </div>
//                 <div className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-bold shadow-lg">
//                   ❤️ Customer Centric
//                 </div>
//               </div>
//             </motion.div>

//           </div>

//         </div>
//       </section>

//       {/* FOOTER CTA */}
//       <section className="py-16 md:py-20 bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-800 text-white">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6">
//               Building Tomorrow, Today
//             </h2>
//             <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
//               Under Mr. Nitish Kumar's leadership, Sri Shyam Agro Industries continues to grow, innovate, and serve millions of families across India with the trusted Veer Bharat brand.
//             </p>
//             <div className="inline-block px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full font-bold text-lg text-slate-900 shadow-2xl">
//               🏆 Excellence • Innovation • Trust
//             </div>
//           </motion.div>
//         </div>
//       </section>

//     </div>
//   );
// }









// "use client";

// import React, { useEffect, useState } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import Image from "next/image";

// /**
//  * CLASSICAL & ELEGANT MANAGING DIRECTOR PROFILE PAGE
//  * Timeless, Professional, and Sophisticated Design
//  * 
//  * Features:
//  * - Classic typography with serif fonts
//  * - Elegant gold and cream color scheme
//  * - Smooth, refined animations
//  * - Professional layout
//  * - Fully responsive
//  */

// export default function ManagingDirectorPage() {
//   const { scrollYProgress } = useScroll();
//   const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
//   const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      
//       {/* ELEGANT HERO SECTION */}
//       <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-white to-slate-50 overflow-hidden">
        
//         {/* Decorative background pattern */}
//         <div className="absolute inset-0 opacity-[0.03]">
//           <div className="absolute inset-0" style={{
//             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
//           }} />
//         </div>

//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
//             {/* Left: Text Content */}
//             <motion.div
//               initial={{ opacity: 0, x: -60 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 1, ease: "easeOut" }}
//               className="text-center lg:text-left"
//             >
//               {/* Elegant badge */}
//               <motion.div
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.3, duration: 0.8 }}
//                 className="inline-flex items-center mb-6 px-6 py-2 border-2 border-amber-600 rounded-sm"
//               >
//                 <span className="text-sm font-semibold tracking-[0.3em] text-amber-800 uppercase">
//                   Founder & Managing Director
//                 </span>
//               </motion.div>

//               {/* Name with classic typography */}
//               <motion.h1
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.5, duration: 0.8 }}
//                 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 text-slate-900 leading-tight"
//                 style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
//               >
//                 Mr. Nitish Kumar
//               </motion.h1>

//               {/* Decorative line */}
//               <motion.div
//                 initial={{ width: 0 }}
//                 animate={{ width: "100%" }}
//                 transition={{ delay: 0.8, duration: 1 }}
//                 className="h-[2px] bg-gradient-to-r from-transparent via-amber-600 to-transparent mb-6 max-w-md mx-auto lg:mx-0"
//               />

//               {/* Subtitle */}
//               <motion.p
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 1, duration: 0.8 }}
//                 className="text-xl sm:text-2xl md:text-3xl font-serif text-slate-700 mb-8 leading-relaxed"
//                 style={{ fontFamily: "'Merriweather', 'Georgia', serif" }}
//               >
//                 Visionary Leader | Industry Pioneer | Growth Architect
//               </motion.p>

//               {/* Description */}
//               <motion.p
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 1.2, duration: 0.8 }}
//                 className="text-base md:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8"
//               >
//                 With over three decades of exemplary experience in multinational corporations and a proven track record of transforming challenges into opportunities, leading Sri Shyam Agro Industries toward unprecedented success since 2015.
//               </motion.p>

//               {/* Elegant stats */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 1.4, duration: 0.8 }}
//                 className="flex flex-wrap justify-center lg:justify-start gap-8"
//               >
//                 <div className="text-center">
//                   <div className="text-3xl md:text-4xl font-serif font-bold text-amber-700">30+</div>
//                   <div className="text-sm text-slate-600 uppercase tracking-wider">Years Experience</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-3xl md:text-4xl font-serif font-bold text-amber-700">2015</div>
//                   <div className="text-sm text-slate-600 uppercase tracking-wider">Company Founded</div>
//                 </div>
//               </motion.div>

//             </motion.div>

//             {/* Right: Elegant Image */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
//               className="relative"
//             >
//               <div className="relative w-full max-w-lg mx-auto">
                
//                 {/* Decorative border frame */}
//                 <div className="absolute -inset-4 border-2 border-amber-600/30" />
//                 <div className="absolute -inset-8 border border-amber-600/20" />
                
//                 {/* Main image container */}
//                 <div className="relative aspect-[3/4] overflow-hidden shadow-2xl">
//                   <Image
//                     src="/images/6.jpg"
//                     alt="Mr. Nitish Kumar - Managing Director"
//                     fill
//                     className="object-cover grayscale-[20%]"
//                     priority
//                   />
//                   {/* Subtle vignette */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />
//                 </div>

//                 {/* Quote decoration */}
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 1.5, duration: 1 }}
//                   className="absolute -bottom-8 -right-8 bg-amber-700 text-white p-6 shadow-xl max-w-xs hidden md:block"
//                 >
//                   <p className="text-6xl font-serif leading-none mb-2">"</p>
//                   <p className="text-sm font-serif italic">
//                     Quality is not an act, it is a habit
//                   </p>
//                 </motion.div>

//               </div>
//             </motion.div>

//           </div>
//         </div>

//         {/* Scroll indicator */}
//         <motion.div
//           style={{ opacity, scale }}
//           className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
//         >
//           <div className="flex flex-col items-center">
//             <span className="text-xs uppercase tracking-widest text-slate-500 mb-2">Scroll</span>
//             <div className="w-[2px] h-12 bg-gradient-to-b from-slate-400 to-transparent" />
//           </div>
//         </motion.div>

//       </section>

//       {/* THE JOURNEY SECTION */}
//       <section className="py-20 md:py-32 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
//           {/* Section header */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.8 }}
//             className="text-center mb-16 md:mb-20"
//           >
//             <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-slate-900 mb-6">
//               The Journey of Excellence
//             </h2>
//             <div className="w-24 h-[2px] bg-amber-600 mx-auto mb-6" />
//             <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
//               From corporate excellence to entrepreneurial success, a story of dedication, innovation, and unwavering commitment to quality.
//             </p>
//           </motion.div>

//           {/* Journey content */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
//             {/* Left: Story cards */}
//             <div className="space-y-12">
              
//               {[
//                 {
//                   year: "1985 - 2015",
//                   title: "Three Decades of Corporate Mastery",
//                   desc: "Distinguished service in leading MNC companies, developing unparalleled expertise in marketing, business development, and strategic leadership. Gained invaluable insights into market dynamics, consumer behavior, and operational excellence."
//                 },
//                 {
//                   year: "2015",
//                   title: "Birth of Veer Bharat",
//                   desc: "Founded Sri Shyam Agro Industries with decades of experience and a vision to serve quality products to Indian households. Launched the flagship brand 'Veer Bharat' with a commitment to deliver pure, healthy, and authentic food products."
//                 },
//                 {
//                   year: "2015 - Present",
//                   title: "Overcoming Challenges",
//                   desc: "Navigating countless obstacles, market fluctuations, and intense competition with resilience and strategic thinking. Transformed every setback into a stepping stone for growth and innovation, building a trusted brand across India."
//                 },
//               ].map((item, i) => (
//                 <motion.div
//                   key={i}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true, amount: 0.3 }}
//                   transition={{ duration: 0.8, delay: i * 0.2 }}
//                   className="relative pl-8 border-l-2 border-amber-600"
//                 >
//                   <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-amber-600 border-4 border-white" />
                  
//                   <div className="text-sm font-semibold text-amber-700 uppercase tracking-wider mb-2">
//                     {item.year}
//                   </div>
//                   <h3 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-4">
//                     {item.title}
//                   </h3>
//                   <p className="text-base md:text-lg text-slate-600 leading-relaxed">
//                     {item.desc}
//                   </p>
//                 </motion.div>
//               ))}

//             </div>

//             {/* Right: Images */}
//             <div className="space-y-8">
//               {[
//                 { src: "/images/7.jpg", alt: "Professional Portrait" },
//                 { src: "/images/banner3.jpg", alt: "With Veer Bharat Brand" },
//               ].map((img, i) => (
//                 <motion.div
//                   key={i}
//                   initial={{ opacity: 0, x: 60 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true, amount: 0.3 }}
//                   transition={{ duration: 0.8, delay: i * 0.2 }}
//                   className="relative group"
//                 >
//                   <div className="absolute -inset-2 border border-amber-600/30 group-hover:border-amber-600/60 transition-colors duration-300" />
//                   <div className="relative h-80 md:h-96 overflow-hidden">
//                     <Image
//                       src={img.src}
//                       alt={img.alt}
//                       fill
//                       className="object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
//                     />
//                   </div>
//                 </motion.div>
//               ))}
//             </div>

//           </div>

//         </div>
//       </section>

//       {/* LEADERSHIP SECTION */}
//       <section className="py-20 md:py-32 bg-gradient-to-b from-slate-50 to-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.8 }}
//             className="text-center mb-16 md:mb-20"
//           >
//             <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-slate-900 mb-6">
//               Leadership Philosophy
//             </h2>
//             <div className="w-24 h-[2px] bg-amber-600 mx-auto mb-6" />
//             <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
//               Leading with vision, empowering with trust, and driving success through collaborative excellence.
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
//             {/* Image */}
//             <motion.div
//               initial={{ opacity: 0, x: -60 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 0.8 }}
//               className="order-2 lg:order-1"
//             >
//               <div className="relative">
//                 <div className="absolute -inset-4 border-2 border-amber-600/30" />
//                 <div className="relative h-96 md:h-[500px] overflow-hidden shadow-xl">
//                   <Image
//                     src="/images/banner2.jpg"
//                     alt="Team Leadership"
//                     fill
//                     className="object-cover grayscale-[20%]"
//                   />
//                 </div>
//               </div>
//             </motion.div>

//             {/* Content */}
//             <div className="order-1 lg:order-2 space-y-8">
              
//               {[
//                 {
//                   title: "Visionary Leadership",
//                   desc: "Empowering teams with autonomy, trust, and growth opportunities. Leadership focused on collaboration, innovation, and shared success in achieving organizational goals."
//                 },
//                 {
//                   title: "Team Development",
//                   desc: "Building strong, motivated teams through regular training, mentorship programs, and performance recognition ensuring every member reaches their full potential."
//                 },
//                 {
//                   title: "Strategic Marketing Expertise",
//                   desc: "Leveraging decades of marketing experience to position Veer Bharat as a trusted household name through innovative campaigns and customer-centric strategies."
//                 },
//               ].map((item, i) => (
//                 <motion.div
//                   key={i}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true, amount: 0.3 }}
//                   transition={{ duration: 0.8, delay: i * 0.2 }}
//                   className="border-l-4 border-amber-600 pl-6"
//                 >
//                   <h3 className="text-2xl font-serif font-bold text-slate-900 mb-3">
//                     {item.title}
//                   </h3>
//                   <p className="text-base md:text-lg text-slate-600 leading-relaxed">
//                     {item.desc}
//                   </p>
//                 </motion.div>
//               ))}

//             </div>

//           </div>

//         </div>
//       </section>

//       {/* ACHIEVEMENTS SECTION */}
//       <section className="py-20 md:py-32 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.8 }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-slate-900 mb-6">
//               Milestones & Achievements
//             </h2>
//             <div className="w-24 h-[2px] bg-amber-600 mx-auto" />
//           </motion.div>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            
//             {[
//               { number: "30+", label: "Years of Experience" },
//               { number: "2015", label: "Company Founded" },
//               { number: "100%", label: "Commitment to Quality" },
//               { number: "#1", label: "Brand Leadership" },
//             ].map((stat, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.3 }}
//                 transition={{ duration: 0.8, delay: i * 0.15 }}
//                 className="text-center"
//               >
//                 <div className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-amber-700 mb-3">
//                   {stat.number}
//                 </div>
//                 <div className="text-sm md:text-base text-slate-600 uppercase tracking-wider">
//                   {stat.label}
//                 </div>
//                 <div className="w-12 h-[2px] bg-amber-600 mx-auto mt-4" />
//               </motion.div>
//             ))}

//           </div>

//         </div>
//       </section>

//       {/* VISION SECTION */}
//       <section className="py-20 md:py-32 bg-gradient-to-b from-slate-50 to-amber-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
//             <motion.div
//               initial={{ opacity: 0, x: -60 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 0.8 }}
//               className="space-y-6"
//             >
//               <h2 className="text-4xl sm:text-5xl font-serif font-bold text-slate-900 mb-6">
//                 Vision & Philosophy
//               </h2>
              
//               <div className="space-y-4 text-base md:text-lg text-slate-700 leading-relaxed">
//                 <p className="font-serif italic text-xl text-amber-800 border-l-4 border-amber-600 pl-6">
//                   "Quality is not an act, it is a habit."
//                 </p>

//                 <p>
//                   This philosophy drives every decision at Sri Shyam Agro Industries. The vision is to establish Veer Bharat as a household name synonymous with purity, trust, and health.
//                 </p>

//                 <p>
//                   The commitment extends beyond business success to contribute positively to society by providing authentic, chemical-free products that enhance the well-being of Indian families.
//                 </p>

//                 <p>
//                   Through continuous innovation, market research, and customer feedback, the company adapts and evolves while staying true to its core values of integrity, excellence, and customer satisfaction.
//                 </p>
//               </div>

//               <div className="flex flex-wrap gap-4 pt-6">
//                 {["Quality First", "Innovation Driven", "Customer Centric"].map((value, i) => (
//                   <div
//                     key={i}
//                     className="px-6 py-3 border-2 border-amber-600 text-amber-800 font-semibold text-sm uppercase tracking-wider hover:bg-amber-600 hover:text-white transition-colors duration-300"
//                   >
//                     {value}
//                   </div>
//                 ))}
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 60 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 0.8 }}
//               className="relative"
//             >
//               <div className="absolute -inset-4 border-2 border-amber-600/30" />
//               <div className="relative h-96 md:h-[500px] overflow-hidden shadow-xl">
//                 <Image
//                   src="/images/WhatsApp-Image-2025-09-01-at-17.31.53.jpg"
//                   alt="Office Leadership"
//                   fill
//                   className="object-cover grayscale-[20%]"
//                 />
//               </div>
//             </motion.div>

//           </div>

//         </div>
//       </section>

//       {/* ELEGANT FOOTER */}
//       <section className="py-16 md:py-20 bg-slate-900 text-white">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.8 }}
//           >
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-6">
//               Building Tomorrow, Today
//             </h2>
//             <div className="w-24 h-[2px] bg-amber-600 mx-auto mb-6" />
//             <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8">
//               Under Mr. Nitish Kumar's leadership, Sri Shyam Agro Industries continues to grow, innovate, and serve millions of families across India with the trusted Veer Bharat brand.
//             </p>
//             <div className="inline-flex items-center gap-4 text-amber-400 font-semibold text-lg">
//               <span>Excellence</span>
//               <span>•</span>
//               <span>Innovation</span>
//               <span>•</span>
//               <span>Trust</span>
//             </div>
//           </motion.div>

//         </div>
//       </section>

//     </div>
//   );
// }






// "use client";

// import React, { useEffect, useState } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import Image from "next/image";

// /**
//  * EMOTIONAL JOURNEY MANAGING DIRECTOR PAGE
//  * Story-Driven, Heart-Touching, Inspiring Design
//  * Colors: #18A34B (Green) & #fef9c3 (Light Yellow)
//  */

// export default function ManagingDirectorPage() {
//   const { scrollYProgress } = useScroll();
//   const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#fef9c3] via-white to-[#fef9c3]">
      
//       {/* HERO SECTION - Image First */}
//       <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#18A34B] via-[#16a34a] to-[#15803d] overflow-hidden">
        
//         {/* Animated Background Pattern */}
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute inset-0" style={{
//             backgroundImage: `radial-gradient(circle, #fef9c3 1px, transparent 1px)`,
//             backgroundSize: "50px 50px",
//             animation: "patternMove 20s linear infinite"
//           }} />
//         </div>

//         {/* Floating Particles */}
//         {[...Array(15)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-2 h-2 bg-[#fef9c3] rounded-full"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//             }}
//             animate={{
//               y: [0, -30, 0],
//               opacity: [0.3, 0.8, 0.3],
//               scale: [1, 1.5, 1],
//             }}
//             transition={{
//               duration: 3 + Math.random() * 2,
//               repeat: Infinity,
//               delay: Math.random() * 2,
//             }}
//           />
//         ))}

//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          
//           <div className="flex flex-col items-center text-center">
            
//             {/* Hero Image with Animation */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.8, y: 50 }}
//               animate={{ opacity: 1, scale: 1, y: 0 }}
//               transition={{ duration: 1.2, ease: "easeOut" }}
//               className="relative w-full max-w-md md:max-w-lg mb-12"
//             >
//               {/* Glowing rings */}
//               <div className="absolute -inset-4 bg-gradient-to-r from-[#fef9c3] via-white to-[#fef9c3] opacity-40 blur-2xl rounded-full animate-pulse" />
//               <div className="absolute -inset-8 border-4 border-[#fef9c3] opacity-30 rounded-full animate-spin-slow" />
              
//               {/* Main image container */}
//               <div className="relative aspect-square overflow-hidden rounded-full border-8 border-[#fef9c3] shadow-2xl">
//                 <Image
//                   src="/images/6.jpg"
//                   alt="Mr. Nitish Kumar"
//                   fill
//                   className="object-cover"
//                   priority
//                 />
//                 {/* Gradient overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#18A34B]/20 via-transparent to-transparent" />
//               </div>

//               {/* Decorative elements */}
//               <motion.div
//                 animate={{
//                   rotate: 360,
//                 }}
//                 transition={{
//                   duration: 20,
//                   repeat: Infinity,
//                   ease: "linear",
//                 }}
//                 className="absolute -top-6 -right-6 w-20 h-20 border-4 border-dashed border-[#fef9c3] rounded-full"
//               />
//               <motion.div
//                 animate={{
//                   rotate: -360,
//                 }}
//                 transition={{
//                   duration: 15,
//                   repeat: Infinity,
//                   ease: "linear",
//                 }}
//                 className="absolute -bottom-6 -left-6 w-16 h-16 border-4 border-dotted border-[#fef9c3] rounded-full"
//               />
//             </motion.div>

//             {/* Name Below Image */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.6, duration: 0.8 }}
//               className="mb-8"
//             >
//               <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-4 text-white leading-tight tracking-tight">
//                 Mr. Nitish Kumar
//               </h1>
//               <div className="flex items-center justify-center gap-4 mb-6">
//                 <div className="h-1 w-20 bg-[#fef9c3]" />
//                 <span className="text-xl sm:text-2xl font-bold text-[#fef9c3] uppercase tracking-widest">
//                   Founder & MD
//                 </span>
//                 <div className="h-1 w-20 bg-[#fef9c3]" />
//               </div>
//               <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#fef9c3] italic">
//                 From Mother's Kitchen to National Mission
//               </p>
//             </motion.div>

//             {/* Scroll Indicator */}
//             <motion.div
//               style={{ opacity }}
//               className="absolute bottom-8"
//             >
//               <motion.div
//                 animate={{ y: [0, 10, 0] }}
//                 transition={{ duration: 1.5, repeat: Infinity }}
//                 className="flex flex-col items-center gap-2"
//               >
//                 <span className="text-sm text-[#fef9c3] font-semibold uppercase tracking-wider">Scroll to Read Story</span>
//                 <svg className="w-6 h-6 text-[#fef9c3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
//                 </svg>
//               </motion.div>
//             </motion.div>

//           </div>
//         </div>
//       </section>

//       {/* THE STORY BEGINS - Diwali Evening */}
//       <section className="py-20 md:py-32 bg-white relative overflow-hidden">
        
//         {/* Background decoration */}
//         <div className="absolute top-0 right-0 w-96 h-96 bg-[#fef9c3] opacity-20 rounded-full blur-3xl" />
//         <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#18A34B] opacity-10 rounded-full blur-3xl" />

//         <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.8 }}
//             className="text-center mb-16"
//           >
//             <div className="inline-block mb-6 px-8 py-3 bg-gradient-to-r from-[#18A34B] to-[#16a34a] text-white font-black text-lg uppercase tracking-widest rounded-full shadow-lg">
//               🪔 The Beginning 🪔
//             </div>
//             <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#18A34B] mb-6 leading-tight">
//               One Diwali Evening
//             </h2>
//             <div className="w-32 h-2 bg-[#18A34B] mx-auto mb-6 rounded-full" />
//             <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-700 italic">
//               Muzaffarpur, Bihar
//             </p>
//           </motion.div>

//           {/* Story Content */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
//             {/* Left: Image */}
//             <motion.div
//               initial={{ opacity: 0, x: -60 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 0.8 }}
//               className="relative"
//             >
//               <div className="absolute -inset-6 bg-gradient-to-br from-[#18A34B] to-[#16a34a] opacity-20 blur-2xl rounded-3xl" />
//               <div className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-[#18A34B]">
//                 <Image
//                   src="/images/7.jpg"
//                   alt="Diwali Evening"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//             </motion.div>

//             {/* Right: Story Text */}
//             <motion.div
//               initial={{ opacity: 0, x: 60 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 0.8 }}
//               className="space-y-6"
//             >
//               <div className="bg-gradient-to-br from-[#fef9c3] to-[#fefce8] p-8 rounded-2xl shadow-xl border-l-8 border-[#18A34B]">
//                 <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 leading-relaxed mb-6">
//                   I witnessed something that changed the course of my life.
//                 </p>
//                 <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
//                   My mother was cooking for the festival when she poured a packet of oil into the utensil. 
//                 </p>
//               </div>

//               <div className="bg-red-50 p-8 rounded-2xl shadow-xl border-l-8 border-red-500">
//                 <p className="text-xl sm:text-2xl font-black text-red-700 leading-relaxed">
//                   What I saw next shook me to the core...
//                 </p>
//                 <p className="text-lg sm:text-xl text-gray-800 mt-4 leading-relaxed">
//                   A cloudy liquid with a thick lump settled at the bottom of the packet.
//                 </p>
//                 <p className="text-xl sm:text-2xl font-bold text-red-600 mt-4 italic">
//                   This wasn't just oil. It was a silent health hazard.
//                 </p>
//               </div>
//             </motion.div>

//           </div>

//         </div>
//       </section>

//       {/* THE TURNING POINT - Mother's Words */}
//       <section className="py-20 md:py-32 bg-gradient-to-b from-[#18A34B] to-[#16a34a] text-white relative overflow-hidden">
        
//         {/* Decorative elements */}
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute top-20 left-20 w-40 h-40 border-4 border-[#fef9c3] rounded-full animate-ping" />
//           <div className="absolute bottom-20 right-20 w-60 h-60 border-4 border-[#fef9c3] rounded-full animate-pulse" />
//         </div>

//         <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.8 }}
//             className="text-center mb-16"
//           >
//             <div className="inline-block mb-6 px-8 py-3 bg-[#fef9c3] text-[#18A34B] font-black text-lg uppercase tracking-widest rounded-full shadow-lg">
//               💫 The Turning Point 💫
//             </div>
//             <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight">
//               Mother's Challenge
//             </h2>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.8 }}
//             className="max-w-4xl mx-auto"
//           >
//             {/* Mother's Quote - Large and Prominent */}
//             <div className="relative bg-white text-[#18A34B] p-12 md:p-16 rounded-3xl shadow-2xl mb-12">
//               <div className="absolute -top-8 -left-8 text-[#fef9c3] text-9xl font-serif opacity-50">"</div>
//               <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-center relative z-10 mb-6">
//                 If you're so concerned, build your own brand.
//               </p>
//               <div className="absolute -bottom-8 -right-8 text-[#fef9c3] text-9xl font-serif opacity-50 rotate-180">"</div>
//               <div className="text-center mt-8">
//                 <span className="text-2xl sm:text-3xl font-bold text-[#18A34B]">— Mother</span>
//               </div>
//             </div>

//             {/* Impact Statement */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
//               {[
//                 { icon: "💔", text: "That sentence hit me hard" },
//                 { icon: "🎯", text: "It was a challenge" },
//                 { icon: "🔥", text: "A call to action" },
//               ].map((item, i) => (
//                 <motion.div
//                   key={i}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true, amount: 0.3 }}
//                   transition={{ duration: 0.6, delay: i * 0.2 }}
//                   className="bg-[#fef9c3] text-[#18A34B] p-8 rounded-2xl shadow-xl"
//                 >
//                   <div className="text-5xl mb-4">{item.icon}</div>
//                   <p className="text-xl sm:text-2xl font-bold leading-tight">{item.text}</p>
//                 </motion.div>
//               ))}
//             </div>

//           </motion.div>

//         </div>
//       </section>

//       {/* THE BIRTH OF VEER BHARAT */}
//       <section className="py-20 md:py-32 bg-gradient-to-b from-[#fef9c3] via-white to-[#fef9c3] relative overflow-hidden">
        
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.8 }}
//             className="text-center mb-16"
//           >
//             <div className="inline-block mb-6 px-8 py-3 bg-gradient-to-r from-[#18A34B] to-[#16a34a] text-white font-black text-lg uppercase tracking-widest rounded-full shadow-lg">
//               🚀 The Birth 🚀
//             </div>
//             <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#18A34B] mb-6 leading-tight">
//               And So, I Did.
//             </h2>
//             <div className="w-32 h-2 bg-[#18A34B] mx-auto mb-6 rounded-full" />
//           </motion.div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            
//             {/* Left: Content */}
//             <motion.div
//               initial={{ opacity: 0, x: -60 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 0.8 }}
//               className="space-y-8"
//             >
//               <div className="bg-gradient-to-br from-[#18A34B] to-[#16a34a] text-white p-10 rounded-3xl shadow-2xl">
//                 <h3 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 leading-tight">
//                   I built Veer Bharat
//                 </h3>
//                 <p className="text-xl sm:text-2xl font-bold leading-relaxed">
//                   Not just as a brand, but as a movement.
//                 </p>
//               </div>

//               {[
//                 { icon: "❤️", text: "A commitment to health" },
//                 { icon: "✨", text: "A promise of purity" },
//                 { icon: "🙏", text: "A belief that every Indian deserves better" },
//               ].map((item, i) => (
//                 <motion.div
//                   key={i}
//                   initial={{ opacity: 0, x: -30 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true, amount: 0.3 }}
//                   transition={{ duration: 0.6, delay: i * 0.2 }}
//                   className="flex items-start gap-6 bg-white p-8 rounded-2xl shadow-lg border-l-8 border-[#18A34B]"
//                 >
//                   <span className="text-5xl">{item.icon}</span>
//                   <p className="text-2xl sm:text-3xl font-black text-gray-800 leading-tight flex-1">
//                     {item.text}
//                   </p>
//                 </motion.div>
//               ))}
//             </motion.div>

//             {/* Right: Image */}
//             <motion.div
//               initial={{ opacity: 0, x: 60 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 0.8 }}
//               className="relative"
//             >
//               <div className="absolute -inset-6 bg-gradient-to-br from-[#18A34B] to-[#16a34a] opacity-20 blur-2xl rounded-3xl" />
//               <div className="relative h-96 md:h-[600px] rounded-3xl overflow-hidden shadow-2xl border-4 border-[#18A34B]">
//                 <Image
//                   src="/images/banner3.jpg"
//                   alt="Veer Bharat Products"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//             </motion.div>

//           </div>

//           {/* Mission Statement */}
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.8 }}
//             className="bg-gradient-to-r from-[#18A34B] via-[#16a34a] to-[#18A34B] text-white p-12 md:p-16 rounded-3xl shadow-2xl text-center"
//           >
//             <h3 className="text-3xl sm:text-4xl md:text-5xl font-black mb-8 leading-tight">
//               Our Mission Today
//             </h3>
//             <p className="text-2xl sm:text-3xl md:text-4xl font-bold leading-relaxed mb-8">
//               To ensure our present and future generations don't have to choose between affordability and health.
//             </p>
//             <div className="flex flex-wrap justify-center gap-4">
//               {["Quality", "Purity", "Trust", "Health"].map((value, i) => (
//                 <div
//                   key={i}
//                   className="px-8 py-4 bg-[#fef9c3] text-[#18A34B] font-black text-xl rounded-full shadow-lg"
//                 >
//                   {value}
//                 </div>
//               ))}
//             </div>
//           </motion.div>

//         </div>
//       </section>

//       {/* THE SPARK */}
//       <section className="py-20 md:py-32 bg-gradient-to-b from-[#18A34B] to-[#15803d] text-white relative overflow-hidden">
        
//         {/* Animated background */}
//         <div className="absolute inset-0 opacity-20">
//           {[...Array(20)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute w-1 h-1 bg-[#fef9c3] rounded-full"
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//               }}
//               animate={{
//                 scale: [1, 2, 1],
//                 opacity: [0.3, 1, 0.3],
//               }}
//               transition={{
//                 duration: 2 + Math.random() * 2,
//                 repeat: Infinity,
//                 delay: Math.random() * 2,
//               }}
//             />
//           ))}
//         </div>

//         <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.8 }}
//           >
//             <div className="mb-8">
//               <span className="text-8xl sm:text-9xl">🪔</span>
//             </div>
            
//             <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight">
//               This Diwali Sparked More Than Just Light
//             </h2>
            
//             <div className="w-32 h-2 bg-[#fef9c3] mx-auto mb-8 rounded-full" />
            
//             <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#fef9c3] italic leading-tight">
//               It Sparked Purpose.
//             </p>

//             {/* Image Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
//               {[
//                 { src: "/images/banner2.jpg", alt: "Journey Image 1" },
//                 { src: "/images/WhatsApp-Image-2025-09-01-at-17.31.53.jpg", alt: "Journey Image 2" },
//               ].map((img, i) => (
//                 <motion.div
//                   key={i}
//                   initial={{ opacity: 0, y: 50 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true, amount: 0.3 }}
//                   transition={{ duration: 0.8, delay: i * 0.2 }}
//                   className="relative h-80 rounded-3xl overflow-hidden shadow-2xl border-4 border-[#fef9c3] group"
//                 >
//                   <Image
//                     src={img.src}
//                     alt={img.alt}
//                     fill
//                     className="object-cover group-hover:scale-110 transition-transform duration-500"
//                   />
//                 </motion.div>
//               ))}
//             </div>

//           </motion.div>

//         </div>
//       </section>

//       {/* FINAL CTA */}
//       <section className="py-20 md:py-32 bg-gradient-to-b from-[#fef9c3] to-white">
//         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.8 }}
//           >
//             <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#18A34B] mb-8 leading-tight">
//               Join the Movement
//             </h2>
//             <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-700 mb-12 leading-relaxed">
//               Because every family deserves quality, purity, and health.
//             </p>
            
//             <div className="inline-flex items-center gap-6 text-[#18A34B] text-2xl sm:text-3xl font-black">
//               <span>🌿</span>
//               <span>Veer Bharat</span>
//               <span>🇮🇳</span>
//             </div>
//           </motion.div>

//         </div>
//       </section>

//       {/* Custom CSS for animations */}
//       <style jsx>{`
//         @keyframes patternMove {
//           0% { transform: translate(0, 0); }
//           100% { transform: translate(50px, 50px); }
//         }
        
//         @keyframes spin-slow {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }
        
//         .animate-spin-slow {
//           animation: spin-slow 20s linear infinite;
//         }
//       `}</style>

//     </div>
//   );
// }









// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";

// /**
//  * ULTRA ATTRACTIVE MANAGING DIRECTOR PAGE
//  * Colors: rgb(223, 198, 246) Purple & #fef9c3 Yellow
//  * Cool Vibes, Emotional Journey, Fully Responsive
//  */

// export default function ManagingDirectorPage() {

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#fef9c3] via-white to-[#fef9c3] overflow-x-hidden">
      
//       {/* HERO SECTION - Stunning Entrance */}
//       <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[rgb(223,198,246)] via-[rgb(200,170,240)] to-[rgb(223,198,246)] overflow-hidden">
        
//         {/* Animated Gradient Background */}
//         <div className="absolute inset-0">
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,_rgba(254,249,195,0.3)_0%,_transparent_50%)]" />
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,_rgba(254,249,195,0.3)_0%,_transparent_50%)]" />
//         </div>

//         {/* Floating Orbs */}
//         {[...Array(20)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute rounded-full"
//             style={{
//               width: Math.random() * 100 + 50,
//               height: Math.random() * 100 + 50,
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               background: i % 2 === 0 
//                 ? 'radial-gradient(circle, rgba(254,249,195,0.4), transparent)' 
//                 : 'radial-gradient(circle, rgba(255,255,255,0.3), transparent)',
//               filter: 'blur(40px)',
//             }}
//             animate={{
//               y: [0, -50, 0],
//               x: [0, 30, 0],
//               scale: [1, 1.2, 1],
//               opacity: [0.3, 0.6, 0.3],
//             }}
//             transition={{
//               duration: 8 + Math.random() * 4,
//               repeat: Infinity,
//               delay: Math.random() * 2,
//               ease: "easeInOut",
//             }}
//           />
//         ))}

//         {/* Sparkle Stars */}
//         {[...Array(30)].map((_, i) => (
//           <motion.div
//             key={`star-${i}`}
//             className="absolute"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//             }}
//             animate={{
//               scale: [0, 1.5, 0],
//               opacity: [0, 1, 0],
//               rotate: [0, 180, 360],
//             }}
//             transition={{
//               duration: 3 + Math.random() * 2,
//               repeat: Infinity,
//               delay: Math.random() * 3,
//             }}
//           >
//             <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
//               <path d="M10 0L11.5 8.5L20 10L11.5 11.5L10 20L8.5 11.5L0 10L8.5 8.5L10 0Z" fill="#fef9c3" />
//             </svg>
//           </motion.div>
//         ))}

//         <div className="relative z-10 w-full max-w-[95vw] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
          
//           <div className="flex flex-col items-center text-center">
            
//             {/* Stunning Image Container */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
//               animate={{ opacity: 1, scale: 1, rotateY: 0 }}
//               transition={{ duration: 1.5, type: "spring", bounce: 0.4 }}
//               className="relative w-full max-w-[280px] sm:max-w-[350px] md:max-w-[420px] lg:max-w-[500px] mb-8 sm:mb-12 md:mb-16"
//             >
//               {/* Outer Glow Rings */}
//               <motion.div
//                 animate={{
//                   scale: [1, 1.1, 1],
//                   rotate: [0, 360],
//                 }}
//                 transition={{
//                   duration: 20,
//                   repeat: Infinity,
//                   ease: "linear",
//                 }}
//                 className="absolute -inset-8 sm:-inset-10 md:-inset-12 border-4 border-dashed border-[#fef9c3] rounded-full opacity-50"
//               />
              
//               <motion.div
//                 animate={{
//                   scale: [1, 1.15, 1],
//                   rotate: [360, 0],
//                 }}
//                 transition={{
//                   duration: 15,
//                   repeat: Infinity,
//                   ease: "linear",
//                 }}
//                 className="absolute -inset-4 sm:-inset-6 md:-inset-8 border-[6px] border-dotted border-white rounded-full opacity-60"
//               />

//               {/* Glowing Background */}
//               <div className="absolute -inset-6 sm:-inset-8 md:-inset-12 bg-gradient-to-r from-[#fef9c3] via-white to-[#fef9c3] opacity-60 blur-3xl rounded-full animate-pulse" />
              
//               {/* Main Image Circle */}
//               <div className="relative aspect-square overflow-hidden rounded-full border-[8px] sm:border-[10px] md:border-[12px] border-white shadow-[0_0_60px_rgba(254,249,195,0.8)]">
//                 <Image
//                   src="/images/6.jpg"
//                   alt="Mr. Nitish Kumar"
//                   fill
//                   className="object-cover"
//                   priority
//                 />
//                 {/* Gradient Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-[rgb(223,198,246)]/30 via-transparent to-transparent" />
//               </div>

//               {/* Floating Icons */}
//               {[
//                 { emoji: "🌟", pos: "top-0 right-0", delay: 0 },
//                 { emoji: "✨", pos: "top-1/4 left-0", delay: 0.5 },
//                 { emoji: "💫", pos: "bottom-1/4 right-0", delay: 1 },
//                 { emoji: "🎯", pos: "bottom-0 left-1/4", delay: 1.5 },
//               ].map((item, i) => (
//                 <motion.div
//                   key={i}
//                   className={`absolute ${item.pos} text-3xl sm:text-4xl md:text-5xl`}
//                   animate={{
//                     y: [-10, 10, -10],
//                     rotate: [-15, 15, -15],
//                     scale: [1, 1.2, 1],
//                   }}
//                   transition={{
//                     duration: 3,
//                     repeat: Infinity,
//                     delay: item.delay,
//                   }}
//                 >
//                   {item.emoji}
//                 </motion.div>
//               ))}

//             </motion.div>

//             {/* Name & Title - Ultra Bold */}
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.8, duration: 1, type: "spring" }}
//               className="w-full mb-6 sm:mb-8 md:mb-10"
//             >
//               {/* Name with 3D Effect */}
//               <h1 
//                 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 sm:mb-6 text-white leading-[1.1] tracking-tight px-4"
//                 style={{
//                   textShadow: `
//                     3px 3px 0px rgba(254,249,195,0.8),
//                     6px 6px 0px rgba(254,249,195,0.6),
//                     9px 9px 0px rgba(254,249,195,0.4),
//                     12px 12px 20px rgba(0,0,0,0.3)
//                   `,
//                 }}
//               >
//                 Mr. Nitish Kumar
//               </h1>

//               {/* Decorative Line */}
//               <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6 px-4">
//                 <motion.div 
//                   className="h-1 sm:h-1.5 md:h-2 bg-gradient-to-r from-transparent via-[#fef9c3] to-transparent rounded-full"
//                   initial={{ width: 0 }}
//                   animate={{ width: "100px" }}
//                   transition={{ delay: 1.2, duration: 1 }}
//                 />
//                 <motion.div
//                   initial={{ scale: 0 }}
//                   animate={{ scale: 1 }}
//                   transition={{ delay: 1.4, type: "spring", bounce: 0.6 }}
//                   className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-white rounded-full shadow-lg"
//                 >
//                   <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-black bg-gradient-to-r from-[rgb(223,198,246)] to-[rgb(180,140,230)] bg-clip-text text-transparent uppercase tracking-wider">
//                     Founder & MD
//                   </span>
//                 </motion.div>
//                 <motion.div 
//                   className="h-1 sm:h-1.5 md:h-2 bg-gradient-to-r from-[#fef9c3] via-[#fef9c3] to-transparent rounded-full"
//                   initial={{ width: 0 }}
//                   animate={{ width: "100px" }}
//                   transition={{ delay: 1.2, duration: 1 }}
//                 />
//               </div>

//               {/* Tagline */}
//               <motion.p
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 1.6 }}
//                 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-[#fef9c3] italic leading-tight px-4"
//                 style={{
//                   textShadow: "0 4px 20px rgba(0,0,0,0.3)",
//                 }}
//               >
//                 From Mother's Kitchen to National Mission
//               </motion.p>
//             </motion.div>

//             {/* Scroll Indicator */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 2 }}
//               className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2"
//             >
//               <motion.div
//                 animate={{ y: [0, 15, 0] }}
//                 transition={{ duration: 2, repeat: Infinity }}
//                 className="flex flex-col items-center gap-2"
//               >
//                 <span className="text-xs sm:text-sm md:text-base text-white font-black uppercase tracking-widest">Read Story</span>
//                 <div className="w-6 h-10 sm:w-8 sm:h-12 md:w-10 md:h-14 border-3 border-white rounded-full flex justify-center pt-2">
//                   <motion.div
//                     animate={{ y: [0, 15, 0] }}
//                     transition={{ duration: 1.5, repeat: Infinity }}
//                     className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"
//                   />
//                 </div>
//               </motion.div>
//             </motion.div>

//           </div>
//         </div>
//       </section>

//       {/* STORY SECTION 1 - Diwali Evening */}
//       <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-white relative overflow-hidden">
        
//         {/* Background Decoration */}
//         <div className="absolute top-0 right-0 w-[40vw] sm:w-[50vw] md:w-96 h-[40vw] sm:h-[50vw] md:h-96 bg-[rgb(223,198,246)] opacity-20 rounded-full blur-[80px] sm:blur-[100px]" />
//         <div className="absolute bottom-0 left-0 w-[40vw] sm:w-[50vw] md:w-96 h-[40vw] sm:h-[50vw] md:h-96 bg-[#fef9c3] opacity-30 rounded-full blur-[80px] sm:blur-[100px]" />

//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
//           {/* Section Header */}
//           <motion.div
//             initial={{ opacity: 0, y: 60 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.8 }}
//             className="text-center mb-10 sm:mb-14 md:mb-20"
//           >
//             <motion.div
//               initial={{ scale: 0 }}
//               whileInView={{ scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.3, type: "spring", bounce: 0.5 }}
//               className="inline-block mb-4 sm:mb-6 md:mb-8 px-4 sm:px-6 md:px-10 py-2 sm:py-3 md:py-4 bg-gradient-to-r from-[rgb(223,198,246)] to-[rgb(200,170,240)] text-white font-black text-sm sm:text-base md:text-lg lg:text-xl uppercase tracking-widest rounded-full shadow-2xl"
//             >
//               🪔 The Beginning 🪔
//             </motion.div>
            
//             <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 md:mb-8 leading-tight px-4">
//               <span className="bg-gradient-to-r from-[rgb(223,198,246)] via-[rgb(180,140,230)] to-[rgb(223,198,246)] bg-clip-text text-transparent">
//                 One Diwali Evening
//               </span>
//             </h2>
            
//             <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4 md:mb-6">
//               <div className="w-12 sm:w-16 md:w-24 lg:w-32 h-1 sm:h-1.5 md:h-2 bg-gradient-to-r from-transparent to-[rgb(223,198,246)] rounded-full" />
//               <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full bg-[rgb(223,198,246)]" />
//               <div className="w-12 sm:w-16 md:w-24 lg:w-32 h-1 sm:h-1.5 md:h-2 bg-gradient-to-l from-transparent to-[rgb(223,198,246)] rounded-full" />
//             </div>
            
//             <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-700 italic px-4">
//               Muzaffarpur, Bihar
//             </p>
//           </motion.div>

//           {/* Content Grid */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
            
//             {/* Image Side */}
//             <motion.div
//               initial={{ opacity: 0, x: -80 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 1 }}
//               className="relative order-2 lg:order-1"
//             >
//               <div className="absolute -inset-4 sm:-inset-6 md:-inset-8 bg-gradient-to-br from-[rgb(223,198,246)] to-[rgb(200,170,240)] opacity-30 blur-2xl sm:blur-3xl rounded-3xl" />
              
//               <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 sm:border-6 md:border-8 border-[rgb(223,198,246)]">
//                 <Image
//                   src="/images/7.jpg"
//                   alt="Diwali Evening"
//                   fill
//                   className="object-cover hover:scale-110 transition-transform duration-700"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[rgb(223,198,246)]/40 via-transparent to-transparent" />
//               </div>

//               {/* Floating Badge */}
//               <motion.div
//                 initial={{ opacity: 0, scale: 0 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.5, type: "spring", bounce: 0.6 }}
//                 className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 bg-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 rounded-2xl sm:rounded-3xl shadow-2xl border-4 border-[#fef9c3]"
//               >
//                 <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-[rgb(223,198,246)]">2015</p>
//                 <p className="text-xs sm:text-sm md:text-base font-bold text-gray-600">The Moment</p>
//               </motion.div>
//             </motion.div>

//             {/* Text Side */}
//             <motion.div
//               initial={{ opacity: 0, x: 80 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 1 }}
//               className="space-y-4 sm:space-y-6 md:space-y-8 order-1 lg:order-2"
//             >
//               <div className="bg-gradient-to-br from-[#fef9c3] via-[#fefce8] to-[#fef9c3] p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl shadow-xl border-l-8 border-[rgb(223,198,246)]">
//                 <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-gray-800 leading-tight mb-4 sm:mb-6">
//                   I witnessed something that changed the course of my life.
//                 </p>
//                 <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed">
//                   My mother was cooking for the festival when she poured a packet of oil into the utensil.
//                 </p>
//               </div>

//               <motion.div
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.3 }}
//                 className="bg-gradient-to-br from-red-50 via-red-100 to-red-50 p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl shadow-xl border-l-8 border-red-500"
//               >
//                 <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
//                   <span className="text-3xl sm:text-4xl md:text-5xl">⚠️</span>
//                   <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-700 leading-tight flex-1">
//                     What I saw next shook me to the core...
//                   </p>
//                 </div>
//                 <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-800 leading-relaxed mb-3 sm:mb-4">
//                   A cloudy liquid with a thick lump settled at the bottom of the packet.
//                 </p>
//                 <div className="bg-red-600 text-white p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl">
//                   <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black italic leading-tight">
//                     This wasn't just oil. It was a silent health hazard.
//                   </p>
//                 </div>
//               </motion.div>
//             </motion.div>

//           </div>

//         </div>
//       </section>

//       {/* MOTHER'S QUOTE - Full Width Impact */}
//       <section className="py-16 sm:py-20 md:py-28 lg:py-40 bg-gradient-to-br from-[rgb(223,198,246)] via-[rgb(200,170,240)] to-[rgb(180,140,230)] relative overflow-hidden">
        
//         {/* Animated Background */}
//         <div className="absolute inset-0">
//           {[...Array(15)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute rounded-full bg-white opacity-10"
//               style={{
//                 width: Math.random() * 200 + 100,
//                 height: Math.random() * 200 + 100,
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//               }}
//               animate={{
//                 scale: [1, 1.5, 1],
//                 opacity: [0.05, 0.15, 0.05],
//                 rotate: [0, 180, 360],
//               }}
//               transition={{
//                 duration: 10 + Math.random() * 10,
//                 repeat: Infinity,
//                 ease: "linear",
//               }}
//             />
//           ))}
//         </div>

//         <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 1, type: "spring" }}
//             className="text-center mb-8 sm:mb-12 md:mb-16"
//           >
//             <div className="inline-block mb-4 sm:mb-6 md:mb-8 px-4 sm:px-6 md:px-10 py-2 sm:py-3 md:py-4 bg-[#fef9c3] text-[rgb(223,198,246)] font-black text-sm sm:text-base md:text-lg lg:text-xl uppercase tracking-widest rounded-full shadow-2xl">
//               💫 The Turning Point 💫
//             </div>
//             <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight px-4">
//               Mother's Challenge
//             </h2>
//           </motion.div>

//           {/* Quote Box - Ultra Prominent */}
//           <motion.div
//             initial={{ opacity: 0, y: 80 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 1 }}
//             className="relative bg-white p-8 sm:p-10 md:p-14 lg:p-20 rounded-3xl sm:rounded-[3rem] shadow-[0_30px_80px_rgba(0,0,0,0.3)]"
//           >
//             {/* Decorative Quote Marks */}
//             <div className="absolute -top-6 sm:-top-8 md:-top-12 -left-4 sm:-left-6 md:-left-10 text-[#fef9c3] text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] font-serif opacity-40 leading-none">"</div>
//             <div className="absolute -bottom-6 sm:-bottom-8 md:-bottom-12 -right-4 sm:-right-6 md:-right-10 text-[#fef9c3] text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] font-serif opacity-40 leading-none rotate-180">"</div>
            
//             {/* Quote Text */}
//             <p 
//               className="relative z-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-center leading-tight mb-6 sm:mb-8 md:mb-12 px-4"
//               style={{
//                 background: 'linear-gradient(135deg, rgb(223,198,246), rgb(180,140,230), rgb(223,198,246))',
//                 WebkitBackgroundClip: 'text',
//                 WebkitTextFillColor: 'transparent',
//                 backgroundClip: 'text',
//               }}
//             >
//               If you're so concerned, build your own brand.
//             </p>
            
//             {/* Attribution */}
//             <div className="text-center">
//               <div className="inline-flex items-center gap-3 sm:gap-4 px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-6 bg-gradient-to-r from-[rgb(223,198,246)] to-[rgb(180,140,230)] rounded-full shadow-xl">
//                 <span className="text-2xl sm:text-3xl md:text-4xl">💝</span>
//                 <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white">Mother</span>
//               </div>
//             </div>
//           </motion.div>

//           {/* Impact Cards */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-10 sm:mt-14 md:mt-20">
//             {[
//               { icon: "💔", text: "Hit me hard", color: "from-red-400 to-red-600" },
//               { icon: "🎯", text: "A challenge", color: "from-orange-400 to-orange-600" },
//               { icon: "🔥", text: "Call to action", color: "from-yellow-400 to-yellow-600" },
//             ].map((item, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: i * 0.2 }}
//                 whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
//                 className={`bg-gradient-to-br ${item.color} text-white p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl shadow-2xl text-center`}
//               >
//                 <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4">{item.icon}</div>
//                 <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black leading-tight">{item.text}</p>
//               </motion.div>
//             ))}
//           </div>

//         </div>
//       </section>

//       VEER BHARAT BIRTH
//       <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-to-b from-[#fef9c3] via-white to-[#fef9c3] relative overflow-hidden">
        
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
//           <motion.div
//             initial={{ opacity: 0, y: 60 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.8 }}
//             className="text-center mb-10 sm:mb-14 md:mb-20"
//           >
//             <div className="inline-block mb-4 sm:mb-6 md:mb-8 px-4 sm:px-6 md:px-10 py-2 sm:py-3 md:py-4 bg-gradient-to-r from-[rgb(223,198,246)] to-[rgb(200,170,240)] text-white font-black text-sm sm:text-base md:text-lg lg:text-xl uppercase tracking-widest rounded-full shadow-2xl">
//               🚀 The Birth 🚀
//             </div>
//             <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 md:mb-8 leading-tight px  





///Uncomplete code above.





"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ManagingDirectorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fef9c3] via-white to-[#fef9c3] overflow-x-hidden">
      
      {/* HERO SECTION - Image with Name Below */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[rgba(8,52,139,0.08)] via-[rgba(8,52,139,0.04)] to-[#fef9c3] overflow-hidden py-12 sm:py-16 md:py-20">
        
        {/* Animated Background Orbs */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: Math.random() * 120 + 60,
                height: Math.random() * 120 + 60,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: i % 2 === 0 
                  ? 'radial-gradient(circle, rgba(8,52,139,0.15), transparent)' 
                  : 'radial-gradient(circle, rgba(254,249,195,0.3), transparent)',
                filter: 'blur(40px)',
              }}
              animate={{
                y: [0, -50, 0],
                x: [0, 30, 0],
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Sparkles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1.5, 0],
              opacity: [0, 1, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 0L11.5 8.5L20 10L11.5 11.5L10 20L8.5 11.5L0 10L8.5 8.5L10 0Z" fill="#fef9c3" />
            </svg>
          </motion.div>
        ))}

        <div className="relative z-10 w-full max-w-[95vw] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col items-center text-center">
            
            {/* Image Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
              className="relative w-full max-w-[280px] sm:max-w-[350px] md:max-w-[420px] lg:max-w-[500px] mb-8 sm:mb-12"
            >
              {/* Rotating Glow Rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-8 sm:-inset-10 md:-inset-12 border-4 border-dashed border-[rgba(8,52,139,0.3)] rounded-full opacity-50"
              />
              
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 sm:-inset-6 md:-inset-8 border-[6px] border-dotted border-[#fef9c3] rounded-full opacity-60"
              />

              {/* Glowing Aura */}
              <div className="absolute -inset-6 sm:-inset-8 md:-inset-12 bg-gradient-to-r from-[rgba(8,52,139,0.2)] via-[#fef9c3] to-[rgba(8,52,139,0.2)] opacity-60 blur-3xl rounded-full animate-pulse" />
              
              {/* Main Image */}
              <div className="relative aspect-square overflow-hidden rounded-full border-[8px] sm:border-[10px] md:border-[12px] border-white shadow-[0_0_60px_rgba(8,52,139,0.4)]">
                <Image
                  src="/images/veer-bharat-banner.jpg"
                  alt="Mr. Nitish Kumar - Managing Director"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,52,139,0.3)] via-transparent to-transparent" />
              </div>

              {/* Floating Icons */}
              {[
                { emoji: "🌟", pos: "top-0 right-0", delay: 0 },
                { emoji: "✨", pos: "top-1/4 left-0", delay: 0.5 },
                { emoji: "💫", pos: "bottom-1/4 right-0", delay: 1 },
                { emoji: "🎯", pos: "bottom-0 left-1/4", delay: 1.5 },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className={`absolute ${item.pos} text-3xl sm:text-4xl md:text-5xl`}
                  animate={{
                    y: [-10, 10, -10],
                    rotate: [-15, 15, -15],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: item.delay,
                  }}
                >
                  {item.emoji}
                </motion.div>
              ))}
            </motion.div>

            {/* Name & Title Below Image */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1, type: "spring" }}
              className="w-full mb-6 sm:mb-8 md:mb-10"
            >
              {/* Name */}
              <h1 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 sm:mb-6 leading-[1.1] tracking-tight px-4"
                style={{
                  background: 'linear-gradient(135deg, rgba(8,52,139,1), rgba(10,75,181,1), rgba(8,52,139,1))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textShadow: '0 4px 20px rgba(8,52,139,0.3)',
                }}
              >
                Mr. Nitish Kumar
              </h1>

              {/* Decorative Line */}
              <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6 px-4">
                <motion.div 
                  className="h-1 sm:h-1.5 md:h-2 bg-gradient-to-r from-transparent via-[rgba(8,52,139,0.6)] to-transparent rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100px" }}
                  transition={{ delay: 1.2, duration: 1 }}
                />
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.4, type: "spring", bounce: 0.6 }}
                  className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-gradient-to-r from-[rgba(8,52,139,0.9)] to-[rgba(10,75,181,0.9)] rounded-full shadow-lg"
                >
                  <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-black text-white uppercase tracking-wider">
                    Founder & Managing Director
                  </span>
                </motion.div>
                <motion.div 
                  className="h-1 sm:h-1.5 md:h-2 bg-gradient-to-r from-[rgba(8,52,139,0.6)] via-[rgba(8,52,139,0.6)] to-transparent rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100px" }}
                  transition={{ delay: 1.2, duration: 1 }}
                />
              </div>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6 }}
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-[rgba(8,52,139,0.8)] italic leading-tight px-4"
              >
                From Mother's Kitchen to National Mission
              </motion.p>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="mt-8 sm:mt-12"
            >
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex flex-col items-center gap-2"
              >
                <span className="text-xs sm:text-sm md:text-base text-[rgba(8,52,139,0.7)] font-black uppercase tracking-widest">Read the Story</span>
                <div className="w-6 h-10 sm:w-8 sm:h-12 md:w-10 md:h-14 border-3 border-[rgba(8,52,139,0.5)] rounded-full flex justify-center pt-2">
                  <motion.div
                    animate={{ y: [0, 15, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[rgba(8,52,139,0.7)] rounded-full"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STORY SECTION 1 - Diwali Evening */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-white relative overflow-hidden">
        
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-[40vw] sm:w-[50vw] md:w-96 h-[40vw] sm:h-[50vw] md:h-96 bg-[rgba(8,52,139,0.05)] rounded-full blur-[80px] sm:blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[40vw] sm:w-[50vw] md:w-96 h-[40vw] sm:h-[50vw] md:h-96 bg-[#fef9c3] opacity-30 rounded-full blur-[80px] sm:blur-[100px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10 sm:mb-14 md:mb-20"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring", bounce: 0.5 }}
              className="inline-block mb-4 sm:mb-6 md:mb-8 px-4 sm:px-6 md:px-10 py-2 sm:py-3 md:py-4 bg-gradient-to-r from-[rgba(8,52,139,0.9)] to-[rgba(10,75,181,0.9)] text-white font-black text-sm sm:text-base md:text-lg lg:text-xl uppercase tracking-widest rounded-full shadow-2xl"
            >
              🪔 The Beginning 🪔
            </motion.div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 md:mb-8 leading-tight px-4">
              <span className="bg-gradient-to-r from-[rgba(8,52,139,1)] via-[rgba(10,75,181,1)] to-[rgba(8,52,139,1)] bg-clip-text text-transparent">
                One Diwali Evening
              </span>
            </h2>
            
            <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4 md:mb-6">
              <div className="w-12 sm:w-16 md:w-24 lg:w-32 h-1 sm:h-1.5 md:h-2 bg-gradient-to-r from-transparent to-[rgba(8,52,139,0.6)] rounded-full" />
              <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full bg-[rgba(8,52,139,0.8)]" />
              <div className="w-12 sm:w-16 md:w-24 lg:w-32 h-1 sm:h-1.5 md:h-2 bg-gradient-to-l from-transparent to-[rgba(8,52,139,0.6)] rounded-full" />
            </div>
            
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-700 italic px-4">
              Muzaffarpur, Bihar
            </p>
          </motion.div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
            
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1 }}
              className="relative order-2 lg:order-1"
            >
              <div className="absolute -inset-4 sm:-inset-6 md:-inset-8 bg-gradient-to-br from-[rgba(8,52,139,0.2)] to-[rgba(10,75,181,0.2)] opacity-30 blur-2xl sm:blur-3xl rounded-3xl" />
              
              <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 sm:border-6 md:border-8 border-[rgba(8,52,139,0.3)]">
                <Image
                  src="/images/7.jpg"
                  alt="Diwali Evening in Muzaffarpur"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,52,139,0.4)] via-transparent to-transparent" />
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring", bounce: 0.6 }}
                className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 bg-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 rounded-2xl sm:rounded-3xl shadow-2xl border-4 border-[#fef9c3]"
              >
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-[rgba(8,52,139,1)]">2015</p>
                <p className="text-xs sm:text-sm md:text-base font-bold text-gray-600">The Moment</p>
              </motion.div>
            </motion.div>

            {/* Text Side */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1 }}
              className="space-y-4 sm:space-y-6 md:space-y-8 order-1 lg:order-2"
            >
              <div className="bg-gradient-to-br from-[#fef9c3] via-[#fefce8] to-[#fef9c3] p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl shadow-xl border-l-8 border-[rgba(8,52,139,0.8)]">
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-gray-800 leading-tight mb-4 sm:mb-6">
                  I witnessed something that changed the course of my life.
                </p>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed">
                  My mother was cooking for the festival when she poured a packet of oil into the utensil.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-red-50 via-red-100 to-red-50 p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl shadow-xl border-l-8 border-red-500"
              >
                <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <span className="text-3xl sm:text-4xl md:text-5xl">⚠️</span>
                  <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-700 leading-tight flex-1">
                    What I saw next shook me to the core...
                  </p>
                </div>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-800 leading-relaxed mb-3 sm:mb-4">
                  A cloudy liquid with a thick lump settled at the bottom of the packet.
                </p>
                <div className="bg-red-600 text-white p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl">
                  <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black italic leading-tight">
                    This wasn't just oil. It was a silent health hazard.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MOTHER'S QUOTE - Full Width Impact */}
      <section className="py-16 sm:py-20 md:py-28 lg:py-40 bg-gradient-to-br from-[rgba(8,52,139,0.95)] via-[rgba(10,75,181,0.95)] to-[rgba(8,52,139,0.95)] relative overflow-hidden">
        
        {/* Animated Background */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white opacity-10"
              style={{
                width: Math.random() * 200 + 100,
                height: Math.random() * 200 + 100,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.05, 0.15, 0.05],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, type: "spring" }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <div className="inline-block mb-4 sm:mb-6 md:mb-8 px-4 sm:px-6 md:px-10 py-2 sm:py-3 md:py-4 bg-[#fef9c3] text-[rgba(8,52,139,1)] font-black text-sm sm:text-base md:text-lg lg:text-xl uppercase tracking-widest rounded-full shadow-2xl">
              💫 The Turning Point 💫
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight px-4">
              Mother's Challenge
            </h2>
          </motion.div>

          {/* Quote Box */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="relative bg-white p-8 sm:p-10 md:p-14 lg:p-20 rounded-3xl sm:rounded-[3rem] shadow-[0_30px_80px_rgba(0,0,0,0.3)]"
          >
            {/* Decorative Quote Marks */}
            <div className="absolute -top-6 sm:-top-8 md:-top-12 -left-4 sm:-left-6 md:-left-10 text-[#fef9c3] text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] font-serif opacity-40 leading-none">"</div>
            <div className="absolute -bottom-6 sm:-bottom-8 md:-bottom-12 -right-4 sm:-right-6 md:-right-10 text-[#fef9c3] text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] font-serif opacity-40 leading-none rotate-180">"</div>
            
            {/* Quote Text */}
            <p 
              className="relative z-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-center leading-tight mb-6 sm:mb-8 md:mb-12 px-4"
              style={{
                background: 'linear-gradient(135deg, rgba(8,52,139,1), rgba(10,75,181,1), rgba(8,52,139,1))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              If you're so concerned, build your own brand.
            </p>
            
            {/* Attribution */}
            <div className="text-center">
              <div className="inline-flex items-center gap-3 sm:gap-4 px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-6 bg-gradient-to-r from-[rgba(8,52,139,0.9)] to-[rgba(10,75,181,0.9)] rounded-full shadow-xl">
                <span className="text-2xl sm:text-3xl md:text-4xl">💝</span>
                <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white">Mother</span>
              </div>
            </div>
          </motion.div>

          {/* Impact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-10 sm:mt-14 md:mt-20">
            {[
              { icon: "💔", text: "Hit Me Hard", color: "from-red-500 to-red-700" },
              { icon: "🎯", text: "A Challenge", color: "from-orange-500 to-orange-700" },
              { icon: "🔥", text: "Call to Action", color: "from-yellow-500 to-yellow-700" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
                className={`bg-gradient-to-br ${item.color} text-white p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl shadow-2xl text-center`}
              >
                <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4">{item.icon}</div>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black leading-tight">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VEER BHARAT BIRTH */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-to-b from-[#fef9c3] via-white to-[#fef9c3] relative overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10 sm:mb-14 md:mb-20"
          >
            <div className="inline-block mb-4 sm:mb-6 md:mb-8 px-4 sm:px-6 md:px-10 py-2 sm:py-3 md:py-4 bg-gradient-to-r from-[rgba(8,52,139,0.9)] to-[rgba(10,75,181,0.9)] text-white font-black text-sm sm:text-base md:text-lg lg:text-xl uppercase tracking-widest rounded-full shadow-2xl">
              🚀 The Birth 🚀
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 md:mb-8 leading-tight px-4">
              <span className="bg-gradient-to-r from-[rgba(8,52,139,1)] via-[rgba(10,75,181,1)] to-[rgba(8,52,139,1)] bg-clip-text text-transparent">
                And So, I Did.
              </span>
            </h2>
          </motion.div>

          {/* Content Boxes */}
          <div className="space-y-6 sm:space-y-8 md:space-y-10">
            
            {/* Build Statement */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-[rgba(8,52,139,0.1)] to-[rgba(8,52,139,0.05)] p-8 sm:p-10 md:p-14 rounded-3xl border-l-8 border-[rgba(8,52,139,0.8)] shadow-2xl"
            >
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[rgba(8,52,139,1)] mb-4">
                I built Veer Bharat
              </p>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 leading-relaxed">
                Not just as a brand, but as a <span className="font-black text-[rgba(8,52,139,1)]">movement</span>.
              </p>
            </motion.div>

            {/* Three Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {[
                { icon: "❤️", title: "A Commitment", subtitle: "to Health" },
                { icon: "✨", title: "A Promise", subtitle: "of Purity" },
                { icon: "💪", title: "A Belief", subtitle: "that Every Indian Deserves Better" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="bg-white p-6 sm:p-8 md:p-10 rounded-3xl shadow-xl text-center border-4 border-[#fef9c3] hover:border-[rgba(8,52,139,0.3)] transition-all duration-300"
                >
                  <div className="text-5xl sm:text-6xl md:text-7xl mb-4">{item.icon}</div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-[rgba(8,52,139,1)] mb-2">{item.title}</h3>
                  <p className="text-base sm:text-lg md:text-xl text-gray-700 font-bold">{item.subtitle}</p>
                </motion.div>
              ))}
            </div>

            {/* Mission Statement */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[rgba(8,52,139,0.95)] to-[rgba(10,75,181,0.95)] p-8 sm:p-10 md:p-14 lg:p-20 rounded-3xl shadow-2xl text-center"
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 sm:mb-8">
                Today, This Journey Continues with One Mission:
              </h3>
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#fef9c3] leading-relaxed font-bold">
                To ensure our present and future generations don't have to choose between affordability and health.
              </p>
            </motion.div>

            {/* Final Message */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center py-10 sm:py-14 md:py-20"
            >
              <div className="inline-block px-6 sm:px-8 md:px-12 py-4 sm:py-6 md:py-8 bg-gradient-to-r from-[#fef9c3] to-[#fefce8] rounded-3xl shadow-2xl border-4 border-[rgba(8,52,139,0.2)]">
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-[rgba(8,52,139,1)] mb-4">
                  This Diwali sparked more than just light.
                </p>
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black bg-gradient-to-r from-[rgba(8,52,139,1)] to-[rgba(10,75,181,1)] bg-clip-text text-transparent">
                  It sparked purpose.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-[rgba(8,52,139,0.95)] to-[rgba(10,75,181,0.95)] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-8">
              Join the Veer Bharat Movement
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 sm:mb-10 md:mb-12 text-[#fef9c3]">
              Because every family deserves pure, healthy, and affordable cooking oil.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 sm:px-10 md:px-14 py-4 sm:py-5 md:py-6 bg-[#fef9c3] text-[rgba(8,52,139,1)] rounded-full font-black text-lg sm:text-xl md:text-2xl shadow-2xl hover:shadow-3xl transition-all"
            >
              Explore Our Products →
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
