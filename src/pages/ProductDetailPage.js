import React from 'react'
import { useParams } from 'react-router-dom'
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
