"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const Register = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const registerUser = async () => {
    try {
      // Validate form data (add more validation if necessary)
      if (
        !formData.firstName ||
        !formData.lastName ||
        !formData.email ||
        !formData.password
      ) {
        // Handle form validation error
        console.error("All fields are required");
        return;
      }

      if (formData.password !== formData.confirmPassword) {
        // Handle password confirmation mismatch error
        console.error("Passwords do not match");
        return;
      }

      // Create user with email and password
      await firebase
        .auth()
        .createUserWithEmailAndPassword(formData.email, formData.password);

      console.log("Registration successful!");
      // Redirect or perform any other action upon successful registration
      router.push("/home");
    } catch (error) {
      // Handle registration failure
      console.error("Registration failed:");
    }
  };

  return (
    <div className="bg-gray-400">
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
                name="firstName"
                placeholder="First Name"
                className="text-black rounded-md py-2"
                onChange={handleChange}
              />
            </li>
            <li>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="text-black rounded-md py-2 "
                onChange={handleChange}
              />
            </li>
            <li>
              <input
                type="text"
                name="email"
                placeholder="Email"
                className="text-black rounded-md py-2 mt-2"
                onChange={handleChange}
              />
            </li>
            <li>
              <input
                type="password"
                name="password"
                placeholder="New Password"
                className="text-black rounded-md py-2 mt-2"
                onChange={handleChange}
              />
            </li>
            <li>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="text-black rounded-md py-2 mt-2"
                onChange={handleChange}
              />
            </li>
          </ul>
          <button
            onClick={registerUser}
            className="border-2 rounded-lg mt-5 bg-red-600 py-1 hover:bg-gray-500 px-2"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
