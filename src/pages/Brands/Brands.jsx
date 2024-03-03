import { Box, Container, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { getBrands } from '../../redux/brands/brandsSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function Brands() {
    const { data } = useSelector(state => state.brands?.brands)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getBrands())
    }, [])

    return (
        <Container maxWidth="xl" sx={{ my: 4 }}>
            <Typography textAlign='center' className="primary-color" sx={{ fontSize: 25 }}>All Brands</Typography>
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
                        my: 2, py: 2,
                        border: 1, borderColor: 'rgb(164 160 160 / 50%)'
                    }}>
                        <Box sx={{
                            width: " 100%",
                            height: '100%',
                        }}>
                            <img src={item?.image}
                                style={{
                                    width: '100%',
                                }}
                            />
                        </Box>
                        <Typography textAlign='center'> {item.name} </Typography>

                    </Stack>
                ))}
            </Stack>
        </Container>
    )
}
