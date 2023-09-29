"use client";

import { type ComponentProps } from "react";
import { AbstractIntlMessages, NextIntlClientProvider } from "next-intl";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { WithChildren } from "@/types";

import { TooltipProvider } from "@/shared/Primitives/Tooltip";

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

export const AppProvider = ({ children, locale, messages }: Props) => {
  return (
    //handle theme rerendereing
    <ThemeProvider>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <TooltipProvider>{children}</TooltipProvider>
      </NextIntlClientProvider>
    </ThemeProvider>
  );
};
