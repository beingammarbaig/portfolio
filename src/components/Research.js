import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const researchAreas = [
  { label: "Graph Theory & Vertex Coloring", desc: "Chromatic properties of graphs applied to combinatorial scheduling constraints" },
  { label: "Combinatorial Optimization", desc: "Mathematical structures for scheduling and resource-allocation problems" },
  { label: "Scheduling & Resource Allocation", desc: "Algorithmic approaches to optimal scheduling in constrained environments" },
  { label: "Machine Learning in Mathematics", desc: "ML-assisted approaches to improve mathematical optimization processes" },
  { label: "Computational Mathematics", desc: "Numerical and algorithmic methods for solving complex mathematical problems" },
  { label: "Mathematical Modeling", desc: "Graph-theoretic modeling and algorithmic problem-solving frameworks" },
];

const phases = [
  { label: "Doctoral Coursework", status: "done", detail: "CGPA 3.70 / 4.00" },
  { label: "Proposal Approved", status: "done", detail: "Successfully presented & approved" },
  { label: "Research In Progress", status: "active", detail: "Actively ongoing" },
  { label: "Manuscript in Preparation", status: "active", detail: "In progress" },
  { label: "Thesis Defense", status: "upcoming", detail: "Upcoming" },
];

const keywords = ["Graph Coloring", "Scheduling", "Vertex Coloring", "NP-Hard Problems", "Heuristics", "ML Optimization", "Combinatorics", "Algorithm Design"];

const Research = () => {
  const [progressRef, progressInView] = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section id="research" className="relative py-14 lg:py-28 bg-white dark:bg-slate-950 overflow-hidden">
      {/* Section number */}
      <div className="absolute top-4 right-6 font-primary font-bold text-[60px] sm:text-[90px] lg:text-[130px] leading-none text-slate-100 dark:text-slate-800/60 select-none pointer-events-none">
        03
      </div>

      <div className="container mx-auto px-4 relative z-10">

        <motion.div variants={fadeIn("up", 0.05)} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-10">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-secondary font-bold text-green-600 dark:text-green-400 uppercase tracking-widest mb-3">
            <span className="w-5 h-px bg-green-500" /> Doctoral Research
          </span>
          <h2 className="font-primary text-[30px] lg:text-[40px] font-bold text-slate-900 dark:text-white leading-tight">
            PhD Research
          </h2>
        </motion.div>

        {/* Research quote */}
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden" whileInView="show" viewport={{ once: true }}
          className="relative p-5 lg:p-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl mb-8"
        >
          <div className="absolute left-0 top-4 bottom-4 w-1 bg-gradient-to-b from-green-500 to-emerald-400 rounded-r-full" />
          <div className="flex items-start gap-3 pl-3">
            <FaQuoteLeft className="text-green-400 dark:text-green-600 text-[18px] flex-shrink-0 mt-1" />
            <p className="font-primary text-[14px] lg:text-[16px] text-green-800 dark:text-green-300 italic leading-relaxed">
              The essence of mathematics lies in its freedom — and scheduling problems, colored by graph theory, unlock a beautiful intersection of combinatorics and machine intelligence.
            </p>
            <FaQuoteRight className="text-green-400 dark:text-green-600 text-[18px] flex-shrink-0 self-end mb-1" />
          </div>
        </motion.div>

        {/* Main card + progress */}
        <motion.div
          variants={fadeIn("up", 0.15)}
          initial="hidden" whileInView="show" viewport={{ once: true }}
          className="flex flex-col lg:flex-row gap-6 mb-8"
        >
          {/* Overview card */}
          <div className="flex-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 lg:p-8 shadow-sm">
            <div className="h-1 w-16 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full mb-5" />

            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-[11px] font-secondary font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full px-3 py-1">
                2022 – Present
              </span>
              <span className="text-[11px] font-secondary font-semibold text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-full px-3 py-1">
                ● Manuscript in Preparation
              </span>
            </div>

            <h3 className="font-primary text-[18px] lg:text-[22px] font-bold text-slate-900 dark:text-white leading-snug mb-4">
              Optimizing Scheduling Problems using Vertex Coloring and Machine Learning
            </h3>

            <p className="font-secondary text-[14px] text-slate-600 dark:text-slate-300 leading-relaxed mb-5 text-justify">
              This doctoral research integrates graph-theoretic modeling with machine learning optimization. Vertex coloring provides the mathematical foundation for encoding scheduling constraints, while ML enhances resource allocation — bridging combinatorial mathematics and computational intelligence.
            </p>

            {/* Research keywords — marquee on mobile, wrap on desktop */}
            <div className="mb-5">
              <p className="font-secondary text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2">Keywords</p>
              {/* Mobile: auto-scroll marquee */}
              <div className="sm:hidden overflow-hidden">
                <div className="marquee-track flex gap-2 w-max">
                  {[...keywords, ...keywords].map((k, i) => (
                    <span key={i} className="flex-shrink-0 font-secondary text-[10px] font-medium text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-full px-2.5 py-0.5">
                      {k}
                    </span>
                  ))}
                </div>
              </div>
              {/* Desktop: flex-wrap */}
              <div className="hidden sm:flex flex-wrap gap-1.5">
                {keywords.map((k) => (
                  <span key={k} className="font-secondary text-[10px] font-medium text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-full px-2.5 py-0.5">
                    {k}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-start gap-2 pt-4 border-t border-slate-100 dark:border-slate-800">
              <span className="text-green-500 text-[14px] flex-shrink-0 mt-0.5">◈</span>
              <p className="font-secondary text-[12px] text-slate-500 dark:text-slate-400">
                Supervised by{" "}
                <span className="font-semibold text-slate-700 dark:text-slate-300">Dr. Muhammad Naseem</span>
                {" "}— Associate Professor & Chairperson, Dept. of Software Engineering, SSUET
              </p>
            </div>
          </div>

          {/* Progress tracker — animated */}
          <div ref={progressRef} className="lg:w-[240px] flex-shrink-0 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm">
            {/* Card header stripe */}
            <div className="h-1.5 bg-gradient-to-r from-green-500 to-emerald-400" />
            <div className="p-4">
              <p className="font-secondary text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-4">
                Research Progress
              </p>

              {/* Step tracker */}
              <div className="relative">
                {/* Background connector line */}
                <div className="absolute left-[11px] top-3 bottom-3 w-0.5 bg-slate-100 dark:bg-slate-700" />

                <div className="space-y-0">
                  {phases.map((phase, i) => {
                    const nameDelay  = 0.2 + i * 0.15;   // names: 0.20, 0.35, 0.50, 0.65, 0.80
                    const detailDelay = 1.1 + i * 0.4;   // details: 1.1, 1.5, 1.9, 2.3, 2.7
                    return (
                      <div key={i} className="relative flex items-start gap-3 pb-3 last:pb-0">
                        {/* Coloured connector — draws in with its step's detail */}
                        {i < phases.findIndex((p) => p.status === "upcoming") && i < phases.length - 1 && (
                          <motion.div
                            className="absolute left-[11px] top-6 h-4 w-0.5 bg-green-400 dark:bg-green-600 z-[5]"
                            style={{ originY: 0 }}
                            initial={{ opacity: 0, scaleY: 0 }}
                            animate={progressInView ? { opacity: 1, scaleY: 1 } : { opacity: 0, scaleY: 0 }}
                            transition={{ delay: detailDelay, duration: 0.3 }}
                          />
                        )}

                        {/* Step circle — pops in with detail */}
                        <motion.div
                          className={`relative z-10 flex-shrink-0 w-[23px] h-[23px] rounded-full flex items-center justify-center text-[9px] font-bold shadow-sm ${
                            phase.status === "done"
                              ? "bg-green-500 text-white"
                              : phase.status === "active"
                                ? "bg-white dark:bg-slate-800 border-2 border-green-500 text-green-600 dark:text-green-400"
                                : "bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-600 text-slate-400 dark:text-slate-500"
                          }`}
                          initial={{ opacity: 0, scale: 0.3 }}
                          animate={progressInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.3 }}
                          transition={{ delay: detailDelay, duration: 0.3, type: "spring", stiffness: 300, damping: 20 }}
                        >
                          {phase.status === "done" ? "✓" : phase.status === "active" ? "●" : i + 1}
                        </motion.div>

                        <div className="flex-1 pt-0.5">
                          {/* Name — slides in first (unlock effect) */}
                          <motion.p
                            className={`font-secondary text-[12px] font-semibold leading-snug ${
                              phase.status === "upcoming"
                                ? "text-slate-400 dark:text-slate-600"
                                : phase.status === "active"
                                  ? "text-slate-900 dark:text-white"
                                  : "text-slate-600 dark:text-slate-400"
                            }`}
                            initial={{ opacity: 0, x: -10 }}
                            animate={progressInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                            transition={{ delay: nameDelay, duration: 0.35, ease: "easeOut" }}
                          >
                            {phase.label}
                          </motion.p>
                          {/* Detail — fades in after circle */}
                          <motion.p
                            className={`font-secondary text-[10px] mt-0.5 ${
                              phase.status === "active"
                                ? "text-green-600 dark:text-green-400 font-medium"
                                : "text-slate-400 dark:text-slate-500"
                            }`}
                            initial={{ opacity: 0 }}
                            animate={progressInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ delay: detailDelay + 0.15, duration: 0.3 }}
                          >
                            {phase.detail}
                          </motion.p>
                        </div>

                        {phase.status === "active" && (
                          <motion.span
                            className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse mt-2"
                            initial={{ opacity: 0 }}
                            animate={progressInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ delay: detailDelay + 0.1, duration: 0.3 }}
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Overall progress bar — fills last */}
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-secondary text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                    Overall
                  </p>
                  <span className="font-primary text-[14px] font-bold text-green-600 dark:text-green-400">
                    {progressInView ? <CountUp start={0} end={65} duration={1.2} delay={3.1} /> : 0}%
                  </span>
                </div>
                <div className="h-3 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full relative"
                    style={{
                      width: progressInView ? "65%" : "0%",
                      transition: "width 1.2s cubic-bezier(0.4, 0, 0.2, 1) 3.1s",
                    }}
                  >
                    <div className="absolute inset-0 shimmer-bar rounded-full" />
                  </div>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <p className="font-secondary text-[9px] text-slate-400 dark:text-slate-500">2022</p>
                  <p className="font-secondary text-[9px] text-slate-400 dark:text-slate-500">Defense</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Research focus areas */}
        <h3 className="font-secondary text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
          <span className="w-4 h-px bg-slate-300 dark:bg-slate-600" /> Research Focus Areas
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {researchAreas.map((area, i) => (
            <motion.div
              key={i}
              variants={fadeIn("up", 0.05 * i)}
              initial="hidden" whileInView="show" viewport={{ once: true }}
              className="group relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden hover:shadow-md hover:border-green-300 dark:hover:border-green-700 transition-all duration-200"
            >
              {/* Left accent bar */}
              <div className="absolute left-0 inset-y-0 w-1 bg-gradient-to-b from-green-500 to-emerald-400 group-hover:from-emerald-400 group-hover:to-teal-400 transition-all duration-300" />
              <div className="p-4 pl-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h4 className="font-secondary text-[13px] font-bold text-slate-800 dark:text-white leading-snug group-hover:text-green-700 dark:group-hover:text-green-400 transition-colors duration-200">
                    {area.label}
                  </h4>
                  <span className="flex-shrink-0 font-primary text-[22px] font-bold text-slate-100 dark:text-slate-800 leading-none select-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="font-secondary text-[11.5px] text-slate-500 dark:text-slate-400 leading-relaxed">
                  {area.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
