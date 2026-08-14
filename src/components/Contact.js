import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import emailjs from "@emailjs/browser";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin } from "react-icons/fa";

const contactDetails = [
  { icon: <FaPhone />, label: "Phone", value: "+92-333-3405700", href: "tel:+923333405700" },
  { icon: <FaEnvelope />, label: "Email", value: "fariha.ansari1985@gmail.com", href: "mailto:fariha.ansari1985@gmail.com" },
  { icon: <FaMapMarkerAlt />, label: "Institution", value: "SSUET, Karachi, Pakistan" },
  { icon: <FaLinkedin />, label: "Profile", value: "ssuet.edu.pk/faculties/ms-fariha-ansari", href: "https://www.ssuet.edu.pk/faculties/ms-fariha-ansari/" },
];

const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      setStatus("error:Please fill in all required fields.");
      return;
    }
    if (!validateEmail(email)) {
      setStatus("error:Please enter a valid email address.");
      return;
    }
    setLoading(true);
    setStatus("");
    fetch("https://formsubmit.co/ajax/ammarbaig230903@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success === "true" || data.success === true) {
          setStatus("success:Message sent successfully!");
          setName("");
          setEmail("");
          setMessage("");
        } else {
          setStatus("error:Something went wrong. Please try again.");
        }
      })
      .catch(() => setStatus("error:Something went wrong. Please try again."))
      .finally(() => setLoading(false));
  };

  const [statusType, statusMsg] = status.split(":") || [];

  return (
    <section className="min-h-screen flex flex-col justify-center items-center py-16" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-12">

          {/* Left – contact info */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col justify-center mb-10 lg:mb-0"
          >
            <h4 className="text-sm text-accent uppercase font-medium tracking-widest mb-2">Get In Touch</h4>
            <h2 className="text-[28px] sm:text-[36px] lg:text-[64px] font-primary font-bold leading-none mb-5 lg:mb-8 text-white">
              Let's<br /><span className="text-gradient">Collaborate</span>
            </h2>

            <div className="flex flex-col gap-4">
              {contactDetails.map(({ icon, label, value, href }, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn("right", 0.2 + i * 0.1)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.3 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-[15px] flex-shrink-0 group-hover:border-accent/50 group-hover:bg-accent/15 transition-all duration-300">
                    {icon}
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest font-primary">{label}</p>
                    {href ? (
                      <a href={href} target={href.startsWith("http") ? "_blank" : "_self"} rel="noreferrer"
                        className="text-[13px] lg:text-[14px] text-white/80 hover:text-accent transition-colors duration-300 break-all">
                        {value}
                      </a>
                    ) : (
                      <p className="text-[13px] lg:text-[14px] text-white/80">{value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right – form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl flex flex-col gap-y-5 p-6 lg:p-8 shadow-sm"
          >
            <div>
              <label className="text-[11px] text-white/60 uppercase tracking-widest font-primary mb-1 block">Your Name *</label>
              <input
                className="bg-transparent border-b border-white/20 py-2.5 outline-none w-full placeholder:text-white/40 focus:border-accent transition-all duration-300 text-[14px] text-white"
                type="text"
                placeholder="Fariha Ansari"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label className="text-[11px] text-white/60 uppercase tracking-widest font-primary mb-1 block">Email Address *</label>
              <input
                className="bg-transparent border-b border-white/20 py-2.5 outline-none w-full placeholder:text-white/40 focus:border-accent transition-all duration-300 text-[14px] text-white"
                type="email"
                placeholder="you@example.com"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="text-[11px] text-white/60 uppercase tracking-widest font-primary mb-1 block">Message *</label>
              <textarea
                className="bg-transparent border-b border-white/20 pt-2.5 outline-none w-full placeholder:text-white/40 focus:border-accent transition-all duration-300 resize-none text-[14px] text-white"
                placeholder="Your message..."
                name="message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            {status && (
              <p className={`text-[13px] ${statusType === "success" ? "text-green-600" : "text-red-500"}`}>
                {statusMsg}
              </p>
            )}

            <button className="btn btn-lg self-start px-8 py-3 disabled:opacity-60 disabled:cursor-not-allowed text-white" disabled={loading}>
              {loading ? "Sending…" : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
