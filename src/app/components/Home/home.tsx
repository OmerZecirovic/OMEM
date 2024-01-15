"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../buttonsnavbars/Navbar";
import Footer from "../buttonsnavbars/Footer";

const Home = () => {
  const router = useRouter();
  const [isDarkModeActive, setDarkModeActive] = useState(true);

  const toggleDarkMode = () => {
    setDarkModeActive((prev) => !prev);
    // You may want to store this preference in local storage or a state management system
    // to persist the dark mode state across page reloads.
  };

  return (
    <div
      className={`bg-gray-400 ${
        isDarkModeActive ? "bg-black text-dark" : " bg-gray-400 text-light"
      }`}
    >
      <Navbar toggleDarkMode={toggleDarkMode} />
      <div className="min-h-screen text-center items-center justify-between ">
        <div className="border-2 text-3xl font-bold">Welcome to OMEM</div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
