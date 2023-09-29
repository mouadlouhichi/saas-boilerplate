"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { PathName } from "@/routers/types";

import { FOOTER_NAVIGATION } from "@/data/navigation";
import { CustomLink } from "@/data/types";
import Logo from "@/shared/Logo";
import SocialsList1 from "@/shared/SocialsList1";
import FooterNav from "@/components/FooterNav/";

const PAGES_WITH_FOOTER_NAV: PathName[] = ["/account" as PathName];

export interface WidgetFooterMenu {
  id: string;
  title: string;
  menus: CustomLink[];
}

export type FooterProps = {
  className?: string | undefined;
};

const Footer: React.FC<FooterProps> = ({ className = "" }) => {
  const pathname = usePathname();

  const renderWidgetMenuItem = (menu: WidgetFooterMenu, index: number) => {
    return (
      <div key={index} className="text-sm">
        <h2 className="font-semibold text-neutral-700 dark:text-neutral-200">
          {menu.title}
        </h2>
        <ul className="mt-5 space-y-4">
          {menu.menus.map((item, index) => (
            <li key={index}>
              <a
                key={index}
                className="text-neutral-6000 hover:text-black dark:text-neutral-300 dark:hover:text-white"
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <>
      {PAGES_WITH_FOOTER_NAV.includes(pathname as PathName) && <FooterNav />}

      <div
        className={`nc-Footer relative border-t border-neutral-200 py-24 dark:border-neutral-700 lg:py-28 ${className}`}
      >
        <div className="container grid grid-cols-2 gap-x-5 gap-y-10 sm:gap-x-8 md:grid-cols-4 lg:grid-cols-5 lg:gap-x-10 ">
          <div className="col-span-2 grid grid-cols-4 gap-5 md:col-span-4 lg:md:col-span-1 lg:flex lg:flex-col">
            <div className="col-span-2 md:col-span-1">
              <Logo className="ml-1 w-24 md:w-[8rem]" />
            </div>
            <div className="col-span-2 flex items-center md:col-span-3">
              <SocialsList1 className="flex items-center space-x-3 lg:flex-col lg:items-start lg:space-x-0 lg:space-y-2.5" />
            </div>
          </div>
          {FOOTER_NAVIGATION.map(renderWidgetMenuItem)}
        </div>
      </div>
    </>
  );
};

export default Footer;
