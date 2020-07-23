import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import LogoutButton from '../auth/LogoutButton'
import loginContext from '../../services/loginContext'
import Button from '../Button/Button'
import userLogo from '../../icons/user.svg'

export default function Header() {
  const { user } = useContext(loginContext)

  return (
    <StyledHeader>
      <StyledLogo src={process.env.PUBLIC_URL + '/logo.svg'} alt="logo" />
      <UserIcon src={userLogo} alt="user" />
      {/* {user ? (
        <LogoutButton />
      ) : (
        <Link to="/welcome">
          <Button backColor="var(--lightblue)" text="login" />
        </Link>
      )} */}
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  background-color: var(--grey-5);
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 70px auto 70px;
  align-items: center;
  justify-items: center;
`

const StyledLogo = styled.img`
  max-width: 80vw;
  grid-column: 2 / span 1;
`

const UserIcon = styled.img`
  width: 40px;
  grid-column: 3 / span 1;
`
