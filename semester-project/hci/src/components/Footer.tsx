import React from "react";
import Logo from "@/components/Logo";
import Icons from "./icons/FooterIcons";
import FooterIcons from "./FooterIcons";
import { footerEmail, footerPhone } from "@/helpers/constants";

type ListProps = {
  title: string;
  items: string[];
};

const FooterList = ({ title, items }: ListProps) => {
  return (
    <div>
      <ul className="font-roboto text-brand-grey-50">
        <li className="font-bold md:text-xl lg:text-2xl text-center">
          {title}
        </li>
        {items.map((item, index) => (
          <li className="text-center" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => (
  <div className="bg-brand-grey-800 px-8 border-t-2 border-t-black">
    <div className="w-full sm:inline-flex space-between pb-10 items-center ">
      <div className="flex  flex-col items-center md:flex-row sm:w-full md:justify-between gap-10">
        <div className="sm:inline-flex items-center sm:gap-12">
          <div className="hidden md:flex md:flex-col  items-center">
            <Logo />
            <div className="text-brand-gray-50 mt-3 text-center">
              Bridging the gap.
              <br />
              Optimize your workflow.
              <br />
              Wait no more!
            </div>
          </div>
          <FooterList
            title="Services"
            items={[
              "Online Appointments",
              "Patient Management",
              "Medical News",
              "Telemedicine",
            ]}
          />
        </div>
        <div className="flex flex-wrap md:gap-0">
          <div className="text-center md:text-left">
            <h6 className="font-bold">Headquarters</h6>
            <ul className="font-roboto mb-4">
              <li>Nad lipom 35</li>
              <li>10000, Zagreb, Croatia</li>
            </ul>
            <ul className="font-roboto mb-4">
              <li className="flex gap-2 items-center">
                <Icons.phone className="w-4" />
                <a href={`tel:${footerPhone}}`}>{footerPhone}</a>
              </li>
              <li className="flex gap-2 items-center">
                <Icons.envelope className="w-4" />
                <a href={`mailto:${footerEmail}}`}>{footerEmail}</a>
              </li>
            </ul>
            <div className="flex gap-2 justify-center">
              <FooterIcons />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="inline-flex justify-center w-full mb-8">
      <small className="text-gray-800 text-center md:text-left">
        Copyright@2023 RightAway. All rights reserved.
      </small>
    </div>
  </div>
);

export default Footer;
