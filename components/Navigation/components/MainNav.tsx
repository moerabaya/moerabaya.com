// components/Navigation/MainNav.tsx
"use client";

import Link from "next/link";
import useGlobalization from "hooks/useGlobalization";
import Pages from "utils/data/navigation.json";

import { Button } from "@/components/Button";

const MainNav = () => {
  const { locale } = useGlobalization();
  const items = Pages[locale === "ar" ? "ar" : "en"];

  return (
    <>
      {items.map(({ path, name }, index) => (
        <Button
          as={Link}
          href={path}
          key={name}
          variant={index === 0 ? "outline" : "secondary"}
          className="me-3"
          layout="link"
        >
          {name}
        </Button>
      ))}
    </>
  );
};

export default MainNav;
