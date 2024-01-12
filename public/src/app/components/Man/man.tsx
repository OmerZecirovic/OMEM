"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Navbar from "../buttonsnavbars/Navbar";
import BuyNowButton from "../buttonsnavbars/BuyNowbutton";
import Footer from "../buttonsnavbars/Footer";

const items = [
  {
    id: 1,
    name: "Памучен Дуксер",
    price: "290 денари",
    image: "/assets/duks1.jpg",
  },
  {
    id: 2,
    name: "Дуксер",
    price: "350 денари",
    image: "/assets/duks2.jpg",
  },
  {
    id: 3,
    name: "Полиестер Маица",
    price: "290 денари",
    image: "/assets/maica1.jpg",
  },
  {
    id: 4,
    name: "Полиестер Маица",
    price: "350 денари",
    image: "/assets/maica2.jpg",
  },
  {
    id: 5,
    name: "Памучен Дуксер",
    price: "290 денари",
    image: "/assets/duks1.jpg",
  },
  {
    id: 6,
    name: "Дуксер",
    price: "350 денари",
    image: "/assets/duks2.jpg",
  },
  {
    id: 7,
    name: "Полиестер Маица",
    price: "290 денари",
    image: "/assets/maica1.jpg",
  },
  {
    id: 8,
    name: "Полиестер Маица",
    price: "350 денари",
    image: "/assets/maica2.jpg",
  },
  {
    id: 9,
    name: "Памучен Дуксер",
    price: "290 денари",
    image: "/assets/duks1.jpg",
  },
  {
    id: 10,
    name: "Дуксер",
    price: "350 денари",
    image: "/assets/duks2.jpg",
  },
];

const Man = () => {
  const router = useRouter();

  return (
    <div className=" bg-red-400">
      <Navbar />
      <h1 className="font-bold text-3xl text-center items-center justify-between">
        Products for Sale Man
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

export default Man;
