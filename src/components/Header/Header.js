import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import LogoutButton from '../auth/LogoutButton'
import loginContext from '../../services/loginContext'
import Button from '../Button/Button'

export default function Header() {
  const { user } = useContext(loginContext)

  return (
    <StyledHeader>
      <StyledLogo src={process.env.PUBLIC_URL + '/logo.svg'} alt="logo" />
      {user ? (
        <LogoutButton />
      ) : (
        <Link to="/welcome">
          <Button text="login" />
        </Link>
      )}
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
