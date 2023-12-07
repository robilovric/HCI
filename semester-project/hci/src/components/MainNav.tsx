"use client";

import { Page } from "./Navbar";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MainNav = ({ pages }: { pages: Page[] }) => {
  const pathName = usePathname();

  return (
    <nav className="hidden md:block">
      <ul className="flex gap-4 mx-10">
        {pages.map(({ href, title }) => (
          <li key={href}>
            <Link href={href}>
              <span
                className={`${
                  pathName === href
                    ? "text-gray-800 border-b-2 border-gray-800"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
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