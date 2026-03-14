"use client";

import clsx from "clsx";
import { useTheme } from "next-themes";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  if (!theme) return null;

  const isDark = theme === "dark";

  return (
    <span
      suppressHydrationWarning
      className="font-regular relative mx-2 flex w-20 items-center rounded-full border-[1px] border-solid border-[#EEEEEE] bg-[#F1F1F1] px-1 hover:border-stone-200 hover:bg-stone-100 active:bg-stone-200 dark:border-[#202020] dark:bg-stone-900 dark:text-gray-50 dark:hover:border-stone-800 dark:hover:bg-stone-900 dark:active:bg-stone-800"
    >
      <span
        className={clsx(
          "inline-block h-9 w-9 rounded-full border-[1px] border-solid border-stone-200 bg-[#EAEAEA] transition-transform dark:border-neutral-800 dark:bg-neutral-900",
          {
            "translate-x-[94%] rtl:-translate-x-[94%]": isDark,
          }
        )}
      />
      <button
        className="absolute left-0 flex h-full w-full cursor-pointer items-center justify-between px-2 text-inherit"
        onClick={() => setTheme(isDark ? "light" : "dark")}
      >
        {/* sun */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={clsx("mx-[0.1rem] h-6 w-6", isDark && "opacity-40")}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
          />
        </svg>

        {/* moon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={clsx("mx-[0.2rem] h-5 w-5", !isDark && "opacity-40")}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
          />
        </svg>
      </button>
    </span>
  );
};

export default ThemeSwitch;
