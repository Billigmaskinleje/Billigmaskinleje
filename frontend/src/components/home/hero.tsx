import React from "react";
import Image from "next/image";
import TrustpilotReview from "@/components/reviews/TrustpilotReview";
import GoogleReview from "@/components/reviews/GoogleReview";
import { IButton, IImage } from "@/types/common";
import Button from "../common/button";

interface IHomeHero {
  title: string;
  subtitle: string;
  backgroundImage: IImage;
  button: IButton;
  button2: IButton;
}

interface IHomeHeroProps {
  data: IHomeHero;
}

const Hero = ({ data }: IHomeHeroProps) => {
  return (
    <section className="relative min-h-screen">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 w-full h-full">
        {/* Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={data.backgroundImage.asset.url}
            alt={data.backgroundImage.alt || data.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(0deg, rgba(0, 0, 0, 0.39) 0%, rgba(0, 0, 0, 0.39) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="custom_container relative z-20 pt-[307px] pb-[247px] h-full flex flex-col justify-center">
        <div className="">
          {/* Main Heading */}
          <h1 className="max-w-[621px] text-75 font-black mb-8">
            {data.title}
          </h1>

          {/* Subheading */}
          <p className="max-w-[562px] text-30 mb-6 font-normal">
            {data.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-16">
            {data.button.label && <Button button={data.button} />}
            {data.button2.label && <Button button={data.button2} />}
          </div>

          {/* Review Badges */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <TrustpilotReview />
            <GoogleReview />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
