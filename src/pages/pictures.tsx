import React, { MouseEventHandler, useEffect, useState, useRef } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { Link } from "react-router-dom";
import Footer from "../components/footer";
import Nav from "../components/nav";

export default function Pictures() {
  return (
    <div className="h-full flex flex-col justify-between w-full bg-[url('https://images.unsplash.com/photo-1636705502663-75fdaddd974d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80')] bg-cover bg-blend-darken">
      <div className="w-full h-full bg-black bg-opacity-80 flex flex-col justify-between">
        <Nav />

        <h2 className="px-4 mt-24 mb-12 font-Unbounded text-dirtyBrown text-3xl">
          SEXY SHOOTS
        </h2>
        <div className="px-4 my-2">
          <div className=" w-full h-32 bg-[url('https://images.unsplash.com/photo-1589881787083-0fcfec1db918?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2V4eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60')] bg-cover"></div>
        </div>
        <div className="px-4 my-2">
          <div className=" w-full h-32 bg-[url('https://images.unsplash.com/photo-1584457361626-06effef61a7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2V4eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60')] bg-cover"></div>
        </div>
        <div className="px-4 my-2">
          <div className=" w-full h-32 bg-[url('https://images.unsplash.com/photo-1582944682698-716230383a4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNleHl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60')] bg-cover"></div>
        </div>
        <div className="px-4 my-2">
          <div className=" w-full h-32 bg-[url('https://images.unsplash.com/photo-1583900985737-6d0495555783?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNleHl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60')] bg-cover"></div>
        </div>
        <div className="px-4 my-2">
          <div className=" w-full h-32 bg-[url('https://images.unsplash.com/photo-1574539602047-548bf9557352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNleHl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60')] bg-cover"></div>
        </div>
        <div className="px-4 my-2">
          <div className=" w-full h-32 bg-[url('https://images.unsplash.com/photo-1565294124524-200bb738cdb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHNleHl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60')] bg-cover"></div>
        </div>
        <div className="px-4 my-2">
          <div className=" w-full h-32 bg-[url('https://images.unsplash.com/photo-1551024559-d69bcf67d8d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHNleHl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60')] bg-cover"></div>
        </div>
        <div className="px-4 my-2">
          <div className=" w-full h-32 bg-[url('https://images.unsplash.com/photo-1534412638304-22e2df166c61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHNleHl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60')] bg-cover"></div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
