"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { GoogleLogin } from "react-google-login";
import firebase from "firebase/compat/app"; // Import Firebase
import "firebase/compat/auth"; // Import the auth module

const LoginPage = () => {
  const router = useRouter();

  if (!firebase.apps.length) {
    const firebaseConfig = {
      apiKey: "AIzaSyCoyXbEsKBmSfYJ43omZxJ7m07oZgpiLnY",
      authDomain: "omemwebsite.firebaseapp.com",
      projectId: "omemwebsite",
      storageBucket: "omemwebsite.appspot.com",
      messagingSenderId: "988708156371",
      appId: "1:988708156371:web:c0d4874b4b977bb6ee7526",
      measurementId: "G-SPZBKBHYTS",
    };
    firebase.initializeApp(firebaseConfig);
  }

  // Handles successful Google login
  const handleGoogleLoginSuccess = (response: any) => {
    console.log("Google login success:", response);
    // Handle the login success, e.g., redirect the user
    router.push("/home");
  };

  // Handles failed Google login
  const handleGoogleLoginFailure = (error: any) => {
    console.error("Google login failure:", error);
    // Handle the login failure
  };

  return (
    <div className="bg-red-400">
      <div className="min-h-screen text-center items-center justify-between  ">
        <div className="text-3xl">
          <Image
            className="flex absolutely positioned"
            src="/assets/logo2.png"
            alt="logo"
            width={300}
            height={200}
          />
          Welcome to OMEM
          <p>Please Register</p>
        </div>
        <div className="text-3xl">
          <ul>
            <li className="py-2">
              <input
                type="text"
                placeholder="First Name"
                className="text-black rounded-md py-2"
              />
              <li>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="text-black rounded-md py-2 mt-2"
                />
              </li>
              <li>
                <input
                  type="text"
                  placeholder="Email"
                  className="text-black rounded-md py-2 mt-2"
                />
              </li>
            </li>
            <li>
              <input
                type="password"
                name=""
                id=""
                placeholder="New Password"
                className="text-black rounded-md py-2"
              />
            </li>
            <li>
              <input
                type="text"
                placeholder="Confirm Password"
                className="text-black rounded-md py-2 mt-2"
              />
            </li>
          </ul>
          <button
            onClick={() => {
              router.push("/home");
            }}
            className="border-2 rounded-lg mt-5 bg-red-600 py-1 hover:bg-gray-500 px-2"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
