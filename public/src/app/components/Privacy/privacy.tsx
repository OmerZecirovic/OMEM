"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Navbar from "../buttonsnavbars/Navbar";
import Footer from "../buttonsnavbars/Footer";

const PrivacyPolicyPage = () => {
  const router = useRouter();

  return (
    <div className="bg-red-400">
      <Navbar />
      <div className="min-h-screen font-bold text-3xl text-center items-center justify-between p-8">
        <h1 className="text-4xl mb-4">Privacy Policy</h1>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p className="mb-4">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
