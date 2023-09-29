import React, { FC } from "react";
import { settings } from "@/app";
import { Link } from "@/lib/router-events";
import { useUserContext } from "@/providers/UserProvider";
import { Route } from "@/routers/types";

import MenuBar from "@/shared/MenuBar";
import Navigation from "@/shared/Navigation/Navigation";
import LocaleSwitcher from "@/shared/Switchers/LocaleSwitcher";
import Button from "@/components/Button";
import Logo from "@/components/Logo";
import Skeleton from "@/components/Skeleton";
import ThemeSwitcher from "@/components/SwitchDarkMode";

import AvatarDropdown from "./AvatarDropdown";

export interface MainNavProps {
  className?: string;
  type?: "moderated" | "main" | "dashboard";
  isLoading?: boolean;
  hasSurvey?: boolean;
}

const MainNav: FC<MainNavProps> = ({
  className = "",
  type = "main",
  hasSurvey,
  isLoading
}) => {
  const { user, isAdmin } = useUserContext();

  console.log("user", hasSurvey);
  const renderUserLogin = () => {
    if (user) {
      return <AvatarDropdown user={user} />;
    } else if (isAdmin) {
      return (
        <div className="flex h-12 w-12 items-center justify-center self-center my-2">
          <Skeleton
            circle
            height="100%"
            containerClassName="w-full h-full leading-none"
          />
        </div>
      );
    } else {
      return (
        <Button intent={"secondary"} className="mr-2 " href="/login">
          Login
        </Button>
      );
    }
  };

  switch (type) {
    case "main":
      return (
        <div className={` relative z-10 ${className}`}>
          <div className="relative flex h-20 justify-between px-8 2xl:container">
            <div className="hidden flex-1 justify-start space-x-4 sm:space-x-10 md:flex">
              <Logo className=" -mt-2 " size="lg" />
              <Navigation />
            </div>

            <div className="!mx-auto flex  flex-[3] md:hidden md:px-3 ">
              <div className="flex-1 self-center">
                <div className="flex items-center justify-between">
                  <Logo className="-ml-1 -mt-2 " />
                  <MenuBar />
                </div>
              </div>
            </div>

            <div className="hidden flex-1 shrink-0 justify-end text-neutral-700 dark:text-neutral-100 md:flex lg:flex-none">
              <div className="hidden gap-2 space-x-0.5 xl:flex">
                {settings.themeToggleEnabled && <ThemeSwitcher />}
                {settings.internationalizationEnabled && (
                  <LocaleSwitcher className="flex h-12 items-center justify-center self-center" />
                )}
                {renderUserLogin()}
                {!hasSurvey && (
                  <Link href={"/survey" as Route} className="flex">
                    <Button className="self-center" intent={"primary"}>
                      Get Started
                    </Button>
                  </Link>
                )}
              </div>

              <div className="flex items-center xl:hidden">
                {settings.themeToggleEnabled && <ThemeSwitcher />}
                <div className="px-0.5" />
                <MenuBar />
              </div>
            </div>
          </div>
        </div>
      );
    case "moderated":
      return (
        <div className={` relative z-10 ${className}`}>
          <div className="relative flex h-20 justify-between px-4 ">
            <div className="!mx-auto flex  flex-[3] md:px-3 ">
              <div className="flex-1 self-center">
                <div className="flex items-center justify-between">
                  <Logo className="-ml-1 -mt-2 w-[8rem] self-center" />
                  <MenuBar />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
  }
};

export default MainNav;
