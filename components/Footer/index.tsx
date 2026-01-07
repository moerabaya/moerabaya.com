import React from "react";
import { Link as NextLink } from "@/i18n/navigation";
import { clsx } from "@/utils/css/clsx";
import { Avatar, Col, Link, Row, Text } from "components";
import useGlobalization from "hooks/useGlobalization";
import navigation from "utils/data/navigation.json";

import { List, ListHeader, ListItem } from "@/components/List";

import { FooterWrapper } from "./Footer.styled";

const Pages = navigation;
const Footer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const { locale, getLocalizedString } = useGlobalization();

  const renderPages = () =>
    Pages[locale == "ar" ? "ar" : "en"]?.map(({ path, name }) => (
      <ListItem key={name} as="h5" style={{ marginTop: "0.5em" }}>
        <Link href={path} $opacity={0.5} $onHover={{ opacity: 1 }}>
          {name}
        </Link>
      </ListItem>
    ));

  return (
    <FooterWrapper ref={ref} {...props}>
      <Row>
        <Col>
          <Avatar
            href="/about"
            src={
              "https://en.gravatar.com/userimage/201100235/e812a2bff97470caf6299b1a96e5cc1e.png?size=150"
            }
            alt="Portrait of Moe Rabay'a"
            placeholder="blur"
            blurDataURL='"https://en.gravatar.com/userimage/201100235/e812a2bff97470caf6299b1a96e5cc1e.png?size=1"'
            size={45}
          />
        </Col>
      </Row>
      <div className="grid grid-cols-6 pb-8 max-md:grid-cols-11 max-sm:grid-cols-3 max-[380px]:grid-cols-2">
        <div className="col-span-2 px-2 pb-5 pt-3 max-xl:col-span-3 max-xl:pe-16 max-lg:pe-2 max-md:col-span-5 max-sm:col-span-3 max-sm:max-w-[430px] max-[380px]:col-span-2">
          <Text className="block text-xl max-md:text-lg max-sm:text-xl">
            {getLocalizedString("footer", "title")}
          </Text>
          <Text className="mt-4 block text-xl max-md:text-xl max-sm:text-xl">
            <Link $animated href="mail:contact@moerabaya.com">
              contact@moerabaya.com
            </Link>
          </Text>
        </div>
        <div className="col-span-1 max-xl:hidden"></div>
        <div className="col-span-1 px-2 max-md:col-span-2 max-sm:col-span-1 max-[380px]:col-span-2">
          <List>
            <ListHeader>
              <Text $smallCaps className="text-lg max-xl:text-base">
                {getLocalizedString("footer", "languages")}
              </Text>
            </ListHeader>
            <ListItem>
              <NextLink
                href="/"
                locale="en-US"
                className={clsx([
                  "hover:opacity-100",
                  {
                    "opacity-100": locale === "en-US",
                    "opacity-50": locale !== "en-US",
                  },
                ])}
              >
                {getLocalizedString("footer", "en")}
              </NextLink>
              <Text $opacity={0.5} style={{ padding: "0 0.5em" }}>
                .
              </Text>
              <NextLink
                href="/"
                locale="ar"
                className={clsx([
                  "hover:opacity-100",
                  {
                    "opacity-100": locale === "ar",
                    "opacity-50": locale !== "ar",
                  },
                ])}
              >
                {getLocalizedString("footer", "ar")}
              </NextLink>
            </ListItem>
          </List>
        </div>
        <div className="col-span-1 px-2 max-md:col-span-2 max-sm:col-span-1">
          <List>
            <ListHeader>
              <Text $smallCaps className="text-lg max-xl:text-base">
                {getLocalizedString("footer", "follow")}
              </Text>
            </ListHeader>
            <ListItem>
              <Link
                href="https://twitter.com/moerabaya_"
                target="_blank"
                $opacity={0.5}
                $onHover={{ opacity: 1 }}
              >
                {getLocalizedString("footer", "twitter")}
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/moerabaya/"
                target="_blank"
                $opacity={0.5}
                $onHover={{ opacity: 1 }}
              >
                {getLocalizedString("footer", "linkedin")}
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://dribbble.com/moerabaya/"
                target="_blank"
                $opacity={0.5}
                $onHover={{ opacity: 1 }}
              >
                {getLocalizedString("footer", "dribbble")}
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.behance.net/moerabaya/"
                target="_blank"
                $opacity={0.5}
                $onHover={{ opacity: 1 }}
              >
                {getLocalizedString("footer", "behance")}
              </Link>
            </ListItem>
          </List>
        </div>
        <div className="col-span-1 px-2 max-md:col-span-2 max-sm:col-span-1">
          <List
            style={{ paddingTop: "0.75em" }}
            className="max-xs:flex max-xs:space-x-4 max-xs:mt-4 max-xs:!pb-5"
          >
            {renderPages()}
          </List>
        </div>
      </div>
      <div className="flex justify-between max-[500px]:flex-col">
        <div className="!p-2 max-[500px]:text-center">
          <Link
            className={`inline-block rounded-2xl bg-neutral-900 px-4 py-2 text-base transition ease-in-out hover:rounded-full hover:bg-neutral-800 hover:text-neutral-50`}
            href={"resume.pdf"}
          >
            {getLocalizedString("footer", "downloadResume")}
          </Link>
        </div>
        <div className="!p-2 text-end max-[500px]:mt-3 max-[500px]:text-center">
          ©{new Date().getFullYear()} moerabaya.com
        </div>
      </div>
    </FooterWrapper>
  );
});

Footer.displayName = "Footer";
export default Footer;
