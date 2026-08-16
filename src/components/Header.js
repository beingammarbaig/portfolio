import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/98 dark:bg-slate-950/98 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          <motion.div
            variants={fadeIn("right", 0.1)}
            initial="hidden"
            animate="show"
            className="flex items-center gap-3"
          >
            <div className="w-9 h-9 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0">
              <span className="text-white font-primary font-bold text-[13px]">FA</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-[14px] font-primary font-bold text-slate-800 dark:text-slate-100 leading-none">Fariha Ansari</p>
              <p className="text-[10px] font-secondary text-slate-500 dark:text-slate-400 leading-none mt-0.5">Lecturer of Mathematics · SSUET</p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.1)}
            initial="hidden"
            animate="show"
            className="flex items-center gap-3"
          >
            <a
              href="https://www.ssuet.edu.pk/faculties/ms-fariha-ansari/"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline text-[12px] font-secondary font-medium text-slate-500 dark:text-slate-400 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200"
            >
              Faculty Profile
            </a>
            <a
              href="/Fariha_Ansari_CV.pdf"
              download="Fariha_Ansari_CV.pdf"
              className="text-[12px] font-secondary font-medium text-slate-600 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200 border border-slate-300 dark:border-slate-600 hover:border-green-500 rounded px-3 py-1.5"
            >
              CV
            </a>
            <button className="bg-green-600 hover:bg-green-700 text-white text-[12px] font-secondary font-semibold rounded px-4 py-1.5 transition-colors duration-200">
              <Link smooth={true} spy={true} offset={-80} to="contact" className="cursor-pointer">
                Contact
              </Link>
            </button>
            <ThemeToggle />
          </motion.div>

        </div>
      </div>
    </header>
  );
};

export default Header;
