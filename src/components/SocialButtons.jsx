import { FaXTwitter, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { motion } from "framer-motion";

const SocialButtons = () => {
  return (
    <div className="flex space-x-6 items-center p-4 rounded-xl">

      {/* Twitter (X) */}
      {/* <motion.a
        href="https://x.com/AKCNMOTIVETION"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -4 }}
        whileTap={{ y: 0 }}
        className="p-4 rounded-[3px_15px_7px_11px] border-black border-[3px] 
        bg-white relative
        before:absolute before:content-[''] before:w-[calc(100%+8px)] before:h-[calc(100%+8px)] before:border-[3px] before:border-black before:rounded-[3px_15px_7px_11px] before:top-[-4px] before:left-[-4px] before:z-[-1] before:opacity-60
        hover:before:top-[-2px] hover:before:left-[-2px]
        after:absolute after:content-[''] after:w-full after:h-[6px] after:bg-[#E3E3FF] after:bottom-[-8px] after:left-0 after:rounded-full after:opacity-0 after:blur-[2px]
        hover:after:opacity-100 hover:after:animate-pulse
        shadow-[5px_5px_0px_0px_rgba(0,0,0,0.2)]"
      >
        <FaXTwitter size={22} className="text-black" />
        <span className="absolute -bottom-4 -right-3 text-xs font-comic font-bold">whoosh!</span>
      </motion.a> */}

      {/* GitHub */}
      <motion.a
        href="https://github.com/abhishek4524"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -4, rotate: 2 }}
        whileTap={{ y: 0, rotate: 0 }}
        className="p-4 rounded-[12px_4px_16px_8px] border-black border-[3px] 
        bg-white relative overflow-hidden
        before:absolute before:content-[''] before:w-full before:h-[3px] before:bg-black before:top-[4px] before:left-[-100%] before:transition-all before:duration-500
        hover:before:left-[110%]
        after:absolute after:content-[''] after:w-[120%] after:h-[120%] after:bg-gray-200 after:rounded-[12px_4px_16px_8px] after:top-[-10%] after:left-[-10%] after:z-[-1] after:opacity-0 after:blur-[8px]
        hover:after:opacity-40 hover:after:animate-fadeIn
        shadow-[3px_3px_0px_1px_rgba(0,0,0,0.2)]"
      >
        <FaGithub size={22} className="text-black" />
        <div className="absolute -bottom-3 -left-2 w-4 h-4 bg-gray-400 rounded-full opacity-70"></div>
      </motion.a>

      {/* Instagram */}
      <motion.a
        href="https://www.instagram.com/a_7ck_/"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -4, scale: 1.05 }}
        whileTap={{ y: 0, scale: 1 }}
        className="p-4 rounded-[8px_12px_4px_16px] border-black border-[3px] 
        bg-white relative
        before:absolute before:content-[''] before:w-[calc(100%+6px)] before:h-[calc(100%+6px)] before:border-[3px] before:border-black before:rounded-[8px_12px_4px_16px] before:top-[-3px] before:left-[-3px] before:z-[-1] before:opacity-50
        after:absolute after:content-[''] after:w-[15px] after:h-[15px] after:border-t-[3px] after:border-r-[3px] after:border-black after:top-[-8px] after:right-[-8px] after:opacity-0
        hover:before:top-[-1px] hover:before:left-[-1px] hover:after:opacity-100
        shadow-[0_0_0_3px_#f0f,0_0_0_6px_#0ff] hover:shadow-[0_0_10px_3px_#f0f,0_0_20px_6px_#0ff]
        transition-shadow duration-300"
      >
        <FaInstagram size={22} className="text-black group-hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500" />
        <span className="absolute -top-3 -right-3 text-xs font-bold bg-black text-white px-1 rounded">✨</span>
      </motion.a>

      {/* LinkedIn */}
      <motion.a
        href="https://www.linkedin.com/in/abhishek-kumar-502b40324/"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -4, rotate: -2 }}
        whileTap={{ y: 0, rotate: 0 }}
        className="p-4 rounded-[10px_14px_6px_12px] border-black border-[3px] 
        bg-white relative
        before:absolute before:content-[''] before:w-[calc(100%+6px)] before:h-[calc(100%+6px)] before:border-[3px] before:border-black before:rounded-[10px_14px_6px_12px] before:top-[-3px] before:left-[-3px] before:z-[-1] before:opacity-50
        hover:before:top-[-1px] hover:before:left-[-1px]
        shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]
        transition-all duration-300"
      >
        <FaLinkedin size={22} className="text-[#0077B5]" />
        <span className="absolute -bottom-3 -left-2 text-xs font-bold text-blue-600">in</span>
      </motion.a>

    </div>
  );
};

export default SocialButtons;
