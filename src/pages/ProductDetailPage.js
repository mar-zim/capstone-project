import React from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import back from '../assets/images/back.svg'
import ContactDetails from '../components/ContactDetails/ContactDetails'
import Pricing from '../components/Pricing/Pricing'
import ProductDescription from '../components/ProductDescription/ProductDescription'

export default function ProductDetailPage({ products }) {
  const { productId } = useParams()
  const [selectedProduct] = products.filter(
    (product) => productId === product._id
  )

  return (
    <>
      <h2>{selectedProduct.productName}</h2>
      <div className="description">{selectedProduct.location}</div>
      <ProductDescription description={selectedProduct.description} />
      <Pricing
        daily={selectedProduct.dailyRate}
        weekly={selectedProduct.weeklyRate}
      />
      <ContactDetails
        firstname={selectedProduct.ownerFirstname}
        location={selectedProduct.location}
        phone={selectedProduct.phone}
        details={selectedProduct.ownerNotes}
      />
    </>
  )
}

const StyledBackIcon = styled.img`
  width: 15px;
  margin: 10px 0 0 0;
`
