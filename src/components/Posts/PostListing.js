import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'


const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`

const Row = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`

const Col = styled.div`
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  @media (min-width: 992px) {
    -ms-flex: 0 0 66.666667%;
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
  }
  @media (min-width: 768px) {
    -ms-flex: 0 0 83.333333%;
    flex: 0 0 83.333333%;
    max-width: 83.333333%;
  }
  margin-right: auto !important;
  margin-left: auto !important;
`

const PostPreview = styled.div`
  a {
    color: #212529;
    text-decoration: none;
    &:focus,
    &:hover {
      text-decoration: none;
      color: #2c7873;
    }
    h2 {
      font-size: 30px;
      margin-top: 30px;
      margin-bottom: 10px;
    }
    h3 {
      font-weight: 300;
      margin: 0 0 10px;
    }
  }
  p {
    font-size: 18px;
    font-style: italic;
    margin-top: 0;
    color: #868e96;
  }
  @media only screen and (min-width: 768px) {
    a {
      h2 {
        font-size: 36px;
      }
    }
  }
`


const PostListing = ({ post }) => {
  return (
    <Container>
      <Row>
        <Col>
          <PostPreview>
            <Link to={post.fields.slug}>
              <h2>{post.frontmatter.title}</h2>
              <h3>{post.excerpt}</h3>
            </Link>
            <p>Posted by Minimal Blog on {post.frontmatter.date}</p>
          </PostPreview>
          <hr/>
        </Col>
      </Row>
    </Container>
  )
}

export default PostListing
