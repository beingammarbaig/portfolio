import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Image from "./image.png";
import { motion } from "framer-motion";
import { fadeIn, scaleIn } from "../variants";
import { FaFlask } from "react-icons/fa";

const stats = [
  { end: 18, suffix: "+", label: "Years of\nExperience" },
  { end: 8, suffix: "+", label: "Courses\nTaught" },
  { end: 1000, suffix: "+", label: "Students\nTaught" },
];

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.3 });

  return (
    <section id="about" className="min-h-screen flex flex-col justify-center items-center py-16" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-16">

          {/* Image */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="m-auto flex-1 max-w-[220px] lg:max-w-[280px]"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/20 to-[#6366F1]/20 blur-2xl"></div>
              <img className="relative z-10 rounded-2xl mix-blend-multiply" src={Image} alt="Fariha Ansari" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 mb-2 text-accent">About Me</h2>
            <h3 className="text-[18px] leading-snug lg:text-[22px] mb-4 font-primary font-semibold text-slate-800 dark:text-white">
              Mathematics Lecturer & PhD Researcher with 18 Years of Experience
            </h3>
            <p className="mb-4 text-[13px] lg:text-[16px] text-justify text-slate-600 dark:text-white/80 leading-relaxed">
              I am a passionate mathematics lecturer at Sir Syed University of Engineering & Technology (SSUET), with extensive experience in undergraduate teaching, Outcome-Based Education (OBE), and academic quality assurance. Currently pursuing a PhD in Mathematics, my research integrates Graph Theory, Combinatorial Optimization, and Machine Learning.
            </p>

            {/* PhD Badge */}
            <motion.div
              variants={scaleIn(0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="flex items-start gap-3 bg-white/80 dark:bg-black/30 backdrop-blur-sm border border-accent/25 rounded-xl p-4 mb-6 shadow-sm"
            >
              <div className="text-accent text-2xl mt-0.5 flex-shrink-0">
                <FaFlask />
              </div>
              <div>
                <p className="font-primary text-[13px] text-accent font-semibold tracking-wide uppercase mb-0.5">
                  PhD in Mathematics · In Progress
                </p>
                <p className="text-[12px] lg:text-[14px] text-slate-600 dark:text-white/80 leading-snug">
                  Research: Optimizing Scheduling Problems using Vertex Coloring &amp; Machine Learning · CGPA 3.70/4.00 · SSUET
                </p>
              </div>
            </motion.div>

            {/* Teaching Philosophy */}
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="bg-white/80 dark:bg-black/30 border border-slate-200 dark:border-0 rounded-xl p-4 mb-6 relative overflow-hidden shadow-sm"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-accent to-[#6366F1]"></div>
              <p className="font-primary text-[11px] text-accent font-semibold tracking-widest uppercase mb-2 pl-3">Teaching Philosophy</p>
              <p className="text-[12px] lg:text-[13px] text-slate-600 dark:text-white/80 leading-relaxed pl-3 text-justify">
                My teaching centers on building genuine mathematical understanding rather than procedural competency alone. I emphasize critical thinking, analytical reasoning, and mathematical communication — guiding students from foundational principles to confident application in engineering contexts. Through concept-driven lectures, active engagement, and regular academic counselling, I aim to develop students who approach complex problems with clarity, precision, and intellectual curiosity.
              </p>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 lg:gap-5 mt-4">
              {stats.map(({ end, suffix, label }, i) => (
                <motion.div
                  key={i}
                  variants={scaleIn(0.3 + i * 0.1)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.3 }}
                  className="bg-white/80 dark:bg-white/[0.03] backdrop-blur-md border border-slate-200 dark:border-0 rounded-xl p-3 lg:p-5 flex flex-col items-center justify-center text-center hover:-translate-y-1 hover:bg-white/90 dark:hover:bg-white/[0.06] hover:shadow-[0_8px_30px_rgba(var(--theme-shadow-rgb),0.1)] transition-all duration-400"
                >
                  <div className="text-[24px] lg:text-[36px] font-tertiary text-gradient mb-2 leading-none">
                    {inView ? <CountUp start={0} end={end} duration={4} separator="," /> : "0"}
                    {suffix}
                  </div>
                  <div className="font-primary text-[9px] lg:text-[11px] leading-snug tracking-[1px] lg:tracking-[2px] text-slate-500 dark:text-white/70 whitespace-pre-line uppercase">
                    {label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
