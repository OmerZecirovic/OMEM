import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import DarkModeToggle from "./DarkModeToggle";

interface NavbarProps {
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleDarkMode }) => {
  const router = useRouter();

  const [isDarkModeActive, setDarkModeActive] = useState(false);

  return (
    <nav className={`p-4 ${isDarkModeActive ? "dark" : ""}`}>
      <div className="flex absolute">
        <Image src="/assets/logo2.png" alt="logo" width="40" height="40" />
      </div>
      <ul className="flex items-center justify-center space-x-4 ml-auto">
        <li>
          <button
            className="hover:bg-red-500 rounded-md px-2 py-1"
            onClick={() => {
              router.push("/home");
            }}
          >
            Home
          </button>
        </li>{" "}
        <li>
          <button
            className="hover:bg-red-500 rounded-md px-2 py-1"
            onClick={() => {
              router.push("/man");
            }}
          >
            Man
          </button>
        </li>
        <li>
          <button
            className="hover:bg-red-500 rounded-md px-2 py-1"
            onClick={() => {
              router.push("/woman");
            }}
          >
            Woman
          </button>
        </li>
        <li>
          <DarkModeToggle toggleDarkMode={toggleDarkMode} />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
