import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSpecificProduct } from "../../redux/products/productSlice";
import { useParams } from "react-router-dom";
import { Box, Container, Stack } from "@mui/material";
import ProductInfo from "../../components/ProductInfo/ProductInfo";
import Slider from "react-slick";

export default function ProductDetails() {
    // const { userToken } = useSelector((state) => state.auth);

    // console.log('dd userToken', userToken);
    const { productId } = useParams();
    const productDetails = useSelector((state) => state.product?.product?.data);
    const dispatch = useDispatch();
    // // console.log("kkkkkkk", productDetails);
    useEffect(() => {
        dispatch(getSpecificProduct(productId));
    }, []);

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false
    };
    return (
        <Container maxWidth="xl" sx={{ my: 4, }}>
            <Stack
                direction={{ md: "row", xs: "column" }}
                sx={{
                    alignItems: 'center',
                }}
            >
                {/* slider */}
                <Box sx={{ width: { md: "30%", xs: "100%" } }}>
                    <Slider {...settings}>
                        {productDetails?.images?.map((item, index) => {
                            return (
                                <Stack
                                    key={index}
                                    direction="column"
                                    sx={{
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: " 100%",
                                            height: "270px",
                                        }}
                                    >
                                        <img
                                            src={item}
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                            }}
                                        />
                                    </Box>
                                </Stack>
                            );
                        })}
                    </Slider>
                </Box>
                <Box sx={{ mx: 1, //border: 1, 
                width: { md: "70%", xs: "100%" } }}>
                    <ProductInfo item={productDetails} />
                </Box>
            </Stack>
        </Container>
    );
}
