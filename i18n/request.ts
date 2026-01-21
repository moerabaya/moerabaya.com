import { getRequestConfig } from "next-intl/server";

import ar from "../utils/languages/ar.json";
import en from "../utils/languages/en-US.json";
import { routing } from "./routing";

const language = {
  ar,
  "en-US": en,
} as const;

type LanguageKey = keyof typeof language;

export default getRequestConfig(async ({ locale }) => {
  // Ensure we have a valid locale, fallback to default if needed
  const validLocale = (locale || routing.defaultLocale) as LanguageKey;

  return {
    locale: validLocale,
    messages: language[validLocale] || {},
  };
});
