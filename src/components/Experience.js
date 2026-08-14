import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, slideUp } from "../variants";

const education = [
  {
    period: "2022 – Present",
    title: "PhD in Mathematics",
    institution: "SSUET, Karachi",
    detail: "CGPA 3.70/4.00 · Supervisor: Dr. Muhammad Naseem",
    badge: "In Progress",
  },
  {
    period: "2011 – 2013",
    title: "M.S. in Mathematics",
    institution: "SSUET, Karachi",
    detail: "CGPA 3.84/4.00",
  },
  {
    period: "2007",
    title: "M.Sc. in Mathematics",
    institution: "University of Karachi",
    detail: "First Division",
  },
  {
    period: "2006",
    title: "B.Sc. (Hons.) – Mathematics, Chemistry & Physics",
    institution: "University of Karachi",
    detail: "First Division",
  },
];

const experience = [
  {
    period: "2012 – Present",
    title: "Lecturer of Mathematics",
    institution: "SSUET, Karachi",
    detail: "Dept. of Mathematics & Sciences",
  },
  {
    period: "2008 – 2012",
    title: "Junior Lecturer of Mathematics",
    institution: "SSUET, Karachi",
    detail: "Foundational & undergraduate courses",
  },
];

const roles = [
  {
    period: "2019 – Present",
    title: "VLE Departmental Coordinator",
    institution: "SSUET, Karachi",
    detail: "Digital learning & LMS coordination",
    type: "vle",
  },
  {
    period: "2015 – 2024",
    title: "SAR Committee Member",
    institution: "SSUET, Karachi",
    detail: "Academic quality & accreditation",
    type: "sar",
  },
  {
    period: "2024 & 2025",
    title: "Ramadan Drive — Organizer & Volunteer",
    institution: "SSUET, Karachi",
    detail: "Community service coordination & organization",
    type: "community",
  },
];

const TimelineCard = ({ item }) => (
  <motion.div
    variants={slideUp(0.1)}
    className="relative border border-white/10 bg-black/30 backdrop-blur-sm rounded-xl cursor-pointer group mb-3 hover:border-accent/40 hover:bg-black/50 transition-all duration-400 overflow-hidden shadow-sm hover:shadow-md"
  >
    <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-accent to-[#6366F1] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="p-3 lg:p-4">
      <div className="flex items-start justify-between gap-2 flex-wrap">
        <h4 className="text-[10px] lg:text-[12px] font-semibold text-accent tracking-widest uppercase">
          {item.period}
        </h4>
        {item.badge && (
          <span className="text-[9px] lg:text-[10px] bg-accent/10 text-accent border border-accent/30 rounded-full px-2 py-0.5 font-primary tracking-wide animate-pulse">
            {item.badge}
          </span>
        )}
      </div>
      <h3 className="text-gradient text-[12px] lg:text-[15px] font-semibold leading-snug mt-1">
        {item.title}
      </h3>
      <p className="text-[11px] lg:text-[13px] text-white/60 leading-snug">{item.institution}</p>
      {item.detail && (
        <p className="text-[10px] lg:text-[12px] text-gray-400 mt-0.5 italic">{item.detail}</p>
      )}
    </div>
  </motion.div>
);

const Work = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center py-16" id="experience">
      <div className="container mx-auto">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="h2 leading-tight text-accent mb-1 lg:mb-6 text-center"
        >
          My Journey
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-x-8 gap-y-6 text-justify">

          {/* Education column */}
          <div className="flex-1 ml-1 mr-0">
            <motion.header
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="font-primary font-semibold text-[18px] lg:text-[22px] mb-3 flex items-center gap-2 text-white"
            >
              <span className="w-1 h-5 bg-gradient-to-b from-accent to-[#6366F1] rounded-full inline-block"></span>
              Education
            </motion.header>
            <motion.div
              variants={staggerContainer(0.12, 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }}
              className="border-l border-white/20 pl-4 py-1"
            >
              {education.map((item, i) => (
                <TimelineCard key={i} item={item} />
              ))}
            </motion.div>
          </div>

          {/* Experience + Roles column */}
          <div className="flex-1 ml-1 mr-0">
            <motion.header
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="font-primary font-semibold text-[18px] lg:text-[22px] mb-3 flex items-center gap-2 text-white"
            >
              <span className="w-1 h-5 bg-gradient-to-b from-accent to-[#6366F1] rounded-full inline-block"></span>
              Experience
            </motion.header>
            <motion.div
              variants={staggerContainer(0.12, 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }}
              className="border-l border-white/20 pl-4 py-1 mb-4"
            >
              {experience.map((item, i) => (
                <TimelineCard key={i} item={item} />
              ))}
            </motion.div>

            <motion.header
              variants={fadeIn("left", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="font-primary font-semibold text-[18px] lg:text-[22px] mb-3 flex items-center gap-2 text-white"
            >
              <span className="w-1 h-5 bg-gradient-to-b from-accent to-[#6366F1] rounded-full inline-block"></span>
              Academic Roles
            </motion.header>
            <motion.div
              variants={staggerContainer(0.12, 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }}
              className="border-l border-white/20 pl-4 py-1"
            >
              {roles.map((item, i) => (
                <TimelineCard key={i} item={item} />
              ))}
            </motion.div>
          </div>
        </div>

        {/* Faculty Development & Workshops */}
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="mt-10"
        >
          <h3 className="font-primary font-semibold text-[18px] lg:text-[22px] mb-5 flex items-center gap-2 text-white">
            <span className="w-1 h-5 bg-gradient-to-b from-accent to-[#6366F1] rounded-full inline-block"></span>
            Faculty Development & Knowledge-Sharing Activities
          </h3>
          <motion.div
            variants={staggerContainer(0.06, 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.05 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-3"
          >
            {[
              { year: "2022", title: "Advanced Pedagogy in Mathematics", org: "Mathematics Department, SSUET", role: "Participant" },
              { year: "2022", title: "Developing 21st Century Technological Communication Skills", org: "English Department, SSUET", role: "Participant" },
              { year: "2022", title: "Optimize Your Performance", org: "Mathematics Department, SSUET", role: "Participant" },
              { year: "2022", title: "Understanding and Importance of MOOC in Learning", org: "Mathematics Department, SSUET", role: "Participant" },
              { year: "2021", title: "Presented: Critical Thinking", org: "Capacity Building Program, SSUET", role: "Presenter" },
              { year: "2021", title: "Do's and Don'ts of Outcome Based Assessment (OBE)", org: "Capacity Building Program, SSUET", role: "Participant" },
              { year: "2021", title: "QOBE Software and Rubrics in QOBE", org: "Capacity Building Program, SSUET", role: "Participant" },
              { year: "2021", title: "Complex Engineering Problem / Complex Engineering Activity", org: "Capacity Building Program, SSUET", role: "Participant" },
              { year: "2021", title: "Implementation of OBE in Non-Engineering Courses", org: "Capacity Building Program, SSUET", role: "Participant" },
              { year: "2021", title: "MS Teams, MS Forms & SSUET Virtual Learning Environment", org: "Capacity Building Program, SSUET", role: "Participant" },
              { year: "2021", title: "Roles of University in Implementing Sustainable Development", org: "Capacity Building Program, SSUET", role: "Participant" },
              { year: "2019", title: "Heat Waves and Urban Heat Island", org: "Sardar Yasin Malik PDC, University of Karachi", role: "Participant" },
              { year: "2018", title: "Why Not Excel: A Simple and Easy Approach for Statistical Analysis", org: "ORIC, University of Karachi", role: "Participant" },
            ].map((w, i) => (
              <motion.div
                key={i}
                variants={slideUp(0.03 * i)}
                className="flex items-start gap-3 bg-black/30 border border-white/10 rounded-xl p-3 hover:border-accent/30 hover:bg-black/50 hover:shadow-sm transition-all duration-300 group shadow-sm"
              >
                <div className="flex-shrink-0 text-center">
                  <span className="block text-[10px] font-primary font-semibold text-accent bg-accent/10 rounded-md px-2 py-0.5">{w.year}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] lg:text-[12px] font-primary font-semibold text-white leading-snug mb-0.5">{w.title}</p>
                  <p className="text-[10px] text-gray-400 leading-snug">{w.org}</p>
                </div>
                {w.role === "Presenter" && (
                  <span className="flex-shrink-0 text-[9px] bg-accent/10 text-accent border border-accent/30 rounded-full px-2 py-0.5 font-primary tracking-wide">Presenter</span>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
