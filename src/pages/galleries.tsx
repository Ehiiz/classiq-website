import React, { MouseEventHandler, useEffect, useState, useRef } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import Nav from "../components/nav";
import Footer from "../components/footer";

export default function Galleries() {
  return (
    <div className="h-full flex flex-col justify-between w-full bg-[url('https://images.unsplash.com/photo-1636705502663-75fdaddd974d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80')] bg-cover bg-blend-darken">
      <div className="w-full h-full bg-black bg-opacity-50 flex flex-col justify-between">
        <Nav />
        <div className="px-4 flex mt-16 overflow-x-auto space-x-8 scrollbar-hide">
          <div className="h-64 w-64 flex-shrink-0 bg-[url('https://images.unsplash.com/photo-1568819317551-31051b37f69f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2V4eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60')] bg-cover rounded-sm"></div>
          <div className="h-64 w-64 flex-shrink-0 bg-[url('https://images.unsplash.com/photo-1647891938250-954addeb9c51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80')] drop-shadow-2xl bg-cover rounded-sm"></div>
          <div className="h-64 w-64 flex-shrink-0 bg-[url('https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60')] bg-cover rounded-sm"></div>
          <div className="h-64 w-64 flex-shrink-0 bg-[url('https://images.unsplash.com/photo-1604537466158-719b1972feb8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8OHx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60')] bg-cover rounded-sm"></div>
          <div className="h-64 w-64 flex-shrink-0 bg-[url('https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60')] bg-cover rounded-sm"></div>
          <div className="h-64 w-64 flex-shrink-0 bg-[url('https://images.unsplash.com/photo-1614090965443-3df21c6906ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXQlMjBnaXJsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60')] bg-cover rounded-sm"></div>
          <div className="h-64 w-64 flex-shrink-0 bg-[url('https://images.unsplash.com/photo-1620794108219-aedbaded4eea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmxhY2slMjB3b21hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60')]  bg-cover rounded-sm"></div>
          <div className="h-64 w-64 flex-shrink-0 bg-[url('https://images.unsplash.com/photo-1557244056-ac3033d17d9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2V4eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60')]  bg-cover rounded-sm"></div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
