import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SkillBar from './SkillBar';
import { skills } from '../data/skills';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  
  const categories = [
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Database' },
    { id: 'devops', label: 'DevOps' },
    { id: 'tools', label: 'Tools' },
  ];

  const filteredSkills = skills.filter(skill => skill.category === activeCategory);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 100%",
      }
    });

    tl.from(heading.children, {
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 0.8,
      ease: 'power3.out'
    });

    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
      tl.kill();
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div ref={headingRef} className="mb-12 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            // viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            My Skills
          </motion.h2>
          <motion.div 
            className="h-1 w-24 bg-blue-500 mx-auto mb-8"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            // viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
          ></motion.div>
          
          <motion.p
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mb-10 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            I've acquired a diverse set of skills throughout my software development journey. 
            Below is a breakdown of my technical expertise across different domains.
          </motion.p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id 
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {filteredSkills.map((skill) => (
            <SkillBar key={skill.id} skill={skill} />
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl font-semibold mb-6">Other Skills & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['TypeScript', 'Docker', 'GraphQL', 'WebSockets', 'Gatsby', 'Firebase', 'Material UI', 'Jest', 'Cypress', 'Figma'].map((item, index) => (
              <motion.span 
                key={index}
                className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;