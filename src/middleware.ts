/** @see https://nextjs.org/docs/app/building-your-application/routing/middleware */

import { NextResponse, type NextRequest } from "next/server";
import { withAuth } from "next-auth/middleware";
import createIntlMiddleware from "next-intl/middleware";

import { defaultLocale, locales } from "./i18n/locales";

function doesPathMatchPages(req: NextRequest, pages: string[]) {
  return RegExp(`^(/(${locales.join("|")}))?(${pages.join("|")})/?$`, "i").test(
    req.nextUrl.pathname,
  );
}

function redirect(req: NextRequest, redirectURL: string) {
  return NextResponse.redirect(
    new URL(redirectURL, req.nextUrl.origin).toString(),
  );
}

const intlMiddleware = createIntlMiddleware({
  locales,
  defaultLocale,
  localePrefix: "always",
});

const defaultPublicPage = "";
const authPages = ["/sign-in", "/sign-up"];
const blockedPages = ["/blocked"];
const defaultBlockedPage = "/blocked";
const adminPages = ["/admin"];

/**
 * `/{locale}/` -> `/{locale}`
 */
const publicPages = [""];

export default withAuth(
  function onSuccess(req) {
    const token = req.nextauth.token;

    if (req.nextUrl.pathname.startsWith("/api")) {
      if (true) return NextResponse.next();
    }

    if (!token) {
      if (
        !doesPathMatchPages(req, authPages) &&
        !doesPathMatchPages(req, publicPages)
      ) {
        return null;
      }
      return intlMiddleware(req);
    }

    // todo: make it more stable
    // if (
    //   doesPathMatchPages(req, authPages) ||
    //   (doesPathMatchPages(req, blockedPages) && !token.isBlocked) ||
    //   (doesPathMatchPages(req, adminPages) && !token.isAdmin)
    // ) {
    //   return redirect(req, defaultPublicPage);
    // }

    if (!doesPathMatchPages(req, blockedPages) && token.isBlocked) {
      return redirect(req, defaultBlockedPage);
    }

    return intlMiddleware(req);
  },
  {
    callbacks: {
      authorized: () => true,
    },
  },
);

export const config = {
  // Skip all paths that should not be touched by this middleware
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
