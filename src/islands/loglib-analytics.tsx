import { env } from "@/data/env/env.mjs";
import Loglib from "@loglib/tracker/react";

export const loglibSiteId = env.LOGLIB_SITE_ID || "";
export const loglibApiKey = env.LOGLIB_API_KEY || "";

export default function LoglibAnalytics() {
  return (
    <Loglib
      config={{
        id: loglibSiteId,
      }}
    />
  );
}
