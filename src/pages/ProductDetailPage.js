import PropTypes from 'prop-types'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import arrowback from './../icons/arrowback.svg'
import ContactDetails from '../components/ContactDetails/ContactDetails'
import Pricing from '../components/Pricing/Pricing'
import ProductDescription from '../components/ProductDescription/ProductDescription'
import styled from 'styled-components'

ProductDetailPage.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
}
export default function ProductDetailPage({ products }) {
  const { productId } = useParams()
  const [selectedProduct] = products.filter(
    (product) => productId === product._id
  )

  return (
    <>
      <Link to="/home">
        <StyledIcon src={arrowback} alt="back" />
      </Link>
      <h2>{selectedProduct.name}</h2>
      <div className="description">{selectedProduct.location}</div>
      <ProductDescription description={selectedProduct.description} />
      <Pricing
        daily={selectedProduct.dailyRate}
        weekly={selectedProduct.weeklyRate}
      />
      <ContactDetails
        firstName={selectedProduct.ownerFirstName}
        location={selectedProduct.location}
        phone={selectedProduct.phone}
        details={selectedProduct.ownerNotes}
      />
    </>
  )
}

const StyledIcon = styled.img`
  margin-top: 20px;
  height: 20px;
`
