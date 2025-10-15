"use client";
import React from "react";

const benefitsData = [
  {
    src: "/images/WhatsApp-Image-2025-09-23-at-13.35.21-2.jpg",
    label: "Reduces\nCholesterol",
  },
  {
    src: "/images/WhatsApp-Image-2025-09-23-at-13.35.20-3-1.jpg",
    label: "High Smoke\nPoint",
  },
  {
    src: "/images/WhatsApp-Image-2025-09-23-at-13.35.21.jpg",
    label: "Skin-Improving\nBenefits",
  },
  {
    src: "/images/WhatsApp-Image-2025-10-11-at-11.53.02-2.jpg",
    label: "Natural\nAntioxidants",
  },
  {
    src: "/images/WhatsApp-Image-2025-09-23-at-13.35.21-3.jpg",
    label: "Physically\nRefined",
  },
  {
    src: "/images/WhatsApp-Image-2025-10-11-at-11.53.02.jpeg",
    label: "Balanced\nMUFA & PUFA",
  },
];

export default function VeerBharatHero() {
  const productImg = "/images/WhatsApp-Image-2025-10-07-at-10.57.53.jpg";

  return (
    <section className="relative overflow-hidden w-full min-h-screen bg-gradient-to-br from-purple-50 via-amber-50 to-purple-100">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 10% 20%, rgba(168, 85, 247, 0.4) 0%, transparent 40%),
              radial-gradient(circle at 90% 80%, rgba(245, 158, 11, 0.4) 0%, transparent 40%),
              radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)
            `,
          }}
        />
      </div>

      {/* Ornamental Borders */}
      <div className="absolute top-0 left-0 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 border-l-4 border-t-4 border-purple-300 opacity-30 rounded-tl-2xl" />
      <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 border-r-4 border-t-4 border-amber-300 opacity-30 rounded-tr-2xl" />
      <div className="absolute bottom-0 left-0 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 border-l-4 border-b-4 border-amber-300 opacity-30 rounded-bl-2xl" />
      <div className="absolute bottom-0 right-0 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 border-r-4 border-b-4 border-purple-300 opacity-30 rounded-br-2xl" />

      <div className="relative w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* HEADER SECTION */}
        <div className="text-center max-w-6xl mx-auto mb-12 lg:mb-16">
          {/* Decorative Divider */}
          <div className="flex items-center justify-center mb-8 lg:mb-12 gap-3 lg:gap-4">
            <div className="w-24 lg:w-32 h-1 bg-gradient-to-r from-transparent via-purple-400 to-purple-500 rounded-full" />
            <div className="w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-gradient-to-br from-purple-500 to-amber-500 animate-pulse shadow-lg" />
            <div className="w-24 lg:w-32 h-1 bg-gradient-to-l from-transparent via-amber-400 to-amber-500 rounded-full" />
          </div>

          {/* Main Heading */}
          <div className="space-y-2 lg:space-y-4 mb-8 lg:mb-12">
            <h1
              className="font-bold text-gray-900 leading-none"
              style={{
                fontFamily: "'Playfair Display', serif",
                textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-2 lg:mb-4 tracking-tight">
                VEER BHARAT
              </span>
              <span className="block text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mb-2 lg:mb-4 bg-gradient-to-r from-blue-900 via-amber-500 to-blue-900 bg-clip-text text-transparent tracking-wide">
                KACHI GHANI
              </span>
              <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight">
                MUSTARD OIL
              </span>
            </h1>
          </div>

          {/* Description */}
          <div className="max-w-5xl mx-auto space-y-4 lg:space-y-6">
            <p
              className="text-lg sm:text-xl lg:text-2xl text-gray-800 leading-relaxed font-medium"
              style={{
                fontFamily: "'Georgia', serif",
              }}
            >
              Made from{" "}
              <span className="text-purple-700 font-semibold">
                100% pure mustard seeds
              </span>
              , Veer Bharat Kachi Ghani Mustard Oil is a{" "}
              <span className="text-amber-600 font-semibold">
                heart-healthy cooking oil
              </span>{" "}
              rich in natural goodness, which helps reduce cholesterol levels
              and improve overall health.
            </p>

            <p
              className="text-lg sm:text-xl lg:text-2xl text-gray-800 leading-relaxed font-medium"
              style={{
                fontFamily: "'Georgia', serif",
              }}
            >
              It's ideal for everyday cooking with a balanced blend of
              monounsaturated and polyunsaturated fats. Free from harmful
              chemicals, it's packed with antioxidants and offers a mild
              flavour, making it perfect for frying, sautéing, and more.
            </p>
          </div>
        </div>

        {/* BENEFITS AND PRODUCT LAYOUT */}
        <div className="max-w-7xl mx-auto">
          {/* TOP BENEFITS ROW */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 lg:mb-12 px-2">
            {benefitsData.slice(0, 3).map((benefit, index) => (
              <BenefitCircle
                key={`top-${index}`}
                benefit={benefit}
                index={index}
                delay={index * 0.1}
              />
            ))}
          </div>

          {/* CENTER PRODUCT SHOWCASE */}
          <div className="my-8 lg:my-12">
            <div className="relative flex justify-center">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-200 via-orange-300 to-amber-200 rounded-full blur-2xl opacity-60 animate-pulse scale-125" />

              {/* Product Image */}
              <div className="relative z-10 transform hover:scale-105 transition-transform duration-500 ease-out">
                <img
                  src={productImg}
                  alt="Veer Bharat Kachi Ghani Mustard Oil"
                  className="w-48 sm:w-64 lg:w-80 xl:w-96 h-auto drop-shadow-2xl"
                  style={{
                    filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.3))",
                  }}
                />
              </div>
            </div>
          </div>

          {/* BOTTOM BENEFITS ROW */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-8 lg:mt-12 px-2">
            {benefitsData.slice(3, 6).map((benefit, index) => (
              <BenefitCircle
                key={`bottom-${index}`}
                benefit={benefit}
                index={index + 3}
                delay={(index + 3) * 0.1}
              />
            ))}
          </div>
        </div>

        {/* CLOSING HIGHLIGHT */}
        <div className="max-w-4xl mx-auto mt-12 lg:mt-16">
          <div className="bg-gradient-to-r from-purple-50 via-amber-50 to-purple-50 rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-xl border border-purple-200">
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 lg:mb-6 text-center"
              style={{
                fontFamily: "'Playfair Display', serif",
              }}
            >
              Elevate Your Culinary Experience
            </h2>
            <p
              className="text-lg sm:text-xl lg:text-2xl text-gray-800 text-center font-medium"
              style={{
                fontFamily: "'Georgia', serif",
              }}
            >
              Experience the{" "}
              <span className="text-purple-600 font-semibold">Purity</span>,{" "}
              <span className="text-amber-600 font-semibold">Health</span>, and{" "}
              <span className="text-emerald-600 font-semibold">Tradition</span>{" "}
              in Every Drop!
            </p>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}

// Updated BenefitCircle component with larger circles and proper image cropping
function BenefitCircle({ benefit, index, delay }) {
  return (
    <div
      className="flex flex-col items-center group"
      style={{
        animation: `fadeInUp 0.6s ease-out ${delay}s both`,
      }}
    >
      {/* Circular Container - Made Larger */}
      <div className="relative mb-3 lg:mb-4">
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-orange-300 rounded-full blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

        {/* Main Circle - Increased Size */}
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 rounded-full bg-gradient-to-br from-amber-300 via-orange-300 to-amber-400 flex items-center justify-center shadow-xl border-4 border-white group-hover:scale-110 transition-transform duration-300 overflow-hidden">
          {/* Image with object-cover for proper cropping */}
          <img
            src={benefit.src}
            alt={benefit.label}
            className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-500"
          />
        </div>
      </div>

      {/* Label */}
      <p
        className="text-sm sm:text-base lg:text-lg font-semibold text-gray-800 text-center whitespace-pre-line leading-tight group-hover:text-gray-900 transition-colors duration-300 mt-2"
        style={{
          fontFamily: "'Georgia', serif",
        }}
      >
        {benefit.label}
      </p>
    </div>
  );
}
