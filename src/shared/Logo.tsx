import React from "react";
import { StaticImageData } from "next/image";
import Link from "next/link";
import logoLightImg from "@/images/logo-light.png";
import logoImg from "@/images/logo.png";
import { Route } from "@/routers/types";

import LogoSvg from "./LogoSvg";
import LogoSvgLight from "./LogoSvgLight";

export interface LogoProps {
  img?: StaticImageData;
  imgLight?: StaticImageData;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({
  img = logoImg,
  imgLight = logoLightImg,
  className = "w-24"
}) => {
  return (
    <Link
      href={"/" as Route}
      className={`ttnc-logo inline-block text-primary-6000 focus:outline-none focus:ring-0 ${className}`}
    >
      <LogoSvgLight />
      <LogoSvg />
    </Link>
  );
};

export default Logo;
