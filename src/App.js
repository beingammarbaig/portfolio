import React from 'react';
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import Experience from './components/Experience';
import ScrollToTop from './components/ScrollToTop';
import Research from './components/Research';
import AskFariha from './components/AskFariha';
import { FaEnvelope, FaUniversity, FaMapMarkerAlt, FaDownload, FaPhone } from 'react-icons/fa';

const App = () => {
  return (
    <div className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Header />
      <Banner />
      <Nav />
      <About />
      <Services />
      <Research />
      <Experience />
      <Work />
      <Contact />

      {/* Footer */}
      <footer className="relative bg-slate-900 overflow-hidden">
        {/* Top green accent bar */}
        <div className="h-1 bg-gradient-to-r from-green-600 via-emerald-400 to-green-300" />

        <div className="relative container mx-auto px-4 pt-10 pb-6">
          {/* Three-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

            {/* Column 1 — Brand + bio */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-green-600 flex items-center justify-center flex-shrink-0 shadow-md shadow-green-900/40">
                  <span className="text-white font-primary font-bold text-[14px]">FA</span>
                </div>
                <div>
                  <p className="font-primary font-bold text-[15px] text-white leading-tight">Fariha Ansari</p>
                  <p className="font-secondary text-[11px] text-green-400 mt-0.5">PhD Candidate · SSUET</p>
                </div>
              </div>
              <p className="font-secondary text-[12px] text-slate-400 leading-relaxed mb-4">
                Lecturer of Mathematics with 18+ years at SSUET, Karachi. Bridging graph theory and machine learning in doctoral research.
              </p>
              <a
                href="/Fariha_Ansari_CV.pdf"
                download
                className="inline-flex items-center gap-2 font-secondary text-[11px] font-bold text-white bg-green-600 hover:bg-green-500 transition-colors duration-200 rounded-lg px-3 py-2"
              >
                <FaDownload className="text-[11px]" /> Download CV
              </a>
            </div>

            {/* Column 2 — Quick nav */}
            <div>
              <p className="font-secondary text-[10px] font-bold text-green-500 uppercase tracking-widest mb-4">Quick Links</p>
              <div className="grid grid-cols-2 gap-y-2.5 gap-x-4">
                {[
                  { label: "Home",       href: "#home" },
                  { label: "About",      href: "#about" },
                  { label: "Services",   href: "#services" },
                  { label: "Research",   href: "#research" },
                  { label: "Experience", href: "#experience" },
                  { label: "Contact",    href: "#contact" },
                ].map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center gap-2 font-secondary text-[12px] text-slate-400 hover:text-green-400 transition-colors duration-200"
                  >
                    <span className="w-1 h-1 rounded-full bg-green-500 flex-shrink-0" />
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 3 — Contact info */}
            <div>
              <p className="font-secondary text-[10px] font-bold text-green-500 uppercase tracking-widest mb-4">Get In Touch</p>
              <div className="space-y-3">
                <a
                  href="mailto:fariha.ansari1985@gmail.com"
                  className="flex items-center gap-2.5 font-secondary text-[12px] text-slate-400 hover:text-green-400 transition-colors duration-200"
                >
                  <FaEnvelope className="text-green-500 text-[12px] flex-shrink-0" />
                  fariha.ansari1985@gmail.com
                </a>
                <a
                  href="tel:+923333405700"
                  className="flex items-center gap-2.5 font-secondary text-[12px] text-slate-400 hover:text-green-400 transition-colors duration-200"
                >
                  <FaPhone className="text-green-500 text-[12px] flex-shrink-0" />
                  +92-333-3405700
                </a>
                <a
                  href="https://www.ssuet.edu.pk/faculties/ms-fariha-ansari/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 font-secondary text-[12px] text-slate-400 hover:text-green-400 transition-colors duration-200"
                >
                  <FaUniversity className="text-green-500 text-[12px] flex-shrink-0" />
                  SSUET Faculty Profile
                </a>
                <div className="flex items-start gap-2.5 font-secondary text-[12px] text-slate-500">
                  <FaMapMarkerAlt className="text-green-500 text-[12px] flex-shrink-0 mt-0.5" />
                  Dept. of Mathematics &amp; Sciences, SSUET, Karachi
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-5 border-t border-slate-700/60 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
            <p className="font-secondary text-[11px] text-slate-500">
              © {new Date().getFullYear()} Fariha Ansari. All rights reserved.
            </p>
            <p className="font-secondary text-[10px] text-slate-600">
              Sir Syed University of Engineering &amp; Technology · Karachi, Pakistan
            </p>
          </div>
        </div>
      </footer>

      <ScrollToTop />
      <AskFariha />
    </div>
  );
};

export default App;
