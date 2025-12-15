import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { FaReact, FaPython, FaDocker, FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';
import ScheduleCall from './modal/ScheduleCall';

const Hero = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(textRef.current, {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: 'power3.out'
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center pt-16 pb-16 overflow-hidden bg-gray-50 dark:bg-gray-900"
      aria-label="Hero section introducing Pritam Kumar Yadav"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          <motion.div
            ref={textRef}
            className="lg:w-1/2 flex flex-col gap-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Subtitle with location and role */}
            <div className="sm:flex hidden items-center">
              <div className="h-1 w-12 bg-blue-500 mr-4" aria-hidden="true"></div>
              <p className="text-blue-500 sm:text-base text-sm font-medium uppercase tracking-wide">
                Full Stack Developer • Software Engineer • Bengaluru, India
              </p>
            </div>

            {/* Main Heading - H1 with primary keywords */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="block mb-2">Hi, I'm</span>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-purple-600">
                Pritam Kumar Yadav
              </span>
            </h1>

            {/* Role description with keywords */}
            <h2 className="text-xl sm:text-2xl text-gradient md:text-3xl font-semibold text-gray-800 dark:text-gray-200">
              Full Stack Developer & Software Engineer
            </h2>

            {/* Description with semantic keywords */}
            <p className="sm:text-lg text-base text-gray-600 dark:text-gray-400 max-w-lg">
              Building elegant solutions to complex problems with clean, efficient code.
              Specializing in <strong>full-stack development</strong>, <strong>cloud architecture</strong>,
              and <strong>scalable web applications</strong> using <strong>React</strong>, <strong>Node.js</strong>,
              <strong>Python</strong>, and <strong>TypeScript</strong>.
            </p>

            {/* Location and availability */}
            <div className="flex items-center sm:gap-4 sm:justify-start justify-between text-xs sm:text-base text-gray-600 dark:text-gray-400">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>Bengaluru, India</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" aria-hidden="true"></span>
                <span>Available for opportunities</span>
              </span>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex gap-4 mt-4">
              <motion.a
                href="#projects"
                className="bg-linear-to-r from-blue-500 to-purple-600 text-white font-medium px-6 py-3 rounded-md hover:shadow-lg transition-all text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="View portfolio projects"
              >
                View My Work
              </motion.a>
              <motion.button
                onClick={() => setIsDialogOpen(true)}
                className="border-2 border-blue-500 text-blue-500 font-medium px-6 py-3 rounded-md hover:bg-blue-500 hover:text-white transition-all text-sm sm:text-base cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="let's have a talk"
              >
               Let's meet
              </motion.button>
            </div>

            {/* Tech Stack Badges */}
            <div className="mt-6 flex items-center">
              <div className="flex -space-x-3" role="list" aria-label="Primary technologies">
                {[
                  {
                    name: 'React',
                    color: 'text-[#61DAFB]',
                    bg: 'group-hover:bg-[#61DAFB]/10 group-hover:border-[#61DAFB]/50 group-hover:shadow-[0_0_20px_rgba(97,218,251,0.3)]',
                    Icon: FaReact
                  },
                  {
                    name: 'Next.js',
                    color: 'text-black dark:text-white',
                    bg: 'group-hover:bg-black/10 dark:group-hover:bg-white/10 group-hover:border-black/50 dark:group-hover:border-white/50 group-hover:shadow-[0_0_20px_rgba(0,0,0,0.3)] dark:group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]',
                    Icon: SiNextdotjs
                  },
                  {
                    name: 'Python',
                    color: 'text-[#3776AB]',
                    bg: 'group-hover:bg-[#3776AB]/10 group-hover:border-[#3776AB]/50 group-hover:shadow-[0_0_20px_rgba(55,118,171,0.3)]',
                    Icon: FaPython
                  },
                  {
                    name: 'Docker',
                    color: 'text-[#2496ED]',
                    bg: 'group-hover:bg-[#2496ED]/10 group-hover:border-[#2496ED]/50 group-hover:shadow-[0_0_20px_rgba(36,150,237,0.3)]',
                    Icon: FaDocker
                  },
                  {
                    name: 'Node.js',
                    color: 'text-[#68A063]',
                    bg: 'group-hover:bg-[#68A063]/10 group-hover:border-[#68A063]/50 group-hover:shadow-[0_0_20px_rgba(104,160,99,0.3)]',
                    Icon: FaNodeJs
                  }
                ].map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    className="group relative w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white dark:border-gray-800 bg-gray-50 dark:bg-gray-700 flex items-center justify-center transition-all duration-300 hover:z-10 cursor-pointer overflow-hidden"
                    whileHover={{ scale: 1.15, y: -5 }}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <div className={`absolute inset-0 transition-all duration-300 opacity-0 group-hover:opacity-100 ${tech.bg}`} />
                    <tech.Icon
                      className={`w-5 h-5 sm:w-6 sm:h-6 transition-colors duration-300 ${tech.color} z-10 relative`}
                    />
                  </motion.div>
                ))}
              </div>
              <p className="ml-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                2.8+ years experience with modern technologies
              </p>
            </div>

            {/* Keywords for SEO (hidden but readable by screen readers) */}
            <div className="sr-only">
              Software Development Engineer (SDE), Full Stack Web Developer,
              Frontend Engineer, Backend Engineer, React Developer, Node.js Developer,
              MERN Stack Developer, Python Developer, TypeScript Expert,
              Web Application Development, Scalable Systems Architecture,
              Cloud Computing, AWS, Docker, Kubernetes, MongoDB, PostgreSQL,
              Experienced Software Engineer with 2.8+ years in Bengaluru tech industry
            </div>
          </motion.div>

          {/* Profile Image Section */}
          <motion.div
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative lg:block hidden w-full max-w-md mx-auto lg:mx-0 lg:max-w-none aspect-square">
              <div className="absolute inset-0 bg-linear-to-tr from-blue-500 to-purple-600 rounded-full opacity-10 blur-3xl" aria-hidden="true"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full max-w-[80%] max-h-[80%] rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden border-8 border-white dark:border-gray-700 shadow-xl">
                  {/* Use Next.js Image component for optimization */}
                  {/* Replace with actual image once available */}
                  <div className="w-full h-full bg-linear-to-br from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 font-medium">Profile Photo</p>
                  </div>
                  {/* When you have an actual image, use: */}
                  {/* <Image
                    src="/images/pritam-kumar-yadav-profile.jpg"
                    alt="Pritam Kumar Yadav - Full Stack Developer and Software Engineer in Bengaluru"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  /> */}

                </div>
              </div>
            </div>

            {/* Availability Badge */}
            <div className="absolute lg:block hidden -bottom-6 -right-6 lg:bottom-12 lg:right-12">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" aria-hidden="true"></div>
                  <p className="font-medium text-sm sm:text-base">Open to Full-Time & Freelance</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional SEO content - Experience highlights */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-blue-500">2.8+</div>
            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-blue-500">50+</div>
            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-blue-500">20+</div>
            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">Technologies Mastered</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-blue-500">10+</div>
            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">Certifications</div>
          </div>
        </motion.div>
      </div>

      <ScheduleCall
        isOpen={isDialogOpen}
        setIsOpen={setIsDialogOpen}
        duration='30min'
      />
    </section>
  );
};

export default Hero;