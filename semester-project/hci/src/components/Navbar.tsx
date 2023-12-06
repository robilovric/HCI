import Logo from "./Logo";
import MainNav from "./MainNav";

export type Page = {
    href: string;
    title: string;
  };

const pages: Page[] = [
    { href: "/", title: "Home" },
    { href: "/news&lifestyle", title: "News" },
    { href: "services", title: "Services" },
    { href: "/about", title: "About Us" },
    { href: "/contact", title: "Contact Us" },
    { href: "/login", title: "Sign In" },
  ];

  const NavBar = () => {
    return (
      <div className="container flex items-center justify-between">
        <Logo />
        <MainNav pages={pages} />
      </div>
    );
  };
  
  export default NavBar;