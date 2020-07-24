import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import LoginForm from '../components/auth/LoginForm/LoginForm'
import RegisterForm from '../components/auth/RegisterForm/RegisterForm'

export default function LoginPage() {
  let { path } = useRouteMatch()

  return (
    <>
      <Switch>
        <Route exact path={path} component={LoginForm} />
        <Route path={`${path}/register`} component={RegisterForm} />
      </Switch>
    </>
  )
}
