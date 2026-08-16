import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { FaChalkboardTeacher, FaMicroscope, FaLaptop, FaClipboardCheck } from "react-icons/fa";

const services = [
  {
    num: "01",
    icon: <FaChalkboardTeacher className="text-[20px]" />,
    name: "Mathematics Lecturer",
    tag: "Primary Role",
    desc: "Delivering concept-driven undergraduate mathematics to 1000+ engineering students with emphasis on analytical reasoning, problem-solving, and OBE-aligned learning outcomes.",
    highlights: ["18+ Years Experience", "8 Courses", "1000+ Students"],
  },
  {
    num: "02",
    icon: <FaMicroscope className="text-[20px]" />,
    name: "PhD Researcher",
    tag: "Academic Research",
    desc: "Doctoral research on Optimizing Scheduling Problems using Vertex Coloring & Machine Learning — bridging graph theory, combinatorial optimization, and computational mathematics.",
    highlights: ["CGPA 3.70/4.00", "Manuscript In Prep", "2022–Present"],
  },
  {
    num: "03",
    icon: <FaLaptop className="text-[20px]" />,
    name: "VLE Coordinator",
    tag: "Digital Education",
    desc: "Leading departmental digital transformation since 2019 — coordinating LMS/VLE platforms, MS Teams, and technology-enabled delivery for seamless online and blended learning.",
    highlights: ["LMS Management", "MS Teams", "Since 2019"],
  },
  {
    num: "04",
    icon: <FaClipboardCheck className="text-[20px]" />,
    name: "OBE & Quality Assurance",
    tag: "Accreditation",
    desc: "Contributing to Outcome-Based Education implementation, SAR committee, accreditation documentation, and continuous academic quality improvement since 2015.",
    highlights: ["SAR Committee", "OBE Expert", "2015–2024"],
  },
];

const Services = () => {
  return (
    <section id="services" className="relative py-14 lg:py-28 bg-green-50 dark:bg-slate-900 border-y border-green-100 dark:border-slate-800 overflow-hidden">
      {/* Section number watermark */}
      <div className="absolute top-4 right-6 font-primary font-bold text-[60px] sm:text-[90px] lg:text-[130px] leading-none text-green-100 dark:text-green-900/30 select-none pointer-events-none">
        02
      </div>

      <div className="container mx-auto px-4 relative z-10">

        <motion.div variants={fadeIn("up", 0.05)} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-10">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-secondary font-bold text-green-600 dark:text-green-400 uppercase tracking-widest mb-3">
            <span className="w-5 h-px bg-green-500" /> Roles & Responsibilities
          </span>
          <h2 className="font-primary text-[30px] lg:text-[40px] font-bold text-slate-900 dark:text-white leading-tight">
            What I Do
          </h2>
          <p className="font-secondary text-[14px] text-slate-500 dark:text-slate-400 mt-2 max-w-[500px]">
            18 years of combining deep mathematical expertise with modern pedagogy, research leadership, and digital education innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeIn("up", 0.08 + i * 0.05)}
              initial="hidden" whileInView="show" viewport={{ once: true }}
              className="group bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 hover:border-green-300 dark:hover:border-green-700 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
            >
              {/* Hover top accent */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-green-500 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />

              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-green-50 dark:bg-green-900/30 border border-green-100 dark:border-green-800 flex items-center justify-center text-green-600 dark:text-green-400 group-hover:bg-green-600 group-hover:text-white group-hover:border-green-600 dark:group-hover:bg-green-600 dark:group-hover:border-green-600 transition-all duration-300">
                    {s.icon}
                  </div>
                  <div>
                    <p className="font-secondary text-[10px] font-bold text-green-600 dark:text-green-500 uppercase tracking-widest">{s.tag}</p>
                    <h3 className="font-primary text-[16px] font-bold text-slate-800 dark:text-white leading-snug">{s.name}</h3>
                  </div>
                </div>
                <span className="font-primary text-[28px] font-bold text-slate-100 dark:text-slate-700 leading-none select-none">{s.num}</span>
              </div>

              <p className="font-secondary text-[13px] text-slate-500 dark:text-slate-400 leading-relaxed mb-4">{s.desc}</p>

              <div className="flex flex-wrap gap-2">
                {s.highlights.map((h) => (
                  <span key={h} className="font-secondary text-[10px] font-semibold text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-900/30 border border-green-100 dark:border-green-800 rounded-full px-2.5 py-1">
                    {h}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
