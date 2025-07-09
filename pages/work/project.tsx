import React from "react";
import Image from "next/legacy/image";
import { AnimatedView, Col, Link, Row, Text } from "components";
import useGlobalization from "hooks/useGlobalization";
import styled from "styled-components";

import { Project as ProjectInterface } from "types";

interface ProjectProps extends ProjectInterface {
  updateScrollTop: (scrollTop: number) => void;
}

const StyledProject = styled(Row)`
  height: 100vh;
  scroll-snap-align: start;
  padding-top: 4em;
  padding-bottom: 4em;
  align-items: center;
  flex-direction: column;
  > div:first-child {
    padding-top: 2em;
    padding-bottom: 2em;
  }
  > div:last-child {
    padding: 0;
    flex: 1;
  }
  @media (min-width: ${(props) => props.theme.screens.medium}) {
    flex-direction: row-reverse;
    padding-bottom: 2em;
    > div:last-child {
      height: 100%;
      padding-top: 2em;
      padding-bottom: 0em;
      padding-inline-end: 1em;
    }
  }
`;

const Project = ({ updateScrollTop, ...project }: ProjectProps) => {
  const { getLocalizedString } = useGlobalization();
  const ref = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    updateScrollTop(ref.current!.offsetTop);
  }, []);
  return (
    <StyledProject
      ref={ref}
      alignItems="center"
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
      <Col sm={12} lg={6}>
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
              require(`@/assets/images/projects/${project.cover_photo}`)
            }
          />
        </AnimatedView>
      </Col>
    </StyledProject>
  );
};
export default Project;
