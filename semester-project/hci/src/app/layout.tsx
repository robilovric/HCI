import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
//import clsx from "clsx";

const pages = {
  home: "/",
  news: "/news&lifestyle",
  services: "/services",
  about: "/about",
  login: "/login",
  contact: "/contact",
};

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RightAway",
  description: "Bridiging the gap.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="flex items-center justify-center p-4">
          <ul className="flex gap-8">
            {Object.entries(pages).map(([name, path]) => (
              <li key={name}>
                <Link href={path}>{name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
