import PropTypes from 'prop-types'
import React from 'react'
import { DividerLine } from '../DividerLine'

ProductDetail.propTypes = {
  description: PropTypes.string,
}

export default function ProductDetail({ description }) {
  return (
    <>
      <h4>Beschreibung</h4>
      <div>{description}</div>
      <DividerLine />
    </>
  )
}
