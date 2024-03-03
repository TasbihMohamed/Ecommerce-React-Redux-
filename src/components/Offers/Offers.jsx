import React from 'react'
import { Box, Container, Stack } from "@mui/material";
import Slider from "react-slick";
import slider1 from '../../images/slider1.jpg'
import slider2 from '../../images/slider2.jpg'
import slider3 from '../../images/slider3.jpg'
import slider4 from '../../images/slider4.jpg'

export default function Offers() {
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
                    justifyContent: 'center',
                }}
            >
                {/* slider */}
                <Box sx={{ width: { md: "30%", xs: "100%" } }}>
                    <Slider {...settings}>

                        <Box
                            sx={{
                                width: " 100%",
                                // height: "270px",
                            }}
                        >
                            <img
                                src={slider4}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                }}
                            />
                        </Box>
                        <Box
                            sx={{
                                width: " 100%",
                                // height: "270px",
                            }}
                        >
                            <img
                                src={slider3}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                }}
                            />
                        </Box>

                    </Slider>
                </Box>
                <Box sx={{
                    mx: 1, //border: 1, 
                    width: { md: "30%", xs: "100%" }
                }}>
                    <Box sx={{ height: '50%' }}>
                        <img
                            src={slider1}
                            style={{
                                width: "100%",
                                height: "100%",
                            }}
                        />
                    </Box>
                    <Box sx={{ height: '50%' }}>
                        <img
                            src={slider2}
                            style={{
                                width: "100%",
                                height: "100%",
                            }}
                        />
                    </Box>
                </Box>

            </Stack>
        </Container>
    )
}
