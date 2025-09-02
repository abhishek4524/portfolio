import React from 'react';
import { FaInstagram, FaShoppingCart, FaSearch, FaTasks, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Instagram Clone",
      description: "A full-stack Instagram clone with photo sharing, likes, comments, and real-time updates.",
      icon: <FaInstagram className="text-xl" />,
      bgColor: "bg-[#E3F2FF]",
      borderColor: "border-[#1D1D1D]",
      github: "https://github.com/yourname/instagram-clone",
      live: "https://instagram-clone-demo.com",
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description: "Complete online store with product catalog, cart, checkout, and admin dashboard.",
      icon: <FaShoppingCart className="text-xl" />,
      bgColor: "bg-[#F3FFE3]",
      borderColor: "border-[#1D1D1D]",
      github: "https://github.com/abhishek4524/Buynest",
      live: "https://buynest-frontend.vercel.app/",
    },
    {
      id: 3,
      title: "Visio Draft",
      description: "Simplifying projects, notes, and ideas for college students.",
      icon: <FaSearch className="text-xl" />,
      bgColor: "bg-[#FDE4F9]",
      borderColor: "border-[#1D1D1D]",
      github: "https://github.com/abhishek4524/VisioDraft",
      live: "https://visio-draft.vercel.app/",
    },
    {
      id: 4,
      title: "Project Management Tool",
      description: "Trello-like application for team collaboration and task management.",
      icon: <FaTasks className="text-xl" />,
      bgColor: "bg-[#E3E3FF]",
      borderColor: "border-[#1D1D1D]",
      github: "",
      live: "",
    }
  ];

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-b-[3px]">
      <div className="max-w-7xl mx-auto relative">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center h-8 px-6 justify-center bg-[#E3F2FF] border-2 border-[#1D1D1D] rounded-full uppercase font-bold text-xs tracking-wider mb-4"
          >
            <motion.img
              src={assets.star}
              alt=""
              className="h-4 mr-2"
              animate={{ rotate: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />
            My Projects
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#1D1D1D] leading-tight">
            The projects I've built showcase my full-stack capabilities.
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col p-6 rounded-xl border-2 ${project.borderColor} ${project.bgColor} hover:-translate-y-1 transition-transform duration-300`}
            >
              <div className="flex items-center mb-4">
                <div className={`flex items-center justify-center w-14 h-14 border-2 ${project.borderColor} bg-white rounded-full mr-4`}>
                  {project.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1D1D1D]">{project.title}</h3>
              </div>
              <p className="text-[#1D1D1D] leading-relaxed mb-4">{project.description}</p>

              {/* Links Section */}
              <div className="flex gap-4 mt-auto">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-[#1D1D1D] hover:text-[#7575C8] transition-colors"
                  >
                    <FaGithub /> Code
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-[#1D1D1D] hover:text-[#7575C8] transition-colors"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
