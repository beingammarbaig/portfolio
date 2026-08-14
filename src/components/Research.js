import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, scaleIn } from "../variants";
import { FaFlask } from "react-icons/fa";

const researchAreas = [
  { label: "Graph Theory & Vertex Coloring", desc: "Chromatic properties of graphs applied to combinatorial scheduling constraints" },
  { label: "Combinatorial Optimization", desc: "Mathematical structures for scheduling and resource-allocation problems" },
  { label: "Scheduling & Resource Allocation", desc: "Algorithmic approaches to optimal scheduling in constrained environments" },
  { label: "Machine Learning in Mathematics", desc: "ML-assisted approaches to improve mathematical optimization processes" },
  { label: "Computational Mathematics", desc: "Numerical and algorithmic methods for solving complex mathematical problems" },
  { label: "Mathematical Modeling", desc: "Graph-theoretic modeling and algorithmic problem-solving frameworks" },
];

const phases = [
  { label: "Doctoral Coursework Completed", status: "done",     detail: "CGPA 3.70 / 4.00" },
  { label: "Research Proposal Approved",    status: "done",     detail: "Topic successfully presented & approved" },
  { label: "Research in Progress",          status: "active",   detail: "Actively ongoing" },
  { label: "Manuscript in Preparation",     status: "active",   detail: "In progress" },
  { label: "Thesis Defense",               status: "upcoming", detail: "Upcoming" },
];

const Research = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center py-10 lg:py-16" id="research">
      <div className="container mx-auto">

        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="h2 leading-tight text-accent mb-6 text-center"
        >
          PhD Research
        </motion.h2>

        {/* Overview card */}
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="bg-black/30 border border-white/10 rounded-2xl p-5 lg:p-7 mb-8 relative overflow-hidden shadow-sm"
        >
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#ff56f6] via-[#b936ee] to-[#406aff]"></div>

          <div className="flex flex-col lg:flex-row lg:items-start gap-6">
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="text-[10px] font-primary text-white tracking-widest uppercase bg-white/10 border border-white/20 rounded-full px-3 py-0.5">
                  In Progress · 2022–Present
                </span>
                <span className="text-[10px] font-primary text-[#b936ee] tracking-widest uppercase bg-[#b936ee]/10 border border-[#b936ee]/20 rounded-full px-3 py-0.5 animate-pulse">
                  Manuscript in Preparation
                </span>
              </div>

              <h3 className="text-[18px] lg:text-[24px] font-primary font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 leading-snug mb-3 tracking-wide">
                Optimizing Scheduling Problems using Vertex Coloring and Machine Learning
              </h3>

              <p className="text-[12px] lg:text-[14px] text-white/80 leading-relaxed mb-5 text-justify">
                This doctoral research integrates graph-theoretic modeling of scheduling problems with machine
                learning approaches to optimization and decision-making. Vertex coloring provides the
                mathematical foundation for encoding scheduling constraints, while machine learning enhances
                the optimization and resource-allocation process — bridging combinatorial mathematics and
                computational intelligence.
              </p>

              <div className="flex items-start gap-2 text-[11px] text-gray-400">
                <FaFlask className="text-accent text-[12px] mt-0.5 flex-shrink-0" />
                <span>
                  Supervised by{" "}
                  <span className="text-white/80 font-semibold">Dr. Muhammad Naseem</span>
                  {" "}— Associate Professor & Chairperson, Dept. of Software Engineering, SSUET
                </span>
              </div>
            </div>

            {/* Progress tracker */}
            <div className="lg:w-[230px] flex-shrink-0 bg-black/40 backdrop-blur-md rounded-xl p-4 border border-white/10 shadow-[0_0_15px_rgba(255,86,246,0.05)]">
              <p className="text-[10px] font-primary text-white/60 uppercase tracking-widest mb-4">Research Progress</p>
              <div className="space-y-3">
                {phases.map((phase, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className={`mt-0.5 w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-[9px] font-bold ${
                      phase.status === "done"     ? "bg-accent/15 text-accent border border-accent/40" :
                      phase.status === "active"   ? "bg-[#b936ee]/15 text-[#b936ee] border border-[#b936ee]/40 animate-pulse" :
                                                    "bg-white/10 text-white/40 border border-white/20"
                    }`}>
                      {phase.status === "done" ? "✓" : phase.status === "active" ? "●" : "○"}
                    </div>
                    <div>
                      <p className={`text-[11px] font-primary leading-snug ${
                        phase.status === "done"   ? "text-white/80" :
                        phase.status === "active" ? "text-white font-semibold" :
                                                    "text-white/40"
                      }`}>{phase.label}</p>
                      <p className="text-[9px] text-white/50 leading-tight mt-0.5">{phase.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Research focus areas */}
        <motion.div
          variants={staggerContainer(0.08, 0.15)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {researchAreas.map((area, i) => (
            <motion.div
              key={i}
              variants={scaleIn(0.07 * i)}
              className="group relative bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-xl p-3 lg:p-4 hover:-translate-y-1.5 hover:bg-white/[0.06] hover:shadow-[0_8px_30px_rgba(255,86,246,0.1)] transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#ff56f6] to-[#b936ee] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ff56f6]/10 to-[#b936ee]/10 flex items-center justify-center flex-shrink-0 group-hover:from-[#ff56f6]/20 group-hover:to-[#b936ee]/20 transition-all duration-500 border border-white/5">
                  <span className="text-[#ff56f6] text-[16px] drop-shadow-[0_0_5px_rgba(255,86,246,0.5)]">◈</span>
                </div>
                <div>
                  <h4 className="text-[13px] lg:text-[14px] font-primary font-bold text-white/90 mb-1.5 leading-snug group-hover:text-white transition-colors duration-300">{area.label}</h4>
                  <p className="text-[11px] lg:text-[12px] text-white/50 leading-relaxed group-hover:text-white/70 transition-colors duration-300">{area.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Research;
