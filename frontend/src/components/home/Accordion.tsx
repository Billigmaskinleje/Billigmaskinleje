"use client";
import { IFAQ } from "@/types/common";
import { PortableText } from "@portabletext/react";
import React, { useState } from "react";

export default function Accordion({ faq }: { faq: IFAQ }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`overflow-hidden border-t-[0.5px] border-solid border-t-text-white`}
    >
      <button
        className="text-left text-30 font-medium flex justify-between items-center w-full outline-none my-8 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{faq.question}</span>
        <div className="relative w-6 sm:w-10 h-6 sm:h-10 inline-block mr-1">
          <div
            className={`absolute top-1/2 -translate-y-1/2 w-6 sm:w-10 h-[1px] border border-solid border-text-white rotate-0`}
          ></div>
          <div
            className={`absolute top-1/2 -translate-y-1/2 w-6 sm:w-10 h-[1px] border border-solid border-text-white transition-all ease-linear ${
              isOpen ? "rotate-0" : "rotate-90"
            }`}
          ></div>
        </div>
      </button>
      {isOpen && (
        <div className="pb-10">
          <div className="w-full">
            <div className="text-20 tracking-normal font-normal">
              <PortableText value={faq.answerRaw} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
