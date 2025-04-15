import React from "react";

const TestimonialSection = () => {
  return (
    <section className="bg-[#1E2123] pt-[287px] pb-[263px]">
      <div className="custom_container">
        <div className="max-w-[931px] mx-auto text-center">
          {/* Quote Content */}
          <blockquote className="mb-8">
            <p className="text-40 italic font-medium leading-normal">
              "Billigmaskinleje udlejer driftssikre maskiner til private og
              professionelle – minigravere, stubfræsere, aftugtere,
              transportbånd m.m. Vi fokuserer på kvalitet og god service, så du
              får det rette udstyr til opgaven."
            </p>
          </blockquote>

          {/* Attribution */}
          <div className="text-20 font-medium">
            <p>– Jacob Mensted, indehaver af Billigmaskinleje.dk</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
