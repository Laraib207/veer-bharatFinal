// components/HealthBenefits.jsx
"use client";

import React, { useEffect, useRef, useState } from "react";

export default function HealthBenefits() {
  // base items (change text or image names if you like)
  const baseItems = [
    {
      id: 1,
      img: "/images/icon-1.jpeg",
      small: "Pure Heart Nourishment",
      bold: "rich in antioxidants",
    },
    {
      id: 2,
      img: "/images/icon-2.jpeg",
      small: "High-Heat Cooking Champion",
      bold: "stable at high temperatures",
    },
    {
      id: 3,
      img: "/images/icon-3.jpeg",
      small: "Glowing Complexion Support",
      bold: "Enhances skin health.",
    },
    {
      id: 4,
      img: "/images/icon-4.jpeg",
      small: "Anti-Aging Cell Protection",
      bold: "fights free radicals",
    },
    {
      id: 5,
      img: "/images/icon-5.jpeg",
      small: "100% Chemical-Free Purity,",
      bold: "Nature's Original Purity",
    },
    {
      id: 6,
      img: "/images/icon-6.jpeg",
      small: "Weight & Wellness Balance",
      bold: "Metabolism & Blood Pressure Care",
    },
  ];

  // ====== CONFIG (easy to change) ======
  const ITEM_W = 320; // Increased from 300px for better image display
  const GAP = 24; // Increased gap for better spacing
  const TRANS_MS = 350; // Slightly longer transition for smoother effect
  const AUTO_MS = 4000; // Longer autoplay interval
  const MIN_CLONES = 2;
  // ======================================

  const [visible, setVisible] = useState(4);
  const [items, setItems] = useState([]);
  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);
  const autoRef = useRef(null);
  const transitioningRef = useRef(false);

  // responsive visible counts
  useEffect(() => {
    function onResize() {
      const w = window.innerWidth;
      if (w < 640) setVisible(1);
      else if (w < 900) setVisible(2);
      else if (w < 1100) setVisible(3);
      else setVisible(4);
    }
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // create clones for infinite loop
  useEffect(() => {
    const cloneCount = Math.max(visible, MIN_CLONES);
    const head = baseItems.slice(0, cloneCount);
    const tail = baseItems.slice(-cloneCount);
    const full = [
      ...tail.map((it, i) => ({ ...it, _cloned: true, _cloneId: `tail-${i}` })),
      ...baseItems,
      ...head.map((it, i) => ({ ...it, _cloned: true, _cloneId: `head-${i}` })),
    ];
    setItems(full);
    setIndex(tail.length);
  }, [visible]);

  // compute stage width in px
  const stageWidth = items.length * (ITEM_W + GAP);

  // apply transform when index changes
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const x = index * (ITEM_W + GAP);
    el.style.transition = `all ${TRANS_MS}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`;
    el.style.transform = `translate3d(${-x}px, 0, 0)`;
    transitioningRef.current = true;

    const tailLen = Math.max(visible, MIN_CLONES);
    const t = setTimeout(() => {
      transitioningRef.current = false;
      if (index >= items.length - tailLen) {
        const realIndex = tailLen + (index - (items.length - tailLen));
        el.style.transition = "none";
        el.style.transform = `translate3d(${
          -realIndex * (ITEM_W + GAP)
        }px, 0, 0)`;
        setIndex(realIndex);
      } else if (index < tailLen) {
        const realIndex =
          tailLen + ((index - tailLen + baseItems.length) % baseItems.length);
        el.style.transition = "none";
        el.style.transform = `translate3d(${
          -realIndex * (ITEM_W + GAP)
        }px, 0, 0)`;
        setIndex(realIndex);
      }
    }, TRANS_MS + 20);

    return () => clearTimeout(t);
  }, [index, items, ITEM_W, GAP, TRANS_MS, visible, baseItems.length]);

  // autoplay management
  useEffect(() => {
    startAuto();
    return () => stopAuto();
  }, [items]);

  function startAuto() {
    stopAuto();
    autoRef.current = setInterval(() => {
      setIndex((i) => i + 1);
    }, AUTO_MS);
  }
  function stopAuto() {
    if (autoRef.current) {
      clearInterval(autoRef.current);
      autoRef.current = null;
    }
  }

  // prev/next handlers
  function prev() {
    if (transitioningRef.current) return;
    stopAuto();
    setIndex((i) => i - 1);
    startAuto();
  }
  function next() {
    if (transitioningRef.current) return;
    stopAuto();
    setIndex((i) => i + 1);
    startAuto();
  }

  // swipe/drag support
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let startX = 0;
    let curX = 0;
    let dragging = false;

    const onStart = (clientX) => {
      stopAuto();
      dragging = true;
      startX = clientX;
      el.style.transition = "none";
    };
    const onMove = (clientX) => {
      if (!dragging) return;
      curX = clientX;
      const dx = curX - startX;
      const base = -(index * (ITEM_W + GAP));
      el.style.transform = `translate3d(${base + dx}px, 0, 0)`;
    };
    const onEnd = () => {
      if (!dragging) return;
      dragging = false;
      const dx = curX - startX;
      if (Math.abs(dx) > ITEM_W * 0.25) {
        if (dx < 0) setIndex((i) => i + 1);
        else setIndex((i) => i - 1);
      } else {
        el.style.transition = `all ${TRANS_MS}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`;
        el.style.transform = `translate3d(${-index * (ITEM_W + GAP)}px, 0, 0)`;
      }
      startAuto();
    };

    function touchStart(e) {
      onStart(e.touches[0].clientX);
    }
    function touchMove(e) {
      onMove(e.touches[0].clientX);
    }
    function touchEnd() {
      onEnd();
    }

    function mouseDown(e) {
      onStart(e.clientX);
      const onMouseMove = (ev) => onMove(ev.clientX);
      const onMouseUp = (ev) => {
        onEnd();
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("mouseup", onMouseUp);
      };
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
    }

    el.addEventListener("touchstart", touchStart, { passive: true });
    el.addEventListener("touchmove", touchMove, { passive: true });
    el.addEventListener("touchend", touchEnd, { passive: true });
    el.addEventListener("mousedown", mouseDown);

    return () => {
      el.removeEventListener("touchstart", touchStart);
      el.removeEventListener("touchmove", touchMove);
      el.removeEventListener("touchend", touchEnd);
      el.removeEventListener("mousedown", mouseDown);
    };
  }, [index, items, ITEM_W, GAP, TRANS_MS]);

  // ensure track has proper inline width & initial translate
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.style.width = stageWidth ? `${stageWidth}px` : "0px";
    el.style.transform = `translate3d(${-index * (ITEM_W + GAP)}px, 0, 0)`;
  }, [stageWidth, index, ITEM_W, GAP]);

  // RENDER
  return (
    <section
      className="py-20"
      style={{
        background: "linear-gradient(135deg, #eaf6ef 0%, #f0f9f4 100%)",
      }}
    >
      <div className="mx-auto px-6" style={{ maxWidth: "1240px" }}>
        <h2 className="text-center text-4xl md:text-5xl font-bold text-[#0b2b52] mb-12 relative">
          HEALTH BENEFITS
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#0b2b52] to-[#1e6b52] rounded-full mt-4"></div>
        </h2>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prev}
            aria-label="Previous"
            className="hidden lg:flex items-center justify-center absolute -left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white shadow-lg z-40 hover:scale-110 transition-transform duration-200 group"
            style={{
              border: "1px solid rgba(0,0,0,0.08)",
              boxShadow: "0 8px 25px rgba(11, 43, 82, 0.15)",
            }}
          >
            <span className="text-2xl text-[#0b2b52] group-hover:text-[#1e6b52] transition-colors">
              ‹
            </span>
          </button>

          <button
            onClick={next}
            aria-label="Next"
            className="hidden lg:flex items-center justify-center absolute -right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white shadow-lg z-40 hover:scale-110 transition-transform duration-200 group"
            style={{
              border: "1px solid rgba(0,0,0,0.08)",
              boxShadow: "0 8px 25px rgba(11, 43, 82, 0.15)",
            }}
          >
            <span className="text-2xl text-[#0b2b52] group-hover:text-[#1e6b52] transition-colors">
              ›
            </span>
          </button>

          <div className="overflow-hidden" style={{ padding: "30px 40px" }}>
            {/* TRACK */}
            <div
              ref={trackRef}
              className="owl-stage"
              style={{
                display: "flex",
                alignItems: "flex-start",
                width: stageWidth ? `${stageWidth}px` : "0px",
                transform: `translate3d(${-index * (ITEM_W + GAP)}px, 0, 0)`,
                transition: `all ${TRANS_MS}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
                height: `${ITEM_W + 120}px`,
              }}
            >
              {items.map((it, i) => (
                <div
                  key={`${i}-${it._cloneId || it.id}`}
                  className="owl-item group"
                  style={{
                    width: `${ITEM_W}px`,
                    marginRight: `${GAP}px`,
                    boxSizing: "border-box",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    className="item text-center transform transition-transform duration-300 group-hover:scale-105"
                    style={{ width: `${ITEM_W}px` }}
                  >
                    <div
                      style={{
                        width: `${ITEM_W - 20}px`, // Larger container
                        height: `${ITEM_W - 20}px`,
                        borderRadius: "50%",
                        margin: "0 auto",
                        background:
                          "linear-gradient(135deg, #ffffff 0%, #f8fdf9 100%)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow:
                          "0 20px 40px rgba(8, 52, 139, 0.12), 0 8px 20px rgba(11, 43, 82, 0.08)",
                        position: "relative",
                        border: "6px solid #ffffff",
                        overflow: "hidden",
                        transition: "all 0.3s ease",
                      }}
                      className="group-hover:shadow-2xl group-hover:border-[#1e6b52]"
                    >
                      {/* Subtle background pattern */}
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background:
                            "radial-gradient(circle at 30% 30%, rgba(30, 107, 82, 0.03) 0%, transparent 50%)",
                          borderRadius: "50%",
                        }}
                      />
                      <img
                        src={it.img}
                        alt={it.bold}
                        style={{
                          width: "95%", // Larger image
                          height: "95%",
                          objectFit: "contain",
                          filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.1))",
                          transition: "all 0.3s ease",
                        }}
                        className="group-hover:scale-110"
                        onError={(e) => {
                          e.currentTarget.src = "/images/placeholder.png";
                        }}
                      />
                    </div>

                    <div className="content mt-6 space-y-2">
                      <p
                        style={{
                          color: "#6b7280",
                          margin: 0,
                          fontSize: "15px",
                          fontWeight: 500,
                          letterSpacing: "0.5px",
                        }}
                      >
                        {it.small}
                      </p>
                      <p
                        style={{
                          fontWeight: 700,
                          color: "#0b2b52",
                          margin: 0,
                          fontSize: "18px",
                          lineHeight: "1.4",
                          background:
                            "linear-gradient(135deg, #0b2b52 0%, #1e6b52 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                        className="group-hover:scale-105 transition-transform duration-300"
                      >
                        {it.bold}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-8 space-x-3">
          {baseItems.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                const tailLen = Math.max(visible, MIN_CLONES);
                setIndex(i + tailLen);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                (index - Math.max(visible, MIN_CLONES)) % baseItems.length === i
                  ? "bg-[#1e6b52] w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Helper text */}
        <div className="mt-8 text-center text-sm text-gray-500 font-medium">
          Swipe to explore more health benefits
        </div>
      </div>
    </section>
  );
}
