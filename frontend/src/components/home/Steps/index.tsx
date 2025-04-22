import React from "react";
import StepCard from "./StepCard";

export interface IStep {
  step: string;
  title: string;
  description: string;
}

interface IEquipmentSteps {
  title: string;
  subtitle: string;
  steps: IStep[];
}

const EquipmentSteps = ({ data }: { data: IEquipmentSteps }) => {
  return (
    <section className="pt-[208px] pb-[412px]">
      <div className="custom_container">
        {/* Section Heading */}
        <div className="text-center mb-[86px] text-black max-w-[800px] mx-auto">
          <h2 className="text-60 font-black uppercase mb-4">{data.title}</h2>
          <p className="text-20 text-[#777] font-medium tracking-normal mx-auto">
            {data.subtitle}
          </p>
        </div>

        {/* Steps Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px]">
          {data.steps.map((step, key) => (
            <StepCard
              key={key}
              step={step.step}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EquipmentSteps;
