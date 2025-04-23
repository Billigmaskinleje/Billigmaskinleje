"use client";

import React, { useState } from "react";
import Link from "next/link";
import { IButton, IImage, LinkType } from "@/types/common";
import { slug } from "@/utils/slug";
import Button from "../common/button";

interface IHeader {
  logo: IImage;
  menu: Omit<IButton, "btnType">[];
  button: IButton;
  button2: IButton;
}

interface IHeaderProps {
  data: IHeader;
}

const Header = ({ data }: IHeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="absolute top-0 left-0 w-full z-50 py-10">
      <div className="max-w-[1728px] mx-auto w-full px-5 sm:px-10 lg:px-[72px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-10 lg:gap-20 2xl:gap-[124px]">
            {/* Logo */}
            <Link
              href="/"
              className="text-white font-black text-xl tracking-tight"
            >
              BILLIGMASKINLEJE
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center space-x-2 xl:space-x-4">
              {data.menu.map((link, key) =>
                link.type === LinkType.EXTERNAL ? (
                  <a
                    key={key}
                    href={link.url}
                    target="_blank"
                    className="text-white hover:text-gray-200 uppercase text-sm font-normal tracking-[1.35px]"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={key}
                    href={slug(link.slug.current)}
                    className="text-white hover:text-gray-200 uppercase text-sm font-normal tracking-[1.35px]"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>
          </div>
          {/* CTA Button */}
          <div className="hidden xl:flex items-center gap-10">
            {data.button.label && (
              <Button button={data.button} cls="min-w-fit" />
            )}
            {data.button2.label && <Button button={data.button2} />}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="xl:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="mt-4 bg-white text-black bg-opacity-90 py-4 px-2 xl:hidden rounded-md">
            <nav className="flex flex-col space-y-4">
              {data.menu.map((link, key) =>
                link.type === LinkType.EXTERNAL ? (
                  <a
                    key={key}
                    href={link.url}
                    target="_blank"
                    className="uppercase text-15"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={key}
                    href={slug(link.slug.current)}
                    className="uppercase text-15 "
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              )}

              {data.button.label && (
                <Button
                  button={data.button}
                  cls="appearance-none text-left py-0 mb-0 text-15 font-normal px-0"
                />
              )}
              {data.button2.label && (
                <Button
                  button={data.button2}
                  cls="appearance-none text-left py-0 mb-0 text-15 font-normal px-0"
                />
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
