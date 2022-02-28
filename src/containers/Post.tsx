import React, { useEffect } from 'react'
import { Head, useRouteData } from 'react-static'
import { Link, useLocation } from '@reach/router';
import { Post } from '../../types'
import parse from 'html-react-parser';

export default () => {
  const { post }: { post: Post } = useRouteData();
  const location = useLocation();
  useEffect(() => {
    
  }, [])
  return (
    <div className="post-content">
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>{post.title} - Mohammed Rabay'a</title>
        
        {/* <!-- Primary Meta Tags --> */}
        <meta name="title" content={post.title + " | Mohammed Rabay'a"} />
        <meta name="description" content={post.description} />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:url" content={"https://moerabaya.com/" + location.pathname} />
        <meta property="og:title" content={post.title + " | Mohammed Rabay'a"} />
        <meta property="og:description" content={post.description} />
        <meta property="og:image" content={post?.metaimage ? require(post?.metaimage) : require('../assets/images/metaimage.png')} />

        {/* <!-- Twitter --> */}
        <meta property="twitter:url" content={"https://moerabaya.com/" + location.pathname} />
        <meta property="twitter:title" content={post.title + " | Mohammed Rabay'a"} />
        <meta property="twitter:description" content={post.description} />
        <meta property="twitter:image" content={post?.metaimage ? require(post?.metaimage) : require('../assets/images/metaimage.png')} />
      </Head>
      <div className="container">
        <Link className='posts-back' to="/blog/">{'<'} Back</Link>
        <br />
        <h1 className='post-title'>{post.title}</h1>
        <h5 className="post-details">
          {post.date} . {post.author}
        </h5>
        <div className="content">
          {parse(post.contents)}
        </div>
        {/* {post.contents} */}
      </div>
    </div>
  )
}
