import React, { MouseEventHandler, useEffect, useState, useRef } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

export default function Nav() {
  const [mobileNav, setMobileNav] = useState(false);

  const toggleNav = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <header>
      <div
        className={`flex flex-row justify-between items-center ${
          mobileNav ? "bg-trueGrey mb-0 ease-in duration-300" : "bg-transparent"
        }`}
      >
        <div className="w-10 h-10 bg-white rounded-full mx-2 my-2"></div>

        <ul
          onClick={toggleNav}
          className="visible flex flex-col sm:hidden mx-2 my-2 py-2 px-4 items-center cursor-pointer"
        >
          <li
            className={`w-14 h-0.5 ease-linear duration-300 ${
              mobileNav ? "rotate-180" : "visible"
            } bg-white mb-1`}
          ></li>
          <li
            className={`w-14 h-0.5 ease-linear duration-150 ${
              mobileNav ? "hidden" : "visible"
            } bg-white mb-1`}
          ></li>
          {/* <li
className={`w-14 h-0.5 ease-linear duration-150 ${
mobileNav ? "rotate-45 visible" : "-rotate-45  hidden"
} bg-white`}
></li>
<li
className={`w-14 h-0.5 ease-linear duration-150 ${
mobileNav ? "-rotate-45 visible" : "rotate-45 hidden"
} bg-white`}
></li> */}
        </ul>
      </div>

      <div
        className={`bg-trueGrey ease-in duration-300 fixed top-14 w-full ${
          mobileNav
            ? "translate-y-0 ease-in duration-500 fixed flex flex-col h-screen z-10"
            : "translate-y-full h-screen"
        } text-white py-3 text-xl font-Michroma`}
      >
        <div className="px-4">
          <p className="py-2 mb-4 hover:text-white cursor-pointer">
            {" "}
            <a href="">Galleries</a>
          </p>
          <p className="py-2 mb-4  cursor-pointer">
            <a href="">Experiences</a>
          </p>
          <p className="py-2 mb-4 hover:text-white cursor-pointer">
            {" "}
            <a href="https://student.ledgafinance.com/signin">Photoshoots</a>
          </p>
          <p className="py-2 mb-4  cursor-pointer">
            {" "}
            <a href="https://merchant.ledgafinance.com/signin">Contact</a>
          </p>
        </div>

        <div
          className={`w-full h-screen  translate-y-0 duration-1000 bg-goldYellow ${
            mobileNav ? "visible translate-y-full bg-goldYellow" : ""
          }`}
        ></div>
      </div>
    </header>
  );
}
