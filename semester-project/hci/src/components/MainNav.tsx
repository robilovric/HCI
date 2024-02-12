"use client";

import { Page } from "./Navbar";
import Link from "next/link";
import React from "react";

type MainNavProps = {
  pages: Page[];
  isMobileMenuOpen: boolean;
  closeMobileMenu: () => void;
};

const MainNav: React.FC<MainNavProps> = ({
  pages,
  isMobileMenuOpen,
  closeMobileMenu,
}) => {
  const handleLinkClick = () => {
    closeMobileMenu(); // Close mobile menu when link is clicked
  };

  return (
    <nav
      className={`${
        isMobileMenuOpen ? "fixed inset-0 bg-emrald-green z-50" : "hidden"
      } md:flex items-center`}
    >
      <div className="flex flex-col justify-center h-full">
        <ul className={`${isMobileMenuOpen ? "text-center" : "flex"}`}>
          {pages.map(({ href, title }) => (
            <li
              key={href}
              className={`${
                isMobileMenuOpen ? "my-4 flex flex-col items-center" : "mx-4"
              }`}
            >
              <Link
                href={href}
                className={`${
                  isMobileMenuOpen &&
                  "bg-french-gray w-1/2 rounded-xl overflow-hidden"
                }`}
              >
                <div
                  className={`${
                    isMobileMenuOpen
                      ? "px-8 py-4 text-gray-800 text-center font-bold"
                      : "font-bold text-l text-white hover:text-french-gray hover:border-b-4 border-french-gray cursor-pointer"
                  }`}
                  onClick={handleLinkClick}
                >
                  {title}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default MainNav;
