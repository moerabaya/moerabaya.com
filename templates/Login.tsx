"use client";

import React, { useState } from "react";
import { Button } from "@/components";
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
        name="password"
        id="password"
        placeholder={t("login.password")}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="flex-1 border-b-[1px] border-b-neutral-200 bg-[--mr-background-color] text-center text-4xl text-neutral-950 placeholder-neutral-600 focus:bg-neutral-100 dark:border-b-neutral-900 dark:text-white dark:focus:bg-neutral-900"
      />
      <Button
        key={"all"}
        href={`/blog`}
        variant="secondary"
        type="submit"
        className="rounded-none py-5"
        onClick={(e: MouseEvent) => {
          e.preventDefault();
          if (password == meta.password) setValue(password);
        }}
      >
        {t("login.submit")}
      </Button>
    </form>
  );
};

export default Login;
