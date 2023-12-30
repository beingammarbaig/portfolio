import React from "react";
import Image from "./image1.png";
import { Link } from "react-scroll";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div
      className="h-screen container-fluid d-flex flex-column align-items-center"
      id="home"
    >
      <div className="h-1/4"></div>
      <div className="container mx-auto">
        <div className="row align-items-center">
          <div className="col-md-7">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[36px] font-bold lg:leading-8 text-center lg:text-[40px] mb-lg-2 text-md-start"
            >
              FARIHA <span>ANSARI</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[30px] mb-2.5 lg:text-[36px] mb-lg-4 font-secondary font-semibold text-uppercase text-center text-md-start"
            >
              <span>I am a </span>
              <TypeAnimation
                sequence={[
                  "Lecturer",
                  2000,
                  "Mathematician",
                  2000,
                  "Member",
                  2000,
                  "Coordinator",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.div
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="d-flex justify-content-center justify-content-md-start d-md-none"
            >
              <img
                className="rounded-circle max-w-[150px] lg:max-w-[200px]"
                src={Image}
                alt=""
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[15px] lg:text-[18px] leading-[1.25] mt-2 mt-lg-3 mb-2 text-justify"
            >
              Passionate mathematician dedicated to inspiring the next
              generation of problem solvers. With a profound love for numbers
              and a commitment to fostering mathematical curiosity, I am excited
              to embark on this educational journey with you. I am a very
              hardworking and ambitious individual. I can easily adjust to a new
              environment as long as I have a chance to do so.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="d-flex gap-3 justify-content-center justify-content-md-start mb-2 align-items-center"
            >
              <button className="btn btn-md text-[12px] lg:text-[15px] xl:text-[20px] px-4 py-2 xl:py-3 px-lg-5 ">
                <Link
                  activeClass="active"
                  mdooth={true}
                  spy={true}
                  offset={60}
                  to="contact"
                  className="cursor-pointer"
                >
                  Contact Me
                </Link>
              </button>
              <a
                href="https://www.ssuet.edu.pk/faculties/ms-fariha-ansari/"
                className="text-gradient btn-link text-center text-[12px] lg:text-[15px] xl:text-[20px] py-2.5"
              >
                My Portfolio
              </a>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[24px] xl:text-[28px] d-flex gap-4 justify-content-center justify-content-md-start mx-[35px]"
            >
              <a href="linkedin.com">
                <FaLinkedin />
              </a>
              <a href="facebook.com">
                <FaFacebook />
              </a>
              <a href="instagram.com">
                <FaInstagram />
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="col-md-5 d-none d-md-flex mx-auto my-5 justify-content-center lg:max-w-[250px] "
          >
            {" "}
            {/* Updated justify-content-center to justify-content-end */}
            <img
              className="rounded-circle"
              src={Image}
              alt=""
            />
          </motion.div>
        </div>
      </div>
      <div className="h-3/4"></div>
    </div>
  );
};

export default Banner;
