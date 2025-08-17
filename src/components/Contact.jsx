import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-[#E3E3FF] py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t-[3px]">
      {/* Floating elements */}
      <motion.div 
        className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full opacity-30"
        animate={{
          y: [0, -20, 0],
          x: [0, 20, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-20 right-10 w-40 h-40 bg-white rounded-full opacity-30"
        animate={{
          y: [0, 30, 0],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="text-center mb-12"
        >
          <motion.div
            className="inline-block mb-6 p-3 bg-white rounded-2xl border-4 border-black shadow-[8px_8px_0_rgba(0,0,0,0.1)]"
            whileHover={{ rotate: 2, y: -5 }}
          >
            <span className="text-4xl">📨</span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl font-extrabold mb-4 text-black"
            whileHover={{ scale: 1.02 }}
          >
            Let's Chat!
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Have a project in mind? Send me a message!
          </motion.p>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          className="bg-white p-8 rounded-3xl border-4 border-black shadow-[12px_12px_0_rgba(0,0,0,0.1)]"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Field */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <label className="block mb-2 font-bold text-gray-800">
                  <span className="flex items-center">
                    <span className="mr-2">👋</span> Your Name
                  </span>
                </label>
                <motion.div whileHover={{ scale: 1.02 }}>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:ring-4 focus:ring-[#E3E3FF] focus:border-black outline-none transition-all"
                    placeholder="John Doe"
                  />
                </motion.div>
              </motion.div>

              {/* Email Field */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <label className="block mb-2 font-bold text-gray-800">
                  <span className="flex items-center">
                    <span className="mr-2">✉️</span> Email Address
                  </span>
                </label>
                <motion.div whileHover={{ scale: 1.02 }}>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:ring-4 focus:ring-[#E3E3FF] focus:border-black outline-none transition-all"
                    placeholder="you@example.com"
                  />
                </motion.div>
              </motion.div>
            </div>

            {/* Message Field */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <label className="block mb-2 font-bold text-gray-800">
                <span className="flex items-center">
                  <span className="mr-2">💬</span> Your Message
                </span>
              </label>
              <motion.div whileHover={{ scale: 1.02 }}>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:ring-4 focus:ring-[#E3E3FF] focus:border-black outline-none transition-all"
                  placeholder="Tell me about your project..."
                ></textarea>
              </motion.div>
            </motion.div>

            {/* Submit Button */}
            <motion.div 
              className="pt-4"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <motion.button
                type="submit"
                className="w-full py-4 px-6 bg-black text-white font-bold rounded-xl border-2 border-black shadow-[6px_6px_0_rgba(0,0,0,0.1)] hover:shadow-[8px_8px_0_rgba(0,0,0,0.1)] transition-all relative overflow-hidden group"
                whileHover={{ rotate: [0, 5, -5, 0] }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center justify-center">
                  <span className="mr-2 text-xl">🚀</span>
                  Send Message
                </span>
              </motion.button>
            </motion.div>
          </form>
        </motion.div>

        {/* Decorative element */}
        <motion.div 
          className="absolute -bottom-20 -right-20 text-8xl opacity-10 text-gray-400"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          💌
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;