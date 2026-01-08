import React, { JSXElementConstructor, ReactElement } from "react";
import Login from "@/templates/Login";
import { AnimatedText } from "components";

import { Project as IProject } from "types";
import Meta from "@/components/Meta";

type WorkProjectClientProps = {
  meta: IProject;
  content: ReactElement<unknown, string | JSXElementConstructor<unknown>>;
  slug: string;
};

const WorkProjectClient = ({ meta, content, slug }: WorkProjectClientProps) => {
  if (!meta) return null;

  if (meta.password) {
    return <Login slug={meta.slug} redirectPath={slug} />;
  }

  const getProjectType = () => meta.project_type?.split(", ");

  return (
    <div className="pt-[75px]">
      <Meta
        title={meta.title}
        description={meta.description}
        image={meta.metaimage ? require(meta.metaimage) : undefined}
      />

      <div className="container mx-auto px-5 pb-16 pt-28">
        <AnimatedText
          text={meta.description || ""}
          className="text-5xl font-[500] leading-[1.15em] max-md:text-[5vw] max-md:leading-[1.2] max-[500px]:text-[8vw]"
          type="h1"
        />
        <div className="pt-14 max-md:text-[1em]">
          <span className="pe-5">{getProjectType()?.[0]}</span>
          <span className="pe-5">x</span>
          <span className="pe-5">{getProjectType()?.[1]}</span>
          {meta.date && !Number.isNaN(new Date(meta.date).getFullYear()) && (
            <>
              <span className="pe-5">|</span>
              <span>{new Date(meta.date).getFullYear()}</span>
            </>
          )}
        </div>
      </div>
      {content}
    </div>
  );
};

export default WorkProjectClient;
