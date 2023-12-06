import { FC } from "react";


const Logo: FC = () => (
  <div className="flex items-center justify-between max-w-min gap-2">
    <Logo/>
    <span className="font-roboto-condensed font-bold text-3xl whitespace-nowrap">
      RightAway!
    </span>
  </div>
);

export default Logo;