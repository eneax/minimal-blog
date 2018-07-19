import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import logo from '../../images/logo.png'

const HeaderWrapper = styled.div`
  background: rgba(0, 0, 0, .2);
  margin-bottom: 1.45rem;
  h1 {
    img {
      height: 80px;
    }
  }
`

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`

const Header = ({ data }) => (
  <HeaderWrapper>
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

      <h1>{data.site.siteMetadata.title}</h1>
      <p>{data.site.siteMetadata.desc}</p>

      <nav>
        <ul>
          <li>
            <Link to='/'>
              Home
            </Link>
            <Link to='/about'>
              About
            </Link>
          </li>
        </ul>
      </nav>
    </HeaderContainer>
  </HeaderWrapper>
)

export default Header
