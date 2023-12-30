import React from "react";

import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquare } from "react-icons/bs";
import { GiJourney } from "react-icons/gi";

import { Link } from "react-scroll";

const Nav = () => {
  return (
    <div>
      <nav className="navbar fixed-bottom bottom-2">
        <div className="container mx-auto">
          <div className="items-center w-full bg-black/70 h-[45px] rounded-full max-w-[350px] mx-auto px-3 flex justify-between">
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-10}
              to="header"
              className="cursor-pointer"
            >
              <BiHomeAlt />
            </Link>
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-10}
              to="about"
              className="cursor-pointer"
            >
              <BiUser />
            </Link>
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-10}
              to="services"
              className="cursor-pointer"
            >
              <BsClipboardData />
            </Link>
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={0}
              to="experience"
              className="cursor-pointer"
            >
              <GiJourney />
            </Link>
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={15}
              to="work"
              className="cursor-pointer"
            >
              <BsBriefcase />
            </Link>
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={0}
              to="contact"
              className="cursor-pointer"
            >
              <BsChatSquare />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
