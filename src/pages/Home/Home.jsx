import React, { useEffect } from 'react'
import { Container, Stack } from '@mui/material'
import Carousel from '../../components/common/Carousel/Carousel'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../redux/categories/categoriesSlice'
import { getProducts } from '../../redux/products/productsSlice'
import ProductsList from '../../components/Products/ProductsList'
import Offers from '../../components/Offers/Offers'


export default function Home() {
  const categories = useSelector(state => state.categories?.categories?.data)
  const products = useSelector(state => state.products?.products?.data)
  const dispatch = useDispatch()

  //// console.log('products', products);
  useEffect(() => {
    dispatch(getCategories())
  }, [])
  useEffect(() => {
    dispatch(getProducts())
  }, [])

  return (
    <Stack >
      <Stack >
        <Offers />
      </Stack>
      <Stack sx={{ //border: 2, borderColor: 'red'
      }}>
        <Carousel data={categories} />
      </Stack>

      <Container maxWidth='xl' sx={{ //border: 2
      }}>
        <ProductsList data={products} />
      </Container>
    </Stack>
  )
}
