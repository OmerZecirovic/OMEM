"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../buttonsnavbars/Navbar";
import FeedbackSection from "../buttonsnavbars/FeedBack";
import Footer from "../buttonsnavbars/Footer";

const Page = () => {
  const router = useRouter();

  const [isDarkModeActive, setDarkModeActive] = useState(false);

  const toggleDarkMode = () => {
    setDarkModeActive((prev) => !prev);
    // You may want to store this preference in local storage or a state management system
    // to persist the dark mode state across page reloads.
  };

  return (
    <div
      className={`bg-gray-400 ${isDarkModeActive ? "bg-dark text-dark" : ""}`}
    >
      <Navbar />
      <div className="text-3xl font-bold mt-5">Contact Us</div>
      <div className="min-h-screen font-bold text-3xl text-center items-center justify-between mt-10">
        We want to hear from you! You can reach us using the contact information
        below to share comments, suggestions, or concerns
        <div className="mt-5 text-left">Fan Support</div>
        <button className="border bg-white text-black rounded-lg left-1 absolute">
          Submit a Request
        </button>
        <div className="mt-12 text-left">Artist Support</div>
        <button className="border bg-white text-black rounded-lg left-1 absolute">
          Submit a Request
        </button>
        <div>Our Email: omemweb@email.com</div>
      </div>
      <FeedbackSection />
      <Footer />
    </div>
  );
};
export default Page;
