"use client";

import Logo from "./Logo";
import MainNav from "./MainNav";
import React, { useState } from "react";

export type Page = {
  href: string;
  title: string;
};

const pages = [
  { href: "/", title: "Home" },
  { href: "/news&lifestyle", title: "News" },
  { href: "/services", title: "Services" },
  { href: "/about", title: "About Us" },
  { href: "/contact", title: "Contact" },
  { href: "/login", title: "Sign In" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="sticky sm:static py-4 top-0 bg-emrald-green z-50">
      <div className="flex items-center justify-between">
        <div className="ml-10 mr-5">
          <Logo logoHeight={75} logoWidth={75} />
        </div>
        {/* Hamburger menu for mobile */}
        <div className="md:hidden mr-5">
          <button onClick={toggleMobileMenu} className="text-gray-800">
            <svg
              viewBox="0 0 100 80"
              width="40"
              height="40"
              className="mr-4"
              fill="#B8B8D1"
            >
              <rect width="100" height="10"></rect>
              <rect y="30" width="100" height="10"></rect>
              <rect y="60" width="100" height="10"></rect>
            </svg>
          </button>
        </div>
        {/* Mobile navigation */}
        {isMobileMenuOpen && (
          <MainNav
            pages={pages}
            isMobileMenuOpen={isMobileMenuOpen}
            closeMobileMenu={closeMobileMenu}
          />
        )}
        {/* Desktop navigation */}
        <div className="md:flex hidden items-center justify-end">
          <MainNav
            pages={pages}
            isMobileMenuOpen={false}
            closeMobileMenu={closeMobileMenu}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
