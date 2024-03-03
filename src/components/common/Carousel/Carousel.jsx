import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Box, Stack, Typography } from '@mui/material';



export default function Carousel({ data }) {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        // appendDots: dots => (
        //     <Stack //sx={{my:2 }}
        //     >
        //         <ul >
        //             {dots}
        //         </ul>
        //     </Stack>
        // ),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (

        <Stack className="slider-container" sx={{
            mb: 3,
            // " li.slick-active button:before": {backgroundColor: "black",},
            " .MuiStack-root.css-dzo92d-MuiStack-root": {
                display: "flex !important",
            }
        }}>

            <Slider {...settings}>
                {data?.map((item, index) => {
                    return (
                        <Stack key={index}
                            direction='column'
                            sx={{
                                // border: '2px solid red',
                                justifyContent: 'center', alignItems: 'center',

                            }}>
                            <Box sx={{
                                width: " 100%",
                                height: '250px',
                                // border: '2px solid green',
                            }}>
                                <img src={item?.image}
                                    style={{
                                        width: '100%',
                                        height: '100%'
                                    }}
                                />
                            </Box>
                            <Typography
                                textAlign='center'

                                sx={{ fontSize: "1.5rem" }}>
                                {item?.name}
                            </Typography>
                        </Stack>
                    )
                })}
            </Slider>
        </Stack>
    )
}



