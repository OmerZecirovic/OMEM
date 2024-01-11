"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Navbar from "../buttonsnavbars/Navbar";
import Footer from "../buttonsnavbars/Footer";

const Page = () => {
  const router = useRouter();

  return (
    <div className=" bg-red-400">
      <Navbar />
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

export default Page;
