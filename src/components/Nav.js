import React, { useEffect, useState } from "react";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquare } from "react-icons/bs";
import { GiJourney } from "react-icons/gi";
import { FaMicroscope } from "react-icons/fa";
import { Link } from "react-scroll";

const navItems = [
  { to: "home",       icon: <BiHomeAlt />,      offset: -80, label: "Home" },
  { to: "about",      icon: <BiUser />,          offset: -80, label: "About" },
  { to: "services",   icon: <BsClipboardData />, offset: -80, label: "Roles" },
  { to: "research",   icon: <FaMicroscope />,    offset: -80, label: "Research" },
  { to: "experience", icon: <GiJourney />,       offset: -80, label: "Journey" },
  { to: "work",       icon: <BsBriefcase />,     offset: -80, label: "Skills" },
  { to: "contact",    icon: <BsChatSquare />,    offset: -80, label: "Contact" },
];

const Nav = () => {
  const [scrollPct, setScrollPct] = useState(0);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const pct = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100;
      setScrollPct(Math.min(100, pct));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Scroll progress */}
      <div
        className="fixed top-0 left-0 h-[3px] z-[9999] bg-green-500 transition-all duration-100"
        style={{ width: `${scrollPct}%` }}
      />

      {/* Floating nav pill */}
      <nav className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center h-12 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200/70 dark:border-slate-700/50 rounded-full px-1.5 gap-0.5 shadow-xl shadow-slate-900/10 dark:shadow-black/50">
          {navItems.map(({ to, icon, offset, label }) => {
            const isActive = active === to;
            return (
              <div key={to} className="relative group/nav">
                <Link
                  spy={true}
                  smooth={true}
                  offset={offset}
                  to={to}
                  aria-label={label}
                  activeClass=""
                  onSetActive={() => setActive(to)}
                  className={`w-9 h-9 flex items-center justify-center rounded-full cursor-pointer transition-all duration-200 text-[16px] ${
                    isActive
                      ? "bg-green-600 text-white"
                      : "text-slate-400 dark:text-green-500 hover:text-slate-700 dark:hover:text-green-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                  }`}
                >
                  {icon}
                </Link>
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 opacity-0 group-hover/nav:opacity-100 transition-opacity duration-200 pointer-events-none">
                  <div className="bg-slate-800 dark:bg-slate-700 text-white text-[10px] font-secondary font-semibold px-2.5 py-1 rounded-lg whitespace-nowrap">
                    {label}
                  </div>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-slate-800 dark:border-t-slate-700" />
                </div>
              </div>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Nav;
