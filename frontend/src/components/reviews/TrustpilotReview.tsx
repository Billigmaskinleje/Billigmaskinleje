import React from "react";

const TrustpilotReview = () => {
  return (
    <div className="w-[180px] h-[60px] bg-white rounded-md flex items-center justify-center p-2">
      <div className="flex items-center">
        <span className="text-green-600 text-xl mr-1">★</span>
        <div>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <span key={star} className="text-green-600">
                ★
              </span>
            ))}
          </div>
          <div className="text-xs">Trustpilot Review · 4.8 Stars</div>
        </div>
      </div>
    </div>
  );
};

export default TrustpilotReview;
