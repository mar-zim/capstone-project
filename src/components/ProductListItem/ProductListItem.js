import PropTypes from 'prop-types'
import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { DividerLine } from '../DividerLine'

ProductListItem.propTypes = {
  product: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  ),
}

export default function ProductListItem({
  product: { name, ownerFirstName, location, _id },
}) {
  const history = useHistory()

  return (
    <div onClick={routeChange}>
      <DividerLine />
      <StyledHeader>
        <h4>{name}</h4>
      </StyledHeader>
      <StyledProductInfo>
        <div>von {ownerFirstName}</div>
        <div>aus {location}</div>
      </StyledProductInfo>
    </div>
  )

  function routeChange() {
    let path = `/details/${_id}`
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
