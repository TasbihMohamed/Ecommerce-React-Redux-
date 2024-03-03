
import { Alert, Box, Button, Snackbar, Stack, Typography } from "@mui/material";
import React from "react";
import { FaStar, FaHeart } from "react-icons/fa";
import { addToCart } from "../../redux/Cart/CartSlice";
import { useDispatch, useSelector } from "react-redux";

export default function ProductInfo({ item, extraInfo }) {
    const [snackOpen, setSnackOpen] = React.useState(false);
    const { addCart } = useSelector((state) => state.addCart);
    //console.log("cart ", addCart);

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
    const snackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setSnackOpen(false);
    };
    return (
        <Stack sx={{ px: 1, }}>
            {extraInfo && <Typography
                className="primary-color" sx={{ width: "100%", }}>
                {item?.category.name}
            </Typography>}
            <Typography
                sx={{
                    width: "100%",
                    fontSize: 30, fontWeight: 600
                }}>
                {item?.title}
            </Typography>
            <Typography
                sx={{
                    my: 1,
                    fontSize: 25, fontWeight: 500
                }}>
                {item?.description}
            </Typography>
            <Stack direction='row' justifyContent='space-between'>
                <Typography
                    sx={{ fontWeight: 500, color: "#413e3e" }}>
                    {item?.price} Egp
                </Typography>
                <Typography >
                    <FaStar style={{ color: '#dd8658' }} />   {item?.ratingsAverage}
                </Typography>
            </Stack>


            <Stack direction='row' justifyContent='space-between' alignItems='center' sx={{ my: 2 }}>

                <Box sx={{ width: "60%", }}>
                    <Button
                        onClick={(event) => { addProductToCart(event, item?.id) }}
                        sx={{
                            color: 'white',
                            backgroundColor: ' #4fa74f', width: "100%",
                            ':hover': { backgroundColor: ' #4fa74f' }
                        }}>
                        +Add
                    </Button>

                </Box>
                <Box>
                    <FaHeart style={{
                        alignSelf: 'end',
                        fontSize: "26px"
                    }} />
                </Box>
            </Stack>

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
    );
}
