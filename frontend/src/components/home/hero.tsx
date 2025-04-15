import React from "react";
import Link from "next/link";
import Image from "next/image";
import TrustpilotReview from "@/components/reviews/TrustpilotReview";
import GoogleReview from "@/components/reviews/GoogleReview";

const Hero = () => {
  return (
    <section className="relative min-h-screen">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 w-full h-full">
        {/* Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-excavator.png"
            alt="Billigmaskinleje equipment"
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
            Lej maskiner nemt og hurtigt på sjælland
          </h1>

          {/* Subheading */}
          <p className="max-w-[562px] text-30 mb-6 font-normal">
            Maskinudlejning til private og professionelle. Leje fra én dag til
            flere uger.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-16">
            <Link
              href="/lej"
              className="bg-[#FFFF8D] text-black py-3 px-8 text-base font-bold rounded-sm uppercase hover:bg-yellow-200 transition-colors inline-block"
            >
              Lej en maskine
            </Link>
            <Link
              href="/langtidsleje"
              className="border border-white py-3 px-8 text-base font-bold rounded-sm uppercase hover:bg-white/10 transition-colors inline-block"
            >
              Langtidsleje
            </Link>
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
