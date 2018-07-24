import React, { Component } from 'react'
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
  h1 {
    font-size: 30px;
    margin-bottom: 10px;
  }
  @media only screen and (min-width: 768px) {
    h1 { font-size: 36px; }
  }
  p {
    line-height: 1.5;
    margin: 30px 0;
    font-size: 20px;
    a {
      color: #2c7873;
      &:focus,
      &:hover {
      text-decoration: none;
      color: #2c7873;
      }
    }
  }
`

export default class PostPage extends Component {
  render() {
    const { data } = this.props
    if (!data) return null    

    return (
      <Container>
        <Row>
          <Col>
            <span>{data.markdownRemark.frontmatter.date}</span>
            <h1>{data.markdownRemark.frontmatter.title}</h1>
            <p dangerouslySetInnerHTML={{
              __html: data.markdownRemark.html
            }} />
            <p>Read more on <a href='https://en.wikipedia.org/wiki/Minimalism_(disambiguation)' target='_blank'>Wikipedia</a>.</p>
          </Col>
        </Row>
      </Container>
    )
  }
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: {
      slug: {
        eq: $slug
      }
    }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD YYYY")
      }
    }
  }
`