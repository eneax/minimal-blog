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
  p {
    padding: 50px 0;
    font-size: 14px;
    margin-bottom: 0;
    text-align: center;
    color: #6c757d !important;
  }
`


const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col>
            <p>Copyright &copy; Minimal Blog 2018</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer