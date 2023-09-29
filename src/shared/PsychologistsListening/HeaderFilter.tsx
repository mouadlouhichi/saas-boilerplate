"use client";

import React, { FC, ReactNode, useEffect, useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

import Button from "@/components/Button";

import Heading from "./Heading";
import Nav from "./Nav";
import NavItem from "./NavItem";

export interface HeaderFilterProps {
  tabActive: string;
  tabs: string[];
  heading: ReactNode;
  subHeading?: ReactNode;
  onClickTab?: (item: string) => void;
}

const HeaderFilter: FC<HeaderFilterProps> = ({
  tabActive,
  tabs,
  subHeading = "",
  heading = "Latest Articles 🎈",
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClickTab = () => {}
}) => {
  const [tabActiveState, setTabActiveState] = useState(tabActive);

  useEffect(() => {
    setTabActiveState(tabActive);
  }, [tabActive]);

  const handleClickTab = (item: string) => {
    onClickTab(item);
    setTabActiveState(item);
  };

  return (
    <div className="flex flex-col mb-8 relative">
      <Heading desc={subHeading}>{heading}</Heading>
      <div className="flex items-center justify-between">
        <Nav
          className="sm:space-x-2"
          containerClassName="relative flex w-full overflow-x-auto text-sm md:text-base hiddenScrollbar"
        >
          {tabs.map((item, index) => (
            <NavItem
              key={index}
              isActive={tabActiveState === item}
              onClick={() => handleClickTab(item)}
            >
              {item}
            </NavItem>
          ))}
        </Nav>
        <span className="hidden sm:block flex-shrink-0">
          <Button
            intent={"secondary"}
            href="/listing-stay"
            className="!leading-none"
          >
            <div className="flex items-center justify-center">
              <span>View all</span>
              <ArrowRightIcon className="w-5 h-5 ml-3" />
            </div>
          </Button>
        </span>
      </div>
    </div>
  );
};

export default HeaderFilter;
