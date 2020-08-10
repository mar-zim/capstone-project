import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import AddProductForm from '../components/AddProductForm/AddProductForm'
import Button from '../components/Button/Button'
import SpinningLogoIcon from '../components/SpinningLoadIcon/SpinningLoadIcon'
import LoginContext from '../services/auth/LoginContext'
import arrowback from './../icons/arrowback.svg'

export default function AddProductPage() {
  const { user, userIsLoading } = useContext(LoginContext)
  const history = useHistory()

  return userIsLoading ? (
    <SpinningLogoIcon />
  ) : (
    <>
      <StyledBackIcon onClick={history.goBack} src={arrowback} alt="back" />
      {user ? (
        <div>
          <h2>Produkt hinzufügen</h2>
          <AddProductForm user={user} />
        </div>
      ) : (
        <StyledRequestForLogin>
          <div>Bitte logge dich ein, um neue Produkte hinzuzufügen!</div>
          <Button
            text="Zum Login"
            onClick={() => {
              history.push('/login')
            }}
          />
        </StyledRequestForLogin>
      )}
    </>
  )
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
