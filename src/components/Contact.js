import React, { useState } from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const validateEmail = (email) => {
    // Regular expression pattern for a basic email check
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (name.trim() === "" || message.trim() === "") {
      alert("Please fill in all required fields");
      return;
    } else if (!validateEmail(email)) {
      alert("Please enter a valid email address");
      return;
    } else {
      emailjs
        .sendForm(
          "service_2sjbc74",
          "template_qei1hea",
          form.current,
          "_v9J-jd4sPmzRkIKI"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
    alert("Form Submitted");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section
      className="h-screen flex flex-col justify-center items-center mt-10"
      id="contact"
    >
      <div className="h-1/4"></div>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-center items-center"
          >
            <div>
              <h4 className="text-xl text-accent uppercase font-medium tracking-wide">
                Get In Touch
              </h4>
              <h2 className="text-[46px] lg:text-[90px] leading-none mb-12">
                Let's Work <br /> Together
              </h2>
            </div>
          </motion.div>

          <motion.form
            ref={form}
            onSubmit={sendEmail}
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded flex flex-col gap-y-6 p-6"
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Your name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Your email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              className="bg-transparent border-b pt-3 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-2 md:mb-12"
              placeholder="Your message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button className="btn btn-lg">Send message</button>
          </motion.form>
        </div>
      </div>
      <div className="h-3/4"></div>
    </section>
  );
};

export default Contact;
