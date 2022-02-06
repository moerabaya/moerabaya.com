import React from 'react'
import { useRouteData } from 'react-static'
import { Link } from '@reach/router'
import { Post } from '../../types'

export default () => {
  const { post }: { post: Post } = useRouteData()
  return (
    <div className="page-content">
      <div className="container">
        <Link to="/blog/">{'<'} Back</Link>
        <br />
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    </div>
  )
}
