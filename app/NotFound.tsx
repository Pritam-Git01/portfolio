"use client";

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import gsap from 'gsap';

export default function NotFound() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(10);
  const numberRef = useRef(null);
  const glitchRef = useRef(null);

  useEffect(() => {
    // Animate the 404 number with GSAP
    if (numberRef.current) {
      gsap.fromTo(
        numberRef.current,
        { 
          opacity: 0, 
          scale: 0.5,
          rotationY: -180,
        },
        {
          opacity: 1,
          scale: 1,
          rotationY: 0,
          duration: 1.5,
          ease: 'elastic.out(1, 0.5)',
        }
      );
    }

    // Glitch effect animation
    if (glitchRef.current) {
      const glitchTimeline = gsap.timeline({ repeat: -1, repeatDelay: 3 });
      
      glitchTimeline
        .to(glitchRef.current, {
          x: -5,
          duration: 0.05,
        })
        .to(glitchRef.current, {
          x: 5,
          duration: 0.05,
        })
        .to(glitchRef.current, {
          x: -5,
          duration: 0.05,
        })
        .to(glitchRef.current, {
          x: 0,
          duration: 0.05,
        });
    }

    // Auto redirect countdown
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          router.push('/');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [router]);

  // Floating animation variants
//   const floatingVariants = {
//     animate: {
//       y: [0, -20, 0],
//       transition: {
//         duration: 3,
//         repeat: Infinity,
//         ease: 'easeInOut' // Use a valid easing keyword (no quotes if using imported, but works with this string for framer-motion)
//       }
//     }
//   };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  } as const;

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  } as const;

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 flex items-center justify-center px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-400 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-72 h-72 bg-purple-400 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-20"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-72 h-72 bg-pink-400 dark:bg-pink-600 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <motion.div
        className="text-center relative z-10 max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main 404 Number */}
        <motion.div
          ref={numberRef}
          className="relative mb-8"
        //   variants={floatingVariants}
          animate="animate"
        >
          <h1 
            ref={glitchRef}
            className="text-[200px] md:text-[300px] font-bold leading-none text-transparent bg-clip-text bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 select-none"
            style={{
              textShadow: '0 0 80px rgba(96, 165, 250, 0.5)',
            }}
          >
            404
          </h1>
          
          {/* Decorative elements around 404 */}
          <motion.div
            className="absolute -top-10 -left-10 text-6xl"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <span className="opacity-20 dark:opacity-10">⚡</span>
          </motion.div>
          <motion.div
            className="absolute -top-5 -right-10 text-6xl"
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <span className="opacity-20 dark:opacity-10">🔍</span>
          </motion.div>
          <motion.div
            className="absolute -bottom-10 left-1/4 text-6xl"
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <span className="opacity-20 dark:opacity-10">💫</span>
          </motion.div>
        </motion.div>

        {/* Error Message */}
        <motion.div variants={itemVariants} className="mb-8">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            The page you're looking for seems to have vanished into the digital void. 
            It might have been moved, deleted, or never existed in the first place.
          </p>
        </motion.div>

        {/* Suggestions */}
        <motion.div variants={itemVariants} className="mb-10">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Here are some helpful links instead:
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { href: '/', label: 'Home', icon: '🏠' },
              { href: '/#about', label: 'About', icon: '👨‍💻' },
              { href: '/#projects', label: 'Projects', icon: '💼' },
              { href: '/#contact', label: 'Contact', icon: '📧' },
            ].map((link, index) => (
              <motion.div
                key={link.href}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="block p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-blue-500 dark:hover:border-blue-400"
                >
                  <div className="text-3xl mb-2">{link.icon}</div>
                  <div className="font-semibold text-gray-800 dark:text-gray-100">
                    {link.label}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Back Button with Countdown */}
        <motion.div variants={itemVariants} className="space-y-4">
          <Link href="/">
            <motion.button
              className="relative inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-linear-to-r from-blue-500 to-purple-600 rounded-full shadow-lg hover:shadow-xl transition-all overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="absolute inset-0 bg-linear-to-r from-purple-600 to-pink-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Take Me Home
              </span>
            </motion.button>
          </Link>

          {/* Auto-redirect countdown */}
          <motion.p
            className="text-sm text-gray-500 dark:text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Automatically redirecting to home in{' '}
            <motion.span
              key={countdown}
              className="inline-block font-bold text-blue-500 dark:text-blue-400 tabular-nums"
              initial={{ scale: 1.5, color: '#ef4444' }}
              animate={{ scale: 1, color: '#3b82f6' }}
              transition={{ duration: 0.3 }}
            >
              {countdown}
            </motion.span>
            {' '}seconds...
          </motion.p>
        </motion.div>

        {/* Fun fact */}
        <motion.div
          variants={itemVariants}
          className="mt-12 p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-200 dark:border-gray-700 max-w-2xl mx-auto"
        >
          <p className="text-sm text-gray-600 dark:text-gray-400 italic">
            💡 <strong>Fun Fact:</strong> The 404 error code comes from room 404 at CERN, 
            where the World Wide Web was invented. The room housed the central database, 
            and "404" meant the file was not found in that room!
          </p>
        </motion.div>

        {/* Developer Easter Egg */}
        <motion.div
          className="mt-8 text-xs text-gray-400 dark:text-gray-600 font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <p>Error Code: 404 | Status: NOT_FOUND</p>
          <p>Built with ❤️ by Pritam Kumar Yadav</p>
        </motion.div>
      </motion.div>
    </div>
  );
}