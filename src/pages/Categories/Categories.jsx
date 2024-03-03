import { Box, Container, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { getCategories } from '../../redux/categories/categoriesSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function Categories() {
    const { data } = useSelector(state => state.categories?.categories)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCategories())
    }, [])

    return (
        <Container maxWidth="xl" sx={{ my: 4 }}>
            <Typography textAlign='center' className="primary-color" sx={{ fontSize: 25 }}>All categories</Typography>
            <Stack
                direction={{ md: 'row', xs: 'column' }}
                sx={{
                    flexWrap: { md: 'wrap', xs: 'nowrap' },
                    justifyContent: 'space-between',
                    // border: 3, borderColor: 'blue',
                    alignItems: 'center',

                }}>
                {data?.map((item, index) => (
                    <Stack key={item._id} sx={{
                        width: { md: " 23%", sm: '70%', xs: '90%' },
                        my: 2,
                        border: 1, borderColor: 'rgb(164 160 160 / 50%)'
                    }}>
                        <Box sx={{
                            width: " 100%",
                            height: '250px',
                        }}>
                            <img src={item?.image}
                                style={{
                                    width: '100%',
                                    height: "100%"
                                }}
                            />

                        </Box>
                        <Typography className="primary-color" textAlign='center' sx={{ my: 1, fontSize: 20, fontWeight: 600 }}> {item.name} </Typography>

                    </Stack>
                ))}
            </Stack>
        </Container>
    )
}
