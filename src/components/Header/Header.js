import React, { useContext } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import loginContext from '../../services/loginContext'
import LogoutButton from '../auth/LogoutButton'
import Button from '../Button/Button'

export default function Header() {
  const { user } = useContext(loginContext)
  const location = useLocation()
  const history = useHistory()

  return (
    <StyledHeader>
      <StyledLogo
        src={process.env.PUBLIC_URL + '/logo.svg'}
        alt="logo"
        onClick={goToHome}
      />
      {user ? (
        <LogoutButton />
      ) : (
        location.pathname !== '/login' &&
        location.pathname !== '/login/register' && (
          <Button
            backColor="var(--lightblue)"
            text="login"
            onClick={goToLoginPage}
          />
        )
      )}
    </StyledHeader>
  )

  function goToLoginPage() {
    let path = `/login`
    history.push(path)
  }
  function goToHome() {
    let path = `/home`
    history.push(path)
  }
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
  cursor: pointer;
`
