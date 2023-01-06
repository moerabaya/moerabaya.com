import AnimatedView from "components/atoms/AnimatedView";
import { Col, Grid, Link, Row, Text } from "components/atoms";
import { useContext } from "react";
import { ThemeContext } from "templates/ThemeProvider";

const Contact = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <>
      <div className="page-content">
        <Grid>
          <Row>
            <Col sm={9}>
              <AnimatedView delay={0.75}>
                <Text as="h1" weight={900} smallCaps m={"1em 0 0.25em"}>
                  Want to connect? <br /> Lets talk!
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
            <Col sm={3}></Col>
          </Row>
        </Grid>
      </div>
    </>
  );
};

Contact.displayName = "Contact";

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default Contact;
