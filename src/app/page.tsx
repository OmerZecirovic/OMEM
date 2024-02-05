"use client";
import React from "react";
import { useRouter } from "next/navigation";

const WelcomePage: React.FC = () => {
  const router = useRouter();
  return (
    <main className="grid min-h-screen place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Welcome to our Website
        </h1>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <button
            onClick={() => {
              router.push("/home");
            }}
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Continue
          </button>
        </div>
      </div>
    </main>
  );
};

export default WelcomePage;
