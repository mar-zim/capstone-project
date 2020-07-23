import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import LogoutButton from '../auth/LogoutButton'
import loginContext from '../../services/loginContext'
import Button from '../Button/Button'

export default function Header() {
  const { user } = useContext(loginContext)
  const location = useLocation()
  return (
    <StyledHeader>
      <StyledLogo src={process.env.PUBLIC_URL + '/logo.svg'} alt="logo" />
      {user ? (
        <LogoutButton />
      ) : (
        location.pathname !== '/welcome' && (
          <Link to="/welcome">
            <Button backColor="var(--lightblue)" text="login" />
          </Link>
        )
      )}
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  background-color: var(--grey-5);
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 100px auto 100px;
  align-items: center;
  justify-items: center;
`

const StyledLogo = styled.img`
  max-width: 80vw;
  grid-column: 2 / span 1;
`
