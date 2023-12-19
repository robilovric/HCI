"use client";

import { Page } from "./Navbar";
import Link from "next/link";
import React from 'react';

type MainNavProps = {
  pages: Page[];
  isMobileMenuOpen: boolean;
  closeMobileMenu: () => void;
};

const MainNav: React.FC<MainNavProps> = ({ pages, isMobileMenuOpen, closeMobileMenu }) => {
  const handleLinkClick = () => {
    closeMobileMenu(); // Close mobile menu when link is clicked
  };

  return (
    <nav className={`${isMobileMenuOpen ? 'fixed inset-0 bg-gray-100 z-50' : 'hidden'}`}>
      <ul className="text-center pt-20">
        {pages.map(({ href, title }) => (
          <li key={href} className="my-4">
            <Link href={href}>
              <span className="text-gray-800 hover:text-gray-600 cursor-pointer block" onClick={handleLinkClick}>
                {title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainNav;