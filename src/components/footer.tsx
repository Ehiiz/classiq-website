import React, { MouseEventHandler, useEffect, useState, useRef } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

export default function Footer() {
  return (
    <div className="flex mt-24 py-4 flex-col items-center justify-center">
      <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mx-2 my-2"></div>

      <div className=" flex flex-col items-center  text-dirtyBrown text-lg justify-center px-4 font-Montserrat">
        <p className="mb-2 hover:text-white cursor-pointer">
          {" "}
          <a href="">Galleries</a>
        </p>
        <p className=" mb-2   cursor-pointer">
          <a href="">Experiences</a>
        </p>
        <p className=" mb-2  hover:text-white cursor-pointer">
          {" "}
          <a href="https://student.ledgafinance.com/signin">Photoshoots</a>
        </p>
        <p className=" mb-2 cursor-pointer">
          {" "}
          <a href="https://merchant.ledgafinance.com/signin">Contact</a>
        </p>
      </div>
    </div>
  );
}
