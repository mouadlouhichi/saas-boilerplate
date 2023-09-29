import { type MetadataRoute } from "next";

import { absoluteUrl } from "@/server/utils";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // TODO: Find the proper way to handle locales!
  const routes = [
    "",
    "/survey",
    "/login",
    "/signup",
    "/account",
    "/account-billing",
    "/account-password"
  ].map((route) => ({
    url: absoluteUrl(route),
    lastModified: new Date().toISOString()
  }));

  return [
    ...routes

    // ...more routes
  ];
}
