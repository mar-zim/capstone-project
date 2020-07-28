import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import add from '../../icons/add.svg'
import home from '../../icons/home.svg'
import login from '../../icons/login.svg'
import logout from '../../icons/logout.svg'
import loginContext from '../../services/loginContext'
import useLogout from '../../services/useLogout'

export default function Navigation() {
  const { user } = useContext(loginContext)
  const logoutUser = useLogout()
  return (
    <StyledNavigation>
      <StyledNavLink
        to="/add"
        activeStyle={{
          opacity: 1,
        }}
      >
        <img src={add} alt="add" />
        <div>Verleihen</div>
      </StyledNavLink>

      <StyledNavLink
        to="/home"
        activeStyle={{
          opacity: 1,
        }}
      >
        <img src={home} alt="home" />
        <div>Home</div>
      </StyledNavLink>

      {user ? (
        <StyledNavLink
          to="/login"
          activeStyle={{
            opacity: 1,
          }}
          onClick={logoutUser}
        >
          <img src={logout} alt="logout" />
          <div>Logout</div>
        </StyledNavLink>
      ) : (
        <StyledNavLink
          to="/login"
          activeStyle={{
            opacity: 1,
          }}
        >
          <img src={login} alt="login" />
          <div>Login</div>
        </StyledNavLink>
      )}
    </StyledNavigation>
  )
}

const StyledNavigation = styled.div`
  background-color: var(--grey-5);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  width: 100%;
  height: 56px;
`

const StyledNavLink = styled(NavLink)`
  margin: 0;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-content: center;
  gap: 2px;
  cursor: pointer;
  opacity: 0.4;

  div {
    font-size: 12px;
    color: var(--denim);
  }
`
