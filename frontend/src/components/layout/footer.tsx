import React from "react";
import Link from "next/link";
import { IButton, LinkType } from "@/types/common";
import { slug } from "@/utils/slug";
import Button from "../common/button";

interface IFooter {
  title: string;
  cvr: string;
  caption: string;
  menu: Omit<IButton, "btnType">[];
  button: IButton;
}

interface FooterProps {
  data: IFooter;
}
const Footer = ({ data }: FooterProps) => {
  return (
    <footer className="bg-primary pt-[300px] pb-[90px] text-black">
      <div className="custom_container">
        <div className="flex flex-col">
          {/* Main heading (Phone number) */}
          <h2 className="heading_secondary font-normal mb-[130px]">
            {data.title}
          </h2>

          {/* Navigation links */}
          <div className="mb-[94px]">
            <ul className="flex flex-col space-y-6">
              {data.menu.map((link, key) =>
                link.type === LinkType.EXTERNAL ? (
                  <li key={key}>
                    <a
                      href={link.url}
                      target="_blank"
                      className="uppercase text-black text-15"
                    >
                      {link.label}
                    </a>
                  </li>
                ) : (
                  <li key={key}>
                    <Link
                      href={slug(link.slug.current)}
                      className="uppercase text-black text-15"
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Company info */}
          <div className="mb-16">
            <p className="text-35 font-normal">{data.cvr}</p>
          </div>

          {/* Company name and CTA */}
          <div className="flex flex-col md:flex-row lg:flex-row items-center">
            {/* Company name - left on all screens */}
            <div className="w-full md:w-1/2 lg:w-1/3 mb-8 md:mb-0">
              <p className="font-black text-20 uppercase text-left">
                {data.caption}
              </p>
            </div>

            {/* Button - centered on desktop, right on tablet, bottom on mobile */}
            <div className="w-full md:w-1/2 lg:w-1/3 flex md:justify-end lg:justify-center">
              {data.button.label && (
                <Button
                  button={data.button}
                  cls="inline-block border border-black uppercase text-sm font-bold text-black rounded-full"
                />
              )}
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
