import { Direction } from "moerabaya-components";
import { useRouter } from "next/router";
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

function getter(...args: string[] | Object[]) {
  var current = arguments[0];
  for (var i = 1; i < arguments.length; i++) {
    if (current[arguments[i]]) {
      current = current[arguments[i]];
    } else {
      return null;
    }
  }
  return current;
}

const useGlobalization = () => {
  const { locale } = useRouter();
  const direction: Direction = locale === "ar" ? "rtl" : "ltr";
  const isArabic = locale === "ar";

  const getLocalizedString = (...a: string[]): string => {
    const translateValue = getter(languages[locale as Languages], ...a);
    console.log(a);
    // const translateValue = "";
    return translateValue;
  };
  return {
    locale,
    direction,
    getLocalizedString,
    isArabic,
  };
};

export default useGlobalization;
