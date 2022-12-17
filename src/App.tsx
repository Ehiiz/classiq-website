import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./pages/contact";
import Galleries from "./pages/galleries";
import Homepage from "./pages/homepage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/gallery" element={<Galleries />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
