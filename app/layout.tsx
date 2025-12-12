import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { StructuredData } from "@/components/SEO/StructuredData";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

// Primary metadata - optimized for SEO
export const metadata: Metadata = {
  metadataBase: new URL('https://pritamkumaryadav.com'), // Update with your actual domain
  
  title: {
    default: "Pritam Kumar Yadav | Full Stack Developer in Bengaluru, India | Software Engineer",
    template: "%s | Pritam Kumar Yadav - Full Stack Developer"
  },
  
  description: "Pritam Kumar Yadav - Experienced Full Stack Developer & Software Engineer in Bengaluru, India. Specializing in React, Node.js, Python, TypeScript, MongoDB, AWS. 2.8+ years building scalable web applications. Available for hire.",
  
  keywords: [
    "Pritam Kumar Yadav",
    "Full Stack Developer Bengaluru",
    "Software Engineer India",
    "Frontend Engineer Bengaluru",
    "Backend Engineer India",
    "React Developer Bengaluru",
    "Node.js Developer India",
    "TypeScript Developer",
    "JavaScript Developer Bengaluru",
    "Python Developer India",
    "MERN Stack Developer",
    "SDE Bengaluru",
    "SWE India",
    "Software Development Engineer",
    "Web Developer Bengaluru",
    "Full Stack Web Developer India",
    "Senior Software Engineer",
    "Cloud Engineer Bengaluru",
    "DevOps Engineer India",
    "Microservices Developer",
    "API Developer Bengaluru"
  ],
  
  authors: [
    { 
      name: "Pritam Kumar Yadav",
      url: "https://pritamkumaryadav.com"
    }
  ],
  
  creator: "Pritam Kumar Yadav",
  publisher: "Pritam Kumar Yadav",
  
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  
  // Open Graph metadata for social sharing
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://pritamkumaryadav.com',
    siteName: 'Pritam Kumar Yadav Portfolio',
    title: 'Pritam Kumar Yadav | Full Stack Developer in Bengaluru, India',
    description: 'Experienced Full Stack Developer & Software Engineer in Bengaluru. Specializing in React, Node.js, Python. 2.8+ years of experience building scalable applications.',
    images: [
      {
        url: '/images/og-image.jpg', // Add this image (1200x630px)
        width: 1200,
        height: 630,
        alt: 'Pritam Kumar Yadav - Full Stack Developer',
      }
    ],
  },
  
  // Twitter Card metadata
  twitter: {
    card: 'summary_large_image',
    title: 'Pritam Kumar Yadav | Full Stack Developer Bengaluru',
    description: 'Experienced Full Stack Developer & Software Engineer in Bengaluru, India. React, Node.js, Python, TypeScript.',
    creator: '@pritamyadav', // Update with your actual Twitter handle
    images: ['/images/twitter-card.jpg'], // Add this image (1200x600px)
  },
  
  // Verification tags
  verification: {
    google: 'your-google-verification-code', // Add after setting up Search Console
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  
  // Robots
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Icons
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  
  // Manifest for PWA
  manifest: '/manifest.json',
  
  // Alternate languages (if you add multi-language support)
  alternates: {
    canonical: 'https://pritamkumaryadav.com',
    languages: {
      'en-IN': 'https://pritamkumaryadav.com',
      'en-US': 'https://pritamkumaryadav.com',
    },
  },
  
  // Other metadata
  category: 'Technology',
  classification: 'Software Development',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        
        {/* Geo Tags for location-based SEO */}
        <meta name="geo.region" content="IN-KA" />
        <meta name="geo.placename" content="Bengaluru" />
        <meta name="geo.position" content="12.9716;77.5946" />
        <meta name="ICBM" content="12.9716, 77.5946" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="author" content="Pritam Kumar Yadav" />
        <meta name="copyright" content="Pritam Kumar Yadav" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        
        {/* Theme Color */}
        <meta name="theme-color" content="#3b82f6" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        
        {/* Structured Data - JSON-LD */}
        <StructuredData />
      </head>
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}