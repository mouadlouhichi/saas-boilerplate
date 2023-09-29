"use client";

import Image from "next/image";
import Link from "next-intl/link";
import I404Png from "@/images/404.png";
import { Route } from "@/routers/types";

const Page404 = () => (
  <div className="nc-Page404">
    <div className="container relative pb-16 pt-5 lg:pb-20 lg:pt-5">
      {/* HEADER */}
      <header className="mx-auto max-w-2xl space-y-2 text-center">
        <Image src={I404Png} alt="not-found" />
        <span className="block text-sm font-medium tracking-wider text-neutral-800 dark:text-neutral-200 sm:text-base">
          {`THE PAGE YOU WERE LOOKING FOR DOESN'T EXIST.`}{" "}
        </span>
        <div className="pt-8">
          <Link
            href={"/" as Route}
            className="rounded border px-2 py-1 outline-none focus-within:bg-slate-100 hover:bg-slate-100"
          >
            Go Home
          </Link>
        </div>
      </header>
    </div>
  </div>
);

export default Page404;
