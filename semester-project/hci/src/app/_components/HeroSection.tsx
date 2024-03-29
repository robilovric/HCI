import Image from "next/image";
import heroImage1 from "/public/hero/hero1.jpg";
import { heroParagraphText, heroTitle } from "@/helpers/constants";
import Link from "next/link";

const HeroSection = () => (
  <section>
    <div className="container mx-auto flex flex-col items-center justify-center pt-6 md:pt-8 pb-20">
      <h1 className="text-black font-bold text-center text-2xl md:text-3xl lg:text-4xl mb-4">
        {heroTitle}
      </h1>
      <p className="text-gray-600 text-center sm:w-4/6">{heroParagraphText}</p>
      <div className="relative w-full max-w-screen-lg mt-8">
        <Image
          src={heroImage1}
          width={1200}
          height={300}
          alt="Hero Image"
          priority
        />
        <Link
          href="/contact"
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 py-3 px-6 bg-black text-white text-lg font-semibold hover:bg-gray-900 transition duration-300 ease-in-out"
        >
          LET&#39;S TALK
        </Link>
      </div>
    </div>
  </section>
);

export default HeroSection;
