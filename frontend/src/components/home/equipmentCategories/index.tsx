import Button from "@/components/common/button";
import { IButton, IImage } from "@/types/common";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

interface IEquipmentCategory {
  title: string;
  image: IImage;
  link: {
    current: string;
  };
}

interface IEquipmentRental {
  title: string;
  categories: IEquipmentCategory[];
  button: IButton;
}

const EquipmentRental = ({ data }: { data: IEquipmentRental }) => {
  return (
    <div className="bg-[#F1F1F1]">
      <div className="custom_container relative pt-[157px] pb-[104px] h-full text-black">
        <h1
          className={twMerge(
            "heading_secondary font-black mb-[120px]",
            "lg:leading-[1.22]"
          )}
        >
          {data.title}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-[108px]">
          {data.categories.map((category, key) => (
            <div
              className="flex flex-col mx-auto w-full max-w-[400px]"
              key={key}
            >
              <div className="bg-white aspect-[4/3] px-[46px] pt-[46px] pb-[22px] rounded-[25px]">
                <div className="relative w-full h-full">
                  <Image
                    src={category.image.asset.url}
                    alt={category.image.alt || data.title}
                    fill
                  />
                </div>
              </div>
              <p className="text-center text-base mt-6">{category.title}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-[143px]">
          {data.button.label && <Button button={data.button} />}
        </div>
      </div>
    </div>
  );
};

export default EquipmentRental;
