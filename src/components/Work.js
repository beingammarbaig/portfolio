import React from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, scaleIn } from "../variants";
import "react-circular-progressbar/dist/styles.css";

const skillLevels = [
  { label: "Teaching & Lecturing",        level: 5, tag: "Expert",    note: "18+ years · 1000+ students" },
  { label: "Research & Graph Theory",     level: 4, tag: "Advanced",  note: "PhD focus area" },
  { label: "OBE & Assessment Design",     level: 4, tag: "Advanced",  note: "SAR Committee 2015–2024" },
  { label: "Digital Tools (LMS/Teams)",   level: 4, tag: "Advanced",  note: "VLE Coordinator since 2019" },
  { label: "MATLAB / Python / LaTeX",     level: 3, tag: "Proficient",note: "Research & academic tools" },
  { label: "Academic Writing",            level: 4, tag: "Advanced",  note: "Manuscript in preparation" },
];

const tagStyle = {
  Expert:    "text-accent bg-[#059669]/10 border-[#059669]/30 dark:bg-[#B809C3]/10 dark:border-[#B809C3]/30",
  Advanced:  "text-[#0891B2] bg-[#0891B2]/10 border-[#0891B2]/30 dark:text-[#b936ee] dark:bg-[#b936ee]/10 dark:border-[#b936ee]/30",
  Proficient:"text-[#6366F1] bg-[#6366F1]/10 border-[#6366F1]/30 dark:text-[#406aff] dark:bg-[#406aff]/10 dark:border-[#406aff]/30",
};

const radialSkills = [
  { label: "Educational\nLeadership", pathClass: "path path-1", end: 85 },
  { label: "Student\nCounselling", pathClass: "path path-2", end: 80 },
  { label: "Academic\nCoordination", pathClass: "path path-3", end: 75 },
];

const courseCategories = [
  {
    category: "Calculus & Analysis",
    color: "from-[var(--theme-color-1)] to-[var(--theme-color-2)]",
    courses: [
      "Calculus & Analytical Geometry",
      "Multivariable Calculus",
      "Differential Equations",
      "Complex Variables & Integral Transforms",
    ],
  },
  {
    category: "Linear Algebra & Equations",
    color: "from-[var(--theme-color-2)] to-[#6366F1]",
    courses: [
      "Linear Algebra & Differential Equations",
      "Linear Algebra & Vector Analysis",
    ],
  },
  {
    category: "Discrete & Computational",
    color: "from-[#6366F1] to-[#818CF8]",
    courses: [
      "Discrete Mathematics & Discrete Structures",
      "Numerical Methods for Engineers",
    ],
  },
];

const Work = () => {
  const [ref, inView] = useInView({ threshold: 0.3 });

  return (
    <section className="min-h-screen flex flex-col justify-center items-center py-10 lg:py-16" id="work" ref={ref}>
      <div className="container mx-auto">

        <div className="flex flex-col gap-x-12 lg:flex-row mb-10 lg:items-center">
          {/* Left – description */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:mt-5 mb-6 lg:mb-0"
          >
            <h2 className="h2 leading-tight text-accent mb-2">My Skills</h2>
            <h3 className="text-[17px] lg:text-[20px] font-primary font-semibold mb-3 text-slate-800 dark:text-white">Every Day is a New Challenge</h3>
            <p className="text-justify text-[13px] lg:text-[15px] text-slate-600 dark:text-white/80 leading-relaxed mb-5">
              With nearly 18 years in academic mathematics, my competencies span classroom teaching, doctoral research, Outcome-Based Education, digital learning coordination, and mathematical software. I continuously adapt to evolving pedagogical and technological landscapes.
            </p>

            {/* Radial charts */}
            <motion.div
              variants={staggerContainer(0.12, 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="flex gap-x-4 lg:gap-x-6"
            >
              {radialSkills.map(({ label, pathClass, end }, i) => (
                <motion.div key={i} variants={scaleIn(0.1 * i)} className="flex-1 flex flex-col items-center">
                  <div className="radial-bars">
                    {inView && (
                      <svg x="0px" y="0px" viewBox="0 0 200 200">
                        <circle className="progress-bar" cx="100" cy="100" r="80" />
                        <circle className={pathClass} cx="100" cy="100" r="80" />
                      </svg>
                    )}
                    <div className="percentage text-slate-800 dark:text-white">
                      {inView ? <CountUp start={0} end={end} duration={2} /> : 0}%
                    </div>
                  </div>
                  <h4 className="mt-[-20px] text-center text-[10px] lg:text-[13px] tracking-wide font-primary font-semibold whitespace-pre-line leading-tight text-slate-600 dark:text-white/80">
                    {label}
                  </h4>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right – proficiency levels */}
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 mt-10 lg:mt-0"
          >
            <motion.div
              variants={staggerContainer(0.1, 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
            >
              {skillLevels.map(({ label, level, tag, note }, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn("left", 0.05 * i)}
                  className="flex justify-between items-center mb-5 gap-x-2"
                >
                  <div className="text-left">
                    <h4 className="text-[9px] sm:text-[10px] lg:text-[13px] tracking-wide font-primary font-semibold leading-snug text-slate-800 dark:text-white">{label}</h4>
                    <p className="text-[8px] lg:text-[9px] text-gray-400 mt-0.5 leading-none">{note}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      {[1,2,3,4,5].map(dot => (
                        <div key={dot} className={`w-3 h-3 lg:w-4 lg:h-4 rounded-sm transition-all duration-300 ${dot <= level ? 'bg-gradient-to-r from-[var(--theme-color-1)] to-[var(--theme-color-2)] shadow-[0_0_6px_rgba(var(--theme-shadow-rgb),0.35)]' : 'bg-slate-200 dark:bg-white/10 border border-slate-300 dark:border-0'}`}></div>
                      ))}
                    </div>
                    <span className={`text-[8px] lg:text-[10px] font-primary font-semibold px-2 py-0.5 rounded-full border ${tagStyle[tag]}`}>{tag}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Teaching Courses — categorized */}
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
        >
          <div className="flex items-center gap-3 justify-center mb-6">
            <h3 className="text-[16px] lg:text-[20px] font-primary font-semibold text-slate-800 dark:text-white">Courses Taught</h3>
            <span className="text-[10px] font-primary text-slate-500 dark:text-white/60 bg-white/10 border border-slate-300 dark:border-0 rounded-full px-3 py-0.5">8 Courses · 1000+ Students</span>
          </div>
          <motion.div
            variants={staggerContainer(0.1, 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.05 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            {courseCategories.map((cat, ci) => (
              <motion.div
                key={ci}
                variants={scaleIn(0.1 * ci)}
                className="bg-white/80 dark:bg-black/30 border border-slate-200 dark:border-0 rounded-xl p-4 hover:border-slate-300 dark:border-0 hover:shadow-md transition-all duration-300 shadow-sm"
              >
                <div className={`inline-block text-[9px] font-primary font-semibold tracking-widest uppercase mb-3 px-2 py-0.5 rounded bg-gradient-to-r ${cat.color} bg-clip-text text-transparent border border-slate-200 dark:border-0`}>
                  {cat.category}
                </div>
                <ul className="space-y-2">
                  {cat.courses.map((course, i) => (
                    <li key={i} className="flex items-start gap-2 text-[11px] lg:text-[12px] font-secondary text-slate-600 dark:text-white/80">
                      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-gradient-to-r ${cat.color}`}></span>
                      {course}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
