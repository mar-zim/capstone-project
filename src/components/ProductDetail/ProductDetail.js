import React from 'react'

export default function ProductDetail({ shownProduct }) {
  return (
    <>
      <div>Produkt-ID: {shownProduct._id}</div>
      <div>Name: {shownProduct.productName}</div>
    </>
  )
}
