import Image from "next/image";
import logoImage from "../../public/images/logo.png";
import Link from "next/link";

type LogoProps = {
  logoWidth?: number;
  logoHeight?: number;
};

const Logo = ({ logoWidth, logoHeight }: LogoProps) => (
  <div className="flex items-center justify-between">
    <Link href="/">
      <Image
        className="rounded-full w-full h-auto"
        src={logoImage}
        width={logoWidth ?? 150}
        height={logoHeight ?? 150}
        alt="Hero Image"
      />
    </Link>
  </div>
);

export default Logo;
