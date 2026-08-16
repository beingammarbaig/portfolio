import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { FaGraduationCap, FaBriefcase, FaUserTie, FaChalkboardTeacher } from "react-icons/fa";

const education = [
  { period: "2022 – Present", title: "PhD in Mathematics",                               institution: "SSUET, Karachi",        detail: "Supervisor: Dr. Muhammad Naseem",      badge: "In Progress", cgpa: "3.70/4.00" },
  { period: "2011 – 2013",   title: "M.S. in Mathematics",                              institution: "SSUET, Karachi",        detail: null,                                  cgpa: "3.84/4.00" },
  { period: "2007",          title: "M.Sc. in Mathematics",                             institution: "University of Karachi", detail: null,                                  honour: "First Division" },
  { period: "2006",          title: "B.Sc. (Hons.) — Mathematics, Chemistry & Physics", institution: "University of Karachi", detail: null,                                  honour: "First Division" },
];

const experience = [
  { period: "2012 – Present", title: "Lecturer of Mathematics",       institution: "SSUET, Karachi", detail: "Dept. of Mathematics & Sciences — 13 years" },
  { period: "2008 – 2012",   title: "Junior Lecturer of Mathematics", institution: "SSUET, Karachi", detail: "Foundational & undergraduate courses — 4 years" },
];

const roles = [
  { period: "2019 – Present", title: "VLE Departmental Coordinator", institution: "SSUET, Karachi", detail: "Digital learning, LMS & MS Teams coordination" },
  { period: "2015 – 2024",   title: "SAR Committee Member",         institution: "SSUET, Karachi", detail: "Academic quality assurance & accreditation" },
  { period: "2024 & 2025",   title: "Ramadan Drive — Organizer",    institution: "SSUET, Karachi", detail: "Community service coordination & volunteering" },
];

const workshops = [
  { year: "2022", title: "Advanced Pedagogy in Mathematics",                                       org: "Mathematics Dept., SSUET",        role: "" },
  { year: "2022", title: "Developing 21st Century Technological Communication Skills",             org: "English Dept., SSUET",            role: "" },
  { year: "2022", title: "Optimize Your Performance",                                              org: "Mathematics Dept., SSUET",        role: "" },
  { year: "2022", title: "Understanding and Importance of MOOC in Learning",                      org: "Mathematics Dept., SSUET",        role: "" },
  { year: "2021", title: "Critical Thinking",                                                      org: "Capacity Building Program, SSUET",role: "Presenter" },
  { year: "2021", title: "Do's and Don'ts of Outcome Based Assessment (OBE)",                     org: "Capacity Building Program, SSUET",role: "" },
  { year: "2021", title: "QOBE Software and Rubrics in QOBE",                                     org: "Capacity Building Program, SSUET",role: "" },
  { year: "2021", title: "Complex Engineering Problem / Complex Engineering Activity",             org: "Capacity Building Program, SSUET",role: "" },
  { year: "2021", title: "Implementation of OBE in Non-Engineering Courses",                      org: "Capacity Building Program, SSUET",role: "" },
  { year: "2021", title: "MS Teams, MS Forms & SSUET Virtual Learning Environment",               org: "Capacity Building Program, SSUET",role: "" },
  { year: "2021", title: "Roles of University in Implementing Sustainable Development",           org: "Capacity Building Program, SSUET",role: "" },
  { year: "2019", title: "Heat Waves and Urban Heat Island",                                      org: "Sardar Yasin Malik PDC, Univ. of Karachi", role: "" },
  { year: "2018", title: "Why Not Excel: A Simple and Easy Approach for Statistical Analysis",    org: "ORIC, University of Karachi",     role: "" },
];

const TimelineItem = ({ item, isLast }) => (
  <div className="relative pl-7 pb-3.5 last:pb-0">
    {/* Dot */}
    <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full bg-white dark:bg-slate-800 border-2 border-green-500 flex items-center justify-center z-10 shadow-sm">
      <div className="w-1 h-1 rounded-full bg-green-500" />
    </div>
    {/* Connector line */}
    {!isLast && (
      <div className="absolute left-[6px] top-4 bottom-0 w-px bg-gradient-to-b from-green-300 to-green-100 dark:from-green-700 dark:to-green-900/30" />
    )}

    {/* Content card */}
    <div className="bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-700/50 rounded-xl p-3 hover:border-green-200 dark:hover:border-green-800 hover:bg-white dark:hover:bg-slate-900 transition-all duration-200">
      {/* Period + badges row */}
      <div className="flex flex-wrap items-center gap-1 mb-1">
        <span className="font-secondary text-[10px] font-bold text-white bg-green-600 dark:bg-green-700 rounded-md px-2 py-0.5 leading-none">
          {item.period}
        </span>
        {item.badge && (
          <span className="text-[9px] font-secondary font-bold bg-green-50 dark:bg-green-900/40 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800 rounded-full px-2 py-0.5 animate-pulse">
            {item.badge}
          </span>
        )}
        {item.cgpa && (
          <span className="text-[9px] font-secondary font-bold bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800 rounded-full px-2 py-0.5">
            CGPA {item.cgpa}
          </span>
        )}
        {item.honour && (
          <span className="text-[9px] font-secondary font-bold bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800 rounded-full px-2 py-0.5">
            🏅 {item.honour}
          </span>
        )}
      </div>
      <h4 className="font-secondary text-[13px] font-semibold text-slate-800 dark:text-white leading-snug">{item.title}</h4>
      <p className="font-secondary text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{item.institution}</p>
      {item.detail && (
        <p className="font-secondary text-[10.5px] text-slate-400 dark:text-slate-500 italic mt-0.5">{item.detail}</p>
      )}
    </div>
  </div>
);

const SectionCard = ({ gradient, icon, title, children, motionProps }) => (
  <motion.div
    {...motionProps}
    className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm overflow-hidden"
  >
    {/* Top gradient stripe */}
    <div className={`h-1.5 bg-gradient-to-r ${gradient}`} />
    <div className="p-4 lg:p-5">
      {/* Card header */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-7 h-7 rounded-lg bg-green-50 dark:bg-green-900/30 border border-green-100 dark:border-green-800 flex items-center justify-center text-green-600 dark:text-green-400 text-[12px] flex-shrink-0">
          {icon}
        </div>
        <p className="font-secondary text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">{title}</p>
      </div>
      {children}
    </div>
  </motion.div>
);

const Experience = () => {
  return (
    <section id="experience" className="relative py-14 lg:py-28 bg-green-50 dark:bg-slate-900 border-y border-green-100 dark:border-slate-800 overflow-hidden">
      {/* Section number */}
      <div className="absolute top-4 right-6 font-primary font-bold text-[60px] sm:text-[90px] lg:text-[130px] leading-none text-green-100 dark:text-green-900/30 select-none pointer-events-none">
        04
      </div>

      <div className="container mx-auto px-4 relative z-10">

        <motion.div variants={fadeIn("up", 0.05)} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-10">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-secondary font-bold text-green-600 dark:text-green-400 uppercase tracking-widest mb-3">
            <span className="w-5 h-px bg-green-500" /> Background
          </span>
          <h2 className="font-primary text-[30px] lg:text-[40px] font-bold text-slate-900 dark:text-white leading-tight">
            Education &amp; Experience
          </h2>
          <p className="font-secondary text-[13px] text-slate-500 dark:text-slate-400 mt-2">
            18+ years of academic dedication at SSUET, Karachi
          </p>
        </motion.div>

        {/* Top two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">

          <SectionCard
            gradient="from-green-500 to-emerald-400"
            icon={<FaGraduationCap />}
            title="Education"
            motionProps={{ variants: fadeIn("right", 0.1), initial: "hidden", whileInView: "show", viewport: { once: true } }}
          >
            {education.map((item, i) => (
              <TimelineItem key={i} item={item} isLast={i === education.length - 1} />
            ))}
          </SectionCard>

          <div className="flex flex-col gap-5">
            <SectionCard
              gradient="from-teal-500 to-green-400"
              icon={<FaBriefcase />}
              title="Academic Experience"
              motionProps={{ variants: fadeIn("left", 0.1), initial: "hidden", whileInView: "show", viewport: { once: true } }}
            >
              {experience.map((item, i) => (
                <TimelineItem key={i} item={item} isLast={i === experience.length - 1} />
              ))}
            </SectionCard>

            <SectionCard
              gradient="from-emerald-600 to-teal-400"
              icon={<FaUserTie />}
              title="Academic Roles"
              motionProps={{ variants: fadeIn("left", 0.15), initial: "hidden", whileInView: "show", viewport: { once: true } }}
            >
              {roles.map((item, i) => (
                <TimelineItem key={i} item={item} isLast={i === roles.length - 1} />
              ))}
            </SectionCard>
          </div>
        </div>

        {/* Workshops card — grouped by year */}
        {(() => {
          const byYear = workshops.reduce((acc, w) => {
            if (!acc[w.year]) acc[w.year] = [];
            acc[w.year].push(w);
            return acc;
          }, {});
          const years = Object.keys(byYear).sort((a, b) => b - a);
          return (
            <SectionCard
              gradient="from-green-600 to-emerald-500"
              icon={<FaChalkboardTeacher />}
              title="Faculty Development & Workshops"
              motionProps={{ variants: fadeIn("up", 0.1), initial: "hidden", whileInView: "show", viewport: { once: true } }}
            >
              <div className="space-y-6">
                {years.map((year) => (
                  <div key={year}>
                    {/* Year header divider */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="font-secondary text-[11px] font-bold text-white bg-green-600 dark:bg-green-700 rounded-lg px-2.5 py-1 leading-none flex-shrink-0">
                        {year}
                      </div>
                      <div className="flex-1 h-px bg-green-100 dark:bg-slate-700" />
                      <span className="font-secondary text-[10px] text-slate-400 dark:text-slate-500 flex-shrink-0">
                        {byYear[year].length} session{byYear[year].length > 1 ? "s" : ""}
                      </span>
                    </div>

                    {/* Items grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {byYear[year].map((w, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-700/50 hover:bg-green-50 dark:hover:bg-green-900/10 hover:border-green-200 dark:hover:border-green-800/40 transition-all duration-150"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-[7px] flex-shrink-0" />
                          <div className="flex-1 min-w-0">
                            <p className="font-secondary text-[11.5px] font-semibold text-slate-700 dark:text-slate-200 leading-snug">{w.title}</p>
                            <p className="font-secondary text-[10px] text-slate-400 dark:text-slate-500 mt-0.5">{w.org}</p>
                          </div>
                          {w.role === "Presenter" && (
                            <span className="flex-shrink-0 text-[9px] font-secondary font-bold text-green-700 dark:text-green-400 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-800 rounded-full px-1.5 py-0.5 mt-0.5">
                              Presenter
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </SectionCard>
          );
        })()}

      </div>
    </section>
  );
};

export default Experience;
