import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Image from "./image1.png";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { FaDownload, FaArrowRight } from "react-icons/fa";

const researchTags = [
  "Graph Theory",
  "Vertex Coloring",
  "Combinatorial Optimization",
  "Machine Learning",
  "OBE Specialist",
];


const statItems = [
  { end: 18,   suffix: "+", label: "Years" },
  { end: 8,    suffix: "+", label: "Courses" },
  { end: 1000, suffix: "+", label: "Students" },
];

const Banner = () => {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center bg-white dark:bg-slate-950 overflow-hidden"
    >
      {/* Subtle dot-grid pattern */}
      <div
        className="absolute inset-0 opacity-40 dark:opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #bbf7d0 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Green top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-600 via-emerald-400 to-green-300" />

      {/* Left green accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-green-500 via-emerald-400 to-transparent opacity-60" />

      <div className="container mx-auto px-5 py-8 lg:py-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-20 w-full">

          {/* ── Photo column — order-1 on mobile (shows first), order-2 on desktop ── */}
          <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="order-1 lg:order-2 flex-shrink-0 flex flex-col items-center gap-10"
          >
            {/* Badge — mobile only */}
            <div className="lg:hidden inline-flex items-center gap-2 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-400 rounded-full px-3 py-1.5 text-[10px] font-secondary font-semibold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Open for Research Collaboration
            </div>

            {/* Photo */}
            <div className="relative">
              {/* Green glow — mobile only */}
              <div className="lg:hidden absolute inset-[-16px] rounded-full bg-green-400/20 blur-2xl" />
              <div className="absolute -inset-3 rounded-full border-2 border-green-200 dark:border-green-800 border-dashed" />
              <div className="absolute -inset-1.5 rounded-full border border-green-300 dark:border-green-700" />
              <img
                src={Image}
                alt="Fariha Ansari"
                className="relative h-[160px] sm:h-[190px] lg:h-[220px] rounded-full object-cover border-4 border-white dark:border-slate-900 shadow-xl lg:shadow-2xl"
                style={{ objectPosition: "center 18%" }}
              />
              {/* Dept. badge — desktop only */}
              <div className="hidden lg:block absolute -bottom-4 left-1/2 -translate-x-1/2 bg-green-600 text-white text-[10px] font-secondary font-bold uppercase tracking-widest rounded-full px-5 py-1.5 whitespace-nowrap shadow-lg">
                SSUET · Dept. of Mathematics
              </div>
            </div>

            {/* Stats row — desktop only (under photo) */}
            <div className="hidden lg:flex items-center gap-6 mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 w-full justify-center">
              {statItems.map((s, i) => (
                <div key={i} className="text-center">
                  <p className="font-primary text-[22px] font-bold text-green-600 dark:text-green-400 leading-none">
                    {inView ? <CountUp start={0} end={s.end} duration={3} separator="," /> : "0"}{s.suffix}
                  </p>
                  <p className="font-secondary text-[10px] text-slate-400 dark:text-slate-500 mt-0.5 uppercase tracking-wide">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Text column — order-2 on mobile (shows second), order-1 on desktop ── */}
          <div className="flex-1 order-2 lg:order-1 text-center lg:text-left w-full">

            {/* Badge — desktop only */}
            <motion.div
              variants={fadeIn("down", 0.05)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="hidden lg:flex justify-center mb-6"
            >
              <span className="inline-flex items-center gap-2 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-400 rounded-full px-4 py-1.5 text-[11px] font-secondary font-semibold uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                Open for Research Collaboration · SSUET Karachi
              </span>
            </motion.div>

            {/* Name */}
            <div className="lg:flex lg:items-baseline lg:gap-4 lg:justify-center mb-1 lg:mb-3">
              <motion.h1
                variants={fadeIn("up", 0.12)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="font-primary text-[48px] sm:text-[60px] lg:text-[70px] font-bold text-slate-900 dark:text-white leading-[1.05] mb-0"
              >
                Fariha
              </motion.h1>
              <motion.h1
                variants={fadeIn("up", 0.16)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="font-primary text-[48px] sm:text-[60px] lg:text-[70px] font-bold leading-[1.05]"
              >
                <span className="text-green-600 dark:text-green-400">Ansari</span>
              </motion.h1>
            </div>

            {/* Title + institution — mobile */}
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden" whileInView="show" viewport={{ once: true }}
              className="lg:hidden mb-2"
            >
              <div className="flex items-center gap-2 justify-center mb-1">
                <p className="font-secondary text-[13px] font-semibold text-slate-600 dark:text-slate-300">Lecturer of Mathematics</p>
                <span className="text-green-300 dark:text-green-700">·</span>
                <p className="font-secondary text-[13px] font-medium text-slate-500 dark:text-slate-400">PhD Researcher</p>
              </div>
              <p className="font-secondary text-[11px] text-slate-400 dark:text-slate-500">
                Sir Syed University of Engineering &amp; Technology, Karachi
              </p>
            </motion.div>

            {/* Title + institution — desktop (redesigned) */}
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden" whileInView="show" viewport={{ once: true }}
              className="hidden lg:block mb-6"
            >
              {/* Role badges */}
              <div className="flex items-center gap-3 mb-3 flex-wrap justify-center">
                <span className="inline-flex items-center gap-2 bg-slate-900 dark:bg-slate-700 text-white text-[11px] font-secondary font-bold uppercase tracking-wider rounded-lg px-4 py-2 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
                  Lecturer of Mathematics
                </span>
                <span className="inline-flex items-center gap-2 border-2 border-green-500 dark:border-green-600 text-green-700 dark:text-green-400 text-[11px] font-secondary font-bold uppercase tracking-wider rounded-lg px-4 py-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse flex-shrink-0" />
                  PhD Researcher · In Progress
                </span>
              </div>

              {/* Institution row */}
              <div className="flex items-center gap-3 justify-center">
                <span className="font-secondary text-[10px] font-bold text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-full px-3 py-1 uppercase tracking-widest flex-shrink-0">
                  SSUET
                </span>
                <span className="font-secondary text-[13px] text-slate-500 dark:text-slate-400">
                  Sir Syed University of Engineering &amp; Technology, Karachi
                </span>
              </div>
            </motion.div>

            {/* Stats row — mobile only */}
            <motion.div
              variants={fadeIn("up", 0.24)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="lg:hidden flex border border-green-100 dark:border-green-900/50 rounded-xl overflow-hidden mb-3 mx-auto max-w-[280px]"
            >
              {statItems.map((s, i) => (
                <div
                  key={i}
                  className={`flex-1 text-center py-3 ${i < 2 ? "border-r border-green-100 dark:border-green-900/50" : ""}`}
                >
                  <p className="font-primary text-[19px] font-bold text-green-600 dark:text-green-400 leading-none">
                    {inView ? <CountUp start={0} end={s.end} duration={3} separator="," /> : "0"}{s.suffix}
                  </p>
                  <p className="font-secondary text-[9px] text-slate-400 dark:text-slate-500 mt-0.5 uppercase tracking-wide">{s.label}</p>
                </div>
              ))}
            </motion.div>

            {/* Bio */}
            <motion.p
              variants={fadeIn("up", 0.26)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="font-secondary text-[14px] lg:text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed mb-3 lg:mb-5 max-w-[540px] mx-auto text-center"
            >
              With nearly{" "}
              <strong className="text-slate-800 dark:text-white font-semibold">18 years</strong>{" "}
              of undergraduate teaching at SSUET, I bring rigorous mathematical expertise combined
              with modern pedagogy, Outcome-Based Education, and digital learning coordination.
              My doctoral research bridges Graph Theory and Machine Learning.
            </motion.p>

            {/* Research tags — auto-marquee on mobile, flex-wrap on desktop */}
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mb-3 lg:mb-6"
            >
              {/* Mobile: continuous auto-scroll marquee */}
              <div className="lg:hidden overflow-hidden">
                <div className="marquee-track flex gap-2 w-max">
                  {[...researchTags, ...researchTags].map((tag, i) => (
                    <span
                      key={i}
                      className="flex-shrink-0 font-secondary text-[11px] font-medium text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              {/* Desktop: regular wrap */}
              <div className="hidden lg:flex flex-wrap gap-2 justify-center">
                {researchTags.map((tag) => (
                  <span
                    key={tag}
                    className="flex-shrink-0 font-secondary text-[11px] font-medium text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-full px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* CTAs — stacked on mobile, side-by-side on sm+ */}
            <motion.div
              variants={fadeIn("up", 0.35)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto justify-center"
            >
              <button className="group flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-secondary font-semibold text-[14px] px-6 py-3 rounded-lg transition-colors duration-200 w-full sm:w-auto">
                <Link smooth={true} spy={true} offset={-80} to="contact" className="cursor-pointer flex items-center gap-2">
                  Get in Touch{" "}
                  <FaArrowRight className="text-[11px] group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </button>
              <a
                href="/Fariha_Ansari_CV.pdf"
                download="Fariha_Ansari_CV.pdf"
                className="flex items-center justify-center gap-2 font-secondary font-semibold text-[14px] text-green-700 dark:text-green-400 border border-green-300 dark:border-green-700 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-lg px-5 py-3 transition-all duration-200 w-full sm:w-auto"
              >
                <FaDownload className="text-[12px]" /> Download CV
              </a>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;
