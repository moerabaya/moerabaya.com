import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Avatar, Col, Link, List, Row, Text } from "components";
import useGlobalization from "hooks/useGlobalization";
import navigation from "utils/data/navigation.json";

import { default as StyledFooter } from "./Footer.styled";

const Pages = navigation;
const Footer = React.forwardRef<HTMLDivElement>((_props, ref) => {
  const { locale, getLocalizedString, isArabic } = useGlobalization();
  const [opacity, setOpacity] = useState(0);
  const { asPath } = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const footerHeight = (ref as React.RefObject<HTMLElement>)?.current
        ?.clientHeight;
      const contentHeight = document.body.clientHeight + footerHeight!;
      setOpacity(
        (window.innerWidth <= 700 ? 2 : 1) -
          (contentHeight - (window.scrollY + window.innerHeight)) /
            footerHeight!
      );
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ref]);

  const renderPages = () =>
    Pages[locale == "ar" ? "ar" : "en"]?.map(({ path, name }) => (
      <List.Item key={name} as="h5" style={{ marginTop: "0.5em" }}>
        <Link href={path} smallCaps opacity={0.5} onHover={{ opacity: 1 }}>
          {name}
        </Link>
      </List.Item>
    ));

  return (
    <StyledFooter ref={ref}>
      <div style={{ opacity: opacity }} className="container mx-auto px-5">
        <Row wrap>
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
              <Link animated={true} href="mail:contact@moerabaya.com">
                contact@moerabaya.com
              </Link>
            </Text>
          </div>
          <div className="col-span-1 max-xl:hidden"></div>
          <div className="col-span-1 px-2 max-md:col-span-2 max-sm:col-span-1 max-[380px]:col-span-2">
            <List>
              <List.Header>
                <Text smallCaps className="text-lg max-xl:text-base">
                  {getLocalizedString("footer", "languages")}
                </Text>
              </List.Header>
              <List.Item>
                <Link
                  opacity={isArabic ? 0.5 : 1}
                  href={asPath}
                  locale="en-US"
                  smallCaps
                >
                  {getLocalizedString("footer", "en")}
                </Link>
                <Text opacity={0.5} style={{ padding: "0 0.5em" }}>
                  .
                </Text>
                <Link
                  href={asPath}
                  locale="ar"
                  smallCaps
                  opacity={isArabic ? 1 : 0.5}
                  onHover={{ opacity: 1 }}
                >
                  {getLocalizedString("footer", "ar")}
                </Link>
              </List.Item>
            </List>
          </div>
          <div className="col-span-1 px-2 max-md:col-span-2 max-sm:col-span-1">
            <List>
              <List.Header>
                <Text smallCaps className="text-lg max-xl:text-base">
                  {getLocalizedString("footer", "follow")}
                </Text>
              </List.Header>
              <List.Item>
                <Link
                  href="https://twitter.com/moerabaya_"
                  target="_blank"
                  opacity={0.5}
                  onHover={{ opacity: 1 }}
                >
                  {getLocalizedString("footer", "twitter")}
                </Link>
              </List.Item>
              <List.Item>
                <Link
                  href="https://www.linkedin.com/in/moerabaya/"
                  target="_blank"
                  opacity={0.5}
                  onHover={{ opacity: 1 }}
                >
                  {getLocalizedString("footer", "linkedin")}
                </Link>
              </List.Item>
              <List.Item>
                <Link
                  href="https://dribbble.com/moerabaya/"
                  target="_blank"
                  opacity={0.5}
                  onHover={{ opacity: 1 }}
                >
                  {getLocalizedString("footer", "dribbble")}
                </Link>
              </List.Item>
              <List.Item>
                <Link
                  href="https://www.behance.net/moerabaya/"
                  target="_blank"
                  opacity={0.5}
                  onHover={{ opacity: 1 }}
                >
                  {getLocalizedString("footer", "behance")}
                </Link>
              </List.Item>
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
      </div>
    </StyledFooter>
  );
});

Footer.displayName = "Footer";
export default Footer;
