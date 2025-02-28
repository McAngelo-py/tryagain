import React from "react";
import Hero from "../components/Hero"; // ✅ Fix: Correct import path
import Announcements from "../components/Announcements";
import About from "../components/About";

const MainPage = () => {
  return (
    <>
      <Hero />
      <Announcements />
      <About />
    </>
  );
};

export default MainPage;
