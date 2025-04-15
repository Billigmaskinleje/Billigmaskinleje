import React from "react";

const GoogleReview = () => {
  return (
    <div className="w-[180px] h-[60px] bg-white rounded-md flex items-center justify-center p-2">
      <div className="flex items-center">
        <span className="text-2xl text-blue-500 mr-1">G</span>
        <div>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <span key={star} className="text-yellow-500">
                ★
              </span>
            ))}
          </div>
          <div className="text-xs">Google Review · 4.5 Stars</div>
        </div>
      </div>
    </div>
  );
};

export default GoogleReview;
