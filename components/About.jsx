import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProfileCard from "./ProfileCard";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 100%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    });

    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
      tl.kill();
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-white dark:bg-gray-800"
      aria-labelledby="about-heading"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <h2
            id="about-heading"
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            About Me
          </h2>
          <div
            className="h-1 w-24 bg-blue-500 mx-auto"
            aria-hidden="true"
          ></div>
          <p className="text-xl mt-4 text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Software Development Engineer specializing in Full Stack Web
            Development
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Image Section */}
          {/* <motion.div 
            className="lg:w-2/5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full max-w-md mx-auto lg:mx-0">
              <div className="aspect-[4/5] bg-linear-to-tr from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-600 rounded-lg overflow-hidden shadow-xl">
               
                <div className="w-full h-full flex items-center justify-center bg-gray-200 dark:bg-gray-700">
                  <span className="text-gray-500 dark:text-gray-400">Professional Image</span>
                </div>
                
                <Image
                  src="/images/pritam-kumar-yadav-professional.jpg"
                  alt="Pritam Kumar Yadav - Professional Software Engineer portrait in Bengaluru"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
               
              </div>
              <div className="absolute -bottom-6 sm:-right-6 -right-4 p-4 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
                <p className="font-medium text-blue-500">2.8+ Years Experience</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">In Software Engineering</p>
              </div>
            </div>
          </motion.div> */}

          <motion.div
            className="lg:w-2/5 flex items-start justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <ProfileCard
              name="Pritam K. Yadav"
              title="Full Stack Engineer"
              handle="pritam-git01"
              status="Online"
              contactText="Contact Me"
              avatarUrl="/images/profile.png"
              showUserInfo={true}
              enableTilt={true}
              className="w-full"
              enableMobileTilt={false}
              onContactClick={() => console.log("Contact clicked")}
            />
          </motion.div>

          {/* Content Section */}
          <div className="lg:w-3/5">
            <div ref={textRef} className="space-y-6">
              {/* Subheading with keywords */}
              <motion.h3
                className="sm:text-2xl text-xl font-bold text-gray-800 dark:text-gray-200"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8 }}
              >
                Experienced Full Stack Developer building scalable applications
                in Bengaluru's tech ecosystem
              </motion.h3>

              {/* Introduction paragraph with location and keywords */}
              <motion.div
                className="sm:text-base text-sm text-gray-600 dark:text-gray-400 space-y-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <p>
                  I'm <strong>Pritam Kumar Yadav</strong>, a passionate{" "}
                  <strong>Software Development Engineer (SDE)</strong> and
                  <strong> Full Stack Developer</strong> based in{" "}
                  <strong>Bengaluru, Karnataka, India</strong>. With a strong
                  foundation in computer science and{" "}
                  <strong>2.8+ years of professional experience</strong> in
                  software development, I specialize in creating efficient,
                  elegant solutions to complex technical challenges.
                </p>

                {/* <p>
                  My journey in software engineering began during my undergraduate studies, where I discovered my passion 
                  for coding and problem-solving. Since then, I've evolved into a versatile developer with expertise across 
                  the entire software development lifecycle.
                </p> */}

                {/* Location and Industry Context */}
                <p>
                  Based in <strong>Bengaluru</strong>, India's Silicon Valley
                  and one of the world's most dynamic tech hubs, I'm part of a
                  thriving ecosystem of innovation. I've worked with startups
                  and enterprises across
                  <strong> India</strong>, delivering high-quality{" "}
                  <strong>full-stack development</strong> solutions that drive
                  business growth and user satisfaction.
                </p>

                {/* Technical Expertise */}
                <p>
                  As a <strong>Full Stack Developer</strong>, my expertise spans
                  both <strong>frontend engineering</strong> with
                  <strong> React.js</strong>, <strong>Next.js</strong>, and{" "}
                  <strong>TypeScript</strong>, and
                  <strong> backend development</strong> with{" "}
                  <strong>Node.js</strong>, <strong>Express.js</strong>,
                  <strong> Python</strong>, and <strong>FASTApi</strong>. I
                  specialize in building
                  <strong> performant, scalable, and maintainable</strong> web
                  applications using modern technologies and best practices.
                </p>

                {/* Cloud and DevOps */}
                <p>
                  My technical skillset extends to{" "}
                  <strong>cloud architecture</strong> and{" "}
                  <strong>DevOps practices</strong>, with hands-on experience in{" "}
                  <strong>AWS</strong>, <strong>Docker</strong>,{" "}
                  <strong>Kubernetes</strong>, and{" "}
                  <strong>CI/CD pipelines</strong>. I'm proficient in database
                  design and management with
                  <strong> MongoDB</strong>, <strong>PostgreSQL</strong>,{" "}
                  <strong>MySQL</strong>, and <strong>Redis</strong>.
                </p>

                {/* Education and Certifications */}
                <p>
                  {/* I hold a <strong>Master's degree in Computer Science</strong> and have earned 
                  <strong> 10+ professional certifications</strong> in cloud computing, software architecture, and 
                  modern web development frameworks. */}
                  Throughout my career, I've been recognized for my
                  problem-solving abilities, attention to detail, and
                  collaborative approach to software engineering.
                </p>

                {/* Availability */}
                <p>
                  I'm currently{" "}
                  <strong>
                    available for full-time, contract, and freelance
                    opportunities
                  </strong>{" "}
                  in
                  <strong> Bengaluru</strong>, across <strong>India</strong>,
                  and globally for remote positions. I'm passionate about
                  working on challenging projects that push the boundaries of
                  what's possible with modern web technologies.
                </p>
              </motion.div>

              {/* Resume Download Button */}
              {/* <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <motion.a
                  href="/assets/resume/pritam_kumar_yadav_resume.pdf"
                  download="Pritam_Kumar_Yadav_Full_Stack_Developer_Resume.pdf"
                  className="relative inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-lg text-white bg-linear-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300"
                  whileHover={{
                    scale: 1.05,
                    boxShadow:
                      "0 10px 25px -5px rgba(59, 130, 246, 0.5), 0 8px 10px -6px rgba(59, 130, 246, 0.3)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  aria-label="Download Pritam Kumar Yadav's Resume PDF"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <span>Download Resume</span>
                </motion.a>
              </motion.div> */}
            </div>

            {/* Statistics Cards */}
            <div
              ref={statsRef}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10"
            >
              <motion.article
                className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-sm"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                aria-label="Years of experience"
              >
                <h4 className="text-xl md:text-3xl font-bold text-blue-500">
                  2.8+
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mt-1">
                  Years of Experience
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                  As Software Engineer
                </p>
              </motion.article>

              <motion.article
                className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-sm"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                aria-label="Projects completed"
              >
                <h4 className="text-xl md:text-3xl font-bold text-blue-500">
                  50+
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mt-1">
                  Projects Completed
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                  Full Stack Applications
                </p>
              </motion.article>

              <motion.article
                className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-sm"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                aria-label="Technical certifications"
              >
                <h4 className="text-xl md:text-3xl font-bold text-blue-500">
                  10+
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mt-1">
                  Certifications
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                  Cloud & Software Architecture
                </p>
              </motion.article>
            </div>

            {/* Hidden keywords for SEO */}
            <div className="sr-only">
              Pritam Kumar Yadav is an experienced Software Development Engineer
              (SDE) and Full Stack Developer based in Bengaluru, Karnataka,
              India. With 2.8+ years of professional experience in software
              engineering, specializing in React, Node.js, Python, TypeScript,
              MongoDB, PostgreSQL, AWS, Docker, and Kubernetes. Available for
              full-time, contract, and freelance software development
              opportunities in Bengaluru and across India. Expert in frontend
              engineering, backend development, cloud architecture, and DevOps
              practices.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
