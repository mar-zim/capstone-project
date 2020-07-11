import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import DividerLine from '../DividerLine/DividerLine'
import Button from '../Button/Button'

export default function ProductListItem({ product }) {
  const history = useHistory()

  return (
    <>
      <DividerLine />
      <StyledHeader>
        <h4>{product.productName}</h4>
        <Button text="mehr" onClick={routeChange} />
      </StyledHeader>
      <StyledProductInfo>
        <div>von {product.ownerFirstname}</div>
        <div>aus {product.location}</div>
      </StyledProductInfo>
    </>
  )

  function routeChange() {
    let path = `/${product._id}`
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
