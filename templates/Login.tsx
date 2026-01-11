"use client";

import React, { useState } from "react";
import { Project } from "@/types";
import { useTranslations } from "next-intl";
import { useCookie } from "react-use";

const Login = ({
  children,
  meta,
  slug,
}: React.PropsWithChildren<{
  slug: string;
  meta: Project;
}>) => {
  const [password, setPassword] = useState("");
  const [value, setValue] = useCookie(slug);
  const t = useTranslations();
  if (!meta.password || value === meta.password) return <>{children}</>;
  return (
    <form className="min-h-[320px]: flex h-[100vh] flex-col pt-[75px] max-sm:pt-[60px]">
      <input
        type="text"
        placeholder={t("login.password")}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="flex-1 bg-[--mr-background-color] text-center text-[3rem] text-neutral-950 placeholder-neutral-600 focus:bg-neutral-100 dark:text-white dark:focus:bg-neutral-900"
      />
      <button
        type="submit"
        className="bg-amber-500 py-5 text-[1.4rem] font-semibold text-white hover:bg-amber-600"
        style={{ fontVariant: "all-small-caps" }}
        onClick={(e) => {
          e.preventDefault();
          console.log(meta.password);
          if (password == meta.password) setValue(password);
        }}
      >
        {t("login.submit")}
      </button>
    </form>
  );
};

export default Login;
