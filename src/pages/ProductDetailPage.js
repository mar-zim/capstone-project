import PropTypes from 'prop-types'
import React, { useContext } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../components/ui/Button/Button'
import ContactDetails from '../components/ContactDetails/ContactDetails'
import Pricing from '../components/Pricing/Pricing'
import ProductDescription from '../components/ProductDescription/ProductDescription'
import SpinningLoadIcon from '../components/ui/SpinningLoadIcon/SpinningLoadIcon'
import LoginContext from '../services/auth/LoginContext'
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
          <div className="description">{selectedProduct.location}</div>
          <StyledProductImage src={selectedProduct.imgURL} alt="Produktbild" />
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
  margin-bottom: 20px;
  max-height: 50vh;
  width: 100%;
  border-radius: 5px;
  object-fit: cover;
`
