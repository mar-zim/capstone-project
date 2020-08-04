import PropTypes from 'prop-types'
import React, { useContext } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../components/Button/Button'
import ContactDetails from '../components/ContactDetails/ContactDetails'
import Pricing from '../components/Pricing/Pricing'
import ProductDescription from '../components/ProductDescription/ProductDescription'
import SpinningLoadIcon from '../components/SpinningLoadIcon/SpinningLoadIcon'
import LoginContext from '../services/LoginContext'
import arrowback from './../icons/arrowback.svg'

ProductDetailPage.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
  productsAreLoading: PropTypes.bool,
}
export default function ProductDetailPage({ products, productsAreLoading }) {
  const { user } = useContext(LoginContext)
  const { productId } = useParams()
  const history = useHistory()
  const [selectedProduct] = products.filter(
    (product) => productId === product.id
  )

  return productsAreLoading ? (
    <SpinningLoadIcon />
  ) : (
    <>
      <StyledBackIcon onClick={history.goBack} src={arrowback} alt="back" />
      {user ? (
        <div>
          <h2>{selectedProduct.name}</h2>
          <StyledProductImage src={selectedProduct.imgURL} alt="Produktbild" />
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
const StyledProductImage = styled.img`
  max-width: 100%;
  max-height: 100px;
  border-radius: 5px;
`
