import { IFAQ, IImage } from "@/types/common";
import { PortableText, UnknownNodeType } from "@portabletext/react";
import React from "react";
import Accordion from "./Accordion";
import Image from "next/image";

interface IFAQSection {
  title: string;
  descriptionRaw: UnknownNodeType;
  image: IImage;
  faqItems: IFAQ[];
}

const FaqSection = ({ data }: { data: IFAQSection }) => {
  return (
    <div className="bg-primary pt-[180px] pb-[232px] relative">
      <div className="custom_container">
        <div className="grid lg:grid-cols-2">
          <div className="text-black">
            <h2 className="heading_secondary font-extrabold">{data.title}</h2>
            <div className="mt-[50px] mb-[88px] text-20 font-medium tracking-normal">
              <PortableText value={data.descriptionRaw} />
            </div>
            <div>
              {data.faqItems.map((faq, key) => (
                <Accordion key={key} faq={faq} />
              ))}
            </div>
          </div>
          <div className="w-full">
            <div className="hidden lg:block lg:absolute right-0 h-full lg:h-[500px] w-[calc(100%-40px)] lg:w-[calc(100%-50%-40px)] xl:w-[calc(100%-50%-143px)] lg:top-[250px] rounded-tl-[25px] rounded-bl-[25px] overflow-hidden">
              <Image
                src={data.image.asset.url}
                alt={data.image.alt || data.title}
                fill
                objectFit="cover"
                className="w-full object-cover rounded-tl-[25px] rounded-bl-[25px] overflow-hidden"
              />
            </div>
            <div className="relative lg:hidden right-0 h-[500px] rounded-[25px] overflow-hidden mt-10">
              <Image
                src={data.image.asset.url}
                alt={data.image.alt || data.title}
                fill
                objectFit="cover"
                className="w-full object-cover rounded-[25px] overflow-hidden"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
