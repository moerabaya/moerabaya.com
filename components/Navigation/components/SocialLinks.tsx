// components/Navigation/SocialLinks.tsx
"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { BsGithub, BsLinkedin } from "react-icons/bs";

import { Button } from "@/components/Button";

import ThemeSwitch from "./ThemeSwitch";

const SocialLinks = () => {
  return (
    <>
      <ThemeSwitch />
      <Button
        as="a"
        target="_blank"
        href="https://github.com/moerabaya/"
        key="github-url"
        variant="outline"
        layout="icon"
        className={"me-2"}
      >
        <BsGithub size="26px" />
      </Button>
      <Button
        as="a"
        target="_blank"
        href="https://www.linkedin.com/in/moerabaya/"
        key="linkedin-url"
        variant="outline"
        layout="icon"
      >
        <BsLinkedin size="26px" className="rounded-md" />
      </Button>
    </>
  );
};

export default SocialLinks;
