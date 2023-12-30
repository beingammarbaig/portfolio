import React from "react";

import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className="container" id="header">
      <div className="mt-2 d-flex justify-content-between align-items-center">
        <div>
          <h3 className="h3 text-[26px] xl:text-[40px] text-gradient">FARIHA</h3>
          <h3 className="h3 text-[26px] xl:text-[40px] leading-[60px] xl:leading-[100px]">ANSARI</h3>
        </div>
        <btn className="mt-2 btn btn-sm text-xs lg:text-[15px] xl:text-[22px] lg:py-4 xl:py-6 py-2.5 align-items-center justify-content-between">
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            offset={60}
            to="contact"
            className="cursor-pointer"
          >
            Work with Me
          </Link>
        </btn>
      </div>
    </div>
  );
};

export default Header;
