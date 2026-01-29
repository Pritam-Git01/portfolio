"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import {ThemeProvider} from '@/providers/ThemeProvider';

function App() {
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   // Simulate loading time
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2000);
    
  //   return () => clearTimeout(timer);
  // }, []);

  const loadingVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.5 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.5 }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.5, delay: 0.2 }
    }
  };

  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div 
            key="loader"
            variants={loadingVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-600 mb-4">
                Pritam Kumar Yadav
              </div>
              <div className="w-24 h-1 bg-linear-to-r from-blue-400 to-purple-600 mx-auto rounded-full animate-pulse"></div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
          >
            <Header />
            <main>
              <Hero />
              <About />
              <Projects />
              <Skills />
              <Blog />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;