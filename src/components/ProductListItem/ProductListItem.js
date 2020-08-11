import PropTypes from 'prop-types'
import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { DividerLine } from '../ui/DividerLine/DividerLine'

ProductListItem.propTypes = {
  product: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  ),
}

export default function ProductListItem({
  product: { name, ownerName, location, id, imgURL },
}) {
  const history = useHistory()

  return (
    <>
      <DividerLine />
      <StyledProductListItem
        onClick={() => {
          history.push(`/details/${id}`)
        }}
      >
        <div>
          <h4 data-testid="productHeader">{name}</h4>
          <StyledProductInfo>
            <div>von {ownerName}</div>
            <div>aus {location}</div>
          </StyledProductInfo>
        </div>
        {imgURL && <img src={imgURL} alt="Vorschau" />}
      </StyledProductListItem>
    </>
  )
}

const StyledProductListItem = styled.div`
  display: flex;
  justify-content: space-between;
  img {
    height: 80px;
    width: 80px;
    border-radius: 5px;
    object-fit: cover;
    margin-top: 10px;
  }
`

const StyledProductInfo = styled.div`
  margin-left: 52px;
`
