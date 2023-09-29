"use client";

import React from "react";
import { useTranslations } from "next-intl";

import { LP_GRID_ITEMS } from "@/data/lp-items";
import PsychologistsListening from "@/shared/PsychologistsListening";
import BackgroundSection from "@/shared/PsychologistsListening/BackgroundSection";
import { Button } from "@/components/Button/Button";

function PageHome() {
  const t = useTranslations("IndexPage");

  return (
    <>
      <main className="bg-white container dark:bg-gray-900">
        <section className="bg-white dark:bg-gray-900">
          <div className="mx-auto grid max-w-screen-xl px-4 py-8 text-center lg:py-16">
            <div className="mx-auto place-self-center">
              <h2 className="mb-4 max-w-2xl font-mono text-base font-medium leading-none  tracking-tight text-secondary-500 dark:text-white md:text-xl xl:text-2xl">
                Help your inner peace with MindRested
              </h2>
              <h1 className="mb-4 max-w-2xl text-4xl  font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
                Empower Your Mental Health
              </h1>
              <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
                {t.rich("description", {
                  code: (chunks) => (
                    <code className="font-mono text-primary-500">{chunks}</code>
                  )
                })}
              </p>
              <Button href="https://github.com/" className="mr-3">
                Get started
              </Button>
              <Button href="https://vercel.com/" intent="secondary">
                Deploy Now
              </Button>
            </div>
          </div>
        </section>
        <div className="relative py-16  mt-44">
          <BackgroundSection className="bg-orange-50 dark:bg-black/20" />

          <PsychologistsListening />
        </div>

        <section className="bg-white dark:bg-gray-900">
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
            <div className="justify-center space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
              {LP_GRID_ITEMS.map((singleItem) => (
                <div
                  key={singleItem.title}
                  className="flex flex-col items-center justify-center text-center"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 p-1.5 text-primary-700 dark:bg-primary-100 lg:h-12 lg:w-12">
                    {singleItem.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-bold dark:text-white">
                    {singleItem.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    {singleItem.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default PageHome;
