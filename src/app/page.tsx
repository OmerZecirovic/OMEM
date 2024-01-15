"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { GoogleLogin } from "react-google-login";
import firebase from "firebase/compat/app"; // Import Firebase
import "firebase/compat/auth"; // Import the auth module

const LoginPage = () => {
  const router = useRouter();

  const firebaseConfig = {
    apiKey: "AIzaSyCoyXbEsKBmSfYJ43omZxJ7m07oZgpiLnY",
    authDomain: "omemwebsite.firebaseapp.com",
    projectId: "omemwebsite",
    storageBucket: "omemwebsite.appspot.com",
    messagingSenderId: "988708156371",
    appId: "1:988708156371:web:c0d4874b4b977bb6ee7526",
    measurementId: "G-SPZBKBHYTS",
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleRegularLogin = async () => {
    try {
      // Validate form data (add more validation if necessary)
      if (!formData.email || !formData.password) {
        console.error("Email and password are required");
        return;
      }

      const email = formData.email;

      console.log("Entered email:", email);

      // Check if the email is associated with an existing account
      const signInMethods = await firebase
        .auth()
        .fetchSignInMethodsForEmail(email);

      console.log("Sign-in methods for email:", signInMethods);

      if (signInMethods.length === 50) {
        // The email is not associated with any account
        console.error("User not found. Please register first.");
        // You can set a state variable to show an error message to the user
        return;
      }

      // Sign in with email and password
      await firebase
        .auth()
        .signInWithEmailAndPassword(email, formData.password);

      console.log("Login successful!");
      // Redirect or perform any other action upon successful login
      router.push("/home");
    } catch (error) {
      console.error("Login failed:", error);

      // Handle other login failures
      console.error("Invalid email or password");
      // You can set a state variable to show an error message to the user
    }
  };

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
    <div className=" bg-gray-400">
      <div className="min-h-screen text-center items-center justify-between ">
        <div className="text-3xl">
          <Image
            className="flex absolutely positioned"
            src="/assets/logo2.png"
            alt="logo"
            width={300}
            height={200}
          />
          Welcome to OMEM
          <p>Please Log In</p>
        </div>
        <div className="text-3xl">
          <ul>
            <li className="py-2">
              <input
                type="text"
                name="email"
                placeholder="Email"
                className="text-black rounded-md py-2"
                onChange={handleChange}
              />
            </li>
            <li>
              <input
                type="password"
                name="password" // Change from "" to "password"
                placeholder="Password"
                className="text-black rounded-md py-2"
                onChange={handleChange}
              />
            </li>
          </ul>
          <button
            onClick={handleRegularLogin}
            className="border-2 rounded-lg mt-5 bg-red-600 py-1 hover:bg-gray-500 px-2"
          >
            Log In
          </button>
          <button
            onClick={() => {
              router.push("/register");
            }}
            className="border-2 rounded-lg mt-5 bg-red-600 py-1 hover:bg-gray-500 px-2"
          >
            Register
          </button>
        </div>
        <div>Or Sign Up With</div>
        <GoogleLogin
          clientId="710662064970-c4tvnp5j5tm95fs6vp3e1obn1obad01g.apps.googleusercontent.com"
          buttonText="Google"
          onSuccess={handleGoogleLoginSuccess}
          onFailure={handleGoogleLoginFailure}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    </div>
  );
};

export default LoginPage;
