import React from "react";
import StepCard from "./StepCard";

const EquipmentCategories = () => {
  return (
    <section className="pt-[208px] pb-[412px]">
      <div className="custom_container">
        {/* Section Heading */}
        <div className="text-center mb-[86px] text-black max-w-[800px] mx-auto">
          <h2 className="text-60 font-black uppercase mb-4">
            ÉN, TO, TRE, OG DU ER KLAR TIL DIT PROJEKT
          </h2>
          <p className="text-20 text-[#777] font-medium tracking-normal mx-auto">
            Find din maskine, vælg din lejeperiode, og book online – så er du
            klar til at gå i gang!
          </p>
        </div>

        {/* Steps Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px]">
          <StepCard
            stepNumber={1}
            title="Find maskine"
            description="Udforsk vores udvalg af gravemaskiner, flishuggere, stubfræsere og mere. Vælg den maskine, der passer til dit projekt."
          />

          <StepCard
            stepNumber={2}
            title="Vælg lejeperiode & book online"
            description="Angiv, hvor længe du skal bruge maskinen, og book nemt online. Du får en bekræftelse med det samme."
          />

          <StepCard
            stepNumber={3}
            title="Afhent selv eller få leveret"
            description="Hent din maskine på vores lager – eller få den leveret direkte til din adresse. Så er du hurtigt i gang!"
          />
        </div>
      </div>
    </section>
  );
};

export default EquipmentCategories;
