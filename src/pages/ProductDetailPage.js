import PropTypes from 'prop-types'
import React, { useContext } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../components/Button/Button'
import ContactDetails from '../components/ContactDetails/ContactDetails'
import Pricing from '../components/Pricing/Pricing'
import ProductDescription from '../components/ProductDescription/ProductDescription'
import loginContext from '../services/loginContext'
import arrowback from './../icons/arrowback.svg'

ProductDetailPage.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
}
export default function ProductDetailPage({ products, productsAreLoading }) {
  const { user } = useContext(loginContext)
  const { productId } = useParams()
  const history = useHistory()
  const [selectedProduct] = products.filter(
    (product) => productId === product.id
  )

  return productsAreLoading ? (
    <div>Produkt lädt</div>
  ) : (
    <>
      <StyledBackIcon onClick={history.goBack} src={arrowback} alt="back" />
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
            ownerName={selectedProduct.ownerName}
            location={selectedProduct.location}
            phone={selectedProduct.phone}
            details={selectedProduct.ownerNotes}
          />
        </div>
      ) : (
        <StyledRequestForLogin>
          <div>Bitte logge dich ein, um Details zu sehen!</div>
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
