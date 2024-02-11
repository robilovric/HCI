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
    <div className="text-black bg-gray-200 text-center w-2/3 px-4 py-2 hover:bg-gray-100">
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
