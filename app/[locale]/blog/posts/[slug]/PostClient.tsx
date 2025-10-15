"use client";

import Prism from "prismjs";

import "prism-themes/themes/prism-vsc-dark-plus.css";
import "prismjs/components/prism-csharp.js";
import "prismjs/components/prism-graphql.js";
import "prismjs/components/prism-javascript.js";
import "prismjs/components/prism-jsx.js";
import "prismjs/components/prism-typescript.js";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.js";

import { DetailedHTMLProps, HTMLAttributes, useEffect } from "react";
import Image, { ImageProps } from "next/legacy/image";
import type { Post } from "@/types";
import { AnimatedView } from "components";
import { MDXRemote } from "next-mdx-remote/rsc";

import Meta from "@/components/Meta";

const ResponsiveImage = (props: ImageProps) => (
  <Image
    width="0"
    height="0"
    sizes="100vw"
    className="h-auto w-full"
    alt={props.alt}
    {...props}
  />
);

const components = {
  Image: ResponsiveImage,
  code: (
    props: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
  ) => <code {...props} />,
  pre: (
    props: React.PropsWithChildren<React.HTMLAttributes<HTMLPreElement>>
  ) => (
    <pre
      {...props}
      className={`${props.className} copy-to-clipboard`}
      data-prismjs-copy="copy"
    ></pre>
  ),
};

interface PostClientProps {
  meta: Post;
  content: string;
  slug: string;
}

const PostClient = ({ meta, content }: PostClientProps) => {
  useEffect(() => {
    const highlight = async () => {
      await Prism.highlightAll();
    };
    highlight();
  }, []);

  return (
    <div className="pt-[75px]">
      <Meta
        title={meta.title}
        description={meta.description}
        image={meta.metaimage ? require(meta.metaimage) : undefined}
      />

      <div className="line-numbers container mx-auto max-w-4xl py-10 max-sm:py-0">
        <div className="px-4">
          <AnimatedView className="relative h-[350px] w-full overflow-hidden max-sm:h-[50vw] max-sm:min-h-[200px]">
            <Image
              alt={meta.alt}
              src={meta.image}
              placeholder="blur"
              blurDataURL={meta.placeholder}
              layout="fill"
              objectFit="cover"
              className="rounded-[50px]"
            />
          </AnimatedView>
        </div>
        <AnimatedView delay={0.5} className="px-7 pt-4">
          <h2
            className="font-medium"
            dangerouslySetInnerHTML={{ __html: meta?.title }}
          ></h2>
          <h5 className="post-details">
            {meta.date} . {meta.author}
          </h5>

          <div className="content">
            {/* @ts-expect-error MDXRemote cannot be used as a component */}npm
            <MDXRemote source={content} components={components} />
          </div>
        </AnimatedView>
      </div>
    </div>
  );
};

export default PostClient;
