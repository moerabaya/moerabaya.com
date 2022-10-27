import AnimatedView from "components/atoms/AnimatedView";
import { Col, Grid, Row, Text } from "components/atoms";
import { useContext } from "react";
import { ThemeContext } from "templates/ThemeProvider";

export default function Contact() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <>
      <div className="page-content">
        <Grid>
          <Row>
            <Col sm={6}>
              <AnimatedView delay={0.75}>
                <Text as="h1">Want to connect? Let's talk!</Text>
              </AnimatedView>
              <AnimatedView delay={1.5}>
                <h2>
                  <a
                    target="_blank"
                    href="https://cura.healthcare/"
                    rel="noreferrer"
                  >
                    <strong>contact@moerabaya.com</strong>
                  </a>
                </h2>
              </AnimatedView>
            </Col>
            <Col sm={6}>
              <a
                className="twitter-timeline"
                data-width="500"
                data-height="500"
                data-dnt="true"
                data-theme={theme}
                href="https://twitter.com/moerabaya_?ref_src=twsrc%5Etfw"
              >
                Tweets by moerabaya_
              </a>{" "}
              <script
                async
                src="https://platform.twitter.com/widgets.js"
                charset="utf-8"
              ></script>
            </Col>
          </Row>
        </Grid>
      </div>
    </>
  );
}
