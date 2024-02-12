import React from "react";
import { useRouter } from "next/navigation";

const BuyNowButton: React.FC = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.push("/buynow");
      }}
      type="button"
      className="rounded-md bg-indigo-600 px-3.5 py-2.5 mt-2 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      Buy Now
    </button>
  );
};

export default BuyNowButton;
