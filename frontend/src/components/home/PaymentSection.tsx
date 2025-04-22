import { IImage } from "@/types/common";
import { slug } from "@/utils/slug";
import { PortableText, UnknownNodeType } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IPaymentSection {
  paymentOptions: IImage[];
  captionRaw: UnknownNodeType | UnknownNodeType[];
}

const PaymentSection = ({ data }: { data: IPaymentSection }) => {
  return (
    <div className="pt-[356px] pb-[317px]">
      <div className="custom_container">
        <div className="flex items-center justify-center flex-wrap gap-8">
          {data.paymentOptions?.map((payment, key) => (
            <div key={key} className="w-[98px] h-auto">
              <Image
                src={payment.asset.url}
                alt={payment.alt as string}
                width={98}
                height={46}
                objectFit="contain"
                className="w-[98px] h-[46px] object-contain"
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-20 text-black text-20 tracking-normal">
          <PortableText
            value={data.captionRaw}
            components={{
              marks: {
                link: ({ value, children }) => {
                  const target = (value?.href || "").startsWith("http")
                    ? "_blank"
                    : undefined;
                  const isExternal = (value?.href || "").startsWith("http");

                  if (!isExternal) {
                    return (
                      <Link
                        href={slug(value?.href)}
                        className="underline transition-colors duration-150 ease-linear underline-offset-4"
                      >
                        {children}
                      </Link>
                    );
                  } else {
                    return (
                      <a
                        href={value?.href}
                        target={target}
                        rel={target === "_blank" ? "noindex nofollow" : ""}
                        className="underline transition-colors duration-150 ease-linear underline-offset-4"
                      >
                        {children}
                      </a>
                    );
                  }
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentSection;
