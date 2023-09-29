"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { settings } from "@/app";
import { useUserContext } from "@/providers/UserProvider";
import { Route } from "@/routers/types";
import twFocusClass from "@/utils/twFocusClass";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/solid";

import { NAVIGATION } from "@/data/navigation";
import Logo from "@/shared/Logo";
import SocialsList from "@/shared/SocialsList";
import ButtonClose from "@/components/Button";
import Button from "@/components/Button";
import SwitchDarkMode from "@/components/SwitchDarkMode";

import AvatarDropdown from "../Header/AvatarDropdown";
import LocaleSwitcher from "../Switchers/LocaleSwitcher";
import { NavItemType } from "./NavigationItem";

export interface NavMobileProps {
  data?: NavItemType[];
  onClickClose?: () => void;
}

const NavMobile: React.FC<NavMobileProps> = ({
  data = NAVIGATION,
  onClickClose
}) => {
  const _renderMenuChild = (item: NavItemType) => {
    return (
      <ul className="nav-mobile-sub-menu pb-1 pl-6 text-base">
        {item.children?.map((i, index) => (
          <Disclosure key={i.href + index} as="li">
            <Link
              href={{
                pathname: i.href || undefined
              }}
              className="mt-0.5 flex rounded-lg px-4 text-sm font-medium text-neutral-900 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800"
            >
              <span
                className={`py-2.5 pr-3 ${!i.children ? "block w-full" : ""}`}
              >
                {i.name}
              </span>
              {i.children && (
                <span
                  className="flex flex-1"
                  onClick={(e) => e.preventDefault()}
                >
                  <Disclosure.Button
                    as="span"
                    className="flex flex-1 justify-end py-2.5"
                  >
                    <ChevronDownIcon
                      className="ml-2 h-4 w-4 text-neutral-500"
                      aria-hidden="true"
                    />
                  </Disclosure.Button>
                </span>
              )}
            </Link>
            {i.children && (
              <Disclosure.Panel>{_renderMenuChild(i)}</Disclosure.Panel>
            )}
          </Disclosure>
        ))}
      </ul>
    );
  };

  const _renderItem = (item: NavItemType, index: number) => {
    return (
      <Disclosure
        key={item.id}
        as="li"
        className="text-neutral-900 dark:text-white"
      >
        <Link
          className="flex w-full rounded-lg px-4 text-sm font-medium uppercase tracking-wide hover:bg-neutral-100 dark:hover:bg-neutral-800"
          href={{
            pathname: item.href || undefined
          }}
        >
          <span
            className={`py-2.5 pr-3 ${!item.children ? "block w-full" : ""}`}
          >
            {item.name}
          </span>
          {item.children && (
            <span className="flex flex-1" onClick={(e) => e.preventDefault()}>
              <Disclosure.Button
                as="span"
                className="flex flex-1 items-center justify-end py-2.5 "
              >
                <ChevronDownIcon
                  className="ml-2 h-4 w-4 text-neutral-500"
                  aria-hidden="true"
                />
              </Disclosure.Button>
            </span>
          )}
        </Link>
        {item.children && (
          <Disclosure.Panel>{_renderMenuChild(item)}</Disclosure.Panel>
        )}
      </Disclosure>
    );
  };

  const [isLoading, setIsloading] = useState(false);
  const router = useRouter();

  const { user } = useUserContext();

  const renderUserLogin = () => {
    if (user) {
      return <AvatarDropdown user={user} isMobile={true} />;
    } else {
      return (
        <Button
          loading={isLoading}
          className="self-center"
          //sizeClass="px-8 py-3 "
          onClick={() => {
            //setIsloading(true)
            //signIn("google")
            router.push(`/en/login` as Route);
          }}
        >
          Login
        </Button>
      );
    }
  };

  return (
    <div className="h-screen w-full divide-y-2 divide-neutral-100 overflow-y-auto bg-white py-2 shadow-lg ring-1 transition dark:divide-neutral-800 dark:bg-neutral-900 dark:ring-neutral-700">
      <div className="px-5 py-6">
        <Logo />
        <div className="mt-5 flex flex-col text-sm text-neutral-700 dark:text-neutral-300">
          <span>
            Discover the most outstanding articles on all topics of life. Write
            your stories and share them
          </span>

          <div className="mt-4 flex items-center justify-between">
            <SocialsList itemClass="w-9 h-9 flex items-center justify-center rounded-full bg-neutral-100 text-xl dark:bg-neutral-800 dark:text-neutral-300" />
            <span className="block">
              <SwitchDarkMode className="bg-neutral-100 dark:bg-neutral-800" />
            </span>
          </div>
        </div>
        <span className="absolute right-2 top-2 p-1">
          <ButtonClose
            onClick={onClickClose}
            intent="circle"
            className={
              `flex h-8 w-8 p-0 items-center justify-center rounded-full text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-700` +
              twFocusClass()
            }
          >
            <span className="sr-only">Close</span>
            <XMarkIcon className="h-5 w-5" />
          </ButtonClose>
        </span>
      </div>
      <ul className="flex flex-col space-y-1 px-2 py-6">
        {data.map(_renderItem)}
      </ul>
      <div className="flex items-center justify-between px-5 py-6">
        {renderUserLogin()}

        {settings.internationalizationEnabled && (
          <LocaleSwitcher
            className="flex h-12 items-center justify-center self-center"
            isMobile={true}
          />
        )}
      </div>
    </div>
  );
};

export default NavMobile;
