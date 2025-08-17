import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const About = () => {
  const projects = [
    {
      date: "AUG 2025 – PRESENT",
      title: "Visio Draft",
      desc: "Designing and developing a UI/UX design tool with modern features. Almost complete.",
    },
    {
      date: "JUN 2025 – AUG 2025",
      title: "Portfolio Website",
      desc: "Built my personal portfolio using React, Tailwind CSS, and Framer Motion to showcase my skills and projects.",
    },
    {
      date: "APR 2025 – JUN 2025",
      title: "E-Commerce Website",
      desc: "Developed a full-stack e-commerce application with product listing, cart, and authentication using React, Node.js, and MongoDB.",
    },
    {
      date: "MAR 2025 – PRESENT",
      title: "Insta Clone (WIP)",
      desc: "Currently building an Instagram-like platform with authentication, posting, and real-time chat (Firebase + React).",
    },
  ];

  return (
    <section className="relative border-b-[3px] min-h-screen w-full bg-[#F8F8FF] px-6 sm:px-12 lg:px-20 py-24 flex flex-wrap items-center">
      
      {/* Left Side - Image & Decorations */}
<div className="w-full lg:w-1/2 flex items-center justify-center relative fit mt-12">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="relative w-6/10"
                  >
                  <motion.div
                    initial={{ rotate: 0, scale: 0.8 }}
                    animate={{ rotate: 360, scale: 1 }}
                    whileHover={{ rotate: 720 , scale: 0.99 }}
                    transition={{
                      repeat: Infinity,
                      duration: 10,
                      ease: "linear",
                      scale: { duration: 0.5 },
                    }}
                    className="rounded-full h-30 w-30  bg-gradient-to-br from-[#E3F2FF] to-[#D6E6FF] absolute top-0 right-2 flex items-center justify-center shadow-lg border-[3px] border-black  max-[775px]:hidden"
                  >
                    {/* Enhanced Circular Text */}
                    <svg viewBox="0 0 100 100" className="w-[85%] h-[85%]">
                      <path
                        id="circlePath"
                        d="M 50,50 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                        fill="none"
                      />
                      <text className="text-[0.45em] font-bold uppercase">
                        <textPath
                          href="#circlePath"
                          startOffset="50%"
                          textAnchor="middle"
                          letterSpacing="0.15em"
                        >
                          {Array.from("✦ Aspiring Full-Stack Developer").map(
                            (char, i) => (
                              <tspan
                                key={i}
                                dx={i ? "0.35em" : "0"}
                                className={char === "✦" ? "fill-[#7575C8]" : ""}
                              >
                                {char}
                              </tspan>
                            )
                          )}
                        </textPath>
                      </text>
                    </svg>
        
                    {/* Animated Center Icon */}
                    <motion.div
                      className="absolute w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md"
                      animate={{
                        rotate: [0, -360],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        rotate: {
                          repeat: Infinity,
                          duration: 15,
                          ease: "linear",
                        },
                        scale: {
                          repeat: Infinity,
                          repeatType: "reverse",
                          duration: 2,
                        },
                      }}
                    >
                      <motion.img
                        src={assets.arrow}
                        alt="Available for work"
                        className="w-5 h-5"
                        animate={{
                          rotate: [0, 360],
                        }}
                        transition={{
                          rotate: {
                            repeat: Infinity,
                            duration: 8,
                            ease: "linear",
                          },
                        }}
                      />
                    </motion.div>
        
                    {/* Subtle Glow Effect */}
                    <div className="absolute inset-0 rounded-full border-2 border-white/10 pointer-events-none" />
                  </motion.div>
                  {/* Main Hero Image */}
                  <img
                    src={assets.aboutImage}
                    alt="Abhishek Kumar"
                    className="w-full -z-50 max-w-md xl:max-w-lg rounded-full border-[3px] border-black shadow-2xl"
                    whileHover={{ scale: 1.02 }}
                  />
                  <motion.img
                    src={assets.wave}
                    alt=""
                    className="absolute bottom-16 left-2 h-20 lg:h-20 z-10"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  />
        
                  {/* Floating Circles */}
                  <motion.div
                    className="absolute -bottom-8 -left-8 w-16 h-16 bg-[#7575C8] rounded-full opacity-20 blur-xl"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  />
                  <motion.div
                    className="absolute top-20 -right-4 w-12 h-12 bg-pink-300 rounded-full opacity-20 blur-lg"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{
                      repeat: Infinity,
                      duration: 5,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                  />
                </motion.div>
            </div>
      {/* Right Side - Content */}
      <div className="w-full lg:w-1/2 flex flex-col lg:pl-12">
        {/* Section Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center px-4 h-8 justify-center bg-[#E3F2FF] border-2 border-black rounded-full uppercase font-semibold mb-8 text-sm w-fit"
        >
          <motion.img
            src={assets.star}
            alt=""
            className="h-4 mr-2"
            animate={{ rotate: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
          About
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900 oswald"
        >
          More About Me
        </motion.h2>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-700 max-w-2xl mb-8 leading-relaxed"
        >
          I'm <span className="font-bold">Abhishek Kumar</span>, a passionate
          <span className="text-[#7575C8] font-semibold"> Full-Stack Developer in the making</span>.  
          I enjoy building modern, user-friendly, and visually appealing web applications.  
          Currently learning and building with React, Tailwind CSS, Node.js, and Django.  
          My goal is to grow as a developer and contribute to impactful projects.
        </motion.p>

        {/* Projects Timeline */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-2xl font-bold text-gray-800 mb-6"
        >
          🚀 Projects Timeline
        </motion.h3>

        <div className="space-y-6 relative border-l-2 border-gray-300 pl-6">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="relative"
            >
              {/* Dot */}
              <div className="absolute -left-[9px] top-2 w-4 h-4 bg-[#7575C8] rounded-full border-2 border-black shadow-md"></div>
              {/* Content */}
              <div className="bg-white border-2 border-black rounded-xl p-4 shadow-md hover:shadow-lg transition">
                <p className="text-sm font-semibold text-gray-500">{proj.date}</p>
                <h4 className="text-lg font-bold text-gray-800 mt-1">{proj.title}</h4>
                <p className="text-gray-700 mt-1">{proj.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
