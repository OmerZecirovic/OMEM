"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../buttonsnavbars/Navbar";
import Footer from "../buttonsnavbars/Footer";
import { loadStripe } from "@stripe/stripe-js";

const AddCard = () => {
  const router = useRouter();

  const stripePromise = loadStripe(
    "pk_test_51OYrgkE9IaDnmeAe0Q9lUZK9m08mVgI8NZBJ0EnVvNJ8b6QH4TiAvDxxa5SieqJ2hmEvILkzqR3P070s3ek9UXmV00zhN0G2uO"
  );

  // Update your handlePayment function
  const handlePayment = async () => {
    const stripe = await stripePromise;

    if (!stripe) {
      console.error("Stripe is not initialized");
      return;
    }

    const response = await fetch(
      "http://localhost:3001/create-checkout-session",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // Pass any required data for payment
          // For example, you can pass the selected card type, card number, etc.
        }),
      }
    );

    const session = await response.json();

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.error(result.error.message);
    }
  };

  const [isDarkModeActive, setDarkModeActive] = useState(false);

  const toggleDarkMode = () => {
    setDarkModeActive((prev) => !prev);
  };

  return (
    <div
      className={`bg-gray-400 ${isDarkModeActive ? "bg-dark text-dark" : ""}`}
    >
      <Navbar toggleDarkMode={toggleDarkMode} />
      <div className="min-h-screen text-center items-center justify-between ">
        <div className="text-3xl font-bold">Add your Card</div>
        <ul>
          <li>
            <p>Card Type</p>
            <select name="Card Type" id="" className="text-black">
              <option value="mastercard">mastercard</option>
              <option value="visa">visa</option>
              <option value="paypal">paypal</option>
            </select>
          </li>
          <li className="text-black">
            <input
              type="text"
              placeholder="Card Num."
              className="rounded-md mt-2 py-2"
            />
          </li>
          <li>
            <p>Expiring Date</p>
            <input type="date" className="py-2 text-black rounded-md" />
          </li>
          <li>
            <input
              type="number"
              placeholder="CVC"
              className="py-2 rounded-md mt-2"
            />
          </li>
          <li>
            <input
              type="text"
              placeholder="Cardholder's Name"
              className="py-2 rounded-md mt-2"
            />
          </li>
        </ul>

        <button
          onClick={handlePayment}
          className="mt-2 py-3 w-20 bg-black rounded-lg hover:bg-gray-400"
        >
          Add Card
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default AddCard;
