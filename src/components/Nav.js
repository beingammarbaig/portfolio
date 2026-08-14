import React, { useEffect, useState } from "react";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquare } from "react-icons/bs";
import { GiJourney } from "react-icons/gi";
import { FaMicroscope } from "react-icons/fa";
import { Link } from "react-scroll";

const Nav = () => {
  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const pct = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100;
      setScrollPct(Math.min(100, pct));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { to: "header",     icon: <BiHomeAlt />,       offset: -10, label: "Home" },
    { to: "about",      icon: <BiUser />,           offset: -10, label: "About" },
    { to: "services",   icon: <BsClipboardData />,  offset: -10, label: "What I Do" },
    { to: "research",   icon: <FaMicroscope />,     offset: 0,   label: "Research" },
    { to: "experience", icon: <GiJourney />,        offset: 0,   label: "Journey" },
    { to: "work",       icon: <BsBriefcase />,      offset: 15,  label: "Skills" },
    { to: "contact",    icon: <BsChatSquare />,     offset: 0,   label: "Contact" },
  ];

  return (
    <>
      {/* Scroll progress bar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "3px",
          width: `${scrollPct}%`,
          background: "linear-gradient(90deg,#ff56f6,#b936ee,#406aff)",
          zIndex: 9999,
          transition: "width 0.1s linear",
          borderRadius: "0 2px 2px 0",
          boxShadow: "0 0 8px rgba(255, 86, 246, 0.7)",
        }}
      />

      {/* Nav pill */}
      <nav className="navbar fixed-bottom bottom-2" style={{ zIndex: 50 }}>
        <div className="container mx-auto">
          <div
            className="items-center w-full h-[48px] rounded-full max-w-[420px] w-[94vw] mx-auto px-3 flex justify-between"
            style={{
              background: "rgba(0,0,0,0.5)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.5)",
            }}
          >
            {navItems.map(({ to, icon, offset, label }) => (
              <div key={to} className="relative group/nav">
                <Link
                  activeClass="active"
                  smooth={true}
                  spy={true}
                  offset={offset}
                  to={to}
                  aria-label={`Go to ${label} section`}
                  className="cursor-pointer text-gray-400 hover:text-accent transition-colors duration-300 text-[17px] p-1 flex items-center"
                >
                  {icon}
                </Link>
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-0.5 rounded text-[9px] font-primary tracking-wide whitespace-nowrap bg-gray-800/90 text-white opacity-0 group-hover/nav:opacity-100 transition-opacity duration-200 pointer-events-none">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
