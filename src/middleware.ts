//TODO: refactor and improve auth
import createMiddleware from "next-intl/middleware";

import { fallbackLng, languages } from "@/data/i18n/settings";

export default createMiddleware({
  // A list of all locales that are supported
  locales: languages,

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: fallbackLng,
});

export const config = {
  // Skip all paths that should not be internationalized. This example skips the
  // folders "api", "_next" and all files with an extension (e.g. favicon.ico)
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
