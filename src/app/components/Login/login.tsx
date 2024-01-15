"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { GoogleLogin } from "react-google-login";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Window {
  gapi?: {
    load: (api: string, callback: () => void) => void;
    auth2: {
      init: (config: { client_id: string }) => void;
    };
  };
}

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

  useEffect(() => {
    // Define the callback function for handling Google Sign-In response
    const handleCredentialResponse = (credential: any) => {
      // Your logic to handle the Google Sign-In credential
      console.log("Google Sign-In credential:", credential);
    };

    // Dynamically create the script element for the Google Sign-In API
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    // Define the configuration for Google Sign-In
    const clientId =
      "710662064970-c4tvnp5j5tm95fs6vp3e1obn1obad01g.apps.googleusercontent.com";
    script.onload = () => {
      // Use 'any' type to suppress TypeScript error
      if ((window as any).gapi) {
        (window as any).gapi.load("auth2", () => {
          (window as any).gapi.auth2.init({
            client_id: clientId,
          });
        });
      }
    };

    // Render the Google Sign-In button
    const googleSignInContainer = document.createElement("div");
    googleSignInContainer.id = "g_id_onload";
    googleSignInContainer.dataset.client_id = clientId;
    googleSignInContainer.dataset.callback = "handleCredentialResponse";
    document.body.appendChild(googleSignInContainer);

    const googleSignInButton = document.createElement("div");
    googleSignInButton.className = "g_id_signin";
    googleSignInButton.dataset.type = "standard";
    document.body.appendChild(googleSignInButton);

    // Cleanup on component unmount
    return () => {
      document.body.removeChild(script);
      document.body.removeChild(googleSignInContainer);
      document.body.removeChild(googleSignInButton);
    };
  }, []); // Run this effect only once on mount

  const handleRegularLogin = async () => {
    try {
      // Validate form data (add more validation if necessary)
      if (!formData.email || !formData.password) {
        console.error("Email and password are required");
        toast.error("You must provide a valid email and password");
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
        toast.error("User not found. Please register first.");
        // You can set a state variable to show an error message to the user
        return;
      }

      // Sign in with email and password
      await firebase
        .auth()
        .signInWithEmailAndPassword(email, formData.password);

      console.log("Login successful!");
      // Redirect or perform any other action upon successful login
      toast.success("Login successful!");

      router.push("/home");
    } catch (error) {
      console.error("Login failed:", error);

      toast.error("Login failed. Invalid email or password.");
      // Handle other login failures
      console.error("Invalid email or password");
      // You can set a state variable to show an error message to the user
    }
  };

  // Handles successful Google login
  const handleGoogleLoginSuccess = (response: any) => {
    console.log("Google login success:", response);
    // Handle the login success, e.g., redirect the user
    toast.success("Login successful!");

    router.push("/home");
  };

  // Handles failed Google login
  const handleGoogleLoginFailure = (error: Error) => {
    console.error("Google login failure:", error);
    // Handle the login failure
    toast.error("Google login failed. Please try again.");
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
        <div>Or Sign In With</div>
        <GoogleLogin
          clientId="710662064970-c4tvnp5j5tm95fs6vp3e1obn1obad01g.apps.googleusercontent.com"
          buttonText="Google"
          onSuccess={handleGoogleLoginSuccess}
          onFailure={handleGoogleLoginFailure}
          cookiePolicy={"single_host_origin"}
        />
      </div>
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default LoginPage;
