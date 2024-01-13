"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Navbar from "../buttonsnavbars/Navbar";
import Footer from "../buttonsnavbars/Footer";

const Home = () => {
  const router = useRouter();
  const [isDarkModeActive, setDarkModeActive] = useState(false);

  const toggleDarkMode = () => {
    setDarkModeActive((prev) => !prev);
    // You may want to store this preference in local storage or a state management system
    // to persist the dark mode state across page reloads.
  };

  return (
    <div
      className={`bg-red-400 ${isDarkModeActive ? "bg-dark text-dark" : ""}`}
    >
      <Navbar toggleDarkMode={toggleDarkMode} />
      <div className="min-h-screen font-bold text-3xl text-center items-center justify-between ">
        <div>
          <Image src="/assets/bg.jpg" alt="logo" width={150} height={150} />
          Welcome to OMEM
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
