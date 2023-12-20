"use client";

import Logo from "./Logo";
import MainNav from "./MainNav";
import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

export type Page = {
  href: string;
  title: string;
};

const pages = [
  { href: "/", title: "Home" },
  { href: "/news&lifestyle", title: "News" },
  { href: "services", title: "Services" },
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

  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className={`${isMobile ? "container py-4 sticky top-0 bg-white z-50" : "container py-4 top-0 bg-white z-50"}`}>
      <div className="flex items-center justify-between">
        <div className="ml-10 mr-5">
          <Logo />
        </div>
        {/* Hamburger menu for mobile */}
        <div className="md:hidden mr-5">
          <button onClick={toggleMobileMenu} className="text-gray-800">
          <svg viewBox="0 0 100 80" width="40" height="40" className="mr-4">
              <rect width="100" height="20"></rect>
              <rect y="30" width="100" height="20"></rect>
              <rect y="60" width="100" height="20"></rect>
            </svg>
          </button>
        </div>
        {/* Mobile navigation */}
        {isMobileMenuOpen && (
          <MainNav pages={pages} isMobileMenuOpen={isMobileMenuOpen} closeMobileMenu={closeMobileMenu} />
        )}
        {/* Desktop navigation */}
        <div className="md:flex hidden items-center justify-end">
          <MainNav pages={pages} isMobileMenuOpen={false} closeMobileMenu={closeMobileMenu} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;