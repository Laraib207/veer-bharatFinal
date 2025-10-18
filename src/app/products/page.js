"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// PRODUCTS DATA
const products = [
  {
    slug: "soyabean-oil",
    name: "Soyabean Oil",
    short:
      "Light, versatile and nutrition-forward—lets ingredients shine without heaviness.",
    image: "/images/soyabeennnn.jpg",
    price: "",
    video: "/product-demo.mp4",
  },
  {
    slug: "mustard-oil",
    name: "Kachi Ghani Mustard Oil",
    short:
      "Traditional cold-pressed purity with authentic aroma and robust flavor.",
    image: "/images/musterddd.jpg",
    price: "",
    video: "/product-demo.mp4",
  },
  {
    slug: "rice-bran-oil",
    name: "Rice Bran Oil",
    short:
      "Heart-healthy choice with balanced nutrition, high smoke point ideal for deep frying.",
    image: "/images/soyabeennnn.jpg",
    price: "",
    video: "/product-demo.mp4",
  },
  {
    slug: "palm-oil",
    name: "Palm Oil",
    short: "Rich, versatile cooking oil perfect for traditional recipes.",
    image: "/images/musterddd.jpg",
    price: "",
    video: "/product-demo.mp4",
  },
  {
    slug: "sunflower-oil",
    name: "Sunflower Oil",
    short:
      "Light golden oil with neutral taste, perfect for all-purpose cooking.",
    image: "/images/soyabeennnn.jpg",
    price: "",
    video: "/product-demo.mp4",
  },
  {
    slug: "brand-rice",
    name: "Brand Rice",
    short: "Premium quality rice with authentic aroma and perfect texture.",
    image: "/images/musterddd.jpg",
    price: "",
    video: "/product-demo.mp4",
  },
];

// Cyclic Orbit Showcase - images stay fixed, active one moves to top
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
      "Veer Bharat oils are crafted with careful attention to purity and traditional techniques. Our Kachi Ghani and refined ranges are made from selected seeds and processed using temperature and hygiene controls to preserve natural flavour and nutrients.",
    benefits:
      "Health-forward and versatile — our oils bring balanced fatty-acid profiles suitable for a variety of Indian recipes. We source responsibly and work with small farmers so you get consistent taste with improved transparency and fair pricing.",
    rating:
      "Market reception has been strong in regional pilots — customers praise the authentic aroma and consistent performance across cooking methods.",
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
            className="mt-4 p-5 sm:p-8 bg-white rounded-3xl shadow-xl border-2 border-amber-100"
          >
            <h3 className="text-lg md:text-2xl font-bold mb-2 text-amber-600 flex items-center gap-2">
              <span className="w-2 h-2 bg-amber-500 rounded-full"></span>{" "}
              Goodness
            </h3>
            <p className="text-base text-slate-700">{longText.goodness}</p>
            <h3 className="text-lg md:text-2xl font-bold mt-5 mb-2 text-amber-600 flex items-center gap-2">
              <span className="w-2 h-2 bg-amber-500 rounded-full"></span>{" "}
              Benefits
            </h3>
            <p className="text-base text-slate-700">{longText.benefits}</p>
            <h3 className="text-lg md:text-2xl font-bold mt-5 mb-2 text-amber-600 flex items-center gap-2">
              <span className="w-2 h-2 bg-amber-500 rounded-full"></span> Market
              Rating
            </h3>
            <p className="text-base text-slate-700">{longText.rating}</p>
          </motion.div>
          <div className="mt-5">
            <Link
              href={`/${items[index].slug}`}
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-black font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg"
            >
              View Product →
            </Link>
          </div>
        </div>

        {/* RIGHT: Cyclic Orbit */}
        <div className="relative flex items-center justify-center w-full min-h-[360px] md:min-h-[520px] order-1 md:order-2">
          <button
            onClick={() => setIndex((i) => (i + 1) % n)}
            aria-label="Previous"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg border-2 border-amber-400 hover:bg-amber-50 flex items-center justify-center text-2xl font-bold text-amber-600 md:static md:left-0"
          >
            ‹
          </button>
          <div className="relative w-[280px] h-[280px] xs:w-[320px] xs:h-[320px] sm:w-[360px] sm:h-[360px] md:w-[440px] md:h-[440px] flex items-center justify-center">
            {/* Animated background glow */}
            <motion.div
              className="absolute inset-0 rounded-full z-[1]"
              style={{
                background:
                  "radial-gradient(circle, rgba(251,191,36,0.2) 0%, rgba(251,191,36,0.1) 60%, transparent 100%)",
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
                stroke="#F59E0B"
                strokeWidth="4"
                fill="none"
                strokeDasharray="10 8"
                filter="url(#glow)"
                opacity="0.7"
              />
            </svg>

            {/* Product images in circular orbital positions */}
            {items.map((it, i) => {
              // Calculate position offset based on active index
              const positionIndex = (i - index + n) % n;
              // Start from top (0 degrees = top center), then go clockwise
              const baseAngle = (positionIndex * 360) / n;
              const rad = (baseAngle * Math.PI) / 180;
              const x = Math.sin(rad) * radius;
              const y = -Math.cos(rad) * radius; // Negative because y increases downward

              const isActive = positionIndex === 0; // Top position (north)
              const size = isActive ? 150 : 85;

              return (
                <motion.div
                  key={it.slug}
                  className="absolute cursor-pointer z-[3]"
                  onClick={() => {
                    setIndex(i);
                  }}
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
                        ? "0 20px 40px rgba(245, 158, 11, 0.35), 0 8px 20px rgba(0,0,0,0.15)"
                        : "0 6px 18px rgba(0,0,0,0.12)",
                    }}
                    transition={{ duration: 0.35 }}
                    style={{
                      border: isActive
                        ? "3px solid #F59E0B"
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
                        className="absolute inset-0 border-4 border-amber-400 rounded-2xl pointer-events-none"
                      />
                    )}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
          <button
            onClick={() => setIndex((i) => (i - 1 + n) % n) }
            aria-label="Next"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg border-2 border-amber-400 hover:bg-amber-50 flex items-center justify-center text-2xl font-bold text-amber-600 md:static md:right-0"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}

export default function ProductsPage() {
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
  const showcaseItems = products.slice(0, 4);

  // SIDEBAR/COLLAPSE-STYLE MENU (for mobile)
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const goHome = () => setSidebarOpen(false);
  const goBlog = () => setSidebarOpen(false);
  const [productsOpen, setProductsOpen] = useState(true);
  const toggleProducts = () => setProductsOpen((p) => !p);
  const goAllProducts = () => setSidebarOpen(false);
  const goSoyabeanOil = () => setSidebarOpen(false);
  const goMustardOil = () => setSidebarOpen(false);
  const goPalmOil = () => setSidebarOpen(false);
  const prevProduct = () => {};
  const nextProduct = () => {};
  const closeMenu = () => setSidebarOpen(false);

  return (
    <main
      style={{ background: "#fef9c3" }}
      className="min-h-screen py-6 sm:py-12"
    >
      {/* CONTAINER WITH PROPER Z-INDEX CONTROL */}
      <div className="max-w-7xl mx-auto px-2 sm:px-6 relative w-full">
        {/* Responsive Mobile/Tablet Sidebar/Drawer - Z-INDEX 200 */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-[200] bg-black/40 flex justify-end md:hidden"
            onClick={(e) => {
              if (e.target === e.currentTarget) closeMenu();
            }}
          >
            <aside
              className="relative w-full max-w-xs bg-gradient-to-b from-[#f1e0f5] to-[#f7f5fa] rounded-bl-3xl rounded-tl-3xl shadow-lg min-h-screen flex flex-col overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/30">
                <div className="flex items-center gap-2">
                  <img src="/logo.svg" alt="Logo" className="h-8 w-8" />
                  <div>
                    <div className="text-lg font-extrabold text-[#1b346d]">
                      VEER BHARAT
                    </div>
                    <div className="text-xs font-semibold text-pink-700">
                      वाह! मज़ा आ गया
                    </div>
                  </div>
                </div>
                <button
                  onClick={closeMenu}
                  className="bg-white hover:bg-pink-100 rounded-full p-2 shadow"
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>
              {/* Product/Carousel col */}
              <div className="flex flex-col items-center py-5 px-2 w-full">
                <div className="relative w-40 h-40">
                  <img
                    src="/images/mustard-card.jpg"
                    alt="Mustard Oil Card"
                    className="rounded-2xl shadow-lg w-full h-full object-cover"
                  />
                  <button
                    onClick={prevProduct}
                    className="absolute left-[-18px] top-1/2 -translate-y-1/2 rounded-full bg-white border border-amber-400 shadow-lg w-7 h-7 flex items-center justify-center text-xl font-bold text-amber-600"
                  >
                    ‹
                  </button>
                  <button
                    onClick={nextProduct}
                    className="absolute right-[-18px] top-1/2 -translate-y-1/2 rounded-full bg-white border border-amber-400 shadow-lg w-7 h-7 flex items-center justify-center text-xl font-bold text-amber-600"
                  >
                    ›
                  </button>
                </div>
                <div className="mt-2 text-center font-bold text-base text-amber-800">
                  100% Nature Fresh
                  <br />
                  Kachi Ghani Mustard Oil
                </div>
              </div>
              {/* Menu nav */}
              <nav className="flex flex-col gap-0.5 px-3 pb-6">
                <button
                  className="flex items-center gap-2 px-4 py-3 bg-white rounded-xl mb-1 shadow"
                  onClick={goHome}
                >
                  <span className="material-icons text-amber-500">home</span>
                  <span className="font-semibold text-[#1b346d]">Home</span>
                </button>
                <button
                  className="flex items-center gap-2 px-4 py-3 bg-white rounded-xl mb-1 shadow"
                  onClick={goBlog}
                >
                  <span className="material-icons text-amber-500">article</span>
                  <span className="font-semibold text-[#1b346d]">Blog</span>
                </button>
                {/* Products Dropdown */}
                <div className="bg-white rounded-xl shadow mb-2">
                  <button
                    onClick={toggleProducts}
                    className="w-full flex items-center justify-between px-4 py-3 font-semibold text-[#1b346d]"
                  >
                    <span className="flex items-center gap-2">
                      <span className="material-icons text-amber-500">
                        shopping_bag
                      </span>
                      Products
                    </span>
                    <span className="material-icons text-amber-500">
                      {productsOpen ? "expand_less" : "expand_more"}
                    </span>
                  </button>
                  {productsOpen && (
                    <div className="flex flex-col gap-0.5 pb-2">
                      <button
                        onClick={goAllProducts}
                        className="w-full text-left px-8 py-2 text-sm text-[#1b346d] hover:bg-amber-50 rounded"
                      >
                        All Products
                      </button>
                      <button
                        onClick={goSoyabeanOil}
                        className="w-full text-left px-8 py-2 text-sm text-[#1b346d] hover:bg-amber-50 rounded"
                      >
                        Soyabean Oil
                      </button>
                      <button
                        onClick={goMustardOil}
                        className="w-full text-left px-8 py-2 text-sm text-[#1b346d] hover:bg-amber-50 rounded"
                      >
                        Mustard Oil
                      </button>
                      <button
                        onClick={goPalmOil}
                        className="w-full text-left px-8 py-2 text-sm text-[#1b346d] hover:bg-amber-50 rounded"
                      >
                        Palm Oil
                      </button>
                    </div>
                  )}
                </div>
              </nav>
            </aside>
          </div>
        )}

        {/* Orbit Showcase - STAYS BELOW NAVBAR (no high z-index) */}
        <RotatingShowcase items={showcaseItems} />

        {/* Page header */}
        <header className="mb-8 sm:mb-12 text-center">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-3 tracking-tight">
            Our Full Range of Premium Products
          </h1>
          <p className="mt-2 text-base sm:text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-medium">
            Handpicked edible oils & culinary essentials — crafted for taste,
            health and everyday confidence.
          </p>
        </header>

       {/* Products Grid */}
<div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-6 xs:gap-8 sm:gap-10">
  {products.map((product) => (
    <article
      key={product.slug}
      className="relative group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
    >
      
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
        
        {/* Product Name */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
          {product.name}
        </h2>
        
        {/* Product Description */}
        <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
          {product.short}
        </p>

        {/* Price */}
        <div className="mt-3 flex items-center gap-2">
          {product.price && (
            <span className="text-base md:text-lg font-bold px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-50 to-amber-100 text-amber-700 border-2 border-amber-200">
              ₹{product.price}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="mt-5 flex flex-col xs:flex-row gap-2 xs:gap-3">
          
          {/* View Product Button */}
          <Link
            href={`/${product.slug}`}
            className="flex-1 text-center rounded-full px-4 py-2.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-black font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-base md:text-lg"
          >
            View Product →
          </Link>
          
          {/* Demo Button */}
          <button
            onClick={() =>
              setModalVideo({
                src: product.video || "/product-demo.mp4",
                name: product.name,
              })
            }
            className="rounded-full px-4 py-2 xs:px-5 xs:py-3 border-2 border-amber-400 hover:bg-amber-50 transition-all duration-300 font-semibold text-base md:text-lg"
          >
            Demo
          </button>
        </div>
      </div>
    </article>
  ))}
</div>

        {/* VIDEO MODAL - HIGHEST Z-INDEX */}
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
                    Close
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
                      Veer Bharat — product demo
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
