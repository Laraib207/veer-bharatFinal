"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero2() {
  const [isVisible, setIsVisible] = React.useState(false);
  const sectionRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-amber-50 py-20 lg:py-28"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-15">
        <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-amber-300 blur-[100px]"></div>
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-orange-300 blur-[120px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-yellow-200 blur-[80px]"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Text Content - Left Side */}
          <div
            className={`order-2 transition-all duration-700 ease-out lg:order-1 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-8 opacity-0"
            }`}
          >
            <div className="max-w-3xl space-y-8">
              {/* Header Section */}
              <div className="space-y-4">
                <h1 className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
                  Veer Bharat
                </h1>
                <div className="h-2 w-32 rounded-full bg-gradient-to-r from-slate-900/80 to-orange-400"></div>
              </div>

              {/* Main Description */}
              <p className="text-lg leading-relaxed text-slate-800 sm:text-xl md:text-2xl">
                Since its establishment in 2000,{" "}
                <Link
                  href="/about"
                  className="font-semibold text-slate-900 underline decoration-2 underline-offset-4 transition-colors hover:text-slate-800"
                >
                  Sri Shyam Agro Industries
                </Link>{" "}
                has been dedicated to bringing the finest quality edible oils to 
                every household. With a strong commitment to purity, trust, and 
                customer satisfaction, Veer Bharat has become a name synonymous 
                with healthy living and authentic taste.
              </p>

              {/* Detailed Content */}
              <div className="space-y-6 text-slate-800">
                <div
                  className={`transition-opacity duration-700 delay-200 ${
                    isVisible ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <p className="text-lg leading-relaxed md:text-xl">
                    We specialize in producing a wide range of oils, including{" "}
                    <span className="font-semibold text-slate-900">
                      Kachi Ghani Mustard Oil
                    </span>
                    ,{" "}
                    <span className="font-semibold text-slate-900">
                      Soybean Oil
                    </span>
                    ,{" "}
                    <span className="font-semibold text-slate-900">
                      Palm Oil
                    </span>
                    , and many more. Each drop reflects our thoughtful practices — 
                    from carefully sourcing raw materials to using advanced extraction 
                    techniques that retain natural aroma, flavor, and nutrition.
                  </p>
                </div>

                <div
                  className={`transition-opacity duration-700 delay-300 ${
                    isVisible ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <p className="text-lg leading-relaxed md:text-xl">
                    At Veer Bharat, we believe that true quality lies in balancing 
                    tradition with modern technology. That's why our products combine 
                    time-honored methods with strict quality standards, ensuring you 
                    receive only the best for your family's kitchen.
                  </p>
                </div>

                <div
                  className={`transition-opacity duration-700 delay-400 ${
                    isVisible ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <p className="text-lg leading-relaxed md:text-xl">
                    Choosing Veer Bharat means choosing trust, purity, and goodness 
                    that enrich every meal. With us, tradition truly meets purity — 
                    making your food healthier, tastier, and filled with care.
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div
                className={`pt-4 transition-all duration-700 delay-500 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"
                }`}
              >
                <Link
                  href="/about"
                  className="group relative inline-block overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 to-blue-900 px-14 py-5 font-semibold text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-3xl"
                >
                  <span className="relative z-10 text-xl">About Us</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-800 to-slate-900 transition-transform duration-300 group-hover:scale-x-100 group-hover:scale-y-100 group-hover:opacity-100"></div>
                </Link>
              </div>
            </div>
          </div>

          {/* Image Section - Right Side */}
          <div
            className={`order-1 flex items-center justify-center transition-all duration-1000 ease-out lg:order-2 lg:justify-end ${
              isVisible
                ? "translate-x-0 scale-100 opacity-100"
                : "translate-x-12 scale-95 opacity-0"
            }`}
          >
            <div className="group relative h-[560px] w-full max-w-[920px] overflow-hidden rounded-3xl shadow-3xl transition-transform duration-500 hover:scale-[1.02]">
              <Image
                src="/images/Brochure.png"
                alt="Veer Bharat product basket showcasing premium edible oils"
                fill
                priority
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 600px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                quality={90}
              />
              
              {/* Image Overlay Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}