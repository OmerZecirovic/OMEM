"use client";
import React from "react";
import Image from "next/image";
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
  return (
    <div className="bg-gray-400 ">
      <Navbar />
      <h1 className="font-bold text-3xl text-center items-center justify-between">
        Products for Sale Woman
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-8 m-8 mt-20">
        {items.map((item) => (
          <div
            key={item.id}
            className="border rounded-md p-4 flex flex-col items-center justify-between relative"
          >
            <div>
              <Image
                src={item.image}
                alt={item.name}
                width={150}
                height={150}
              />
            </div>
            <h2 className="text-xl">{item.name}</h2>
            <p>{item.price}</p>
            <a href="#" className="group -m-2 flex items-center p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                0
              </span>
              <span className="sr-only">items in cart, view bag</span>
            </a>

            <BuyNowButton />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Woman;
