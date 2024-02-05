"use client";
import React, { useState } from "react";
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
    <div className="bg-white text-gray-700">
      <div className="grid min-h-screen place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-3xl">
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
                className="text-black rounded-md py-2 outline"
                onChange={handleChange}
              />
            </li>
            <li>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="text-black rounded-md py-2 outline"
                onChange={handleChange}
              />
            </li>
            <li>
              <input
                type="text"
                name="email"
                placeholder="Email"
                className="text-black rounded-md py-2 mt-2 outline"
                onChange={handleChange}
              />
            </li>
            <li>
              <input
                type="password"
                name="password"
                placeholder="New Password"
                className="text-black rounded-md py-2 mt-2 outline"
                onChange={handleChange}
              />
            </li>
            <li>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="text-black rounded-md py-2 mt-2 outline"
                onChange={handleChange}
              />
            </li>
          </ul>
          <button
            onClick={registerUser}
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 mt-2 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
