import React from 'react'

const NotFound = () => (
  <div className='page-content coming-soon-container'>
    <h1 className="notfound-title">404 - Oh no&apos;s! We couldn&apos;t find that page</h1>
  </div>
)
NotFound.displayName = 'NotFound';

export default NotFound;

export async function getStaticProps() {
  return {
    props: {
    }
  }
}
