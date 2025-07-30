import { useMemo } from "react";
import { useRouter } from "next/router";
import { Direction } from "moerabaya-components";
import ar from "utils/languages/ar.json";
import enUS from "utils/languages/en-US.json";

type Languages = "ar" | "en-US";
type LanguageResources<T> = {
  [key in Languages]: T;
};
type Resource = {
  [key: string]: string | Resource;
};
const languages: LanguageResources<Resource> = {
  ar: ar,
  "en-US": enUS,
};

function getter(obj: Resource, ...keys: Array<string>) {
  const result = keys.reduce<unknown>((acc, key) => {
    if (acc && typeof acc === "object") {
      return (acc as Record<string | number, unknown>)[key];
    }
    return undefined;
  }, obj);

  return typeof result === "string" ? result : null;
}

const useGlobalization = () => {
  const { locale } = useRouter();
  const direction: Direction = locale === "ar" ? "rtl" : "ltr";
  const isArabic = locale === "ar";

  useMemo(() => {
    if (typeof document !== "undefined")
      document.documentElement.dir = direction;
  }, [direction]);

  const getLocalizedString = (...args: string[]) => {
    const translateValue = getter(languages[locale as Languages], ...args);
    return translateValue ?? args[0];
  };

  const translate = (key: string, fallback: string = key) => {
    const translateValue = getter(
      languages[locale as Languages],
      ...key.split(".")
    );
    return translateValue ?? fallback;
  };
  return {
    locale,
    direction,
    getLocalizedString,
    translate,
    isArabic,
  };
};

export default useGlobalization;
