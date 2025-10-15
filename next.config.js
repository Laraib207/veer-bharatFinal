// next.config.js
/** @type {import('next').NextConfig} */
/** next.config.js **/
/** Minimal config for static export */
const nextConfig = {
  // export static HTML to `out/`
  output: "export",

  // helps with next/image when exporting statically
  images: {
    // disable built-in image optimization for static export
    unoptimized: true,
  },

  // optional: produce directories (example.com/about/index.html) — useful on some static hosts
  trailingSlash: true,

  reactStrictMode: true,
};

module.exports = nextConfig;
