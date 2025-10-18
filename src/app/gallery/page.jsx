// app/gallery/page.jsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const GALLERY_IMAGES = [
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/4.jpg",
  "/gallery/5.jpg",
  "/images/66.jpg",
  "/gallery/7.jpg",
  // placeholders (you can replace later)
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/4.jpg",
  "/images/5.jpg",
  "/images/6.jpg",
  "/images/7.jpg",
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/8.jpg",
  "/images/9.jpg",
  "/images/10.jpg",
  "/images/11.jpg",
  "/images/12.jpg",
  "/images/13.jpg",
  "/images/14.jpg",
  "/images/15.jpg",
];

export default function GalleryPage() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <main className="min-h-screen bg-[#0f1115] text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <header className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">Gallery</h1>
          <p className="mt-2 text-gray-300 max-w-2xl mx-auto">Our best moments and product displays — tap to open.</p>
        </header>

        {/* circular grid */}
        <section>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
            {GALLERY_IMAGES.map((src, i) => (
              <button
                key={i}
                onClick={() => setOpenIndex(i)}
                className="group relative w-full aspect-square rounded-full overflow-hidden flex items-center justify-center border-4 border-white/6 hover:scale-105 transition transform"
                aria-label={`Open gallery image ${i + 1}`}
              >
                <div className="w-full h-full relative">
                  <Image src={src} alt={`gallery-${i + 1}`} fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/18 group-hover:bg-black/30 transition" />
                </div>
              </button>
            ))}
          </div>
        </section>

        <footer className="mt-10 text-center text-gray-400">
          <p>Tip: Replace placeholders by putting images into <code>public/gallery/</code> (1.jpg..7.jpg).</p>
        </footer>
      </div>

      {/* Lightbox modal */}
      <AnimatePresence>
        {openIndex >= 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4">
            <div className="relative max-w-4xl w-full">
              <button onClick={() => setOpenIndex(-1)} className="absolute right-2 top-2 z-50 rounded-full bg-white/10 px-3 py-2 text-white hover:bg-white/20 transition">✕</button>

              <div className="rounded-xl overflow-hidden bg-black shadow-2xl">
                <div className="relative w-full aspect-[16/9] bg-black">
                  <Image src={GALLERY_IMAGES[openIndex]} alt={`full-${openIndex}`} fill className="object-contain" />
                </div>
                <div className="p-4 text-center">
                  <p className="text-sm text-gray-300">Image {openIndex + 1} of {GALLERY_IMAGES.length}</p>
                </div>

                <div className="flex items-center justify-between gap-4 p-4">
                  <button onClick={() => setOpenIndex((idx) => (idx - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length)} className="px-4 py-2 rounded bg-white/6 hover:bg-white/10 transition">Prev</button>

                  <a href={GALLERY_IMAGES[openIndex]} target="_blank" rel="noreferrer" className="px-4 py-2 rounded bg-amber-400 text-black font-semibold hover:brightness-95 transition">Open in new tab</a>

                  <button onClick={() => setOpenIndex((idx) => (idx + 1) % GALLERY_IMAGES.length)} className="px-4 py-2 rounded bg-white/6 hover:bg-white/10 transition">Next</button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
