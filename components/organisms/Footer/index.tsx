import React from "react";
import { Avatar, Col, Grid, Row, Link, List, Text } from "components/atoms/";
import { default as StyledFooter } from "./Footer.styled";
import navigation from "utils/data/navigation.json";
import useGlobalization from "hooks/useGlobalization";

const Pages = navigation;
const Footer = React.forwardRef<HTMLDivElement>((props, ref) => {
  const { locale, getLocalizedString, isArabic } = useGlobalization();
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
      <Grid>
        <Row wrap>
          <Col>
            <Avatar
              href="/about"
              src={
                "https://en.gravatar.com/userimage/201100235/e812a2bff97470caf6299b1a96e5cc1e.png?size=150"
              }
              alt="Portrait of Mohammed Rabay'a"
              placeholder="blur"
              blurDataURL='"https://en.gravatar.com/userimage/201100235/e812a2bff97470caf6299b1a96e5cc1e.png?size=1"'
              size={45}
            />
          </Col>
        </Row>
        <Row wrap>
          <Col sm={12} lg={5} style={{ paddingBottom: "2em" }}>
            <Text as="h4">{getLocalizedString("footer", "title")}</Text>
            <Text as="h4">
              <Link animated={true} href="mail:rabaya.moe@gmail.com">
                contact@moerabaya.com
              </Link>
            </Text>
          </Col>
          <Col sm={12} hide={["sm", "md"]} lg={1}></Col>
          <Col sm={4} lg={2} style={{ paddingBottom: "2em" }}>
            <List>
              <List.Header>
                <Text smallCaps>
                  {getLocalizedString("footer", "languages")}
                </Text>
              </List.Header>
              <List.Item>
                <Link
                  opacity={isArabic ? 0.5 : 1}
                  href={"/"}
                  locale="en-US"
                  smallCaps
                >
                  {getLocalizedString("footer", "en")}
                </Link>
                <Text opacity={0.5} style={{ padding: "0 0.5em" }}>
                  .
                </Text>
                <Link
                  href="/"
                  locale="ar"
                  smallCaps
                  opacity={isArabic ? 1 : 0.5}
                  onHover={{ opacity: 1 }}
                >
                  {getLocalizedString("footer", "ar")}
                </Link>
              </List.Item>
            </List>
          </Col>
          <Col sm={4} lg={2} style={{ paddingBottom: "2em" }}>
            <List>
              <List.Header>
                <Text smallCaps>{getLocalizedString("footer", "follow")}</Text>
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
          </Col>
          <Col sm={4} lg={2}>
            <List style={{ paddingTop: "0.75em" }}>{renderPages()}</List>
          </Col>
        </Row>
        <Row>
          <Col>©{new Date().getFullYear()} moerabaya.com</Col>
        </Row>
      </Grid>
    </StyledFooter>
  );
});

Footer.displayName = "Footer";
export default Footer;
