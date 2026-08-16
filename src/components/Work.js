import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { FaCalculator, FaTh, FaProjectDiagram } from "react-icons/fa";

const skillLevels = [
  { label: "Teaching & Lecturing",       pct: 95, tag: "Expert",     note: "18+ yrs · 1000+ students" },
  { label: "Research & Graph Theory",    pct: 80, tag: "Advanced",   note: "PhD focus area" },
  { label: "OBE & Assessment Design",    pct: 85, tag: "Advanced",   note: "SAR Committee 2015–2024" },
  { label: "Digital Tools (LMS/Teams)",  pct: 80, tag: "Advanced",   note: "VLE Coordinator since 2019" },
  { label: "Academic Writing",           pct: 82, tag: "Advanced",   note: "Manuscript in preparation" },
  { label: "MATLAB / Python / LaTeX",    pct: 65, tag: "Proficient", note: "Research & academic tools" },
];

const courseCategories = [
  {
    category: "Calculus & Analysis",
    courses: [
      "Calculus & Analytical Geometry",
      "Multivariable Calculus",
      "Differential Equations",
      "Complex Variables & Integral Transforms",
    ],
  },
  {
    category: "Linear Algebra",
    courses: [
      "Linear Algebra & Differential Equations",
      "Linear Algebra & Vector Analysis",
    ],
  },
  {
    category: "Discrete & Computational",
    courses: [
      "Discrete Mathematics & Discrete Structures",
      "Numerical Methods for Engineers",
    ],
  },
];

const categoryMeta = [
  {
    icon: <FaCalculator />,
    gradient: "from-green-500 to-emerald-400",
    iconBg: "bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 border border-green-200 dark:border-green-800",
    dot: "bg-green-400",
  },
  {
    icon: <FaTh />,
    gradient: "from-teal-500 to-green-400",
    iconBg: "bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 border border-teal-200 dark:border-teal-800",
    dot: "bg-teal-400",
  },
  {
    icon: <FaProjectDiagram />,
    gradient: "from-emerald-600 to-teal-400",
    iconBg: "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800",
    dot: "bg-emerald-500",
  },
];

const tools = [
  { name: "MATLAB",  level: "Proficient" },
  { name: "Python",  level: "Proficient" },
  { name: "LaTeX",   level: "Advanced" },
  { name: "MS Teams",level: "Advanced" },
  { name: "LMS/VLE", level: "Advanced" },
  { name: "QOBE",    level: "Advanced" },
];

const tagColors = {
  Expert:    "text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-800",
  Advanced:  "text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 border-emerald-200 dark:border-emerald-800",
  Proficient:"text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700",
};

const Work = () => {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section id="work" ref={ref} className="relative py-14 lg:py-28 bg-white dark:bg-slate-950 overflow-hidden">
      {/* Section number */}
      <div className="absolute top-4 right-6 font-primary font-bold text-[60px] sm:text-[90px] lg:text-[130px] leading-none text-slate-100 dark:text-slate-800/60 select-none pointer-events-none">
        05
      </div>

      <div className="container mx-auto px-4 relative z-10">

        <motion.div variants={fadeIn("up", 0.05)} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-10">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-secondary font-bold text-green-600 dark:text-green-400 uppercase tracking-widest mb-3">
            <span className="w-5 h-px bg-green-500" /> Competencies
          </span>
          <h2 className="font-primary text-[30px] lg:text-[40px] font-bold text-slate-900 dark:text-white leading-tight">
            Skills &amp; Courses Taught
          </h2>
        </motion.div>

        {/* Skill bars */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-5 mb-12">
          {skillLevels.map(({ label, pct, tag, note }, i) => (
            <motion.div key={i} variants={fadeIn("up", 0.04 * i)} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <div className="flex items-center justify-between mb-1.5">
                <div>
                  <span className="font-secondary text-[13px] font-semibold text-slate-800 dark:text-white">{label}</span>
                  <span className="hidden sm:inline font-secondary text-[11px] text-slate-400 dark:text-slate-500 ml-2">{note}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-secondary text-[11px] font-bold text-slate-500 dark:text-slate-400">
                    {inView ? <CountUp start={0} end={pct} duration={1.2 + i * 0.05} delay={i * 0.1} /> : 0}%
                  </span>
                  <span className={`text-[10px] font-secondary font-semibold px-2 py-0.5 rounded-full border ${tagColors[tag]}`}>{tag}</span>
                </div>
              </div>
              <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full"
                  style={{
                    width: inView ? `${pct}%` : "0%",
                    transition: `width ${1.1 + i * 0.05}s cubic-bezier(0.4, 0, 0.2, 1) ${i * 0.1}s`,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Academic software/tools */}
        <div className="mb-12">
          <h3 className="font-secondary text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
            <span className="w-4 h-px bg-slate-300 dark:bg-slate-600" /> Academic Software &amp; Tools
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {tools.map(({ name, level }) => (
              <div key={name} className="flex items-center justify-between gap-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg px-3 py-2.5 hover:border-green-300 dark:hover:border-green-700 transition-colors duration-200">
                <span className="font-secondary text-[13px] font-semibold text-slate-700 dark:text-slate-300">{name}</span>
                <span className={`flex-shrink-0 text-[10px] font-secondary font-semibold px-2 py-0.5 rounded-full border ${tagColors[level]}`}>{level}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Courses taught */}
        <div>
          <h3 className="font-secondary text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
            <span className="w-4 h-px bg-slate-300 dark:bg-slate-600" /> Courses Taught — 8 Courses · 1000+ Students
          </h3>

          {/* Mobile: horizontal scroll; md+: 3-column grid */}
          <div className="flex gap-4 overflow-x-auto no-scrollbar pb-3 md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
            {courseCategories.map((cat, ci) => {
              const meta = categoryMeta[ci];
              return (
                <motion.div
                  key={ci}
                  variants={fadeIn("up", 0.08 * ci)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="flex-shrink-0 w-[220px] md:w-auto bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md hover:border-green-300 dark:hover:border-green-700 transition-all duration-200"
                >
                  {/* Top gradient stripe */}
                  <div className={`h-1.5 w-full bg-gradient-to-r ${meta.gradient}`} />

                  <div className="p-4">
                    {/* Icon + category + count */}
                    <div className="flex items-start gap-3 mb-4">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-[13px] ${meta.iconBg}`}>
                        {meta.icon}
                      </div>
                      <div>
                        <p className="font-secondary text-[12px] font-bold text-slate-800 dark:text-white leading-tight">{cat.category}</p>
                        <span className="font-secondary text-[10px] text-slate-400 dark:text-slate-500">{cat.courses.length} courses</span>
                      </div>
                    </div>

                    {/* Course list */}
                    <ul className="space-y-2.5">
                      {cat.courses.map((course, i) => (
                        <li key={i} className="flex items-start gap-2 font-secondary text-[11.5px] text-slate-600 dark:text-slate-400 leading-snug">
                          <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${meta.dot}`} />
                          {course}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Swipe hint — mobile only */}
          <p className="md:hidden mt-2.5 text-center font-secondary text-[10px] text-slate-400 dark:text-slate-600 tracking-wide">
            ← Swipe to explore →
          </p>
        </div>
      </div>
    </section>
  );
};

export default Work;
