import { ButtonType, IButton, LinkType } from "@/types/common";
import { slug } from "@/utils/slug";
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

const Button = ({ button, cls = "" }: { button: IButton; cls?: string }) => {
  const btnType =
    button.btnType === ButtonType.OUTLINE
      ? "border border-solid border-white text-white"
      : "bg-primary text-black";
  if (button.type === LinkType.External) {
    return (
      <a
        target="_blank"
        href={button.url}
        className={twMerge(
          `min-w-[222px] h-[43px] px-[5px] py-[10px] text-[15px] font-medium tracking-[0.3px] text-center uppercase rounded-lg ${btnType}`,
          cls
        )}
      >
        {button.label}
      </a>
    );
  } else if (button.type === LinkType.INTERNAL) {
    return (
      <Link
        href={slug(button.slug.current)}
        className={twMerge(
          `min-w-[222px] h-[43px] px-[5px] py-[10px] text-[15px] font-medium tracking-[0.3px] text-center uppercase rounded-lg ${btnType}`,
          cls
        )}
      >
        {button.label}
      </Link>
    );
  }
};

export default Button;
