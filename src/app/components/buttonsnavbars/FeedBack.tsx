import React, { useState } from "react";
import { ThumbUpIcon, ThumbDownIcon } from "@heroicons/react/outline";

const FeedbackSection = () => {
  const [feedback, setFeedback] = useState(null);

  const handleLikeClick = () => {
    setFeedback("Thanks for your positive feedback!");
  };

  const handleDislikeClick = () => {
    setFeedback("We appreciate your feedback. We will work on improving!");
  };

  return (
    <div className="text-left mt-10 border-2 p-4 flex items-center justify-between">
      <div>Was this article helpful?</div>
      <div className="flex items-center">
        <ThumbUpIcon
          className={`h-10 w-10 cursor-pointer mr-4 border-2 rounded-md hover:bg-blue-600 ${
            feedback === "Thanks for your positive feedback!"
              ? "text-blue-500"
              : ""
          }`}
          onClick={handleLikeClick}
        />
        <ThumbDownIcon
          className={`h-10 w-10  cursor-pointer border-2 rounded-md hover:bg-red-600 ${
            feedback ===
            "We appreciate your feedback. We will work on improving!"
              ? "text-blue-500"
              : ""
          }`}
          onClick={handleDislikeClick}
        />
      </div>
      {feedback && <div className="ml-4 text-gray-500">{feedback}</div>}
    </div>
  );
};

export default FeedbackSection;
