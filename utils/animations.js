// src/utils/animations.js
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Common animation variants for Framer Motion
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.6 }
  }
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const fadeInDown = {
  hidden: { opacity: 0, y: -50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

export const hoverScale = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.05, 
    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: { duration: 0.3, ease: "easeOut" }
  },
  tap: { scale: 0.98 }
};

export const floatAnimation = {
  initial: { y: 0 },
  animate: { 
    y: [-8, 8, -8], 
    transition: { 
      repeat: Infinity, 
      repeatType: "loop", 
      duration: 4, 
      ease: "easeInOut" 
    } 
  }
};

export const bounceAnimation = {
  initial: { y: 0 },
  animate: { 
    y: [0, -15, 0], 
    transition: { 
      repeat: Infinity, 
      repeatType: "loop", 
      duration: 1.5, 
      ease: "easeInOut" 
    } 
  }
};

export const pulseAnimation = {
  initial: { scale: 1 },
  animate: { 
    scale: [1, 1.05, 1], 
    transition: { 
      repeat: Infinity, 
      repeatType: "loop", 
      duration: 2, 
      ease: "easeInOut" 
    } 
  }
};

// Enhanced card hover effect
export const cardHoverAnimation = {
  rest: { 
    scale: 1,
    boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    transition: { duration: 0.3, ease: "easeOut" }
  },
  hover: { 
    scale: 1.03,
    y: -10,
    boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
    transition: { duration: 0.3, ease: "easeOut" }
  }
};

// GSAP animation functions
export const scrollFadeIn = (element, delay = 0) => {
  return gsap.fromTo(
    element,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay,
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        markers: false
      }
    }
  );
};

export const scrollScale = (element, delay = 0) => {
  return gsap.fromTo(
    element,
    { opacity: 0, scale: 0.8 },
    {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      delay,
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        markers: false
      }
    }
  );
};

export const createStaggerAnimation = (elements, stagger = 0.1) => {
  return gsap.fromTo(
    elements,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      stagger,
      duration: 0.8,
      scrollTrigger: {
        trigger: elements[0],
        start: 'top 80%',
        markers: false
      }
    }
  );
};

// Create parallax effect
export const parallaxEffect = (element, strength = 0.2) => {
  return gsap.to(element, {
    y: () => strength * (ScrollTrigger.maxScroll(window) - ScrollTrigger.scrollTop()),
    ease: 'none',
    scrollTrigger: {
      start: 0,
      end: 'max',
      invalidateOnRefresh: true,
      scrub: true,
    }
  });
};

// Animate text character by character
export const animateText = (textElement) => {
  const text = textElement.textContent;
  const splitText = text.split('');
  
  textElement.textContent = '';
  
  splitText.forEach((char) => {
    const span = document.createElement('span');
    span.textContent = char;
    span.style.opacity = '0';
    span.style.display = 'inline-block';
    textElement.appendChild(span);
  });
  
  const chars = textElement.querySelectorAll('span');
  
  gsap.to(chars, {
    opacity: 1,
    stagger: 0.05,
    duration: 0.5,
    scrollTrigger: {
      trigger: textElement,
      start: 'top 80%',
    }
  });
};

// Reveal element from left
export const revealFromLeft = (element, delay = 0) => {
  gsap.set(element, { x: -100, opacity: 0 });
  return gsap.to(element, {
    x: 0,
    opacity: 1,
    duration: 1,
    delay,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
    }
  });
};

// Reveal element from right
export const revealFromRight = (element, delay = 0) => {
  gsap.set(element, { x: 100, opacity: 0 });
  return gsap.to(element, {
    x: 0,
    opacity: 1,
    duration: 1,
    delay,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
    }
  });
};

// Reveal element from bottom
export const revealFromBottom = (element, delay = 0) => {
  gsap.set(element, { y: 100, opacity: 0 });
  return gsap.to(element, {
    y: 0,
    opacity: 1,
    duration: 1,
    delay,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
    }
  });
};

// Create a skill bar animation
export const animateSkillBar = (element, level) => {
  gsap.set(element, { width: '0%' });
  return gsap.to(element, {
    width: `${level}%`,
    duration: 1.5,
    ease: 'power3.inOut',
    scrollTrigger: {
      trigger: element.parentNode,
      start: 'top 85%',
    }
  });
};