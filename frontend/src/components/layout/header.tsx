"use client";

import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="absolute top-0 left-0 w-full z-50 py-10">
      <div className="max-w-[1728px] mx-auto w-full px-5 sm:px-10 lg:px-[72px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[124px]">
            {/* Logo */}
            <Link
              href="/"
              className="text-white font-black text-xl tracking-tight"
            >
              BILLIGMASKINLEJE
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-4">
              <Link
                href="/maskiner"
                className="text-white hover:text-gray-200 uppercase text-sm font-normal tracking-[1.35px]"
              >
                Maskiner
              </Link>
              <Link
                href="/priser"
                className="text-white hover:text-gray-200 uppercase text-sm font-normal tracking-[1.35px]"
              >
                Priser
              </Link>
              <Link
                href="/hvordan-fungerer-det"
                className="text-white hover:text-gray-200 uppercase text-sm font-normal tracking-[1.35px]"
              >
                Hvordan Fungerer Det?
              </Link>
              <Link
                href="/gravearbejde"
                className="text-white hover:text-gray-200 uppercase text-sm font-normal tracking-[1.35px]"
              >
                Gravearbejde
              </Link>
              <Link
                href="/langtidsleje"
                className="text-white hover:text-gray-200 uppercase text-sm font-normal tracking-[1.35px]"
              >
                Langtidsleje
              </Link>
            </nav>
          </div>
          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-10">
            <Link
              href="/kontakt"
              className="text-white hover:text-gray-200 uppercase text-sm font-normal tracking-[1.35px]"
            >
              Kontakt
            </Link>
            <Link
              href="/lej"
              className="bg-white text-black py-1.5 px-4 uppercase rounded-sm text-sm font-normal tracking-[1.35px] hover:bg-gray-100 transition-colors"
            >
              Lejen Maskine
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white p-2"
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
          <div className="mt-4 bg-white text-black bg-opacity-90 py-4 px-2 md:hidden rounded-md">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/maskiner"
                className="uppercase text-15"
                onClick={() => setIsMenuOpen(false)}
              >
                Maskiner
              </Link>
              <Link
                href="/priser"
                className="uppercase text-15"
                onClick={() => setIsMenuOpen(false)}
              >
                Priser
              </Link>
              <Link
                href="/hvordan-fungerer-det"
                className="uppercase text-15"
                onClick={() => setIsMenuOpen(false)}
              >
                Hvordan Fungerer Det?
              </Link>
              <Link
                href="/gravearbejde"
                className="uppercase text-15"
                onClick={() => setIsMenuOpen(false)}
              >
                Gravearbejde
              </Link>
              <Link
                href="/langtidsleje"
                className="uppercase text-15"
                onClick={() => setIsMenuOpen(false)}
              >
                Langtidsleje
              </Link>
              <Link
                href="/kontakt"
                className="uppercase text-15"
                onClick={() => setIsMenuOpen(false)}
              >
                Kontakt
              </Link>
              <Link
                href="/lej"
                className="bg-black text-white py-1.5 px-4 uppercase rounded-sm text-15 inline-block mx-2 mt-2 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Lejen Maskine
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
