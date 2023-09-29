import React, { FC } from "react";

import MainNav from "./MainNav";

export interface HeaderProps {
  type?: "moderated" | "main" | "dashboard";
  className?: string;

  hasSurvey?: boolean;
  isLoading?: boolean;
}

const Header: FC<HeaderProps> = ({
  className = "",
  type = "main",
  hasSurvey,
  isLoading
}) => {
  return (
    <header
      className={`nc-Header h-fit nc-header-bg sticky inset-x-0 top-0 z-40 w-full ${className}`}
    >
      <MainNav type={type} hasSurvey={hasSurvey} isLoading={isLoading} />
    </header>
  );
};

export default Header;
