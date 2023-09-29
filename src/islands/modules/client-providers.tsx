"use client";

import { type ComponentProps } from "react";
import { TooltipProvider } from "@/islands/primitives/tooltip";
// import { I18nProviderClient } from "@/data/i18n/client";
// import en from "@/data/i18n/dicts/en";
import { ToasterNotifier } from "@/islands/wrappers/toaster";
import { queryClient } from "@/server/query";
import { WithChildren } from "@/types";
import { QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider as NextThemeProvider } from "next-themes";

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

// locale,
export function ClientProviders({
  children,
}: WithChildren<{ locale: string }>) {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        {/* <I18nProviderClient locale={locale} fallbackLocale={en}> */}
        <TooltipProvider>
          {children}
          <ToasterNotifier />
        </TooltipProvider>
        {/* </I18nProviderClient> */}
      </QueryClientProvider>
    </ThemeProvider>
  );
}
