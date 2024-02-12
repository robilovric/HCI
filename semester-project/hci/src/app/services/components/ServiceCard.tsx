import React from "react";
import Image, { StaticImageData } from "next/image";

type ServiceCardProps = {
  serviceCardTitle: string;
  serviceCardText: string;
  serviceCardImage?: StaticImageData;
};

const ServiceCard = ({
  serviceCardTitle,
  serviceCardText,
  serviceCardImage,
}: ServiceCardProps) => {
  return (
    <div className="text-night-black bg-french-gray text-center w-full sm:w-2/3 px-4 py-2 hover:bg-gray-500 rounded-xl shadow-2xl">
      <h1 className="font-bold text-2xl">{serviceCardTitle}</h1>
      {serviceCardImage && (
        <div className="inline-flex items-center py-4">
          <Image
            src={serviceCardImage}
            width={200}
            height={150}
            alt="ServiceImage"
            className="w-auto h-auto"
          />
        </div>
      )}
      <p>{serviceCardText}</p>
    </div>
  );
};

export default ServiceCard;
