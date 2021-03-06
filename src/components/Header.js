import React, { Component } from 'react'
import ReactDom from 'react-dom'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Img from 'gatsby-image'

import logo from '../images/logo.png'

const HeaderWrapper = styled.div`
  background: rgba(0, 0, 0, .2);
  margin-bottom: 1.45rem;
  h1 {
    img {
      height: 80px;
      border-radius: 1rem;
    }
  }
  overflow: hidden;
  position: relative;
  height: ${({ isHome }) => (
    isHome ? '70vh' : '25vh'
  )}
`

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
`

const MainNav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    padding-top: 1.5rem;
    li {
      margin-left: 15px;
      font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif;
      a {
        text-decoration: none;
        color: #000;
        font-size: 12px;
        font-weight: 800;
        letter-spacing: 1px;
        text-transform: uppercase;
        &:hover {
          border-bottom: 3px solid #2c7873;
        }
      }
    }
  }
`

export default class Header extends Component {
  componentDidUpdate = (prevProps, prevState) => {
    const { location } = this.props
    // if we are going from home to home, don't run the animation
    if (location.pathname !== prevProps.location.pathname) {
      if (this.props.location.pathname === '/') {
        this.wrapper.animate([
          { height: '25vh' },
          { height: '70vh' }
        ], {
          duration: 300,
          fill: 'forwards',
          easing: 'cubic-bezier(.86, 0, .07, 1)',
          iterations: 1
        })
      } else {
        this.wrapper.animate([
          { height: '70vh' },
          { height: '25vh' }
        ], {
          duration: 300,
          fill: 'forwards',
          easing: 'cubic-bezier(.86, 0, .07, 1)',
          iterations: 1
        })
      }
    }
  }

  render() {
    const { data, location } = this.props

    return (
      <HeaderWrapper
        // we set 'this.wrapper' = to the DOM element which contains wrapper
        // we need it to use the Web Animations API
        isHome={location.pathname === '/'}
        ref={(wrapper) => this.wrapper = ReactDom.findDOMNode(wrapper)}
      >
        <HeaderContainer>
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: 'white',
                textDecoration: 'none'
              }}
            >
              <img src={logo} alt='Minimal Blog Logo made by DesignEvo' />
            </Link>
          </h1>

          <MainNav>
            <ul>
              <li>
                <Link to='/'>
                  Home
                </Link>
              </li>
              <li>
                <Link to='/about'>
                  About
                </Link>
              </li>
            </ul>
          </MainNav>
        </HeaderContainer>
        <Img
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
          }}
          sizes={data.background.sizes}
        />
      </HeaderWrapper>
    )
  }
}
