import React from "react";
import { motion } from "framer-motion";
import { skills } from "../assets/assets";

const Skill = () => {
  const skillCategories = [
    {
      title: "🎨 Frontend Fun",
      skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind", "Bootstrap"],
      color: "bg-pink-400",
      emoji: "🌈",
    },
    {
      title: "⚡ Backend Magic",
      skills: ["Node.js", "Express", "Django"],
      color: "bg-blue-400",
      emoji: "✨",
    },
    {
      title: "🗃️ Data Wrangler",
      skills: ["MongoDB"],
      color: "bg-green-400",
      emoji: "🔍",
    },
    {
      title: "🧰 Dev Tools",
      skills: ["Git", "GitHub", "Vercel"],
      color: "bg-yellow-400",
      emoji: "🛠️",
    },
    {
      title: "✏️ Design Play",
      skills: ["Figma"],
      color: "bg-purple-400",
      emoji: "🎯",
    },
  ];

  // Bouncy animation variants
  const bounceIn = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
        mass: 0.5,
      },
    },
  };

  const cardPop = {
    hover: {
      scale: 1.1,
      y: -10,
      rotate: [0, 5, -5, 0],
      boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.3)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15,
      },
    },
    tap: {
      scale: 0.95,
      rotate: [0, 10, -10, 0],
    },
  };

  const float = {
    hover: {
      y: [0, -10, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="py-24 px-6 sm:px-8 lg:px-12 max-w-6xl mx-auto overflow-hidden">
      {/* Cartoon-style background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-40 h-40 rounded-full bg-yellow-200 opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-blue-200 opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Title with cartoon bounce */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={bounceIn}
        className="text-center mb-16"
      >
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 
             text-transparent bg-clip-text 
             bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500
             tracking-tight"
          whileHover={{
            scale: 1.08,
            rotate: [-1, 1, 0],
            textShadow: "0 8px 20px rgba(236, 72, 153, 0.5)",
          }}
          transition={{ duration: 0.4 }}
        >
          ✦ My Super Skills ✦
        </motion.h2>

        <motion.p
          className="text-xl text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          The tools I use to create digital awesomeness!
        </motion.p>
      </motion.div>

      {/* Skill Categories */}
      <div className="space-y-16">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={bounceIn}
            transition={{ delay: index * 0.1 }}
          >
            {/* Category Header */}
            <motion.div
              className={`flex items-center p-4 rounded-2xl ${category.color} shadow-lg mb-6 w-fit`}
              whileHover={{
                scale: 1.03,
                rotate: [0, 2, -2, 0],
              }}
            >
              <span className="text-3xl mr-3">{category.emoji}</span>
              <h3 className="text-2xl font-bold text-white drop-shadow-md">
                {category.title}
              </h3>
            </motion.div>

            {/* Skill Cards */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: index * 0.1,
                  },
                },
              }}
            >
              {category.skills.map((skill) => {
                const skillKey = skill.replace(/[\s./]/g, "").toLowerCase();

                return (
                  <motion.div
                    key={skill}
                    variants={bounceIn}
                    whileHover="hover"
                    whileTap="tap"
                    initial="hidden"
                    animate="visible"
                    className={`flex flex-col items-center p-5 rounded-xl bg-white shadow-md border-4 border-white hover:border-${
                      category.color.split("-")[1]
                    }-300 relative overflow-hidden`}
                  >
                    {/* Floating emoji background */}
                    <motion.span
                      className="absolute text-8xl opacity-5 -z-10"
                      variants={float}
                    >
                      {category.emoji}
                    </motion.span>

                    {/* Skill icon with bounce */}
                    <motion.div
                      className="h-16 w-16 mb-4"
                      whileHover={{
                        scale: 1.2,
                        rotate: 360,
                        transition: { type: "spring", bounce: 0.5 },
                      }}
                    >
                      <img
                        src={skills[skillKey]}
                        alt={skill}
                        className="h-full w-full object-contain drop-shadow-md"
                      />
                    </motion.div>

                    {/* Skill name with comic style */}
                    <span className="text-sm font-bold text-center text-gray-800 bg-white px-2 py-1 rounded-full border-2 border-gray-200">
                      {skill}
                    </span>

                    {/* Cartoon shine effect */}
                    <motion.div
                      className="absolute top-0 left-0 w-full h-full bg-white opacity-0"
                      whileHover={{
                        opacity: 0.3,
                        x: "-100%",
                        transition: { duration: 0.8 },
                      }}
                    />
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Fun floating elements */}
      <motion.div
        className="fixed bottom-10 right-10 text-6xl"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        🚀
      </motion.div>
    </section>
  );
};

export default Skill;
