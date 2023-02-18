import { Project as ProjectInterface } from "types";
import { Row, Col, AnimatedView, Text, Link } from "components/atoms";
import Image from "next/image";
import useGlobalization from "hooks/useGlobalization";
import React from "react";

interface ProjectProps extends ProjectInterface {
  updateScrollTop: (scrollTop: number) => void;
}

const Project = ({ updateScrollTop, ...project }: ProjectProps) => {
  const { getLocalizedString } = useGlobalization();
  const ref = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    updateScrollTop(ref.current!.offsetTop);
  }, []);
  return (
    <Row
      ref={ref}
      alignItems="center"
      style={{
        height: "100vh",
        scrollSnapAlign: "start",
        paddingTop: "4.5em",
        paddingBottom: "2em",
      }}
      direction="row-reverse"
      wrap
      key={project.slug}
    >
      <Col sm={12} lg={6}>
        <AnimatedView>
          <Text
            smallCaps
            style={{ margin: 0, marginBottom: "5px" }}
            as="h1"
            weight={700}
          >
            {project.title}
          </Text>
          <Link
            weight={200}
            opacity={0.8}
            animated
            href={`${project.slug}`}
            smallCaps
          >
            {getLocalizedString("work", "view")}
          </Link>
        </AnimatedView>
      </Col>
      <Col sm={12} lg={6} style={{ height: "100%", paddingInlineStart: 0 }}>
        <AnimatedView
          vertical={50}
          style={{
            width: "100%",
            position: "relative",
            background: "white",
            height: "100%",
          }}
        >
          <Image
            placeholder="blur"
            alt=""
            layout="fill"
            objectFit="cover"
            src={
              project.cover_photo &&
              require(`assets/images/projects/${project.cover_photo}`)
            }
          />
        </AnimatedView>
      </Col>
    </Row>
  );
};
export default Project;
