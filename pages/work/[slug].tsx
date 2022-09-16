import { MDXRemote } from 'next-mdx-remote';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import fs from 'fs';
import path from 'path';
import { serialize } from 'next-mdx-remote/serialize';
import matter from 'gray-matter';
import Image from 'next/image';
import rehypeImgSize from 'rehype-img-size';
import Login from 'components/templates/Login';


const components = {
  // Custom image - here you can customize the image layout: https://nextjs.org/docs/api-reference/next/image#layout
  img: ({ src, height, width, ...rest }: any) => (
    // layout="responsive" makes the image fill the container width wise - I find it looks nicer for blog posts
    <Image layout="responsive" src={src} height={height} width={width} {...rest} />
  ),
}
const Project = ({ mdxSource, meta, hasReadPermission }: any) => {
  const {pathname, asPath} = useRouter();
  useEffect(() => {
    
  }, [])

  if (!hasReadPermission) {
    return <Login redirectPath={asPath} />
  }


  return (
    <div className="project-content">
      <Head>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>{meta.title} - Mohammed Rabay&apos;a</title>
        
        {/* <!-- Primary Meta Tags --> */}
        <meta name="title" content={meta.title + " | Mohammed Rabay'a"} />
        <meta name="description" content={meta.description} />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:url" content={"https://moerabaya.com/" + pathname} />
        <meta property="og:title" content={meta.title + " | Mohammed Rabay'a"} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta?.metaimage ? require(meta?.metaimage) : require('../../assets/images/metaimage.png')} />

        {/* <!-- Twitter --> */}
        <meta property="twitter:url" content={"https://moerabaya.com/" + pathname} />
        <meta property="twitter:title" content={meta.title + " | Mohammed Rabay'a"} />
        <meta property="twitter:description" content={meta.description} />
        <meta property="twitter:image" content={meta?.metaimage ? require(meta?.metaimage) : require('../../assets/images/metaimage.png')} />
      </Head>

      <header>
        <div className="container">
          <h1 className='title'><mark style={{backgroundColor: meta.color ?? "white"}}>{meta.description}</mark></h1>
        </div>
      </header>
      <div className="container">
        <div className="content">
          <MDXRemote {...mdxSource} components={components} />
        </div>
        {/* {post.contents} */}
      </div>
    </div>
  )
}

export default Project;

const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('projects'))

  const paths = files.map(filename => ({
    params: {
      slug: filename.replace('.mdx', '')
    }
  }))

  return {
    paths,
    fallback: false
  }
}

const getStaticProps = async ({ params: { slug } }: any) => {
  const markdownWithMeta = fs.readFileSync(path.join('projects',
    slug + '.mdx'), 'utf-8')

    const options: any = [[rehypeImgSize, { dir: "public" }]];
  const { data: frontMatter, content } = matter(markdownWithMeta)
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: options
    }
  })
  return {
    props: {
      meta: frontMatter,
      slug,
      mdxSource
    }
  }
}

export { getStaticProps, getStaticPaths }

//@ts-ignore