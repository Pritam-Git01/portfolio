import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { animateSkillBar } from '../utils/animations';

const SkillBar = ({ skill }) => {
  const controls = useAnimation();
  const barRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible');
        }
      },
      { threshold: 0.2 }
    );
    
    if (barRef.current) {
      observer.observe(barRef.current);
    }
    
    return () => {
      if (barRef.current) {
        observer.unobserve(barRef.current);
      }
    };
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  const nameVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, delay: 0.1, ease: 'easeOut' }
    }
  };
  
  const percentVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, delay: 0.1, ease: 'easeOut' }
    }
  };
  
  const barVariants = {
    hidden: { width: 0 },
    visible: { 
      width: `${skill.level}%`, 
      transition: { 
        duration: 1.2, 
        ease: "easeOut", 
        delay: 0.3
      }
    }
  };
  
  return (
    <motion.div 
      ref={barRef}
      className="mb-6 transform transition-all duration-300 hover:scale-[1.02]"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      whileHover={{ 
        y: -3, 
        transition: { duration: 0.2 }
      }}
    >
      <div className="flex justify-between mb-2">
        <motion.span 
          className="font-medium text-gray-700 dark:text-gray-300 flex items-center"
          variants={nameVariants}
        >
          {skill.name}
          {skill.isTop && (
            <span className="ml-2 px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs rounded-md">
              Top Skill
            </span>
          )}
        </motion.span>
        <motion.span 
          variants={percentVariants}
          className="text-gray-500 dark:text-gray-400 font-medium"
        >
          {skill.level}%
        </motion.span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5 overflow-hidden shadow-inner">
        <motion.div 
          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full relative"
          variants={barVariants}
        >
          <motion.div 
            className="absolute top-0 right-0 h-full w-3 bg-white/30"
            animate={{
              x: [30, -5, 30],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
      {skill.years && (
        <motion.div 
          className="mt-1 text-right text-xs text-gray-500 dark:text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          {skill.years} {skill.years === 1 ? 'year' : 'years'} of experience
        </motion.div>
      )}
    </motion.div>
  );
};

export default SkillBar;