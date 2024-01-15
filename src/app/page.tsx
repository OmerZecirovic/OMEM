"use client";
import React from "react";
import { useRouter } from "next/navigation";

const WelcomePage: React.FC = () => {
  const router = useRouter();
  return (
    <div className=" bg-gray-400 text-3xl min-h-screen text-center items-center">
      <div>
        <h1>Welcome to the OMEM WebSite!</h1>
        <button
          className="border-2 bg-red-400 rounded-md hover:bg-gray-400"
          onClick={() => {
            router.push("/login");
          }}
        >
          Welcome
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
