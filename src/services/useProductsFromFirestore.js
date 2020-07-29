import { useState, useEffect } from 'react'
import { db } from '../firebase'

export default function useProductsFromFirestore() {
  const [products, setProducts] = useState([])
  const [productsAreLoading, setProductsAreLoading] = useState(true)

  useEffect(() => {
    db.collection('products').onSnapshot((snapshot) => {
      const allProductsInCollection = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      setProducts(allProductsInCollection)
      setProductsAreLoading(false)
    })
  }, [])
  return [products, productsAreLoading]
}
