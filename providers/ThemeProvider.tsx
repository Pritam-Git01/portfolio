"use client";

import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext<{ theme: string; toggleTheme: () => void } | undefined>(undefined);

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const isBrowser = typeof window !== "undefined";
  const storedTheme = isBrowser ? localStorage.getItem("theme") : null;
  const prefersDarkMode = isBrowser
    ? window.matchMedia("(prefers-color-scheme: dark)").matches
    : false;

  const [theme, setTheme] = useState(
    storedTheme || (prefersDarkMode ? "dark" : "light")
  );

  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === "light" ? "dark" : "light";
      if (isBrowser) localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  useEffect(() => {
    if (isBrowser) {
      const root = document.documentElement;
      root.classList.remove("light", "dark");
      root.classList.add(theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
