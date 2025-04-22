import React from "react";
import { IStep } from ".";

const StepCard: React.FC<IStep> = ({ step, title, description }) => {
  return (
    <div className="bg-gray-100 rounded-[25px] px-[30px] pt-[30px] pb-[70px]">
      {/* Step Number Badge */}
      <div className="bg-black text-white inline-flex items-center justify-center rounded-full h-10 px-4">
        <span className="text-15 font-medium uppercase">{step}</span>
      </div>

      {/* Card Title */}
      <h3 className="text-20 font-bold mt-10 mb-5 text-black tracking-normal">
        {title}
      </h3>

      {/* Card Description */}
      <p className="text-20 text-[#777] leading-relaxed tracking-normal">
        {description}
      </p>
    </div>
  );
};

export default StepCard;
