import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import back from '../../icons/back.svg'

export default function Header() {
  let location = useLocation()

  return (
    <StyledHeader>
      {location.pathname !== '/' && (
        <Link to="/">
          <StyledBackIcon src={back} alt="back" />
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
  height: 28px;
  position: absolute;
  top: 14px;
  left: 20px;
`
