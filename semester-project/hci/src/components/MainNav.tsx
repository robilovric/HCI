"use client";

import { Page } from "./Navbar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import Logo from "./Logo";
import { title } from "process";
//import { cn } from "@/lib/utils";


const MainNav = ({ pages }: { pages: Page[] }) => {
  const pathName = usePathname();

  return (
      <nav className="flex items-center justify-center p-4">
        <ul className="flex gap-2">
          {pages.map(({href, title}) => (
            <li key={href}>
              <Link href={href}>
                <a className={`${
                  pathName===href ? "bg-brand-purple-700 text-brand-purple-100 pointer-events-none" : ''
                }`}
                >
                  {title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
  );
};

export default MainNav;