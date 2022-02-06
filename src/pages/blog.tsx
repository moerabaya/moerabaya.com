import React from 'react'
import { Head, useRouteData } from 'react-static'
import { Link } from '@reach/router'
import { Post } from 'types'

export default () => {
  const { posts }: { posts: Post[] } = useRouteData()

  return (
    <div className='page-content coming-soon-container'>
    {/* <div className='page-content'> */}
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>Blog - Mohammed Rabay'a</title>
        
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
        <h2>Coming soon</h2>
        {/* <br />
        All Posts:
        <ul>
          {posts?.map(post => (
            <li key={post.id}>
              <Link to={`/blog/post/${post.id}/`}>{post.title}</Link>
            </li>
          ))}
        </ul> */}
      </div>
    </div>
  )
}
