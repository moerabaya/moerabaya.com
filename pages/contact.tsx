import AnimatedView from "components/atoms/AnimatedView";
import { Col, Grid, Link, Row, Text } from "components/atoms";
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
                <Text as="h2" weight={500}>
                  Want to connect? Lets talk!
                </Text>
              </AnimatedView>
              <AnimatedView delay={1.5}>
                <h3>
                  <Link
                    animated
                    target="_blank"
                    href="https://cura.healthcare/"
                    rel="noreferrer"
                  >
                    <strong>contact@moerabaya.com</strong>
                  </Link>
                </h3>
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
              ></a>{" "}
              <script
                async
                src="https://platform.twitter.com/widgets.js"
              ></script>
            </Col>
          </Row>
        </Grid>
      </div>
    </>
  );
}
