import React, { MouseEventHandler, useEffect, useState, useRef } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import Nav from "../components/nav";

export default function Homepage() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="h-screen flex flex-col justify-between w-full bg-[url('https://images.unsplash.com/photo-1636705502663-75fdaddd974d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80')] bg-no-repeat bg-blend-darken">
      <div className="w-full h-full bg-black bg-opacity-50 flex flex-col justify-between">
        <Nav />
        <div
          data-aos="slide-left"
          data-aos-duration="3000"
          className="mt-4 py-4"
        >
          <p className="font-Unbounded text-4xl text-goldYellow">
            CAPTURING MOMENTS
          </p>
          <p className="font-Unbounded text-4xl text-goldYellow">
            STUNNING VISUALS
          </p>
        </div>
        <div className="flex flex-row px-2 py-2 justify-between">
          <div className="w-3/6">
            <p className="font-QuickSand font-semibold text-white text-lg">
              <span className="text-teaGreen font-bold">JAMES EFOSA. </span>
              POTRAIT PHOTOGRAPHER AND VISIONARY AUTEUR
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
