import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="flex flex-col">
      <Nav />
      <Home />
      <Projects />
      <Contact />
      <div className=" absolute border border-YELLOW rounded-full positioning ">
        g
      </div>
    </div>
  );
}

export default App;
