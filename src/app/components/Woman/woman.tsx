"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Navbar from "../buttonsnavbars/Navbar";
import BuyNowButton from "../buttonsnavbars/BuyNowbutton";
import Footer from "../buttonsnavbars/Footer";

const items = [
  {
    id: 1,
    name: "Product 1",
    price: "290 денари",
    image: "/assets/zduks1.jpg",
  },
  {
    id: 2,
    name: "Product 2",
    price: "350 денари",
    image: "/assets/zduks2.jpeg",
  },
  {
    id: 3,
    name: "Product 1",
    price: "290 денари",
    image: "/assets/zmaica1.jpg",
  },
  {
    id: 4,
    name: "Product 2",
    price: "350 денари",
    image: "/assets/zmaica2.jpg",
  },
  {
    id: 5,
    name: "Product 1",
    price: "290 денари",
    image: "/assets/zduks1.jpg",
  },
  {
    id: 6,
    name: "Product 2",
    price: "350 денари",
    image: "/assets/zduks2.jpeg",
  },
  {
    id: 7,
    name: "Product 1",
    price: "290 денари",
    image: "/assets/zmaica1.jpg",
  },
  {
    id: 8,
    name: "Product 2",
    price: "350 денари",
    image: "/assets/zmaica2.jpg",
  },
  {
    id: 9,
    name: "Product 1",
    price: "290 денари",
    image: "/assets/zduks1.jpg",
  },
  {
    id: 10,
    name: "Product 2",
    price: "350 денари",
    image: "/assets/zduks2.jpeg",
  },
];

const Woman = () => {
  const router = useRouter();

  const [isDarkModeActive, setDarkModeActive] = useState(false);

  // Dark Mode Toggle Function
  const toggleDarkMode = () => {
    setDarkModeActive((prev) => !prev);
  };

  return (
    <div
      className={`bg-gray-400 z-0 ${
        isDarkModeActive ? "bg-dark text-dark" : ""
      }`}
    >
      <Navbar />
      <h1 className="font-bold text-3xl text-center items-center justify-between">
        Products for Sale Woman
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="border rounded-md p-4 flex flex-col items-center justify-between relative"
          >
            <div className="hover:scale-x-[-1] transition-transform duration-300">
              <Image
                src={item.image}
                alt={item.name}
                width={150}
                height={150}
              />
            </div>
            <h2 className="text-xl">{item.name}</h2>
            <p>{item.price}</p>
            <BuyNowButton />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Woman;
