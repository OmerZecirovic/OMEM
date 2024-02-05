"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../buttonsnavbars/Navbar";
import Footer from "../buttonsnavbars/Footer";

const Home = () => {
  const router = useRouter();

  return (
    <div className="bg-gray-400">
      <Navbar />
      <div className="min-h-screen"></div>
      <Footer />
    </div>
  );
};

export default Home;
