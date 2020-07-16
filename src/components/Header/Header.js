import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import arrowback from '../../icons/arrowback.svg'

export default function Header() {
  let location = useLocation()

  return (
    <StyledHeader>
      {location.pathname !== '/' && (
        <Link to="/">
          <StyledBackIcon src={arrowback} alt="back" />
        </Link>
      )}
      <StyledLogo src={process.env.PUBLIC_URL + '/logo.svg'} alt="logo" />
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  background-color: var(--grey-5);
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledLogo = styled.img`
  max-width: 80vw;
`

const StyledBackIcon = styled.img`
  height: 20px;
  position: absolute;
  top: 18px;
  left: 20px;
`
