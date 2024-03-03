import React, { useEffect, useState } from 'react'
import { clearCartRequest, getAllCart, removeProductCart, updateCartRequest } from '../../redux/Cart/CartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Stack, Container, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Cart() {
    const {
        allCart,
        removeFromCart,
        updateCart,
        clearCart
    } = useSelector((state) => state.addCart);

    const [updatedCart, setUpdatedCart] = useState([]);

    // console.log('removeFromCart', removeFromCart);
    // console.log('allCart', allCart);
    // console.log('upd', updatedCart);

    const dispatch = useDispatch();

    async function getCart() {
        try {
            const response = await dispatch(getAllCart());
            if (response.payload && response.payload.status === "success") {
                setUpdatedCart(allCart?.data?.products);
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getCart();
    }, []);

    useEffect(() => {
        if (removeFromCart && removeFromCart.status === "success") {
            setUpdatedCart(removeFromCart.data.products);
        }
    }, [removeFromCart]);

    useEffect(() => {
        if (updateCart && updateCart.status === "success") {
            setUpdatedCart(updateCart.data.products);
        }
    }, [updateCart]);

    useEffect(() => {
        if (clearCart && clearCart.status === "success") {
            setUpdatedCart([]);
        }
    }, [clearCart]);

    function remove(id) {
        dispatch(removeProductCart({ id: id }));
    }

    function clear() {
        dispatch(clearCartRequest());
    }

    function update(id, body) {
        dispatch(updateCartRequest({ id: id, body: body }));
    }

    return (
        <Container maxWidth="xl" sx={{ my: 4 }}>
            {allCart?.data?.products?.length > 0 ? <Stack sx={{ p: 3, backgroundColor: "rgb(248,249,250)" }}>
                <Stack direction='row' justifyContent='space-between' alignItems='center'>
                    <Typography sx={{ fontSize: 25 }}>Cart Shop</Typography>
                    <Link
                        to={
                            '/checkOut'}
                        //     to={{
                        //         pathname: '/checkOut',
                        //     search: '?param=33'
                        // }}
                        // state={{ from: "the-page-id" }}
                        style={{
                            textDecoration: "none",
                            padding: 10,
                            backgroundColor: "#4fa74f",
                            color: "white",
                            borderRadius: 5,
                            fontSize: '12px'
                        }}>Check out</Link>

                </Stack>
                <Stack direction='row' justifyContent='space-between' alignItems='center'
                    sx={{ my: 2 }}>
                    <Typography sx={{ fontSize: 25 }}>total price: <span style={{ color: '#4fa74f' }}>
                        {allCart?.data?.totalCartPrice}   </span>
                    </Typography>
                    <Typography sx={{ fontSize: 25 }}>total number of items: {allCart?.numOfCartItems} </Typography>

                </Stack>
                <Stack direction='column' >
                    {updatedCart?.map((item, index) => {
                        return (
                            <Stack key={index} direction={{ sm: 'row', xs: 'column' }}
                                sx={{ my: 2, justifyContent: 'space-between', alignItems: 'center', }}>
                                <Box sx={{
                                    width: { sm: "25%", xs: "90%" },
                                    height: '150px',
                                }}>
                                    <img
                                        style={{ width: "100%", height: '100%' }}
                                        src={item?.product?.imageCover}
                                        alt={item?.title}
                                    />
                                </Box>
                                <Stack direction={'row'}
                                    justifyContent='space-between'
                                    sx={{ width: { sm: "75%", xs: "90%" } }}>
                                    <Stack sx={{ ml: 2 }}
                                        direction='column'
                                        alignItems='start'>
                                        <Typography>{item?.product?.title}</Typography>
                                        <Typography>      {item?.price} EGP  </Typography>
                                        <Button onClick={() => { remove(item?.product?._id) }}>Remove</Button>
                                    </Stack>
                                    <Stack direction={'row'} sx={{ justifyContent: 'space-between', alignItems: 'center', }}>
                                        <Button sx={{ border: 1, }}
                                            disabled={item?.product?.quantity == item?.count}
                                            onClick={() => {
                                                update(item?.product?._id, {
                                                    "count": item?.count + 1
                                                })
                                            }}
                                        >+</Button>
                                        <Typography sx={{ mx: 1 }}> {item?.count}</Typography>
                                        <Button sx={{ border: 1, }}
                                            disabled={item?.count == 1}
                                            onClick={() => {
                                                update(item?.product?._id, {
                                                    "count": item?.count - 1
                                                })
                                            }}>-</Button>

                                    </Stack>
                                </Stack>
                            </Stack>
                        )
                    })}

                </Stack>
                <Stack sx={{ alignItems: 'center', }}>
                    <Button sx={{ border: 1, width: '200px' }}
                        onClick={() => { clear() }}> Clear Your Cart</Button>
                </Stack>
            </Stack> :
                <Stack sx={{ p: 3, backgroundColor: "rgb(248,249,250)" }}
                    direction='column' justifyContent='space-between' alignItems='center'>
                    <Typography sx={{ fontSize: 25 }}>  The cart is empty</Typography>
                </Stack>}
        </Container >
    )
}