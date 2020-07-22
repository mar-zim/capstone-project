import React, { useContext } from 'react'
import styled from 'styled-components'
import Logout from '../auth/Logout'
import loginContext from '../../services/loginContext'

export default function Header() {
  const { user } = useContext(loginContext)

  return (
    <StyledHeader>
      <StyledLogo src={process.env.PUBLIC_URL + '/logo.svg'} alt="logo" />
      {user && <Logout />}
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  background-color: var(--grey-5);
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const StyledLogo = styled.img`
  max-width: 80vw;
`
