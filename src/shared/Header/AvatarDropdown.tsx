import { Fragment, useRef, useState } from "react";
import { signOut } from "next-auth/react";
import { ImageSvgIcons } from "@/images/icons";
import { Link } from "@/lib/router-events";
import { Route } from "@/routers/types";
import { Popover, Transition } from "@headlessui/react";

import { OutSideCloser } from "@/hooks/useOutsideAlerter";
import Avatar from "@/components/Avatar";
import Loading from "@/components/Loading";

interface Props {
  isMobile?: boolean;
  className?: string;
  user?:
    | {
        id?: string | null | undefined;
        name?: string | null | undefined;
        email?: string | null | undefined;
        image?: string | null | undefined;
      }
    | undefined;
}

export default function AvatarDropdown({
  className = "",
  user,
  isMobile = false
}: Props) {
  const [loading, SetLoading] = useState<boolean>(false);
  const ref = useRef(null);
  return (
    <>
      <Popover className={` relative flex ${className}`} ref={ref}>
        {({ close }) => (
          <>
            {OutSideCloser(ref, close)}
            <Popover.Button
              className={`flex h-10 w-10 items-center justify-center self-center rounded-full text-slate-700 hover:bg-slate-100 focus:outline-none dark:text-slate-300 dark:hover:bg-slate-800 sm:h-12 sm:w-12`}
            >
              <Avatar size="md" imgUrl={user?.image} userName={user?.name} />
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
              <Popover.Panel
                className={`absolute  top-full z-10 w-screen max-w-[260px] px-4 sm:px-0 ${
                  isMobile ? "-left-10 sm:left-0" : "-right-10 sm:right-0"
                } `}
              >
                <div className="overflow-hidden rounded-3xl shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative grid grid-cols-1 gap-6 bg-white px-6 py-7 dark:bg-neutral-800">
                    {!isMobile && (
                      <>
                        <div className="flex items-center space-x-3">
                          <Avatar
                            borderRadius="rounded-full"
                            size="lg"
                            imgUrl={user?.image}
                          />

                          <div className="grow">
                            <h4 className="font-semibold">{user?.name}</h4>
                            <p className="mt-0.5 text-xs">Welcome</p>
                          </div>
                        </div>

                        <div className="w-full border-b border-neutral-200 dark:border-neutral-700" />
                      </>
                    )}
                    {/* ------------------ 1 --------------------- */}
                    <Link
                      href={"/account" as Route}
                      className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-neutral-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50 dark:hover:bg-neutral-700"
                      onClick={() => close()}
                    >
                      <div className="flex shrink-0 items-center justify-center text-neutral-500 dark:text-neutral-300">
                        {ImageSvgIcons.MyAccountSvg}
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium ">{"Account"}</p>
                      </div>
                    </Link>

                    {/* ------------------ 2 --------------------- */}
                    <Link
                      href={"/" as Route}
                      className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-neutral-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50 dark:hover:bg-neutral-700"
                      onClick={() => close()}
                    >
                      <div className="flex shrink-0 items-center justify-center text-neutral-500 dark:text-neutral-300">
                        {ImageSvgIcons.MessageSvg}
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium ">{"Messages"}</p>
                      </div>
                    </Link>

                    {/* ------------------ 3 --------------------- */}
                    <Link
                      href={"/" as Route}
                      className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-neutral-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50 dark:hover:bg-neutral-700"
                      onClick={() => close()}
                    >
                      <div className="flex shrink-0 items-center justify-center text-neutral-500 dark:text-neutral-300">
                        {ImageSvgIcons.WishlistSvg}
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium ">{"Wishlist"}</p>
                      </div>
                    </Link>

                    <div className="w-full border-b border-neutral-200 dark:border-neutral-700" />

                    {/* ------------------ 4 --------------------- */}
                    <Link
                      href={"/#" as Route}
                      className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-neutral-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50 dark:hover:bg-neutral-700"
                      onClick={() => close()}
                    >
                      <div className="flex shrink-0 items-center justify-center text-neutral-500 dark:text-neutral-300">
                        {ImageSvgIcons.HelpSvg}
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium ">{"Help"}</p>
                      </div>
                    </Link>

                    {/* ------------------ 5 --------------------- */}
                    <Link
                      href={"/#" as Route}
                      className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-neutral-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50 dark:hover:bg-neutral-700"
                      onClick={async () => {
                        SetLoading(true);
                        await signOut();
                      }}
                    >
                      <div className="flex shrink-0 items-center justify-center text-neutral-500 dark:text-neutral-300">
                        {ImageSvgIcons.LogoutSvg}
                      </div>
                      <div className="ml-4">
                        <p className="flex gap-3 text-sm font-medium">
                          Logout
                          {loading && <Loading />}
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
      {isMobile && <span className="block w-full pl-2"> {user?.name} </span>}
    </>
  );
}
