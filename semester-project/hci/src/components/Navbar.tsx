import Logo from "./Logo";
import MainNav from "./MainNav";

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
  return (
    <div className="container flex mr-10 items-center justify-between py-4">
      <div className="mx-10">
        <Logo />
      </div>
      <MainNav pages={pages} />
    </div>
  );
};

export default Navbar;
