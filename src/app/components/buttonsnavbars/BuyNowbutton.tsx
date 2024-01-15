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
      className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
    >
      Buy Now
    </button>
  );
};

export default BuyNowButton;
