"use client";

import { type ComponentProps } from "react";
import { authOptions } from "@/server/auth";
import { TooltipProvider } from "@/shared/Primitives/Tooltip";
import { WithChildren } from "@/types";
import { getServerSession } from "next-auth";
import { AbstractIntlMessages, NextIntlClientProvider } from "next-intl";
import { ThemeProvider as NextThemeProvider } from "next-themes";

import NextAuthProvider from "./session-provider";

export function ThemeProvider({
  children,
  ...props
}: WithChildren<ComponentProps<typeof NextThemeProvider>>) {
  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      {...props}
    >
      {children}
    </NextThemeProvider>
  );
}

type Props = {
  locale: string;
  messages: AbstractIntlMessages;
  children?: React.ReactNode;
};

export async function AppProvider({ children, locale, messages }: Props) {
  const session = await getServerSession(authOptions());

  return (
    //handle theme rerendereing
    <NextIntlClientProvider locale={locale} messages={messages}>
      <NextAuthProvider session={session}>
        <ThemeProvider>
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
      </NextAuthProvider>
    </NextIntlClientProvider>
  );
}
