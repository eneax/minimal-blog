import React from 'react'
import Link from 'gatsby-link'


const PostListing = ({ post }) => {
  return (
    <article>
      <span>{post.frontmatter.date}</span>
      <h3>{post.frontmatter.title}</h3>
      <p>{post.excerpt}</p>
      {/*
        <div dangerouslySetInnerHTML={{
          __html: post.html
        }} />
      */}
    </article>
  )
}

export default PostListing