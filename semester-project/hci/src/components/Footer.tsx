import Logo from "@/components/Logo";
import Icons from "./icons/FooterIcons";


type ListProps = {
  title: string;
  items: string[];
};

const FooterList = ({ title, items }: ListProps) => {
  return (
    <div>
      <ul className="font-roboto text-brand-grey-50">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => (
  <div className="bg-brand-grey-800">
  <div className="container flex flex-col py-10 items-center gap-10 self-stretch md:max-lg:px-10">
    <div className="flex flex-col md:flex-row gap-10 justify-between items-center md:items-start self-stretch">
      <div className="mx-auto">
        <Logo />
        <div className="hidden md:block text-brand-gray-50 mt-3">
          Bridging the gap.<br />
          Optimize your workflow.<br />
          Wait no more!
        </div>
      </div>
      <div className="flex flex-wrap justify-evenly gap-7">
        <FooterList
          title="Services"
          items={[
            "Online Appointments",
            "Patient Management",
            "Medical News",
            "Telemedicine",
          ]}
        />
        <div className="mx-auto">
          <h6>Headquarters</h6>
          <ul className="font-roboto mb-4">
            <li>Nad lipom 35</li>
            <li>10000, Zagreb, Croatia</li>
          </ul>
          <ul className="font-roboto mb-4">
            <li className="flex gap-2 items-center">
              <Icons.phone className="w-4" /> +385 01 232 777
            </li>
            <li className="flex gap-2 items-center">
              <Icons.envelope className="w-4" />
              support@rightaway.com
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
    <small className="mx/auto text-gray-800">
      Copyright @ 2023 RightAway. All rights reserved.
    </small>
  </div>
</div>
);

export default Footer;