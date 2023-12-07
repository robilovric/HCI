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
    <div className="container flex items-center justify-between py-4">
      <div className="ml-10 mr-5">
        <Logo />
      </div>
      <MainNav pages={pages} />
    </div>
  );
};

export default Navbar;
