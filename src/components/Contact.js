import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaExternalLinkAlt, FaFlask, FaComments, FaChalkboardTeacher, FaGraduationCap } from "react-icons/fa";

const contactDetails = [
  { icon: <FaPhone />, label: "Phone", value: "+92-333-3405700", href: "tel:+923333405700" },
  { icon: <FaEnvelope />, label: "Email", value: "fariha.ansari1985@gmail.com", href: "mailto:fariha.ansari1985@gmail.com" },
  { icon: <FaMapMarkerAlt />, label: "Institution", value: "SSUET, Karachi, Pakistan", href: null },
  { icon: <FaExternalLinkAlt />, label: "Faculty Page", value: "ssuet.edu.pk/faculties/…", href: "https://www.ssuet.edu.pk/faculties/ms-fariha-ansari/" },
];

const availableFor = [
  { label: "Research Collaboration", icon: <FaFlask /> },
  { label: "Academic Consultation", icon: <FaComments /> },
  { label: "Invited Lectures", icon: <FaChalkboardTeacher /> },
  { label: "OBE & Curriculum Advisory", icon: <FaGraduationCap /> },
];

const validateEmail = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) { setStatus("error:Please fill in all required fields."); return; }
    if (!validateEmail(email)) { setStatus("error:Please enter a valid email address."); return; }
    setLoading(true); setStatus("");
    fetch("https://formsubmit.co/ajax/ammarbaig230903@gmail.com", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ name, email, message }),
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.success === "true" || data.success === true) {
          setStatus("success:Message sent successfully! I'll respond within 1–2 business days.");
          setName(""); setEmail(""); setMessage("");
        } else {
          setStatus("error:Something went wrong. Please try again.");
        }
      })
      .catch(() => setStatus("error:Something went wrong. Please try again."))
      .finally(() => setLoading(false));
  };

  const [statusType, statusMsg] = status.includes(":") ? [status.split(":")[0], status.slice(status.indexOf(":") + 1)] : ["", ""];

  return (
    <section id="contact" className="relative py-14 pb-24 lg:py-28 bg-green-50 dark:bg-slate-900 border-t border-green-100 dark:border-slate-800 overflow-hidden">
      {/* Section number */}
      <div className="absolute top-4 right-6 font-primary font-bold text-[60px] sm:text-[90px] lg:text-[130px] leading-none text-green-100 dark:text-green-900/30 select-none pointer-events-none">
        06
      </div>

      <div className="container mx-auto px-4 relative z-10">

        <motion.div variants={fadeIn("up", 0.05)} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-10">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-secondary font-bold text-green-600 dark:text-green-400 uppercase tracking-widest mb-3">
            <span className="w-5 h-px bg-green-500" /> Contact
          </span>
          <h2 className="font-primary text-[30px] lg:text-[40px] font-bold text-slate-900 dark:text-white leading-tight">
            Get In Touch
          </h2>
          <p className="font-secondary text-[14px] text-slate-500 dark:text-slate-400 mt-2 max-w-[440px]">
            For academic collaboration, research inquiries, or institutional opportunities — I'd love to hear from you.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">

          {/* Left — info + availability */}
          <motion.div variants={fadeIn("right", 0.1)} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="lg:w-[300px] flex-shrink-0 flex flex-col gap-4">

            {/* Availability status — enhanced */}
            <div className="relative bg-white dark:bg-slate-800 border border-green-200 dark:border-green-800 rounded-2xl overflow-hidden shadow-sm">
              {/* Top gradient stripe */}
              <div className="h-1.5 bg-gradient-to-r from-green-500 to-emerald-400" />
              {/* Ambient green glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-50/60 to-transparent dark:from-green-900/10 dark:to-transparent pointer-events-none" />

              <div className="relative p-3.5">
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="relative flex-shrink-0">
                      <span className="block w-2.5 h-2.5 rounded-full bg-green-500" />
                      <span className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-green-400 animate-ping opacity-60" />
                    </div>
                    <p className="font-secondary text-[11px] font-bold text-green-700 dark:text-green-400 uppercase tracking-widest">
                      Currently Available
                    </p>
                  </div>
                  <span className="text-[9px] font-secondary font-bold text-green-700 dark:text-green-400 bg-green-100 dark:bg-green-900/40 border border-green-300 dark:border-green-700 rounded-full px-2 py-0.5">
                    Open
                  </span>
                </div>

                {/* Items */}
                <div className="space-y-1.5">
                  {availableFor.map(({ label, icon }) => (
                    <div
                      key={label}
                      className="flex items-center gap-2.5 p-2 rounded-lg bg-white dark:bg-slate-900/50 border border-green-100 dark:border-green-900/60 hover:border-green-300 dark:hover:border-green-700 hover:shadow-sm transition-all duration-150"
                    >
                      <div className="w-6 h-6 rounded-md bg-green-50 dark:bg-green-900/40 border border-green-200 dark:border-green-800 flex items-center justify-center flex-shrink-0 text-green-600 dark:text-green-400 text-[10px]">
                        {icon}
                      </div>
                      <span className="font-secondary text-[11.5px] font-medium text-slate-700 dark:text-slate-200">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Footer note */}
                <div className="mt-3 pt-2.5 border-t border-green-100 dark:border-green-900/60">
                  <p className="font-secondary text-[10px] text-slate-400 dark:text-slate-500 text-center">
                    Responds within{" "}
                    <span className="font-semibold text-green-600 dark:text-green-400">1–2 business days</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Contact details */}
            {contactDetails.map(({ icon, label, value, href }, i) => (
              <div key={i} className="flex items-center gap-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-3 hover:border-green-300 dark:hover:border-green-700 transition-colors duration-200">
                <div className="w-8 h-8 rounded-lg bg-green-50 dark:bg-green-900/30 border border-green-100 dark:border-green-800 flex items-center justify-center text-green-600 dark:text-green-400 flex-shrink-0 text-[12px]">
                  {icon}
                </div>
                <div className="min-w-0">
                  <p className="font-secondary text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-widest">{label}</p>
                  {href ? (
                    <a href={href} target={href.startsWith("http") ? "_blank" : "_self"} rel="noreferrer"
                      className="font-secondary text-[12px] font-medium text-slate-700 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200 break-all">
                      {value}
                    </a>
                  ) : (
                    <p className="font-secondary text-[12px] font-medium text-slate-700 dark:text-slate-300">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right — form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            variants={fadeIn("left", 0.1)}
            initial="hidden" whileInView="show" viewport={{ once: true }}
            className="flex-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 lg:p-8 shadow-sm"
          >
            <p className="font-primary text-[16px] font-bold text-slate-800 dark:text-white mb-1">Send a Message</p>
            <p className="font-secondary text-[12px] text-slate-400 dark:text-slate-500 mb-6">I typically respond within 1–2 business days.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block font-secondary text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-1.5">Your Name *</label>
                <input
                  className="w-full border border-slate-200 dark:border-slate-600 rounded-lg px-4 py-2.5 font-secondary text-[14px] text-slate-800 dark:text-white bg-white dark:bg-slate-900 placeholder:text-slate-300 dark:placeholder:text-slate-600 focus:outline-none focus:border-green-400 dark:focus:border-green-600 transition-colors duration-200"
                  type="text" placeholder="Your full name"
                  value={name} onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label className="block font-secondary text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-1.5">Email Address *</label>
                <input
                  className="w-full border border-slate-200 dark:border-slate-600 rounded-lg px-4 py-2.5 font-secondary text-[14px] text-slate-800 dark:text-white bg-white dark:bg-slate-900 placeholder:text-slate-300 dark:placeholder:text-slate-600 focus:outline-none focus:border-green-400 dark:focus:border-green-600 transition-colors duration-200"
                  type="email" placeholder="you@example.com"
                  value={email} onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-5">
              <label className="block font-secondary text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-1.5">Message *</label>
              <textarea
                className="w-full border border-slate-200 dark:border-slate-600 rounded-lg px-4 py-3 font-secondary text-[14px] text-slate-800 dark:text-white bg-white dark:bg-slate-900 placeholder:text-slate-300 dark:placeholder:text-slate-600 focus:outline-none focus:border-green-400 dark:focus:border-green-600 transition-colors duration-200 resize-none"
                rows={5} placeholder="Your message, research inquiry, or collaboration proposal…"
                value={message} onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            {status && (
              <div className={`mb-4 p-3 rounded-lg font-secondary text-[13px] ${statusType === "success"
                  ? "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800"
                  : "bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800"
                }`}>
                {statusMsg}
              </div>
            )}

            <button
              className="bg-green-600 hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-secondary font-semibold text-[14px] px-8 py-3 rounded-lg transition-colors duration-200 w-full sm:w-auto"
              disabled={loading}
            >
              {loading ? "Sending…" : "Send Message →"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
