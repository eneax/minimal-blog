import React, { Component } from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'

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
    margin-top: 30px;
    margin-bottom: 10px;
  }
  @media only screen and (min-width: 768px) {
    h1 { font-size: 36px; }
  }
  p {
    line-height: 1.5;
    margin: 30px 0;
    a {
      color: #212529;
      &:focus,
      &:hover {
      text-decoration: none;
      color: #2c7873;
      }
    }
  }
`

export default class About extends Component {
  render () {
    return (
      <Container>
        <Row>
          <Col>
            <h1>About</h1>
            <p>
              Simple living encompasses a number of different voluntary
              practices to simplify one's lifestyle. These may include, for
              example, reducing one's possessions, generally referred to as
              minimalism, or increasing self-sufficiency. Simple living may
              be characterized by individuals being satisfied with what they
              have rather than want. Although asceticism generally promotes
              living simply and refraining from luxury and indulgence, not
              all proponents of simple living are ascetics. Simple living is
              distinct from those living in forced poverty, as it is a
              voluntary lifestyle choice.
              </p>

            <p>
              Adherents may choose simple living for a variety of personal
              reasons, such as spirituality, health, increase in quality
              time for family and friends, work–life balance, personal
              taste, financial sustainability, frugality, or reducing
              stress. Simple living can also be a reaction to materialism
              and conspicuous consumption. Some cite socio-political goals
              aligned with the environmentalist, anti-consumerist or
              anti-war movements, including conservation, degrowth, social
              justice, and tax resistance.
              </p>

            <p>Read more on <a href='https://en.wikipedia.org/wiki/Simple_living' target='_blank'>Wikipedia</a>.</p>
          </Col>
        </Row>
      </Container>
    )
  }
}