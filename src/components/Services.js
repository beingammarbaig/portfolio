import React from "react";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const services = [
  {
    name: "Mathematics Lecturer",
    desc: "I foster a profound understanding of mathematical principles, equipping students with the tools to conquer the world of numbers and problem-solving",
    link: "Learn More",
  },
  {
    name: "Member of SAR Committee of Dept. of Mathematics",
    desc: "Ensuring the department's academic quality and rigor through strategic assessment and review processes",
    link: "Learn More",
  },
  {
    name: "Coordinator of VLE of Dept. of Mathematics",
    desc: "Spearheading the digital transformation of Maths department, ensuring a online learning experience for students and educators",
    link: "Learn More",
  },
];

const Services = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center" id="services">
      <div className="h-1/4"></div>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-4 lg:mb-12 lg:mb-8"
          >
            <h2 class="h2 text-accent mb-2 mb-lg-4">What I do</h2>
            <h3 className="h3 text-[18px] lg:text-[22px] leading-[20px] max-w-[455px] mb-2 mb-lg-4 text-justify mb-lg-12 mb-lg-16 lg:text-left">
              I'm a Mathematics Lecturer with over 14 years of experience
            </h3>
            <div className="text-center text-lg-start">
            <button className="btn btn-sm py-lg-3">
              <a href="https://www.ssuet.edu.pk/faculties/ms-fariha-ansari/">
                See my Work Profile
              </a>
            </button></div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex"
          >
            <div>
              {services.map((service, index) => {
                const { name, desc} = service;
                return (
                  <div
                    className="border-b border-white/20 mb-4 mb-lg-4 flex"
                    key={index}
                  >
                    <div className="lg:max-w-[476px]">
                      <h4 className="text-[18px] tracking-wider font-primary font-semibold mb-2 mb-lg-4">
                        {name}
                      </h4>
                      <p className="font-secondary text-[15px] leading-tight text-justify mb-3 mb-lg-4">
                        {desc}
                      </p>
                    </div>
                    {/* <div className="flex flex-col flex-1 items-end">
                      <a
                        href="#"
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href="#" className="text-gradient text-sm">
                        {link}
                      </a>
                    </div> */}
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
      <div className="h-3/4"></div>
    </section>
  );
};

export default Services;
