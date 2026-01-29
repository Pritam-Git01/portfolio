import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { cardHoverAnimation, pulseAnimation } from '../utils/animations';

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const controls = useAnimation();
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible');
        }
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [controls]);
  
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7,
        delay: index * 0.15,
        ease: "easeOut"
      } 
    }
  };
  
  const imageVariants = {
    rest: { scale: 1, filter: 'brightness(0.95)' },
    hover: { 
      scale: 1.05, 
      filter: 'brightness(1.05)',
      transition: { duration: 0.4, ease: "easeOut" } 
    }
  };
  
  const overlayVariants = {
    rest: { opacity: 0 },
    hover: { 
      opacity: 1,
      transition: { 
        duration: 0.3, 
        ease: "easeOut" 
      } 
    }
  };
  
  const buttonVariants = {
    rest: { scale: 1, y: 20, opacity: 0 },
    hover: { 
      scale: 1,
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.3,
        ease: "easeOut",
        delay: 0.1
      }
    },
    hoverActive: {
      scale: 1.1,
      transition: { 
        duration: 0.2
      }
    }
  };

  const techBadgeVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.6 + (i * 0.05),
        duration: 0.4
      }
    }),
    hover: { y: -5, scale: 1.05, transition: { duration: 0.2 } }
  };

  return (
    <motion.div
      ref={cardRef}
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
      variants={cardVariants}
      initial="hidden"
      animate={controls}
      viewport={{ once: true, margin: "-50px" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ 
        // y: -10, 
        scale: 1.05,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)", 
        transition: { duration: 0.4, ease: "easeOut" } 
      }}
    >
      <div className="h-48 bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
        <motion.div 
          className="w-full h-full"
          variants={imageVariants}
          initial="rest"
          animate={isHovered ? "hover" : "rest"}
        >
          {project.image ? (
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          ) : (
            <div 
              className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-600"
            >
              <p className="text-gray-500 dark:text-gray-400 font-medium">Project Screenshot</p>
            </div>
          )}
        </motion.div>

        <motion.div 
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/40 via-transparent to-black/70 flex items-end justify-center p-4"
          variants={overlayVariants}
          initial="rest"
          animate={isHovered ? "hover" : "rest"}
        >
          <div className="flex space-x-4">
            {project.liveUrl && (
              <motion.a 
                href={project.liveUrl} 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-colors flex items-center justify-center"
                aria-label="Live Demo"
                variants={buttonVariants}
                initial="rest"
                animate={isHovered ? "hover" : "rest"}
                whileHover="hoverActive"
                whileTap={{ scale: 0.95 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </motion.a>
            )}
            {project.githubUrl && (
              <motion.a 
                href={project.githubUrl} 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 text-white p-3 rounded-full shadow-lg transition-colors flex items-center justify-center"
                aria-label="GitHub Repository"
                variants={buttonVariants}
                initial="rest"
                animate={isHovered ? "hover" : "rest"}
                whileHover="hoverActive"
                whileTap={{ scale: 0.95 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </motion.a>
            )}
          </div>
        </motion.div>

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
            className="text-xs font-bold uppercase tracking-wide bg-blue-500 text-white px-2 py-1 rounded shadow-md"
          >
            {project.category}
          </motion.span>
        </div>
      </div>

      <div className="p-6">
        <motion.h3 
          className="text-xl font-bold mb-2 text-gray-800 dark:text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 + index * 0.1 }}
        >
          {project.title}
        </motion.h3>
        
        <motion.p 
          className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 + index * 0.1 }}
        >
          {project.description}
        </motion.p>
        
        <motion.div 
          className="flex flex-wrap gap-2 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 + index * 0.1 }}
        >
          {project.technologies.map((tech, techIndex) => (
            <motion.span 
              key={techIndex}
              custom={techIndex}
              variants={techBadgeVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full transition-all duration-200"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;