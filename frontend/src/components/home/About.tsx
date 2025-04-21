import React from "react";
import { twMerge } from "tailwind-merge";

interface IHomeAbout {
  title: string;
  description: string;
}

const HomeAbout = ({ data }: { data: IHomeAbout }) => {
  return (
    <div className="custom_container relative pt-[260px] pb-[212px] h-full flex flex-col justify-center text-black">
      <h2 className="heading_secondary font-black mb-6">{data.title}</h2>
      <p
        className={twMerge(
          "text-20 font-medium max-w-[737px]",
          "leading-normal tracking-normal"
        )}
      >
        {data.description}
      </p>
    </div>
  );
};

export default HomeAbout;
