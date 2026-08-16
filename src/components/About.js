import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import WorkingPhoto from "../assets/what.png";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { FaGraduationCap, FaChalkboardTeacher, FaFlask } from "react-icons/fa";

const stats = [
  { end: 18,   suffix: "+", label: "Years\nExperience", icon: <FaChalkboardTeacher /> },
  { end: 8,    suffix: "+", label: "Courses\nTaught",   icon: <FaGraduationCap /> },
  { end: 1000, suffix: "+", label: "Students\nMentored",icon: <FaFlask /> },
];

const currentStatus = [
  { label: "PhD Candidate",              sub: "Mathematics · SSUET",       active: true  },
  { label: "Lecturer of Mathematics",    sub: "Active",                    active: true  },
  { label: "VLE Coordinator",            sub: "Departmental · Active",     active: true  },
  { label: "Manuscript in Preparation",  sub: "In Progress",               active: false },
];

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <section id="about" className="relative py-14 lg:py-28 bg-white dark:bg-slate-950 overflow-hidden" ref={ref}>
      {/* Section number watermark */}
      <div className="absolute top-4 right-6 font-primary font-bold text-[60px] sm:text-[90px] lg:text-[130px] leading-none text-slate-100 dark:text-slate-800/60 select-none pointer-events-none">
        01
      </div>

      <div className="container mx-auto px-4 relative z-10">

        {/* Label */}
        <motion.div variants={fadeIn("up", 0.05)} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-8 lg:mb-10">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-secondary font-bold text-green-600 dark:text-green-400 uppercase tracking-widest">
            <span className="w-5 h-px bg-green-500" /> About Me
          </span>
        </motion.div>

        {/* ── MOBILE IDENTITY CARD ─────────────────────────────── */}
        <motion.div variants={fadeIn("up", 0.1)} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="lg:hidden mb-6">

          {/* Main card */}
          <div className="bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-slate-800 dark:via-slate-800 dark:to-slate-800/80 border border-green-100 dark:border-slate-700 rounded-2xl overflow-hidden shadow-sm">
            {/* Gradient stripe */}
            <div className="h-1 bg-gradient-to-r from-green-500 to-emerald-400" />

            {/* Photo + identity row */}
            <div className="flex items-end gap-4 px-4 pt-5 pb-0">
              {/* Photo — let it bleed toward the bottom edge */}
              <div className="flex-shrink-0 relative">
                <div className="absolute inset-0 rounded-2xl bg-green-100 dark:bg-green-900/30 blur-md scale-110" />
                <img
                  src={WorkingPhoto}
                  alt="Fariha Ansari working"
                  className="relative w-[130px] drop-shadow-lg"
                />
              </div>

              {/* Name / title / status indicator */}
              <div className="flex-1 pb-4">
                <p className="font-primary text-[21px] font-bold text-slate-900 dark:text-white leading-tight">
                  Fariha Ansari
                </p>
                <p className="font-secondary text-[11px] font-semibold text-green-600 dark:text-green-400 uppercase tracking-wider mt-0.5 leading-snug">
                  Mathematics Lecturer<br />& PhD Researcher
                </p>
                <p className="font-secondary text-[10.5px] text-slate-500 dark:text-slate-400 mt-1">
                  SSUET, Karachi · 18+ yrs
                </p>
                {/* Live badge */}
                <div className="flex items-center gap-1.5 mt-2.5">
                  <span className="relative flex-shrink-0">
                    <span className="block w-2 h-2 rounded-full bg-green-500" />
                    <span className="absolute inset-0 w-2 h-2 rounded-full bg-green-400 animate-ping opacity-60" />
                  </span>
                  <span className="font-secondary text-[10px] font-semibold text-green-700 dark:text-green-400">
                    Open to Collaboration
                  </span>
                </div>
              </div>
            </div>

            {/* Stats strip */}
            <div className="grid grid-cols-3 divide-x divide-green-100 dark:divide-slate-700 border-t border-green-100 dark:border-slate-700 mt-4">
              {stats.map(({ end, suffix, label }, i) => (
                <div key={i} className="flex flex-col items-center py-3 px-1">
                  <p className="font-primary text-[19px] font-bold text-green-600 dark:text-green-400 leading-none">
                    {inView ? <CountUp start={0} end={end} duration={3} separator="," /> : "0"}{suffix}
                  </p>
                  <p className="font-secondary text-[8.5px] text-slate-500 dark:text-slate-400 text-center mt-1 uppercase tracking-wide leading-tight whitespace-pre-line">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Status chips */}
          <div className="mt-3 grid grid-cols-2 gap-2">
            {currentStatus.map((s, i) => (
              <div key={i} className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-sm">
                <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${s.active ? "bg-green-500 animate-pulse" : "bg-amber-400"}`} />
                <div>
                  <p className="font-secondary text-[10.5px] font-semibold text-slate-700 dark:text-slate-200 leading-none">{s.label}</p>
                  <p className="font-secondary text-[9px] text-slate-400 dark:text-slate-500 leading-none mt-0.5">{s.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── DESKTOP + CONTENT ────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">

          {/* Photo column — desktop only */}
          <motion.div variants={fadeIn("right", 0.15)} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="hidden lg:flex flex-shrink-0 flex-col items-start gap-5">

            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/10" />
              <div className="absolute -inset-3 rounded-3xl border border-green-100 dark:border-green-900" />
              <img
                src={WorkingPhoto}
                alt="Fariha Ansari working"
                className="relative w-[260px] drop-shadow-md"
              />
            </div>

            {/* Status panel — desktop */}
            <div className="w-[250px] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4">
              <p className="font-secondary text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3">Current Status</p>
              <div className="space-y-2.5">
                {currentStatus.map((s, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className={`mt-[5px] w-1.5 h-1.5 rounded-full flex-shrink-0 ${s.active ? "bg-green-500 animate-pulse" : "bg-amber-400"}`} />
                    <div>
                      <p className="font-secondary text-[11px] font-semibold text-slate-700 dark:text-slate-300 leading-snug">{s.label}</p>
                      <p className="font-secondary text-[10px] text-slate-400 dark:text-slate-500 leading-none mt-0.5">{s.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Content column */}
          <motion.div variants={fadeIn("left", 0.15)} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex-1 min-w-0 pt-4 lg:pt-0">

            <h2 className="hidden lg:block font-primary text-[28px] lg:text-[40px] font-bold text-slate-900 dark:text-white leading-tight mb-1">
              Mathematics Lecturer
            </h2>
            <h2 className="hidden lg:block font-primary text-[28px] lg:text-[40px] font-bold text-green-600 dark:text-green-400 leading-tight mb-5">
              &amp; PhD Researcher
            </h2>

            <p className="font-secondary text-[14px] lg:text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed mb-5 text-justify">
              I am a dedicated mathematics lecturer at Sir Syed University of Engineering &amp; Technology (SSUET), with extensive experience in undergraduate teaching, Outcome-Based Education, and academic quality assurance. My doctoral research, supervised by Dr. Muhammad Naseem, integrates Graph Theory, Combinatorial Optimization, and Machine Learning.
            </p>

            {/* Academic credentials */}
            <div className="grid grid-cols-2 gap-2.5 mb-5">
              {[
                { label: "PhD CGPA",           value: "3.70 / 4.00",   note: "In Progress · 2022–Present" },
                { label: "M.S. CGPA",          value: "3.84 / 4.00",   note: "Mathematics · SSUET · 2013" },
                { label: "M.Sc. Result",        value: "First Division", note: "Univ. of Karachi" },
                { label: "B.Sc. (Hons.)",       value: "First Division", note: "Math, Chemistry & Physics" },
              ].map((c, i) => (
                <div key={i} className="flex items-start gap-2.5 p-2.5 bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-900 rounded-lg">
                  <span className="text-green-500 text-[13px] mt-0.5 flex-shrink-0">◈</span>
                  <div>
                    <p className="font-secondary text-[9.5px] font-bold text-green-700 dark:text-green-400 uppercase tracking-wide">{c.label}</p>
                    <p className="font-secondary text-[12px] font-semibold text-slate-800 dark:text-white leading-tight">{c.value}</p>
                    <p className="font-secondary text-[9.5px] text-slate-400 dark:text-slate-500">{c.note}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* PhD note */}
            <div className="flex gap-3 p-3.5 bg-white dark:bg-slate-900 border border-green-200 dark:border-green-800 rounded-lg mb-5 shadow-sm">
              <div className="w-1 flex-shrink-0 bg-gradient-to-b from-green-500 to-emerald-400 rounded-full" />
              <div>
                <p className="font-secondary font-semibold text-[12.5px] text-green-700 dark:text-green-400 mb-0.5">PhD Research — In Progress</p>
                <p className="font-secondary text-[11.5px] text-slate-500 dark:text-slate-400 leading-snug">
                  <em>Optimizing Scheduling Problems using Vertex Coloring &amp; Machine Learning</em><br />
                  Supervisor: Dr. Muhammad Naseem · CGPA 3.70/4.00 · SSUET
                </p>
              </div>
            </div>

            {/* Teaching philosophy */}
            <div className="p-3.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg mb-7">
              <p className="font-secondary font-bold text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2">Teaching Philosophy</p>
              <p className="font-secondary text-[12.5px] text-slate-600 dark:text-slate-400 leading-relaxed text-justify italic">
                "My teaching centers on building genuine mathematical understanding — not just procedural competency. I emphasize critical thinking, analytical reasoning, and mathematical communication."
              </p>
            </div>

            {/* Stats — desktop only (mobile shows them in identity card) */}
            <div className="hidden lg:grid grid-cols-3 gap-4">
              {stats.map(({ end, suffix, label, icon }, i) => (
                <div key={i} className="group text-center p-4 bg-white dark:bg-slate-900 border border-green-100 dark:border-green-900 rounded-xl hover:border-green-300 dark:hover:border-green-700 hover:shadow-md transition-all duration-300">
                  <div className="text-green-400 dark:text-green-600 text-[18px] flex justify-center mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-200">
                    {icon}
                  </div>
                  <p className="font-primary text-[28px] font-bold text-green-600 dark:text-green-400 leading-none mb-1">
                    {inView ? <CountUp start={0} end={end} duration={3} separator="," /> : "0"}{suffix}
                  </p>
                  <p className="font-secondary text-[10px] text-slate-400 dark:text-slate-500 whitespace-pre-line uppercase tracking-wide leading-snug">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
