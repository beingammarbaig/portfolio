import React from "react";

import CountUp from "react-countup";

import { useInView } from "react-intersection-observer";

import Image from "./image.png";

import { Link } from "react-scroll";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section id="about" className="h-screen flex flex-col justify-center items-center" ref={ref}>
      <div className="h-1/4"></div>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-2 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="m-auto flex-1 bg-contain bg-no-repeat max-w-[200px] lg:h-[300px] mix-blend-lighten bg-top lg:max-w-[300px]"
          >
            <img className="" src={Image} alt="" />
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 mb-2 mb-lg-4 text-accent">About Me</h2>
            <h3 className="h3 text-[20px] leading-[20px] lg:text-[22px] lg:leading-[22px] mb-3 mb-lg-4 text-justify">
              I'm a Mathematics Lecturer with over 14 years of experience
            </h3>
            <p className="mb-3 text-[12px] lg:text-[20px] text-justify mb-lg-5">
              I am a passionate mathematics lecturer with a deep love for
              numbers and a commitment to inspiring my students. With a strong
              background in mathematical theory and a knack for making complex
              concepts understandable, I aim to empower my students with the
              skills and confidence to excel in their mathematical journey.
            </p>
            <div className="flex gap-x-6 lg:gap-x-10 mb-4">
              <div className="items-center">
                <div className="text-[24px] lg:text-[32px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={15} duration={5} /> : null}+
                </div>
                <div className="font-primary text-[12px] leading-[1.5] lg:text-sm tracking-[2px]">
                  Years of <br />
                  Experience
                </div>
              </div>
              <div>
                <div className="text-[24px] lg:text-[32px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={5} duration={5} /> : null}+
                </div>
                <div className="font-primary text-[12px] leading-[1.5] lg:text-sm tracking-[2px]">
                  Courses Of <br />
                  Teaching
                </div>  
              </div>
              <div>
                <div className="text-[24px] lg:text-[32px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={5} duration={5} /> : null}
                  k+
                </div>
                <div className="font-primary text-[12px] leading-[1.5] lg:text-sm tracking-[2px]">
                  Graduated
                  <br />
                  Students
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center"></div>
          </motion.div>
        </div>
      </div><div className="h-3/4"></div>
    </section>
  );
};

export default About;
