import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import add from '../../icons/add.svg'
import home from '../../icons/home.svg'
import login from '../../icons/login.svg'
import logout from '../../icons/logout.svg'
import LoginContext from '../../services/LoginContext'
import useLogout from '../../services/useLogout'

export default function Navigation() {
  const { user } = useContext(LoginContext)
  const logoutUser = useLogout()
  return (
    <StyledNavigation>
      <StyledNavLink to="/add" activeClassName="active">
        <img src={add} alt="add" />
        <div>Verleihen</div>
      </StyledNavLink>

      <StyledNavLink to="/home" activeClassName="active">
        <img src={home} alt="home" />
        <div>Home</div>
      </StyledNavLink>

      {user ? (
        <StyledNavLink
          to="/login"
          activeClassName="active"
          onClick={logoutUser}
        >
          <img src={logout} alt="logout" />
          <div>Logout</div>
        </StyledNavLink>
      ) : (
        <StyledNavLink to="/login" activeClassName="active">
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
  .active {
    opacity: 1;
  }
`

const StyledNavLink = styled(NavLink)`
  margin: 0;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-content: center;
  gap: 2px;
  outline: none;
  cursor: pointer;
  opacity: 0.4;
  div {
    font-size: 12px;
    color: var(--denim);
  }
`
