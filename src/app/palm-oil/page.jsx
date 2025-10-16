// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// // Showcase Items Data
// const showcaseItems = [
//   {
//     id: 1,
//     name: "Premium Refined Palm Oil",
//     short: "High-stability oil perfect for deep frying and baking",
//     image: "/images/palm-oil-1.jpg",
//   },
//   {
//     id: 2,
//     name: "Golden Palm Cooking Oil",
//     short: "Rich in vitamins and ideal for commercial kitchens",
//     image: "/images/palm-oil-2.jpg",
//   },
// ];

// // Product Variants Data
// const productVariants = [
//   {
//     id: 1,
//     name: "Refined Palm Oil 1L",
//     price: "140",
//     image: "/images/palm-oil-1.jpg",
//     description: "Stable and versatile palm oil for all high-temperature cooking",
//     video: "/videos/palm-demo.mp4",
//   },
//   {
//     id: 2,
//     name: "Premium Palm Oil 5L",
//     price: "670",
//     image: "/images/palm-oil-2.jpg",
//     description: "Economical family pack for everyday cooking and frying needs",
//     video: "/videos/palm-demo.mp4",
//   },
// ];

// // FIXED Rotating Showcase Component - Same structure as products.js
// function RotatingShowcase({ items = [] }) {
//   const n = items.length || 1;
//   const [index, setIndex] = useState(0);
//   const [radius, setRadius] = useState(140);
//   const containerRef = useRef(null);

//   const rotationDeg = index * (360 / n);

//   useEffect(() => {
//     function setFromWidth() {
//       if (!containerRef.current) return;
//       const w = containerRef.current.clientWidth;
//       setRadius(Math.min(Math.max(w * 0.18, 70), 180));
//     }
//     setFromWidth();
//     window.addEventListener("resize", setFromWidth);
//     return () => window.removeEventListener("resize", setFromWidth);
//   }, []);

//   useEffect(() => {
//     const onKey = (e) => {
//       if (e.key === "ArrowRight") setIndex((i) => (i + 1) % n);
//       if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + n) % n);
//     };
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, [n]);

//   const longText = {
//     goodness: "Veer Bharat Palm Oil is sourced from certified sustainable plantations and refined using state-of-the-art facilities that maintain nutritional integrity. Rich in vitamin A and E, our palm oil undergoes multiple filtration stages to ensure clarity and purity.",
//     benefits: "With its high stability at elevated temperatures, palm oil is ideal for deep frying, baking, and commercial food preparation. It imparts a rich golden color and enhances texture in baked goods, making it popular among professional chefs and home bakers alike.",
//     rating: "Veer Bharat Palm Oil has gained strong traction in the food service industry and among households looking for economical yet quality cooking oil. Restaurant owners appreciate its cost-effectiveness and performance in high-volume frying."
//   };

//   if (!items.length) return null;

//   return (
//     <section ref={containerRef} className="max-w-7xl mx-auto px-2 sm:px-4 mb-14 w-full relative">
//       <div className="grid gap-10 md:grid-cols-2 items-center">
//         {/* LEFT: Product Text */}
//         <div className="space-y-5 order-2 md:order-1">
//           <h2 className="text-3xl md:text-5xl font-extrabold text-[#1b2a3a] tracking-tight">
//             {items[index].name}
//           </h2>
//           <p className="text-base md:text-xl text-slate-700 font-medium">
//             {items[index].short}
//           </p>
//           <div className="mt-4 p-5 sm:p-8 bg-white rounded-3xl shadow-xl border-2 border-orange-100">
//             <h3 className="text-lg md:text-2xl font-bold mb-2 text-orange-600 flex items-center gap-2">
//               <span className="w-2 h-2 bg-orange-500 rounded-full"></span> Goodness
//             </h3>
//             <p className="text-base text-slate-700">{longText.goodness}</p>
//             <h3 className="text-lg md:text-2xl font-bold mt-5 mb-2 text-orange-600 flex items-center gap-2">
//               <span className="w-2 h-2 bg-orange-500 rounded-full"></span> Benefits
//             </h3>
//             <p className="text-base text-slate-700">{longText.benefits}</p>
//             <h3 className="text-lg md:text-2xl font-bold mt-5 mb-2 text-orange-600 flex items-center gap-2">
//               <span className="w-2 h-2 bg-orange-500 rounded-full"></span> Market Rating
//             </h3>
//             <p className="text-base text-slate-700">{longText.rating}</p>
//           </div>
//           <div className="mt-5">
//             <button className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-white font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg">
//               View All Products →
//             </button>
//           </div>
//         </div>

//         {/* RIGHT: Orbit - FIXED Z-INDEX! */}
//         <div className="relative flex items-center justify-center w-full min-h-[320px] md:min-h-[480px] order-1 md:order-2">
//           <button
//             onClick={() => setIndex((i) => (i - 1 + n) % n)}
//             aria-label="Previous"
//             className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg border-2 border-orange-400 hover:bg-orange-50 flex items-center justify-center text-2xl font-bold text-orange-600 md:static md:left-0"
//           >
//             ‹
//           </button>
//           <div className="relative w-[220px] h-[220px] xs:w-[270px] xs:h-[270px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px] rounded-3xl flex items-center justify-center">
//             {/* Animated background - Z-INDEX 1 */}
//             <motion.div
//               className="absolute inset-0 rounded-full z-[1]"
//               style={{ background: "radial-gradient(circle, rgba(251,146,60,0.15) 0%, rgba(251,146,60,0.08) 70%, transparent 100%)" }}
//               animate={{ scale: [1, 1.05, 1] }}
//               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//             />
//             {/* Dashed orbit - Z-INDEX 2 */}
//             <motion.svg
//               viewBox="0 0 300 300"
//               className="absolute inset-0 w-full h-full pointer-events-none z-[2]"
//               animate={{ rotate: rotationDeg * 0.25 }}
//               transition={{ type: "spring", stiffness: 140, damping: 22 }}
//             >
//               <defs>
//                 <filter id="glow"><feGaussianBlur stdDeviation="3" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
//               </defs>
//               <circle cx="150" cy="150" r="110" stroke="#FB923C" strokeWidth="6" fill="none" strokeDasharray="8 12" filter="url(#glow)" opacity="0.8"/>
//             </motion.svg>
//             {/* Product images spaced around - Z-INDEX 3 */}
//             {items.map((it, i) => {
//               const baseAngle = (i * 360) / n;
//               const totalAngle = baseAngle + rotationDeg;
//               const rad = ((totalAngle - 90) * Math.PI) / 180;
//               const x = Math.cos(rad) * radius;
//               const y = Math.sin(rad) * radius;
//               const isActive = i === index;
//               const size = isActive ? 120 : 65;
//               const scale = isActive ? 1 : 0.7;
//               return (
//                 <div
//                   key={it.id}
//                   className="absolute cursor-pointer z-[3]"
//                   onClick={() => setIndex(i)}
//                   style={{
//                     left: `calc(50% + ${x}px)`,
//                     top: `calc(50% + ${y}px)`,
//                     transform: `translate(-50%, -50%) scale(${scale})`,
//                     width: size,
//                     height: size,
//                   }}
//                 >
//                   <div
//                     className="relative rounded-2xl overflow-hidden bg-white"
//                     style={{
//                       width: "100%",
//                       height: "100%",
//                       boxShadow: isActive
//                         ? "0 18px 36px rgba(251, 146, 60, 0.22), 0 5px 15px rgba(0,0,0,0.10)"
//                         : "0 6px 18px rgba(0,0,0,0.10)",
//                       border: isActive ? "2.5px solid #FB923C" : "1.5px solid rgba(0,0,0,0.08)",
//                     }}
//                   >
//                     <img
//                       src={it.image}
//                       alt={it.name}
//                       style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//                       className={isActive ? "brightness-105" : "brightness-95"}
//                     />
//                   </div>
//                 </div>
//               );
//             })}
//             {/* Mini at top center - Z-INDEX 4 */}
//             <div className="absolute left-1/2 top-3 -translate-x-1/2 z-[4]">
//               <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-lg bg-white ring-2 ring-orange-400/30">
//                 <img
//                   src={items[(index + 1) % n].image}
//                   alt="mini"
//                   style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//                 />
//               </div>
//             </div>
//           </div>
//           <button
//             onClick={() => setIndex((i) => (i + 1) % n)}
//             aria-label="Next"
//             className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg border-2 border-orange-400 hover:bg-orange-50 flex items-center justify-center text-2xl font-bold text-orange-600 md:static md:right-0"
//           >
//             ›
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

// // Why Choose Section
// function WhyChooseSection() {
//   const features = [
//     {
//       icon: "🔥",
//       title: "High Stability",
//       description: "Perfect for high-temperature cooking and deep frying without breaking down or producing smoke"
//     },
//     {
//       icon: "🌟",
//       title: "Vitamin Rich",
//       description: "Naturally rich in Vitamin A and E, providing essential nutrients for healthy living"
//     },
//     {
//       icon: "🍰",
//       title: "Perfect for Baking",
//       description: "Semi-solid consistency at room temperature makes it ideal for pastries and traditional sweets"
//     },
//     {
//       icon: "💰",
//       title: "Cost Effective",
//       description: "Economical choice for commercial kitchens and bulk cooking without compromising quality"
//     },
//     {
//       icon: "✨",
//       title: "Golden Color",
//       description: "Imparts beautiful golden hue to food, enhancing visual appeal and texture"
//     },
//     {
//       icon: "✅",
//       title: "Certified Quality",
//       description: "Sourced from sustainable plantations with rigorous quality control at every stage"
//     }
//   ];

//   return (
//     <section className="max-w-7xl mx-auto px-6 mb-20">
//       <div className="text-center mb-14">
//         <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-lg mb-6 shadow-xl">
//           ✨ Why Choose Palm Oil
//         </div>
//         <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
//           Why Choose Veer Bharat Palm Oil?
//         </h2>
//         <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-medium">
//           Experience superior stability, rich texture, and unmatched value in every drop
//         </p>
//       </div>

//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {features.map((feature, idx) => (
//           <motion.div
//             key={idx}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: idx * 0.1 }}
//             whileHover={{ y: -8 }}
//             className="p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-orange-400"
//           >
//             <div className="text-6xl mb-4">{feature.icon}</div>
//             <h3 className="text-2xl font-black text-gray-900 mb-3">{feature.title}</h3>
//             <p className="text-base text-gray-600 leading-relaxed">{feature.description}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

// // Product Variants Grid
// function ProductVariantsGrid({ products }) {
//   const [modalVideo, setModalVideo] = useState(null);

//   return (
//     <>
//       <section className="max-w-7xl mx-auto px-6 mb-20">
//         <div className="text-center mb-14">
//           <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
//             Choose Your Perfect Size
//           </h2>
//           <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-medium">
//             From home kitchens to commercial operations - find the right size for your needs
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {products.map((product) => (
//             <motion.article
//               key={product.id}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               whileHover={{ y: -10 }}
//               className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl overflow-hidden border-2 border-transparent hover:border-orange-400 transition-all duration-500"
//             >
//               <div className="relative h-80 w-full overflow-hidden bg-gradient-to-br from-orange-50 to-red-50">
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//                   className="group-hover:scale-110 transition-transform duration-700"
//                 />
//               </div>

//               <div className="p-7">
//                 <h3 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
//                   {product.name}
//                 </h3>
//                 <p className="text-base text-gray-600 leading-relaxed mb-4">
//                   {product.description}
//                 </p>

//                 <div className="flex items-center gap-3 mb-6">
//                   <span className="text-3xl font-black text-orange-600">₹{product.price}</span>
//                   <span className="text-xs text-purple-600 font-medium">✓ High Stability</span>
//                 </div>

//                 <div className="flex items-center gap-3">
//                   <button className="flex-1 text-center rounded-full px-6 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white text-lg font-bold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
//                     🛒 Add to Cart
//                   </button>
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     onClick={() => setModalVideo({ src: product.video, name: product.name })}
//                     className="rounded-full px-5 py-4 border-2 border-orange-500 text-orange-600 font-bold hover:bg-orange-50 transition-all text-lg"
//                   >
//                     🎥
//                   </motion.button>
//                 </div>
//               </div>
//             </motion.article>
//           ))}
//         </div>
//       </section>

//       {/* Video Modal - Z-INDEX 300 */}
//       <AnimatePresence>
//         {modalVideo && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-[300] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
//             onClick={() => setModalVideo(null)}
//           >
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               className="relative max-w-5xl w-full rounded-3xl overflow-hidden shadow-2xl bg-black"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <button
//                 onClick={() => setModalVideo(null)}
//                 className="absolute right-5 top-5 z-20 rounded-full bg-white/90 px-6 py-3 text-lg font-bold hover:bg-white transition"
//               >
//                 ✕ Close
//               </button>
//               <video
//                 src={modalVideo.src}
//                 controls
//                 autoPlay
//                 className="w-full h-[70vh] object-cover"
//               />
//               <div className="p-6 bg-gradient-to-t from-black to-transparent text-white">
//                 <div className="text-2xl font-bold">{modalVideo.name}</div>
//                 <div className="text-lg text-white/80 mt-1">
//                   Veer Bharat — Premium Palm Oil Demo
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

// // Main Component
// export default function PalmOilPage() {
//   return (
//     <main style={{ background: "#fff7ed" }} className="min-h-screen py-6 sm:py-12">
//       <div className="max-w-7xl mx-auto px-2 sm:px-6 relative w-full">
//         {/* Page Header */}
//         <div className="text-center mb-12">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <div className="inline-block px-7 py-4 rounded-full bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 text-white font-bold text-xl mb-8 shadow-2xl">
//               🔥 Veer Bharat Premium Palm Oil
//             </div>
//             <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
//               High-Stability Cooking Oil
//             </h1>
//             <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto font-medium leading-relaxed">
//               Perfect for deep frying, baking, and commercial food preparation with rich golden color
//             </p>
//           </motion.div>
//         </div>

//         {/* Rotating Showcase - FIXED */}
//         <RotatingShowcase items={showcaseItems} />

//         {/* Why Choose Section */}
//         <WhyChooseSection />

//         {/* Product Variants Grid */}
//         <ProductVariantsGrid products={productVariants} />

//         {/* CTA Section */}
//         <section className="max-w-7xl mx-auto px-6 mb-16">
//           <div className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 rounded-3xl p-12 text-center text-white shadow-2xl">
//             <h2 className="text-4xl md:text-5xl font-black mb-6">Ready for Superior Cooking?</h2>
//             <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
//               Order now and experience the stability and richness of premium palm oil
//             </p>
//             <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
//               <button className="px-10 py-5 rounded-full bg-white text-orange-600 text-xl font-bold shadow-xl hover:scale-105 transition-all duration-300">
//                 🛒 Order Now
//               </button>
//               <button className="px-10 py-5 rounded-full border-2 border-white text-white text-xl font-bold hover:bg-white/10 transition-all duration-300">
//                 📞 Contact Us
//               </button>
//             </div>
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// }







"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// PALM OIL VARIANTS DATA
const palmVariants = [
  {
    id: 1,
    slug: "palm-15l",
    name: "Premium 15 Liter Tin",
    size: "15 Liter",
    short: "Best value bulk pack for restaurants and commercial kitchens. High-stability refined palm oil.",
    image: "/images/palm-15l.jpg",
    price: "2,100",
    originalPrice: "2,400",
    discount: 13,
    video: "/videos/palm-demo.mp4",
    popular: true,
  },
  {
    id: 2,
    slug: "palm-5l",
    name: "Family 5 Liter Jar",
    size: "5 Liter",
    short: "Perfect for deep frying and baking. Rich in vitamins A and E with golden color.",
    image: "/images/palm-5l-jar.jpg",
    price: "700",
    originalPrice: "800",
    discount: 13,
    video: "/videos/palm-demo.mp4",
    popular: true,
  },
  {
    id: 3,
    slug: "palm-1l",
    name: "Standard 1 Liter Bottle",
    size: "1 Liter",
    short: "Most popular size! Ideal for everyday frying, baking, and high-temperature cooking.",
    image: "/images/palm-1l.jpg",
    price: "140",
    video: "/videos/palm-demo.mp4",
    popular: true,
  },
  {
    id: 4,
    slug: "palm-500ml",
    name: "Compact 500ml Bottle",
    size: "500ml",
    short: "Perfect for small households or trying Veer Bharat's premium palm oil quality first time.",
    image: "/images/palm-500ml.jpg",
    price: "75",
    video: "/videos/palm-demo.mp4",
  },
  {
    id: 5,
    slug: "palm-200ml",
    name: "Travel 200ml Bottle",
    size: "200ml",
    short: "Ultra-portable size perfect for outdoor cooking, camping, or keeping in your pantry.",
    image: "/images/palm-200ml.jpg",
    price: "32",
    video: "/videos/palm-demo.mp4",
  },
];

// Cyclic Orbit Showcase
function RotatingShowcase({ items = [] }) {
  const n = items.length || 1;
  const [index, setIndex] = useState(0);
  const [radius, setRadius] = useState(140);
  const containerRef = useRef(null);

  useEffect(() => {
    function setFromWidth() {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      setRadius(Math.min(Math.max(w * 0.18, 90), 160));
    }
    setFromWidth();
    window.addEventListener("resize", setFromWidth);
    return () => window.removeEventListener("resize", setFromWidth);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % n);
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + n) % n);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [n]);

  const longText = {
    goodness:
      "Veer Bharat Palm Oil is sourced from certified sustainable plantations and refined using state-of-the-art facilities that maintain nutritional integrity. Rich in vitamin A and E, our palm oil undergoes multiple filtration stages to ensure clarity, purity, and stability.",
    benefits:
      "With its high stability at elevated temperatures, palm oil is ideal for deep frying, baking, and commercial food preparation. It imparts a rich golden color and enhances texture in baked goods, making it popular among professional chefs and home bakers alike.",
    rating:
      "Veer Bharat Palm Oil has gained strong traction in the food service industry and among households looking for economical yet quality cooking oil. Restaurant owners appreciate its cost-effectiveness and performance in high-volume frying operations.",
  };

  if (!items.length) return null;

  return (
    <section
      ref={containerRef}
      className="max-w-7xl mx-auto px-2 sm:px-4 mb-14 w-full relative"
    >
      <div className="grid gap-10 md:grid-cols-2 items-center">
        {/* LEFT: Product Text */}
        <div className="space-y-5 order-2 md:order-1">
          <motion.h2
            key={`title-${index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-3xl md:text-5xl font-extrabold text-[#1b2a3a] tracking-tight"
          >
            {items[index].name}
          </motion.h2>
          <motion.p
            key={`desc-${index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-base md:text-xl text-slate-700 font-medium"
          >
            {items[index].short}
          </motion.p>
          <motion.div
            key={`details-${index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-4 p-5 sm:p-8 bg-white rounded-3xl shadow-xl border-2 border-orange-100"
          >
            <h3 className="text-lg md:text-2xl font-bold mb-2 text-orange-600 flex items-center gap-2">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>{" "}
              Goodness
            </h3>
            <p className="text-base text-slate-700">{longText.goodness}</p>
            <h3 className="text-lg md:text-2xl font-bold mt-5 mb-2 text-orange-600 flex items-center gap-2">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>{" "}
              Benefits
            </h3>
            <p className="text-base text-slate-700">{longText.benefits}</p>
            <h3 className="text-lg md:text-2xl font-bold mt-5 mb-2 text-orange-600 flex items-center gap-2">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span> Market
              Rating
            </h3>
            <p className="text-base text-slate-700">{longText.rating}</p>
          </motion.div>
          <div className="mt-5 flex items-center gap-3">
            <span className="text-2xl md:text-4xl font-black text-orange-600">
              ₹{items[index].price}
            </span>
            <span className="text-base md:text-lg text-gray-500">
              ({items[index].size})
            </span>
          </div>
          <div className="mt-5">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 text-white font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg"
            >
              View All Products →
            </Link>
          </div>
        </div>

        {/* RIGHT: Cyclic Orbit */}
        <div className="relative flex items-center justify-center w-full min-h-[360px] md:min-h-[520px] order-1 md:order-2">
          <button
            onClick={() => setIndex((i) => (i + 1) % n)}
            aria-label="Previous"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg border-2 border-orange-400 hover:bg-orange-50 flex items-center justify-center text-2xl font-bold text-orange-600 md:static md:left-0"
          >
            ‹
          </button>
          <div className="relative w-[280px] h-[280px] xs:w-[320px] xs:h-[320px] sm:w-[360px] sm:h-[360px] md:w-[440px] md:h-[440px] flex items-center justify-center">
            {/* Animated background glow */}
            <motion.div
              className="absolute inset-0 rounded-full z-[1]"
              style={{
                background:
                  "radial-gradient(circle, rgba(251,146,60,0.2) 0%, rgba(251,146,60,0.1) 60%, transparent 100%)",
              }}
              animate={{ scale: [1, 1.08, 1] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            {/* Orbit ring */}
            <svg
              viewBox="0 0 300 300"
              className="absolute inset-0 w-full h-full pointer-events-none z-[2]"
            >
              <defs>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <circle
                cx="150"
                cy="150"
                r="120"
                stroke="#FB923C"
                strokeWidth="4"
                fill="none"
                strokeDasharray="10 8"
                filter="url(#glow)"
                opacity="0.7"
              />
            </svg>

            {/* Product images in circular orbital positions */}
            {items.map((it, i) => {
              const positionIndex = (i - index + n) % n;
              const baseAngle = (positionIndex * 360) / n;
              const rad = (baseAngle * Math.PI) / 180;
              const x = Math.sin(rad) * radius;
              const y = -Math.cos(rad) * radius;

              const isActive = positionIndex === 0;
              const size = isActive ? 150 : 85;

              return (
                <motion.div
                  key={it.id}
                  className="absolute cursor-pointer z-[3]"
                  onClick={() => setIndex(i)}
                  initial={false}
                  animate={{
                    x: x,
                    y: y,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 180,
                    damping: 22,
                    mass: 0.6,
                  }}
                  style={{
                    left: "50%",
                    top: "50%",
                    width: size,
                    height: size,
                    marginLeft: -size / 2,
                    marginTop: -size / 2,
                  }}
                >
                  <motion.div
                    className="relative rounded-2xl overflow-hidden bg-white w-full h-full"
                    animate={{
                      scale: isActive ? 1.1 : 1,
                      boxShadow: isActive
                        ? "0 20px 40px rgba(251, 146, 60, 0.35), 0 8px 20px rgba(0,0,0,0.15)"
                        : "0 6px 18px rgba(0,0,0,0.12)",
                    }}
                    transition={{ duration: 0.35 }}
                    style={{
                      border: isActive
                        ? "3px solid #FB923C"
                        : "2px solid rgba(0,0,0,0.08)",
                    }}
                  >
                    <img
                      src={it.image}
                      alt={it.name}
                      className={`w-full h-full object-cover transition-all duration-300 ${
                        isActive ? "brightness-110" : "brightness-90"
                      }`}
                    />
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 border-4 border-orange-400 rounded-2xl pointer-events-none"
                      />
                    )}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
          <button
            onClick={() => setIndex((i) => (i - 1 + n) % n)}
            aria-label="Next"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg border-2 border-orange-400 hover:bg-orange-50 flex items-center justify-center text-2xl font-bold text-orange-600 md:static md:right-0"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}

export default function PalmOilPage() {
  const [modalVideo, setModalVideo] = useState(null);
  const closeModal = () => setModalVideo(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Top 4 for showcase
  const showcaseItems = palmVariants.slice(0, 4);

  return (
    <main
      style={{ background: "#fff7ed" }}
      className="min-h-screen py-6 sm:py-12"
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-6 relative w-full">
        {/* Orbit Showcase */}
        <RotatingShowcase items={showcaseItems} />

        {/* Page header */}
        <header className="mb-8 sm:mb-12 text-center">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-3 tracking-tight">
            Veer Bharat Premium Palm Oil
          </h1>
          <p className="mt-2 text-base sm:text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-medium">
            High-stability refined oil perfect for deep frying, baking, and commercial cooking with rich golden color
          </p>
        </header>

        {/* Products Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-6 xs:gap-8 sm:gap-10">
          {palmVariants.map((product) => (
            <article
              key={product.id}
              className="relative group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Popular Badge */}
              {product.popular && (
                <div className="absolute top-4 right-4 z-10 px-4 py-2 rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white text-sm font-bold shadow-lg">
                  🔥 Best Seller
                </div>
              )}

              {/* Product Image */}
              <div className="relative h-56 xs:h-64 sm:h-72 md:h-80 w-full overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Product Content */}
              <div className="p-4 sm:p-6 md:p-8">
                {/* Size Badge */}
                <div className="text-sm font-bold text-orange-600 mb-2">
                  {product.size}
                </div>

                {/* Product Name */}
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
                  {product.name}
                </h2>

                {/* Product Description */}
                <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                  {product.short}
                </p>

                {/* Price */}
                <div className="mt-4 flex items-center gap-3">
                  <span className="text-2xl md:text-3xl font-black text-orange-600">
                    ₹{product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-lg text-gray-400 line-through">
                      ₹{product.originalPrice}
                    </span>
                  )}
                  {product.discount && (
                    <span className="text-sm font-bold text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
                      {product.discount}% OFF
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="mt-5 flex flex-col xs:flex-row gap-2 xs:gap-3">
                  {/* Add to Cart Button */}
                  <button className="flex-1 text-center rounded-full px-4 py-2.5 bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 text-white font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-base md:text-lg">
                    🛒 Add to Cart
                  </button>

                  {/* Demo Button */}
                  <button
                    onClick={() =>
                      setModalVideo({
                        src: product.video || "/videos/palm-demo.mp4",
                        name: product.name,
                      })
                    }
                    className="rounded-full px-4 py-2 xs:px-5 xs:py-3 border-2 border-orange-400 hover:bg-orange-50 transition-all duration-300 font-semibold text-base md:text-lg"
                  >
                    🎥 Demo
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* VIDEO MODAL */}
        <AnimatePresence>
          {modalVideo && (
            <motion.div
              key="video-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="fixed inset-0 z-[300] flex items-center justify-center p-2 xs:p-4 sm:p-6"
            >
              <div
                className="absolute inset-0 bg-black/70"
                onClick={closeModal}
              />
              <motion.div
                initial={{ scale: 0.96, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.96, opacity: 0 }}
                transition={{ duration: 0.18 }}
                className="relative w-full max-w-lg xs:max-w-2xl md:max-w-3xl rounded-2xl overflow-hidden shadow-2xl bg-black"
              >
                <div className="absolute right-3 top-3 z-20">
                  <button
                    onClick={closeModal}
                    className="rounded-full bg-white/90 px-3 py-2 hover:bg-white transition"
                  >
                    ✕ Close
                  </button>
                </div>
                <video
                  src={modalVideo.src}
                  controls
                  autoPlay
                  className="w-full h-[220px] xs:h-[330px] md:h-[60vh] object-cover bg-black"
                />
                <div className="p-3 xs:p-4 bg-gradient-to-t from-black/40 to-transparent text-white flex items-center justify-between">
                  <div>
                    <div className="text-base xs:text-lg font-bold">
                      {modalVideo.name}
                    </div>
                    <div className="text-xs xs:text-sm text-white/80">
                      Veer Bharat — Premium Palm Oil
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
