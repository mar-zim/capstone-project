import React from 'react'
import { Redirect, Route, Switch, useHistory, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import home from '../../icons/home.svg'
import login from '../../icons/login.svg'
import add from '../../icons/add.svg'

export default function Navigation() {
  let history = useHistory()
  return (
    <StyledNavigation>
      <StyledNavLink to="/add">
        <img src={add} alt="add" />
        <div>Verleihen</div>
      </StyledNavLink>
      <StyledNavLink to="/home">
        <img src={home} alt="home" />
        <div>Home</div>
      </StyledNavLink>
      <StyledNavLink to="/login">
        <img src={login} alt="login" />
        <div>Login</div>
      </StyledNavLink>
    </StyledNavigation>
  )
}

const StyledNavigation = styled.div`
  background-color: var(--grey-5);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
`

const StyledNavLink = styled(NavLink)`
  margin: 0;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-content: center;
  gap: 2px;
  cursor: pointer;

  div {
    font-size: 12px;
    color: var(--lightblue);
  }
`
