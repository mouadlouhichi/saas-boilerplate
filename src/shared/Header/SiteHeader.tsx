"use client";

import React, { FC, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { trpc } from "@/providers/trpcProvider";
import { useUserContext } from "@/providers/UserProvider";
import { PathName } from "@/routers/types";
import toast from "react-hot-toast";

import useSurveyStore from "@/hooks/useSurvey";

import Header from "./Header";

export type SiteHeaders = "Header 1" | "Header 2" | "Header 3";

const OPTIONS = {
  root: null,
  rootMargin: "0px",
  threshold: 1.0
};
let OBSERVER: IntersectionObserver | null = null;
const PAGES_HIDE_HEADER_BORDER: PathName[] = [
  "/" as PathName,
  "/account" as PathName,
  "/account-password" as PathName,
  "/account-billing" as PathName
];

interface SiteHeaderProps {
  type?: "moderated" | "main" | "dashboard";
  className?: string;
  hasBorder?: boolean;
}

const SiteHeader: FC<SiteHeaderProps> = ({
  type = "main",
  className = "",
  hasBorder = false
}) => {
  const anchorRef = useRef<HTMLDivElement>(null);

  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    setIsTopOfPage(window.pageYOffset < 5);
  }, []);

  const pathname = usePathname();

  const intersectionCallback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      setIsTopOfPage(entry.isIntersecting);
    });
  };

  useEffect(() => {
    // disconnect the observer
    // observer for show the LINE bellow header
    if (!PAGES_HIDE_HEADER_BORDER.includes(pathname as PathName)) {
      OBSERVER && OBSERVER.disconnect();
      OBSERVER = null;
      return;
    }
    if (!OBSERVER) {
      OBSERVER = new IntersectionObserver(intersectionCallback, OPTIONS);
      anchorRef.current && OBSERVER.observe(anchorRef.current);
    }
  }, [pathname]);

  const { user } = useUserContext();

  const { isLoading, data } = trpc.user.profile.useQuery(undefined, {
    enabled: !!user,
    refetchOnWindowFocus: false,
    onError: (err) => toast.error(err.message)
  });
  const { setUser } = useSurveyStore();

  useEffect(() => {
    data && setUser(data);
  }, [data]);
  const renderHeader = () => {
    let headerClassName = " dark:border-b dark:border-neutral-700";
    if (PAGES_HIDE_HEADER_BORDER.includes(pathname as PathName)) {
      headerClassName =
        isTopOfPage && !hasBorder
          ? ""
          : " shadow-sm dark:border-b dark:border-neutral-700 okok";
    }
    // add logic for partner
    return (
      <Header
        className={className + headerClassName}
        type={type}
        hasSurvey={data?.hasSurvey}
        isLoading={isLoading}
      />
    );
  };

  return (
    <>
      {renderHeader()}
      <div ref={anchorRef} className="invisible absolute h-1"></div>
    </>
  );
};

export default SiteHeader;
