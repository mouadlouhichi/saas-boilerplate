import { locales } from "@/data/i18n";
import { createI18nServer } from "next-international/server";

export const { getI18n, getScopedI18n, getStaticParams } =
  createI18nServer(locales);
