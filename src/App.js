import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Announcements from "./components/Announcements"; // ✅ Correct
import Hero from "./components/Hero";
import About from "./components/About";

function App() {
  return (
    <Router>
      <Navbar />
      <Hero />
      <Announcements /> {/* Add Announcements section below Hero */}
      <About />
    </Router>
  );
}

export default App;
