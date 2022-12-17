import React, { MouseEventHandler, useEffect, useState, useRef } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import Nav from "../components/nav";
import Footer from "../components/footer";

export default function Contact() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="h-full flex flex-col justify-between w-full bg-[url('https://images.unsplash.com/photo-1636705502663-75fdaddd974d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80')] bg-cover bg-blend-darken">
      <div className="w-full h-full bg-black bg-opacity-50 flex flex-col justify-between">
        <Nav />

        <div
          data-aos="slide-left"
          data-aos-duration="3000"
          className="mt-4 px-2 py-4"
        >
          <p className="font-Unbounded text-4xl text-goldYellow">QUESTIONS ?</p>
          <p className="font-Unbounded text-4xl text-goldYellow">CONTACT ME</p>
        </div>

        <div className="px-2">
          <p className="font-Montserrat text-white text-lg mb-14">
            {" "}
            No matter the questions you have, how much a shoot cost ? How many
            pictures are you getting or you just want to get an idea on how you
            can start your photography journey feel free to ask
          </p>

          <form className="flex flex-col" action="">
            <div>
              <label
                htmlFor=""
                className="mt-6 text-white font-Montserrat text-sm"
              >
                NAME
              </label>

              <input
                type="text"
                className="w-full h-2 bg-transparent border-b-2 border-b-dirtyBrown"
              />
            </div>
            <div className="my-6">
              <label
                htmlFor=""
                className="mt-6 text-white font-Montserrat text-sm"
              >
                EMAIL
              </label>

              <input
                type="text"
                className="w-full h-2 bg-transparent border-b-2 border-b-dirtyBrown"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="" className="text-white font-Montserrat text-sm">
                YOUR MESSAGE
              </label>
              <textarea
                rows={5}
                cols={5}
                className=" bg-transparent border-b-2 border-b-dirtyBrown"
              />
            </div>

            <div className="mt-6">
              <label
                htmlFor=""
                className="mt-6 text-white font-Montserrat text-sm"
              >
                ANSWER
              </label>

              <input
                type="text"
                className="w-full h-2 bg-transparent border-b-2 border-b-dirtyBrown"
              />
            </div>
          </form>
          <button className=" mt-4 rounded-full py-2 px-4 border-dotted border-2 border-white text-white">
            SEND <span className="text-dirtyBrown text-xl">&#8594;</span>
          </button>
        </div>

        <Footer />
      </div>
      //{" "}
    </div>
  );
}
