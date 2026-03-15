// components/Navigation/index.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "@/i18n/navigation";
import Logo from "assets/images/logo.svg";
import { AnimatedView } from "components";
import useGlobalization from "hooks/useGlobalization";
import Pages from "utils/data/navigation.json";

import { Burger } from "@/components/Button";

import MainNav from "./components/MainNav";
import ProjectNavigationBar from "./components/ProjectNavigation";
import SocialLinks from "./components/SocialLinks";
import Nav from "./Nav.styled";

type NavigationProps = {
  previous?: string;
  next?: string;
  slug?: string;
  meta?: {
    title?: string;
    description?: string;
    image?: string;
    date?: string;
    tags?: string[];
  };
};

const Navigation = ({ previous, next, ...props }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { translate, locale } = useGlobalization();
  const isProject = pathname?.split("/")?.[1] === "work" && props.slug;

  const items = Pages[locale === "ar" ? "ar" : "en"];

  const renderInnerMenu = () =>
    items.map(({ path, name }, index) => (
      <AnimatedView
        key={name}
        animate={isOpen}
        delay={isOpen ? index * 0.5 : 0}
      >
        <button
          className="block p-5 text-2xl text-inherit"
          onClick={() => setIsOpen(false)}
        >
          <Link href={path} className="animated">
            {name}
          </Link>
        </button>
      </AnimatedView>
    ));

  if (isProject) {
    return (
      <ProjectNavigationBar
        previous={previous}
        next={next}
        title={props.meta?.title}
      />
    );
  }

  return (
    <Nav $isOpen={isOpen} className="text-center">
      <AnimatedView vertical="-75" className="h-full">
        <div className="container m-auto h-full">
          <div className="grid grid-cols-3 gap-3">
            <div className="flex items-center">
              <div className="max-sm:hidden">
                <MainNav />
              </div>
            </div>
            <div className="flex items-center justify-center text-center">
              <Link href="/">
                <Logo width={60} className="dark:fill-neutral-50" />
              </Link>
            </div>
            <div className="flex items-center justify-end">
              <div className="flex items-stretch justify-end max-sm:hidden">
                <SocialLinks />
              </div>
              <Burger
                isActive={isOpen}
                className="!hidden max-sm:!block"
                onClick={() => setIsOpen(!isOpen)}
              />
            </div>
          </div>

          <div className="m-0 flex h-full flex-col">
            <div className="flex flex-1 flex-col items-center justify-center">
              {renderInnerMenu()}
            </div>
            <div className="mt-auto flex items-stretch justify-center pb-10">
              <SocialLinks />
            </div>
          </div>
        </div>
      </AnimatedView>
    </Nav>
  );
};

export default Navigation;
