import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../Button/Button'
import { DividerLine } from '../DividerLine/DividerLine'

export default function ProductListItem({
  product: { name, ownerFirstName, location, _id },
}) {
  const history = useHistory()

  return (
    <>
      <DividerLine />
      <StyledHeader>
        <h4>{name}</h4>
        <Button text="mehr" onClick={routeChange} />
      </StyledHeader>
      <StyledProductInfo>
        <div>von {ownerFirstName}</div>
        <div>aus {location}</div>
      </StyledProductInfo>
    </>
  )

  function routeChange() {
    let path = `/${_id}`
    history.push(path)
  }
}

const StyledProductInfo = styled.div`
  margin-left: 52px;
`
const StyledHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
