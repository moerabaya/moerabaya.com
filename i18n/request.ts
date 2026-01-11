import { getRequestConfig } from "next-intl/server";

import { routing } from "./routing";

export default getRequestConfig(async ({ locale }) => {
  // Ensure we have a valid locale, fallback to default if needed
  const validLocale = locale || routing.defaultLocale;

  return {
    locale: validLocale,
    messages: (await import(`../utils/languages/${validLocale}.json`)).default,
  };
});
