import React, { MouseEventHandler, useEffect, useState, useRef } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import Nav from "../components/nav";
import Footer from "../components/footer";

export default function Galleries() {
  return (
    <div className="h-screen flex flex-col justify-between w-full bg-[url('https://images.unsplash.com/photo-1636705502663-75fdaddd974d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80')] bg-cover bg-blend-darken">
      <div className="w-full h-full bg-black bg-opacity-50 flex flex-col justify-between">
        <Nav />
        <div className="flex flew-row">
          <div className="h-32 w-32 bg-black rounded-sm"></div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
