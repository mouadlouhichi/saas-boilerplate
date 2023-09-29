/**
 * This file is the `locale` root of the app. Everything starts here for rendering a UI.
 * @see https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts
 */

import "@/styles/globals.css";
import "@/styles/index.scss";

import { PropsWithChildren } from "react";
import {
  Playfair_Display as FontHeading,
  Inter as FontSans,
} from "next/font/google";
import { siteConfig } from "@/app";
import { DEFAULT_METADATA, seo } from "@/data/meta";
import { fullURL } from "@/data/meta/builder";
import { defaultLocale, locales } from "@/i18n/locales";
import LoglibAnalytics from "@/islands/loglib-analytics";
import { SiteFooter } from "@/islands/navigation/site-footer";
import { SiteHeader } from "@/islands/navigation/site-header";
import { TooltipProvider } from "@/islands/primitives/tooltip";
import { TailwindIndicator } from "@/islands/providers/indicators/tailwind-indicator";
import { NextIntlProvider } from "@/islands/providers/nextintl-provider";
import NextAuthProvider from "@/islands/providers/session-provider";
import { NextThemesProvider } from "@/islands/providers/theme-provider";
import { ToasterNotifier } from "@/islands/wrappers/toaster";
import TrpcQueryProvider from "@/islands/wrappers/trpc/trpc-query-provider";
import { authOptions } from "@/server/auth";
import { cn } from "@/server/utils";
import { WithChildren, type LocaleLayoutParams } from "@/types";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import { getServerSession } from "next-auth";
import { Metadata } from "next";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontHeading = FontHeading({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: "500",
});

export const metadata: Metadata = seo(DEFAULT_METADATA);


type LocaleLayoutProps = PropsWithChildren<LocaleLayoutParams>;

export default async function LocaleLayout({
  children, // share page or nested layout
  params: { locale }, // share user locale
}: WithChildren<LocaleLayoutProps>) {
  /**
   * Next.js 13 internationalization library
   * @see https://next-intl-docs.vercel.app
   */
  let messages: any;
  try {
    messages = (await import(`@/i18n/messages/${locale}.json`)).default;
  } catch (error) {
    console.log("❌ Internationalization", error);
  }

  /**
   * _For debug purposes_ use this to check the session object:
   * @example ```<pre>{JSON.stringify(session, null, 2)}</pre>```
   * @see https://next-auth.js.org/configuration/nextjs#in-app-router
   */
  const session = await getServerSession(authOptions());

  return (
    <html lang={locale} suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontHeading.variable,
        )}
      >
        <NextIntlProvider locale={locale} messages={messages}>
          <NextAuthProvider session={session}>
            <NextThemesProvider>
              <TrpcQueryProvider>
                <TooltipProvider>
                  <SiteHeader />
                  {children}
                  <SiteFooter />
                </TooltipProvider>
                <TailwindIndicator />
                <ToasterNotifier />
                <LoglibAnalytics />
                <VercelAnalytics />
              </TrpcQueryProvider>
            </NextThemesProvider>
          </NextAuthProvider>
        </NextIntlProvider>
      </body>
    </html>
  );
}
