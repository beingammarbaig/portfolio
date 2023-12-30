import React from "react";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const Work = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center" id="experience">
      <div className="h-1/4"></div>
      <div className="container mx-auto">
        <h2 className="h2 leading-tight text-accent mb-1 lg:mb-4 text-center">
          My Journey
        </h2>
        <div className="flex flex-col lg:flex-row text-justify">
          <div className="flex-1 ml-4 mr-0">
            <header className="h3 mb-0.5 text-[20px] lg:text-[26px]">Education</header>
            <div className="border-l pl-[35px] lg:pr-[35px] py-2">
              <div className="relative border-all border-[1px] bg-black cursor-pointer group mb-0.5 lg:mb-6">
                <div className="p-1 lg:p-4 lg:px-3 lg:py-2 education box group-hover:bg-white/10 transition-all duration-500">
                  <motion.div
                    variants={fadeIn("left", 0.5)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.3 }}
                  >
                    <h4 className="lg:mt-1 text-[10px] lg:text-[15px] lg:leading-[10px] leading-[10px] font-semibold">
                      2011 - 2013
                    </h4>
                    <h3 className="text-gradient text-[10px] leading-[10px] lg:leading-[20px] lg:text-[15px]">M.S. in Pure Mathematics</h3>
                    <p className="leading-[10px] text-[10px] lg:leading-[12px] lg:text-[15px]">
                      Sir Syed University of Engineering & Technology
                    </p>
                  </motion.div>
                </div>
              </div>
              <div className="relative border-all border-[1px] bg-black cursor-pointer group mb-0.5 lg:mb-6">
                <div className="p-1 lg:p-4 lg:px-3 lg:py-2  education box group-hover:bg-white/10 transition-all duration-500">
                  <motion.div
                    variants={fadeIn("left", 0.5)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.3 }}
                  >
                    <h4 className="mt-0.5 lg:mt-1 text-[10px] lg:text-[15px] lg:leading-[10px] leading-[10px] font-semibold">
                      2004 - 2007
                    </h4>
                    <h3 className="text-gradient text-[10px] leading-[10px] lg:leading-[20px] lg:text-[15px]">M.S. in Pure Mathematics</h3>
                    <p className="leading-[10px] text-[10px] lg:leading-[12px] lg:text-[15px]">Karachi University</p>
                  </motion.div>{" "}
                </div>
              </div>
              <div className="relative border-all border-[1px] bg-black cursor-pointer group mb-0.5 lg:mb-6">
                <div className="p-1 lg:p-4 lg:px-3 lg:py-2 education box group-hover:bg-white/10 transition-all duration-500">
                  <motion.div
                    variants={fadeIn("left", 0.5)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.3 }}
                  >
                    <h4 className="mt-0.5 lg:mt-1 text-[10px] lg:text-[15px] lg:leading-[10px] leading-[10px] font-semibold">
                      2002 - 2003
                    </h4>
                    <h3 className="text-gradient text-[10px] leading-[10px] lg:leading-[20px] lg:text-[15px]">H.S.C. in Pre-Engineering</h3>
                    <p className="leading-[10px] text-[10px] lg:leading-[12px] lg:text-[15px]">Govt. St. Joseph College</p>
                  </motion.div>
                </div>
              </div>
              <div className="relative border-all border-[1px] bg-black cursor-pointer group mb-0.5 lg:mb-6">
                <div className="p-1 lg:p-4 lg:px-3 lg:py-2 education box group-hover:bg-white/10 transition-all duration-500">
                  <motion.div
                    variants={fadeIn("left", 0.5)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.3 }}
                  >
                    {" "}
                    <h4 className="lg:mt-1 text-[10px] lg:text-[15px] lg:leading-[10px] leading-[10px] font-semibold">
                      1996 - 2001
                    </h4>
                    <h3 className="text-gradient text-[10px] leading-[10px] lg:leading-[20px] lg:text-[15px]">
                      S.S.C. in Computer Science
                    </h3>
                    <p className="leading-[10px] text-[10px] lg:leading-[12px] lg:text-[15px]">
                      Delhi Govt. Girls Secondary College
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 ml-4 mr-0">
            <div className="">
              <header className="h3 mb-0.5 text-[20px] lg:text-[26px]">Experience</header>
              <div className="border-l pl-[35px] lg:px[35px] py-2">
                <div className="relative border-all border-[1px] bg-black cursor-pointer group mb-0.5">
                  <div className="p-1 lg:p-4 lg:px-3 lg:py-2 experience box group-hover:bg-white/10 transition-all duration-500">
                    <motion.div
                      variants={fadeIn("left", 0.5)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{ once: false, amount: 0.3 }}
                    >
                      {" "}
                      <h4 className="mt-0.5 lg:mt-1 text-[10px] lg:text-[15px] lg:leading-[10px] leading-[10px] font-semibold">
                        2012 - Present
                      </h4>
                      <h3 className="text-gradient text-[10px] leading-[10px] lg:leading-[20px] lg:text-[15px]">Mathematics Lecturer</h3>
                      <p className="leading-[10px] text-[10px] lg:leading-[12px] lg:text-[15px]">
                        Sir Syed University of Engineering and Technology
                      </p>
                    </motion.div>
                  </div>
                </div>
                <div className="relative border-all border-[1px] bg-black cursor-pointer group mb-0.5">
                  <div className="p-1 lg:p-4 lg:px-3 lg:py-2 experience box group-hover:bg-white/10 transition-all duration-500">
                    <motion.div
                      variants={fadeIn("left", 0.5)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{ once: false, amount: 0.3 }}
                    >
                      <h4 className="mt-0.5 lg:mt-1 text-[10px] lg:text-[15px] lg:leading-[10px] leading-[10px] font-semibold">
                        2008 - 2012
                      </h4>
                      <h3 className="text-gradient text-[10px] leading-[10px] lg:leading-[20px] lg:text-[15px]">
                        Mathematics Jr. Lecturer
                      </h3>
                      <p className="leading-[10px] text-[10px] lg:leading-[12px] lg:text-[15px]">
                        Sir Syed University of Engineering and Technology
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <header className="h3 mb-0.5 text-[20px] lg:text-[26px]">Memberships</header>
              <div className="border-l pl-[35px] lg:pr[35px] pt-2 pb-4">
                <div className="relative border-all border-[1px] bg-black cursor-pointer group mb-0.5">
                  <div className="p-1 lg:p-4 lg:px-3 lg:py-2 membership box group-hover:bg-white/10 transition-all duration-500">
                    <motion.div
                      variants={fadeIn("left", 0.5)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{ once: false, amount: 0.3 }}
                    >
                      <h4 className="mt-0.5 lg:mt-1 text-[10px] lg:text-[15px] lg:leading-[10px] leading-[10px] font-semibold">
                        2015 - Present
                      </h4>
                      <h3 className="text-gradient text-[10px] leading-[10px] lg:leading-[20px] lg:text-[15px]">Member of SAR Committee</h3>
                      <p className="leading-[10px] text-[10px] lg:leading-[12px] lg:text-[15px]">
                        Sir Syed University of Engineering and Technology
                      </p>
                    </motion.div>
                  </div>
                </div>

                <div className="relative border-all border-[1px] bg-black cursor-pointer group mb-0.5">
                  <div className="p-1 lg:p-4 lg:px-3 lg:py-2 membership box group-hover:bg-white/10 transition-all duration-500">
                    <motion.div
                      variants={fadeIn("left", 0.5)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{ once: false, amount: 0.3 }}
                    >
                      {" "}
                      <h4 className="mt-0.5 lg:mt-1 text-[10px] lg:text-[15px] lg:leading-[10px] leading-[10px] font-semibold">
                        2019 - Present
                      </h4>
                      <h3 className="text-gradient text-[10px] leading-[10px] lg:leading-[20px] lg:text-[15px]">
                        Coordinator of VLE Committee
                      </h3>
                      <p className="leading-[10px] text-[10px] lg:leading-[12px] lg:text-[15px]">
                        Sir Syed University of Engineering and Technology
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-3/4"></div>
    </section>
  );
};

export default Work;
