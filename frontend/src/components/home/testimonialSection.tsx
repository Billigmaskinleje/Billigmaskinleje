import React from "react";

interface ITestimonialSection {
  feedback: string;
  reviewerName: string;
  designation: string;
}

const TestimonialSection = ({ data }: { data: ITestimonialSection }) => {
  return (
    <section className="bg-[#1E2123] pt-[287px] pb-[263px]">
      <div className="custom_container">
        <div className="max-w-[931px] mx-auto text-center">
          {/* Quote Content */}
          <blockquote className="mb-8">
            <p className="text-40 italic font-medium leading-normal">
              {data.feedback}
            </p>
          </blockquote>

          {/* Attribution */}
          <div className="text-20 font-medium">
            <p>– {data.reviewerName}, indehaver af Billigmaskinleje.dk</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
