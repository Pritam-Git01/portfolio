import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* React Compiler */
  reactCompiler: true,
  
  /* Performance Optimizations */
  compress: true, // Enable gzip compression
  
  /* Image Optimization */
  images: {
    formats: ['image/avif', 'image/webp'], // Modern image formats
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    // Add your image domains here
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pritamkumaryadav.com',
      },
      // Add other domains if you load images from external sources
    ],
  },
  
  /* Trailing Slash for consistent URLs */
  trailingSlash: false, // Set to true if you prefer URLs with trailing slashes
  
  /* Security and Performance Headers */
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          },
        ],
      },
      // Cache static assets aggressively
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*\\.(jpg|jpeg|png|gif|webp|avif|ico|svg)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  
  /* Redirects for SEO (add as needed) */
  async redirects() {
    return [
      // Example: Redirect old URLs to new ones
      // {
      //   source: '/old-portfolio',
      //   destination: '/',
      //   permanent: true,
      // },
    ];
  },
  
  /* Rewrites (if needed) */
  async rewrites() {
    return [];
  },
  
  /* Environment Variables */
  env: {
    SITE_URL: process.env.SITE_URL || 'https://pritamkumaryadav.vercel.app',
    SITE_NAME: 'Pritam Kumar Yadav Portfolio',
  },
  
  /* Production Source Maps (disable for better security) */
  productionBrowserSourceMaps: false,
  
  /* Strict Mode */
  reactStrictMode: true,
  
  /* Experimental Features */
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion', 'gsap'],
  },
  
  /* Turbopack Configuration (required for Next.js 16) */
  turbopack: {
    // Add turbopack-specific configuration here if needed
    // For now, an empty object is sufficient to silence the warning
  },
  
  /* TypeScript */
  typescript: {
    // Set to true only if you want to skip type checking during build
    ignoreBuildErrors: false,
  },
  
  /* PoweredByHeader */
  poweredByHeader: false, // Remove X-Powered-By header for security
  
  /* Generate ETags */
  generateEtags: true,
};

export default nextConfig;