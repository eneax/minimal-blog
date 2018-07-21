import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({ data }) => (
  <div>
    <h1>{data.site.siteMetadata.title}</h1>
    <p>{data.site.siteMetadata.desc}</p>
    {data.allMarkdownRemark.edges.map(({node}) => {
      return <PostListing post={node} />
    })}
  </div>
)

const PostListing = () => <div>Hello</div>

export default IndexPage

export const query = graphql`
  query SiteMeta {
    site {
      siteMetadata {
        title
        desc
      }
    }
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MMMM DD YYYY")
          }
          html
        }
      }
    }
  }
`