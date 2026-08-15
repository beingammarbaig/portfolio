import React from "react";
import Image from "./image1.png";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="min-h-screen container-fluid d-flex flex-column justify-content-center align-items-center py-24 lg:py-16" id="home">
      <div className="container mx-auto">
        <div className="row align-items-center">
          <div className="col-md-7">
            <motion.div
              variants={fadeIn("down", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex w-fit mx-auto mx-md-0 items-center gap-2 bg-white/80 dark:bg-black/30 backdrop-blur-sm border border-slate-300 dark:border-0 rounded-full px-4 py-1.5 mb-3 text-[11px] lg:text-[13px] font-primary tracking-widest text-accent uppercase"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse inline-block"></span>
              PhD Researcher · SSUET Karachi
            </motion.div>

            <motion.h1
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[36px] font-bold font-primary lg:leading-[1.1] text-center lg:text-[44px] mb-lg-2 text-md-start text-slate-800 dark:text-white"
            >
              FARIHA <span className="text-gradient">ANSARI</span>
            </motion.h1>

            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[22px] mb-2.5 lg:text-[30px] mb-lg-4 font-secondary font-semibold text-center text-md-start"
            >
              <span className="text-slate-800 dark:text-white">I am a </span>
              <TypeAnimation
                sequence={[
                  "PhD Researcher",
                  2000,
                  "Math Lecturer",
                  2000,
                  "VLE Coordinator",
                  2000,
                  "OBE Specialist",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>

            <motion.div
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="d-flex justify-content-center justify-content-md-start d-md-none my-3"
            >
              <img className="rounded-circle max-w-[140px]" src={Image} alt="Fariha Ansari" />
            </motion.div>

            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[13px] lg:text-[16px] leading-[1.6] mt-2 mt-lg-3 mb-2 text-justify text-slate-600 dark:text-white/80"
            >
              Experienced Mathematics Lecturer with nearly 18 years at SSUET, currently pursuing a PhD focused on Graph Theory, Combinatorial Optimization, and Machine Learning. Committed to inspiring analytical thinking and mathematical excellence in engineering students.
            </motion.p>

            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="d-flex gap-3 justify-content-center justify-content-md-start mb-3 align-items-center"
            >
              <button className="btn btn-md text-[12px] lg:text-[15px] xl:text-[18px] px-5 py-2 xl:py-3">
                <Link activeClass="active" smooth={true} spy={true} offset={60} to="contact" className="cursor-pointer text-white">
                  Contact Me
                </Link>
              </button>
              <a
                href="https://www.ssuet.edu.pk/faculties/ms-fariha-ansari/"
                className="text-gradient btn-link text-center text-[12px] lg:text-[15px] xl:text-[18px] py-2.5 hover:opacity-80 transition-opacity"
                target="_blank"
                rel="noreferrer"
              >
                My Profile →
              </a>
            </motion.div>

          </div>

          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="col-md-5 d-none d-md-flex mx-auto my-5 justify-content-center"
          >
            <div className="relative float-anim">
              {/* Rotating gradient ring */}
              <div className="absolute inset-0 rounded-full" style={{
                background: "conic-gradient(from 0deg, var(--theme-color-1), var(--theme-color-2), #3bace2, #406aff, var(--theme-color-1))",
                animation: "spin 8s linear infinite",
                padding: "3px",
                borderRadius: "50%",
                filter: "blur(1px)",
              }}></div>
              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-accent/10 blur-3xl scale-125"></div>
              <img
                className="rounded-circle relative z-10 max-w-[260px] lg:max-w-[300px] border-accent/40"
                src={Image}
                alt="Fariha Ansari"
                style={{ filter: "drop-shadow(0 0 20px rgba(var(--theme-shadow-rgb),0.25))" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
