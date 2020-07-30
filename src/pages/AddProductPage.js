import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import AddProductForm from '../components/AddProductForm/AddProductForm'
import Button from '../components/Button/Button'
import loginContext from '../services/loginContext'
import arrowback from './../icons/arrowback.svg'
import SpinningLogoIcon from '../components/SpinningLoadIcon/SpinningLoadIcon'

export default function AddProductPage() {
  const { user, userIsLoading } = useContext(loginContext)
  const history = useHistory()
  console.log('UserLoading:' + userIsLoading)
  console.log('User:' + user)

  return userIsLoading && !user ? (
    <SpinningLogoIcon />
  ) : (
    <>
      <StyledBackIcon onClick={history.goBack} src={arrowback} alt="back" />
      {user ? (
        <div>
          <h2>Produkt hinzufügen</h2>
          <AddProductForm />
        </div>
      ) : (
        <StyledRequestForLogin>
          <div>Bitte logge dich ein, um neue Produkte hinzuzufügen!</div>
          <Button text="Zum Login" onClick={goToLoginPage} />
        </StyledRequestForLogin>
      )}
    </>
  )

  function goToLoginPage() {
    let path = `/login`
    history.push(path)
  }
}
const StyledBackIcon = styled.img`
  margin-top: 20px;
  height: 20px;
  cursor: pointer;
`

const StyledRequestForLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-top: 10px;
`
