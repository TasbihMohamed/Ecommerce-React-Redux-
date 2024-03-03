import { Alert, Box, Button, Paper, Slide, Snackbar, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaStar, FaHeart } from "react-icons/fa";
import { addToCart } from "../../redux/Cart/CartSlice";
import { useDispatch, useSelector } from "react-redux";

export default function ProductsList({ data }) {
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [hoveredItem, setHoveredItem] = useState(null);
    const [snackOpen, setSnackOpen] = React.useState(false);

    const navigate = useNavigate();

    const { addCart } = useSelector((state) => state.addCart);
   // console.log("cart ", addCart);

    const dispatch = useDispatch();

    function addProductToCart(event, id) {
        event.stopPropagation(); // Stop event propagation
        dispatch(addToCart({ productId: id }))
            .then((response) => {
                if (response.payload && response.payload.status === "success") {
                    setSnackOpen(true);
                }
            });
    }
    const handleClick = (productId) => {
        navigate(`product-details/${productId}`)

    }
    useEffect(() => {
        setFilteredProducts(data)
    }, [data])

    function handleChangeInput(event) {
        const inputValue = event.target.value.toLowerCase();

        if (inputValue.length > 0) {
            setFilteredProducts((prevProducts) =>
                prevProducts.filter((item) =>
                    item.title.toLowerCase().startsWith(inputValue)
                )
            );
        } else {
            setFilteredProducts(data);
        }
    }

    const handleMouseEnter = (item) => {
        setHoveredItem(item);
    };

    const handleMouseLeave = () => {
        setHoveredItem(null);
    };
    const snackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setSnackOpen(false);
    };
    return (
        <Stack sx={{ py: 4 }}>
            <Box sx={{ width: '60%' }}>
                <input
                    style={{
                        width: "100%", padding: '10px 23px',
                        fontSize: '20px',
                        border: "1px solid rgb(198 194 194)"
                    }}
                    placeholder="search..."
                    onChange={handleChangeInput}
                />
            </Box>
            <Stack
                direction={{ md: 'row', xs: 'column' }}
                sx={{
                    flexWrap: { md: 'wrap', xs: 'nowrap' },
                    justifyContent: 'space-between',
                    // border: 3, borderColor: 'blue'
                }}>
                {filteredProducts?.map((item, index) => {
                    return (
                        // index > 6 &&
                        <Stack key={item?.id}
                            onClick={() => { handleClick(item?.id) }}
                            sx={{
                                my: 2, p: 1,
                                // border: '2px solid red',
                                width: { md: '23%', sm: '80%', xs: '100%' },
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                borderRadius: 2,
                                boxShadow: hoveredItem === item ? '1px 1px 21px #4fa74f' : 'none',
                                ':hover': { cursor: 'pointer' }
                            }}
                            onMouseEnter={() => handleMouseEnter(item)}
                            onMouseLeave={handleMouseLeave}>
                            <Box sx={{

                                width: " 100%",
                                height: '100%',
                                // border: '2px solid green',
                            }}>
                                <img src={item?.imageCover}
                                    style={{
                                        width: '100%',
                                    }}
                                />
                                <Stack sx={{ //border: 1,
                                    px: 1,
                                }}>
                                    <Typography
                                        className="primary-color" sx={{ width: "100%", }}>
                                        {item?.category.name}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            // border: '2px solid green',
                                            width: "100%",
                                            //one line text
                                            whiteSpace: "nowrap",
                                            overflow: "hidden",
                                            textOverflow: "ellipsis"
                                        }}>
                                        {item?.title}
                                    </Typography>
                                    <Stack direction='row' justifyContent='space-between'>
                                        <Typography
                                            sx={{ fontWeight: 500, color: "#413e3e" }}>
                                            {item?.price} Egp
                                        </Typography>
                                        <Typography
                                            sx={{}}>
                                            <FaStar style={{ color: '#dd8658' }} />   {item?.ratingsAverage}
                                        </Typography>
                                    </Stack>

                                </Stack>

                                <Stack sx={{
                                    position: 'relative',
                                    width: " 100%",
                                    height: '100%', //border: 2,
                                    height: 50,
                                    display: "flex"
                                }}>
                                    <FaHeart style={{
                                        padding: "5px 10px 0 0", alignSelf: 'end',
                                        fontSize: "26px"
                                    }} />
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            zIndex: 1,
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            width: '100%',
                                        }}
                                    >
                                        <Slide style={{ width: '80%' }} direction="up" in={hoveredItem === item} mountOnEnterunmountOnExit>
                                            <Paper sx={{
                                                m: 1, //width: "100px",// height: 100 
                                                backgroundColor: ' #4fa74f',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',

                                            }} elevation={4}>
                                                <Button sx={{ color: 'white', width: "100%" }}
                                                    onClick={(event) => { addProductToCart(event, item?.id) }}
                                                >+Add</Button>
                                            </Paper>
                                        </Slide>
                                    </Box>
                                </Stack>

                            </Box>

                            <div>
                                <Snackbar
                                    open={snackOpen}
                                    autoHideDuration={4000}
                                    onClose={snackbarClose}
                                >
                                    <Alert
                                        onClose={snackbarClose}
                                        severity="success"
                                        variant="filled"
                                        sx={{ width: '100%' }}
                                    >
                                        {addCart?.message}
                                    </Alert>
                                </Snackbar>
                            </div>
                        </Stack>
                    )
                })}
            </Stack>

        </Stack >
    );
}
