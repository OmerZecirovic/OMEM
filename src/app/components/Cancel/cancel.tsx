"use client";
import React from "react";
import { useRouter } from "next/navigation";

const CancelPage: React.FC = () => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-400 text-black">
      <div className="bg-white w-full sm:w-100 max-w-md p-8 rounded-md text-center flex flex-col items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0 0 48 48"
          className="block mx-auto mb-4"
        >
          <path
            fill="#f44336"
            d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"
          ></path>
          <path
            fill="#fff"
            d="M29.656,15.516l2.828,2.828l-14.14,14.14l-2.828-2.828L29.656,15.516z"
          ></path>
          <path
            fill="#fff"
            d="M32.484,29.656l-2.828,2.828l-14.14-14.14l2.828-2.828L32.484,29.656z"
          ></path>
        </svg>
        <div className="text-3xl mb-4">Payment unsuccessful!</div>
        <p>Oops! It seems there was an issue with your payment.</p>
        <div className="text-3xl mt-6">
          You can try again or contact customer support.
          <button
            className="block mx-auto border-2 rounded-md bg-red-400 mt-2 px-4 py-2"
            onClick={() => router.push("/payment")}
          >
            Retry Payment
          </button>
          <div className="mt-4">
            Or go back to Shopping
            <button
              className="block mx-auto border-2 rounded-md bg-red-400 mt-2 px-4 py-2"
              onClick={() => router.push("/home")}
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancelPage;
