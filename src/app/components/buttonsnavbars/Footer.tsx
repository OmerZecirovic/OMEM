import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="flex justify-between">
        <div className="flex items-center space-x-4">
          <div className="text-3xl font-bold">
            <Image
              src="/assets/logo2.png"
              alt="logo"
              width={50}
              height={50}
            ></Image>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-500">
              About Us
            </a>
            <a href="contactus" className="hover:text-gray-500">
              Contact Us
            </a>
          </div>
        </div>

        <div className="flex items-center text-center mr-20  space-x-4 justify-between">
          <a href="terms" className="hover:text-gray-500">
            Terms of Service
          </a>
          <a href="privacy" className="hover:text-gray-500">
            Privacy Policy
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <a href="#" className="hover:text-gray-500 size-10">
            <FaFacebook />
          </a>
          <a href="#" className="hover:text-gray-500 size-10">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-gray-500 size-10">
            <FaInstagram />
          </a>
        </div>
      </div>

      <div className="mt-5 text-center text-gray-500">
        &copy; 2024 OMEM Website. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
