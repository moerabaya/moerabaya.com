import axios from 'axios'
import path from 'path'
import chokidar from 'chokidar'
// import { reloadRoutes } from 'react-static/node'
import { rebuildRoutes } from 'react-static/node';
// import { Post } from './types
import jdown from 'jdown';

// Typescript support in static.config.js is not yet supported, but is coming in a future update!
let isReady = false

// chokidar.watch('content').on('all', () => isReady  && rebuildRoutes())

export default {
  entry: path.join(__dirname, 'src', 'index.tsx'),
  getRoutes: async () => {
    isReady = true;
    const { posts } = await jdown('content')
    return [
      {
        path: '/blog',
        getData: () => ({
          posts
        }),
        children: posts.map((post /* : Post */) => ({
          path: `/post/${post.slug}`,
          template: 'src/containers/Post',
          getData: () => ({
            post,
          }),
        })),
      },
    ]
  },
  plugins: [
    'react-static-plugin-typescript',
    
    'react-static-plugin-metadata',
    [
      "react-static-plugin-sass",
      {
        includePaths: ["..."]
      }],
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
}
