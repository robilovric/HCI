import Image, {StaticImageData} from "next/image";
import heroImage1 from "/public/hero/hero1.jpg";

const HeroSection = () => (
    <section>
        <div className="container mx-auto flex flex-col items-center justify-center py-20">
            <h1 className="text-black font-bold text-center text-2xl md:text-3xl lg:text-4xl mb-4">
                Empowering Healthcare for Everyone
            </h1>
            <p className="text-gray-600 text-center">
                Welcome to RightAway, where we revolutionize how doctors and patients
                interact. Our web app provides a user-friendly platform for managing
                patient data, booking appointments, and staying up-to-date with the latest
                medical news and lifestyle tips. We strive to make healthcare more
                accessible and convenient for everyone.
            </p>
            <div className="relative w-full max-w-screen-lg mt-8">
                <Image src={heroImage1} width={1200} height={300} alt="Hero Image" />
                <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 py-3 px-6 bg-black text-white text-lg font-semibold hover:bg-gray-900 transition duration-300 ease-in-out">
                LET&#39;S TALK
                </button>
            </div>

        </div>
    </section>
  );
  
  export default HeroSection;