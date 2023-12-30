import React from "react";

import { useInView } from "react-intersection-observer";

import CountUp from "react-countup";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

import "react-circular-progressbar/dist/styles.css";

const Work = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    // <section className="section" id="work">
    //   <div className="container mx-auto">
    //     <div className="flex flex-col lg:flex-row gap-x-4">
    //       <motion.div
    //         variants={fadeIn("right", 0.3)}
    //         initial="hidden"
    //         whileInView={"show"}
    //         viewport={{ once: false, amount: 0.3 }}
    //         className="flex flex-col gap-y-8 mb-4 lg:mb-0"
    //       >
    //         <div>
    //           <h2 className="h2 leading-tight text-accent mb-4">
    //             My Latest <br /> Work
    //           </h2>
    //           <p className="max-w-xl mb-4">
    //             lorem 20sdfdafa sdgds gdg s gsd g asdgsd g ds g ds g asdg a sdg
    //             ds g rdfr d fha df ardf gard fga rdf gad fg arfd ga rda rd
    //           </p>
    //           <button className="btn btn-sm">View All Projects</button>
    //         </div>
    //         <div className="max-h-[240px] group relative overflow-hidden border-2 border-white/20 rounded-xl">
    //           <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-width-1s duration-500 duration-300"></div>
    //           <img
    //             className="group-hover:scale-125 transition-width-1s duration-500 duration-500"
    //             alt="#"
    //             src="https://www.appsdevpro.com/blog/wp-content/uploads/2022/06/Ui-ux-cover-imge.jpg"
    //           ></img>
    //           <div className="text-gradient absolute -bottom-full left-12 group-hover:bottom-24 transition-width-1s duration-500 duration-500 z-50">
    //             <span>UI/UX Designer</span>
    //           </div>
    //           <div className="text-gradient absolute -bottom-full left-12 group-hover:bottom-14 transition-width-1s duration-500 duration-700 z-50">
    //             <span className="text-3x1 text-white">Project Title</span>
    //           </div>
    //         </div>
    //       </motion.div>
    //       <motion.div
    //         variants={fadeIn("left", 0.2)}
    //         initial="hidden"
    //         whileInView={"show"}
    //         viewport={{ once: false, amount: 0.3 }}
    //         className="flex flex-col gap-y-4"
    //       >
    //         <div className="max-h-[240px] group relative overflow-hidden border-2 border-white/20 rounded-xl">
    //           <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-width-1s duration-500 duration-300"></div>
    //           <img
    //             className="group-hover:scale-125 transition-width-1s duration-500 duration-500"
    //             alt="#"
    //             src="https://www.appsdevpro.com/blog/wp-content/uploads/2022/06/Ui-ux-cover-imge.jpg"
    //           ></img>
    //           <div className="text-gradient absolute -bottom-full left-12 group-hover:bottom-24 transition-width-1s duration-500 duration-500 z-50">
    //             <span>UI/UX Designer</span>
    //           </div>
    //           <div className="text-gradient absolute -bottom-full left-12 group-hover:bottom-14 transition-width-1s duration-500 duration-700 z-50">
    //             <span className="text-3x1 text-white">Project Title</span>
    //           </div>
    //         </div>
    //         <div className="max-h-[240px] group relative overflow-hidden border-2 border-white/20 rounded-xl">
    //           <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-width-1s duration-500 duration-300"></div>
    //           <img
    //             className="group-hover:scale-125 transition-width-1s duration-500 duration-500"
    //             alt="#"
    //             src="https://www.appsdevpro.com/blog/wp-content/uploads/2022/06/Ui-ux-cover-imge.jpg"
    //           ></img>
    //           <div className="text-gradient absolute -bottom-full left-12 group-hover:bottom-24 transition-width-1s duration-500 duration-500 z-50">
    //             <span>UI/UX Designer</span>
    //           </div>
    //           <div className="text-gradient absolute -bottom-full left-12 group-hover:bottom-14 transition-width-1s duration-500 duration-700 z-50">
    //             <span className="text-3x1 text-white">Project Title</span>
    //           </div>
    //         </div>
    //       </motion.div>
    //     </div>
    //   </div>
    // </section>

    <section className="h-screen flex flex-col justify-center items-center mt-10" id="work" ref={ref}>
      <div className="h-1/4"></div>
      <div className="container mx-auto">
        <div className="flex flex-col gap-x-12 lg:flex-row">
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:mt-5"
          >
            <h2 className="h2 leading-tight text-accent mb-2 mb-lg-4">My Skills</h2>
            <h3 className="h3 text-[18px] lg:h3 mb-2 mb-lg-4">Every Day is a new challenge</h3>
            <p className="text-justify lg:text-[20px] text-[15px] leading-[1.1] mb-2">
              As a mathematics lecturer, I bring a diverse set of skills to my
              portfolio. Proficient in MS Office, I effectively utilize
              technology to enhance my teaching, research, and educational
              leadership. My dedication to staff development and the integration
              of educational technology into the learning environment
              underscores my commitment to delivering high-quality mathematics
              education.
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <motion.div
              variants={fadeIn("down", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="flex justify-center items-center gap-x-4 mt-4">
                <h4 className="text-[12px] lg:text-[20px] tracking-wider font-primary font-semibold my-2">
                  Teaching
                </h4>
                <div className="ml-2  w-full">
                  <div className="progress-bar">
                    {inView ? <div className="teaching"></div> : null}
                  </div>
                </div>

                <span className=" text-white text-lg font-medium">
                  {inView ? <CountUp start={0} end={90} duration={2} /> : 0}%
                </span>
              </div>
              <div className="flex justify-center items-center gap-x-4">
                <h4 className="text-[12px] lg:text-[20px] tracking-wider font-primary font-semibold my-2">
                  Research
                </h4>
                <div className="ml-1 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div className="progress-bar">
                    {inView ? (
                      <div className="research">
                        <span></span>
                      </div>
                    ) : null}
                  </div>
                </div>

                <span className=" text-white text-lg font-medium">
                  {" "}
                  {inView ? <CountUp start={0} end={80} duration={2} /> : null}%
                </span>
              </div>
              <div className="flex justify-center items-center gap-x-4">
                <div className="flex">
                  <h4 className="text-[12px] lg:text-[20px] tracking-wider font-primary font-semibold my-2 gap-x-10">
                    <span>MS</span>
                    <span className="ml-2">Office</span>
                  </h4>
                </div>
                <div className=" w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div className="progress-bar">
                    {inView ? (
                      <div className="msoffice">
                        <span></span>
                      </div>
                    ) : null}
                  </div>
                </div>

                <span className=" text-white text-lg font-medium">
                  {" "}
                  {inView ? <CountUp start={0} end={95} duration={2} /> : null}%
                </span>
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="lg:mt-[-15px] mt-2 flex flex-row gap-x-2 lg:gap-x-8"
            >
              {/* <div className="flex-1">
                <div className="radial-bars">
                  {inView ? (
                    <svg x="0px" y="0px" viewBox="0 0 200 200">
                      <circle
                        className="progress-bar"
                        cx="100"
                        cy="100"
                        r="80"
                      ></circle>
                      <circle
                        className="path path-1"
                        cx="100"
                        cy="100"
                        r="80"
                      ></circle>
                    </svg>
                  ) : null}
                  <div className="percentage">
                    {inView ? (
                      <CountUp start={0} end={70} duration={2} />
                    ) : null}
                    %
                  </div>
                </div>
                <h4 className="mt-4 text-center text-[12px] lg:text-[20px] tracking-wider font-primary font-semibold mb-6">
                  Staff Development
                </h4>
              </div> */}
              <div className="flex-1">
                <div className="radial-bars">
                  {inView ? (
                    <svg x="0px" y="0px" viewBox="0 0 200 200">
                      <circle
                        className="progress-bar"
                        cx="100"
                        cy="100"
                        r="80"
                      ></circle>
                      <circle
                        className="path path-1"
                        cx="100"
                        cy="100"
                        r="80"
                      ></circle>
                    </svg>
                  ) : null}
                  <div className="percentage">
                    {inView ? (
                      <CountUp start={0} end={70} duration={2} />
                    ) : null}
                    %
                  </div>
                </div>
                <h4 className="lg:mt-[-20px] mt-[-30px] text-center text-[12px] lg:text-[20px] tracking-wider font-primary font-semibold mb-6">
                  Staff Development
                </h4>
              </div>
              <div className="flex-1">
                <div className="radial-bars">
                  {inView ? (
                    <svg x="0px" y="0px" viewBox="0 0 200 200">
                      <circle
                        className="progress-bar"
                        cx="100"
                        cy="100"
                        r="80"
                      ></circle>
                      <circle
                        className="path path-2"
                        cx="100"
                        cy="100"
                        r="80"
                      ></circle>
                    </svg>
                  ) : null}
                  <div className="percentage">
                    {inView ? (
                      <CountUp start={0} end={85} duration={2} />
                    ) : null}
                    %
                  </div>
                </div>
                <h4 className="mt-[-30px] lg:mt-[-20px] text-center text-[12px] lg:text-[20px] tracking-wider font-primary font-semibold mb-6">
                  Educational Leadership
                </h4>
              </div>
              <div className="flex-1">
                <div className="radial-bars">
                  {inView ? (
                    <svg x="0px" y="0px" viewBox="0 0 200 200">
                      <circle
                        className="progress-bar"
                        cx="100"
                        cy="100"
                        r="80"
                      ></circle>
                      <circle
                        className="path path-3"
                        cx="100"
                        cy="100"
                        r="80"
                      ></circle>
                    </svg>
                  ) : null}
                  <div className="percentage">
                    {inView ? (
                      <CountUp start={0} end={75} duration={2} />
                    ) : null}
                    %
                  </div>
                </div>
                <h4 className="mt-[-30px] mt-[-20px] text-center text-[12px] lg:text-[20px] tracking-wider font-primary font-semibold mb-6">
                  Educational Technology
                </h4>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div className="h-3/4"></div>
    </section>
  );
};

export default Work;
