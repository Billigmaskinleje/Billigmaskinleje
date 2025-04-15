import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary pt-[300px] pb-[90px] text-black">
      <div className="custom_container">
        <div className="flex flex-col">
          {/* Main heading (Phone number) */}
          <h2 className="heading_secondary font-normal mb-[130px]">
            Ring til os på 20716046
          </h2>

          {/* Navigation links */}
          <div className="mb-[94px]">
            <ul className="flex flex-col space-y-6">
              <li>
                <Link href="/maskiner" className="uppercase text-black text-15">
                  VORES MASKINER
                </Link>
              </li>
              <li>
                <Link href="/katalog" className="uppercase text-black text-15">
                  KATALOG
                </Link>
              </li>
              <li>
                <Link
                  href="/hvordan-fungerer-det"
                  className="uppercase text-black text-15"
                >
                  HVORDAN FUNGERER DET?
                </Link>
              </li>
              <li>
                <Link
                  href="/gravearbejde"
                  className="uppercase text-black text-15"
                >
                  GRAVEARBEJDE
                </Link>
              </li>
            </ul>
          </div>

          {/* Company info */}
          <div className="mb-16">
            <p className="text-35 font-normal">CVR: 33382235</p>
          </div>

          {/* Company name and CTA */}
          <div className="flex flex-col md:flex-row lg:flex-row items-center">
            {/* Company name - left on all screens */}
            <div className="w-full md:w-1/2 lg:w-1/3 mb-8 md:mb-0">
              <p className="font-black text-20 uppercase text-left">
                BILLIGMASKINLEJE APS
              </p>
            </div>

            {/* Button - centered on desktop, right on tablet, bottom on mobile */}
            <div className="w-full md:w-1/2 lg:w-1/3 flex md:justify-end lg:justify-center">
              <Link
                href="/lej"
                className="inline-block border border-black py-2 px-8 uppercase text-sm font-bold hover:bg-black hover:text-[#FFFF8D] transition-colors rounded-full w-fit"
              >
                LEJ EN MASKINE
              </Link>
            </div>

            {/* Empty div to balance layout on desktop */}
            <div className="hidden lg:block lg:w-1/3"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
