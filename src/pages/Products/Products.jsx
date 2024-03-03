import React, { useEffect } from 'react'
import { getProducts } from '../../redux/products/productsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Container } from '@mui/material'
import ProductsList from '../../components/Products/ProductsList'

export default function Products() {
  const { data } = useSelector(state => state.products?.products)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [])
  return (
    <Container maxWidth="xl" sx={{ my: 4 }}>
      <ProductsList data={data} />
    </Container>
  )
}
