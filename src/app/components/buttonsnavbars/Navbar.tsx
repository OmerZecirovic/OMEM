// Navbar.tsx
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Navbar: React.FC = () => {
  const router = useRouter();

  return (
    <nav className="bg-red-200 p-4">
      <div className="flex absolute">
        <Image src="/assets/logo2.png" alt="logo" width="40" height="40" />
      </div>
      <ul className="flex items-center justify-center space-x-4">
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
      </ul>
    </nav>
  );
};

export default Navbar;
