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
        isMobileMenuOpen ? "fixed inset-0 bg-gray-100 z-50" : "hidden"
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
                  "bg-black w-1/2 rounded-xl overflow-hidden"
                }`}
              >
                <div
                  className={`${
                    isMobileMenuOpen
                      ? "px-8 py-4 text-white text-center font-medium"
                      : "text-gray-800 hover:text-gray-600 cursor-pointer"
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
