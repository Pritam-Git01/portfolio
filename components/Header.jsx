import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/providers/ThemeProvider";
import Link from "next/link";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Navigation items
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };



  const headerVariants = {
    hidden: { y: -100 },
    visible: {
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-gray-900/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div
          className="text-2xl font-bold tracking-tighter"
        >
          <Link
            href="/"
            className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-purple-600"
          >
            Pritam
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <motion.li
                key={item.name}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <nav
                  onClick={() =>
                    document
                      .querySelector(item.href)
                      .scrollIntoView({ behavior: "smooth" })
                  }
                  className="font-medium text-gray-700 cursor-pointer dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                  {item.name}
                </nav>
              </motion.li>
            ))}
          </ul>
          

          {/* Dark Mode Toggle */}
          <motion.button
            onClick={toggleTheme}
            className="w-8 h-8 cursor-pointer rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-blue-500 hover:text-white transition-all duration-300"
            whileHover={{ y: -3 }}
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? (
              <>
                <Sun size={18} strokeWidth={1.5} />
              </>
            ) : (
              <>
                <Moon size={18} strokeWidth={1.5} />
              </>
            )}
          </motion.button>
        </div>

        <div className="lg:hidden flex gap-x-6 items-center">
          <motion.button
            onClick={toggleTheme}
            className="w-8 h-8 cursor-pointer rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-blue-500 hover:text-white transition-all duration-300"
            whileHover={{ y: -3 }}
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? (
              <>
                <Sun size={18} strokeWidth={1.5} />
              </>
            ) : (
              <>
                <Moon size={18} strokeWidth={1.5} />
              </>
            )}
          </motion.button>
          <button
            onClick={toggleMenu}
            className="text-gray-700 dark:text-gray-300 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          variants={menuVariants}
          initial="closed"
          animate={isMenuOpen ? "open" : "closed"}
          className="lg:hidden bg-white dark:bg-gray-800 shadow-lg"
        >
          <div className="container mx-auto px-6 py-4">
            <ul className="space-y-4">
              {navItems.map((item) => (
                <motion.li key={item.name} variants={itemVariants}>
                  <a
                    href={item.href}
                    className="block font-medium text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
            <motion.div variants={itemVariants} className="mt-6">
              <SocialLinks className="flex space-x-4" />
            </motion.div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
