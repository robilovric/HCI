import Logo from "@/components/Logo";
import Icons from "./icons/FooterIcons";


type ListProps = {
  title: string;
  items: string[];
};

const FooterList = ({ title, items }: ListProps) => {
  return (
    <div>
      <ul className="font-roboto text-brand-purple-50">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => (
  <div className="bg-brand-purple-800">
    <div className="container flex flex-col py-10 items-center gap-10 self-stretch md:max-lg:px-10">
      <div className="flex flex-col md:flex-row gap-10 justify-between items-center md:items-start self-stretch">
        <div>
          <Logo />
          <div className="hidden md:block text-brand-purple-50 mt-3 italic font-playfair">
            Design is not just what it looks <br /> like and feels like.
            It&apos;s how it <br /> works.
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-11">
          <FooterList
            title="Services"
            items={[
              "User Research",
              "Design Systems",
              "Rebranding",
              "Marketing",
              "Market Research",
              "User Journey",
            ]}
          />
          <FooterList
            title="Sitemap"
            items={[
              "Home",
              "Showcase",
              "Blog",
              "About",
              "Contact Us",
              "Sign In",
            ]}
          />
          <div>
            <h6>Contact Us</h6>
            <ul className="font-roboto text-brand-purple-50 mb-4">
              <li>Nad lipom 35</li>
              <li>10000, Zagreb, Croatia</li>
            </ul>
            <ul className="font-roboto text-brand-purple-50 mb-4">
              <li className="flex gap-2 items-center">
                <Icons.phone className="w-4" /> +385 123 0000
              </li>
              <li className="flex gap-2 items-center">
                <Icons.envelope className="w-4" />
                rightaway@yahoo.com
              </li>
            </ul>
            <div className="flex gap-2">
              <Icons.facebook className="w-6" />
              <Icons.twitter className="w-6" />
              <Icons.linked className="w-6" />
              <Icons.instagram className="w-6" />
            </div>
          </div>
        </div>
      </div>
      <p className="font-roboto text-brand-purple-600 text-base sm:text-lg">
        Copyright @ 2023 RightAway. All rights reserved.
      </p>
    </div>
  </div>
);

export default Footer;