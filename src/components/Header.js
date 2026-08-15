import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { FaDownload } from "react-icons/fa";

const Header = () => {
  return (
    <div className="container" id="header">
      <div className="mt-2 d-flex justify-content-between align-items-center">
        <motion.div
          variants={fadeIn("down", 0.1)}
          initial="hidden"
          animate="show"
          className="d-flex align-items-center gap-3"
        >
          <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center text-accent font-primary font-bold text-[14px] lg:text-[16px] tracking-wider border-[1.5px]" style={{ backgroundColor: 'rgba(var(--theme-shadow-rgb), 0.15)', borderColor: 'rgba(var(--theme-shadow-rgb), 0.45)' }}>
            FA
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          animate="show"
          className="d-flex align-items-center gap-2"
        >
          <a
            href="/Fariha_Ansari_CV.pdf"
            download="Fariha_Ansari_CV.pdf"
            className="inline-flex items-center gap-2 text-[11px] lg:text-[13px] font-primary text-slate-600 dark:text-white/80 hover:text-accent border border-slate-300 dark:border-0 hover:border-accent/40 rounded-full px-3 py-1.5 transition-all duration-300 bg-white/80 dark:bg-black/30 backdrop-blur-sm"
          >
            <FaDownload className="text-[10px]" /> CV
          </a>
          <button className="mt-0 btn btn-sm text-xs lg:text-[15px] xl:text-[18px] lg:py-2 py-2 px-4 lg:px-5">
            <Link activeClass="active" smooth={true} spy={true} offset={60} to="contact" className="cursor-pointer text-white">
              Work with Me
            </Link>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
