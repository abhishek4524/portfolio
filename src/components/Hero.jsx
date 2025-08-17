import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";


const Hero = () => {
  return (
    <div className=" border-b-[3px] inconsolata min-h-screen w-full bg-[#E3E3FF] flex flex-wrap items-center overflow-hidden px-8 pt-16 lg:px-16">
      {/* Left Content */}
      <div className="w-full lg:w-1/2 flex items-center justify-center py-12 lg:py-0">
        <div className="w-full max-w-2xl pl-0 lg:pl-12 xl:pl-24">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center h-8 w-28 justify-center bg-[#E3F2FF] border-2 rounded-full uppercase font-semibold mb-8"
          >
            <motion.img
              src={assets.star}
              alt=""
              className="h-4 mr-1"
              animate={{ rotate: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />
            Hello!
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl oswald mb-4 leading-tight"
          >
            I'm Abhishek Kumar,
            <br />
            <span className="text-[#7575C8]">Full-Stack Developer</span>.
          </motion.h1>

          {/* Decorative SVG Line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-[#7575C8] to-transparent my-6 rounded-full"
          />

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-800 mb-8 leading-relaxed"
          >
            I craft <span className="font-bold">fast</span>,{" "}
            <span className="font-bold">beautiful</span>, and{" "}
            <span className="font-bold">user-friendly</span> digital experiences
            with clean code and modern design.
          </motion.p>

          {/* Button */}
          <HashLink smooth to="/#projects">
  <motion.button
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5, delay: 0.5 }}
    whileHover={{ y: -4, rotate: 2, scale: 1.02 }}
    whileTap={{ y: 0, rotate: 0, scale: 0.98 }}
    className="mt-2 px-8 py-4 rounded-[12px_4px_16px_8px] border-black border-[3px] 
    bg-white relative overflow-hidden group
    before:absolute before:content-[''] before:w-full before:h-[3px] before:bg-black before:top-[4px] before:left-[-100%] before:transition-all before:duration-500
    hover:before:left-[110%]
    after:absolute after:content-[''] after:w-[120%] after:h-[120%] after:bg-[#ffd6e7] after:rounded-[12px_4px_16px_8px] after:top-[-10%] after:left-[-10%] after:z-[-1] after:opacity-0 after:blur-[8px]
    hover:after:opacity-40 hover:after:animate-fadeIn
    shadow-[3px_3px_0px_1px_rgba(0,0,0,0.2)] hover:shadow-[5px_5px_0px_2px_rgba(0,0,0,0.2)] transition-all"
  >
    <span className="relative z-10 font-medium">See my work</span>
    <div className="absolute -bottom-3 -left-2 w-4 h-4 bg-pink-300 rounded-full opacity-70 group-hover:animate-ping"></div>
    <div className="absolute -top-2 -right-1 w-3 h-3 bg-blue-300 rounded-full opacity-70 group-hover:animate-pulse"></div>
  </motion.button>
</HashLink>

        </div>
      </div>

      {/* Right Image */}
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
            className="rounded-full h-36 w-36  bg-gradient-to-br from-[#E3F2FF] to-[#D6E6FF] absolute top-0 left-0 flex items-center justify-center shadow-lg border-[3px] border-black  max-[775px]:hidden"
          >
            {/* Enhanced Circular Text */}
            <svg viewBox="0 0 100 100" className="w-[85%] h-[85%]">
              <path
                id="circlePath"
                d="M 50,50 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                fill="none"
              />
              <text className="text-[0.45em] font-bold ">
                <textPath
                  href="#circlePath"
                  startOffset="50%"
                  textAnchor="middle"
                  letterSpacing="0.15em"
                >
                  {Array.from("✦ I AM AVAILABLE ✦ FOR FREELANCE").map(
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
            src={assets.heroImage}
            alt="Abhishek Kumar"
            className="w-full -z-50 max-w-md xl:max-w-lg rounded-[210px_210px_10px_10px] border-[3px] border-black shadow-2xl"
            whileHover={{ scale: 1.02 }}
          />

          {/* Decorative Elements */}
          <motion.img
            src={assets.image}
            alt=""
            className="absolute top-10 right-10 h-16 lg:h-20 z-10"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          />

          <motion.img
            src={assets.wave}
            alt=""
            className="absolute bottom-5 -right-12 h-20 lg:h-20 z-10"
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
    </div>
  );
};

export default Hero;
