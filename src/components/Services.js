import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, scaleIn } from "../variants";
import { FaChalkboardTeacher, FaMicroscope, FaLaptop, FaClipboardCheck } from "react-icons/fa";
import whatImg from "../assets/what.png";

const services = [
  {
    icon: <FaChalkboardTeacher />,
    name: "Mathematics Lecturer",
    desc: "Delivering concept-driven undergraduate mathematics courses to 1000+ engineering students with emphasis on analytical reasoning, problem-solving, and OBE-aligned learning outcomes.",
  },
  {
    icon: <FaMicroscope />,
    name: "PhD Researcher",
    desc: "Doctoral research on Optimizing Scheduling Problems using Vertex Coloring & Machine Learning — bridging graph theory, combinatorial optimization, and computational mathematics.",
  },
  {
    icon: <FaLaptop />,
    name: "VLE Coordinator",
    desc: "Leading departmental digital transformation since 2019 — coordinating LMS/VLE platforms, MS Teams, and technology-enabled academic delivery for seamless online learning.",
  },
  {
    icon: <FaClipboardCheck />,
    name: "OBE & Quality Assurance",
    desc: "Contributing to Outcome-Based Education implementation, SAR committee activities, accreditation documentation, and continuous academic quality improvement since 2015.",
  },
];

const Services = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center py-16" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-x-16">

          {/* Left panel */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 mb-12 lg:mb-0 flex flex-col"
          >
            <img 
              src={whatImg} 
              alt="What I Do" 
              className="w-full max-w-[260px] lg:max-w-[320px] mb-8 mx-auto" 
            />
            <h2 className="h2 text-accent mb-2">What I Do</h2>
            <h3 className="text-[17px] lg:text-[22px] font-primary font-semibold leading-snug max-w-[420px] mb-5 text-white">
              18 Years of Academic Excellence at SSUET
            </h3>
            <p className="text-[13px] lg:text-[15px] text-white/80 leading-relaxed max-w-[400px] mb-6 text-justify">
              Combining deep mathematical expertise with modern pedagogy, research, and digital education coordination to drive student success and institutional quality.
            </p>
            <button className="btn btn-sm py-2 px-6">
              <a
                href="https://www.ssuet.edu.pk/faculties/ms-fariha-ansari/"
                target="_blank"
                rel="noreferrer"
                className="text-white"
              >
                See My Work Profile
              </a>
            </button>
          </motion.div>

          {/* Services grid */}
          <motion.div
            variants={staggerContainer(0.15, 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="flex-1 grid grid-cols-1 gap-4"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={scaleIn(0.1 * index)}
                className="group flex items-start gap-4 bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:border-accent/40 hover:bg-black/50 transition-all duration-500 shadow-sm hover:shadow-md"
              >
                <div className="text-accent text-2xl mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <div>
                  <h4 className="text-[14px] lg:text-[16px] font-primary font-semibold mb-1 text-white group-hover:text-gradient transition-all duration-300">
                    {service.name}
                  </h4>
                  <p className="text-[12px] lg:text-[13px] text-white/60 leading-relaxed text-justify">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
