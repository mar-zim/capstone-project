import PropTypes from 'prop-types'
import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import arrowback from './../icons/arrowback.svg'
import ContactDetails from '../components/ContactDetails/ContactDetails'
import Pricing from '../components/Pricing/Pricing'
import ProductDescription from '../components/ProductDescription/ProductDescription'
import styled from 'styled-components'
import loginContext from '../services/loginContext'

ProductDetailPage.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
}
export default function ProductDetailPage({ products }) {
  const { user } = useContext(loginContext)
  const { productId } = useParams()
  const [selectedProduct] = products.filter(
    (product) => productId === product._id
  )

  return (
    <>
      <Link to="/home">
        <StyledIcon src={arrowback} alt="back" />
      </Link>

      {user ? (
        <div>
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
        </div>
      ) : (
        <div>Bitte logge dich ein, um Details zu sehen!</div>
      )}
    </>
  )
}

const StyledIcon = styled.img`
  margin-top: 20px;
  height: 20px;
`
