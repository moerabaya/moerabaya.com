import { useRouter } from "next/router";
import ar from "utils/languages/ar.json";
import enUS from "utils/languages/en-US.json";

type Languages = "ar" | "en-US";
type LanguageResources<T> = {
  [key in Languages]: T;
};
const languages: LanguageResources<{ [key: string]: string }> = {
  ar: ar,
  "en-US": enUS,
};
const useGlobalization = () => {
  const { locale } = useRouter();
  const getLocalizedString = (value: string) => {
    const translateValue = languages[locale as Languages][value];
    return translateValue;
  };
  return {
    locale,
    getLocalizedString,
  };
};

export default useGlobalization;
