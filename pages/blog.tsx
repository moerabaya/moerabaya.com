import Head from 'next/head'
import Link from 'next/link';
import React from 'react'
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import { promises as fs } from 'fs';
import path from 'path';
import grayMatter from 'gray-matter';
import { Post } from '../types'

const Blog = ({posts}:any) => {

  return (
    <div className='page-content'>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>Blog - Mohammed Rabay&apos;a</title>
        
        {/* <!-- Primary Meta Tags --> */}
        <meta name="title" content="Blog | Mohammed Rabay'a" />
        <meta name="description" content="ux, ui, mobile, apps, web, javascript, html, developer, designer, seo, user experience, user interface, products, social media" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:url" content="https://moerabaya.com/blog" />
        <meta property="og:title" content="Blog | Mohammed Rabay'a" />
        <meta property="og:description" content="ux, ui, mobile, apps, web, javascript, html, developer, designer, seo, user experience, user interface, products, social media" />
        <meta property="og:image" content={require('../assets/images/metaimage.png')} />

        {/* <!-- Twitter --> */}
        <meta property="twitter:url" content="https://moerabaya.com/blog" />
        <meta property="twitter:title" content="Blog | Mohammed Rabay'a" />
        <meta property="twitter:description" content="ux, ui, mobile, apps, web, javascript, html, developer, designer, seo, user experience, user interface, products, social media" />
        <meta property="twitter:image" content={require('../assets/images/metaimage.png')} />
      </Head>
      <div className="container">
        {/* <h2>Coming soon</h2> */}
        <br />
        <h5><strong>Articles</strong></h5>
        <ul className="posts-list">
          {posts?.map((post:any) => (
            <li key={post.slug}>
              <Link href={post.slug}><a className="animated">{post?.title}</a></Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Blog;

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd()/* process current directory */, 'posts');
  const filenames = await fs.readdir(postsDirectory);

  const files = await Promise.all(filenames.map(async filename => {
    const filePath = path.join(postsDirectory, filename);
    const content = await fs.readFile(filePath, 'utf8');
    const matter = grayMatter(content);
    console.log(matter);
    return {
      filename, matter
    }
  }))
  const posts = files.map(file => {
    return {
      slug: `posts/${file.filename.replace('.mdx', '')}`,
      title: file.matter.data.title
    }
  })
  
  return {
    props: {
      posts
    }
  }
}