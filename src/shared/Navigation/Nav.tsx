"use client";

import React from "react";
import { useLocale } from "next-intl";
import { usePathname } from "next-intl/client";
import Link from "next-intl/link";
import { Route } from "@/routers/types";

export const Nav = () => {
  const listNav: string[] = [
    "/account",
    "/account-password",
    "/account-billing"
  ];
  const pathname = usePathname();
  const lng = useLocale();
  return (
    <div className="container ">
      <div className="hiddenScrollbar flex space-x-8 overflow-x-auto md:space-x-14">
        {listNav.map((item) => {
          const isActive = pathname === item;
          return (
            <Link
              key={item}
              href={item as Route}
              className={`block shrink-0 border-b-2 py-5 capitalize md:py-8 ${
                isActive
                  ? "border-primary-500 font-medium"
                  : "border-transparent"
              }`}
            >
              {item
                .replace("-", " ")
                .replaceAll("/", " ")
                .replace(lng as string, "")}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
