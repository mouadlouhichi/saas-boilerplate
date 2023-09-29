"use client";

import { FC, Fragment, useRef, useTransition } from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next-intl/client";
import useAppStore from "@/store";
import { Popover, Transition } from "@headlessui/react";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

import { headerLanguage } from "@/data/i18n//settings";
import { OutSideCloser } from "@/hooks/useOutsideAlerter";

interface LocaleSwitcherProps {
  panelClassName?: string;
  className?: string;
  lng?: string;
  isMobile?: boolean;
}

const mappedHeaderLanguage = (currentLang: string) => {
  return headerLanguage.map((item) => {
    if (item.lang === currentLang) {
      return {
        ...item,
        active: true
      };
    } else {
      return {
        ...item,
        active: false
      };
    }
  });
};

const LocaleSwitcher: FC<LocaleSwitcherProps> = ({
  panelClassName = "z-10 w-screen max-w-[140px] px-4 mt-4 right-0 sm:px-0 ",
  className = "",

  isMobile = false
}) => {
  const store = useAppStore();
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const ref = useRef(null);
  const mappedHeaderLanguageData = mappedHeaderLanguage(locale);

  const handleLangClick = (lang: string, close: () => void) => {
    if (lang !== locale) {
      store.setCurrentLanguage(lang);
      startTransition(() => {
        router.replace(pathname, { locale: lang });
      });
    }
    close();
  };
  const controlledPanelClassName = isMobile
    ? "z-10 w-screen max-w-[140px] px-4 mt-4 -right-4 -top-[11rem] sm:px-0"
    : panelClassName;

  return (
    <div className={className} ref={ref}>
      <Popover className="relative ">
        {({ open, close }) => (
          <>
            {OutSideCloser(ref, close)}
            <Popover.Button
              className={`
                ${open ? "" : "text-opacity-80"}
             group inline-flex items-center rounded-full border-neutral-300 px-3 py-1.5 text-sm font-medium text-gray-700 hover:border-neutral-400 hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 dark:border-neutral-700 dark:text-neutral-300`}
            >
              <GlobeAltIcon className="h-[18px] w-[18px] opacity-80" />

              <span className="ml-2 select-none">{locale.toUpperCase()}</span>
              <ChevronDownIcon
                className={`${open ? "-rotate-180" : "text-opacity-70"}
                  ml-2 h-4 w-4  transition duration-150 ease-in-out group-hover:text-opacity-80`}
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className={`absolute ${controlledPanelClassName}`}>
                <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative grid gap-8 bg-white p-7 dark:bg-neutral-800 lg:grid-cols-1">
                    {mappedHeaderLanguageData.map((item, index) => (
                      <div
                        key={index}
                        onClick={() =>
                          !isPending && handleLangClick(item.lang, close)
                        }
                        className={`-m-3 flex cursor-pointer items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-neutral-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50 dark:hover:bg-neutral-700 ${
                          item.active
                            ? "bg-gray-100 dark:bg-neutral-700"
                            : "opacity-80"
                        }`}
                      >
                        <div className="">
                          <p className="text-sm font-medium ">{item.name}</p>
                          {!isMobile && (
                            <p className="text-xs text-gray-500 dark:text-neutral-400">
                              {item.description}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
};
export default LocaleSwitcher;
