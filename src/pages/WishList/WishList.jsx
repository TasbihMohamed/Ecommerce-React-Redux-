import { Box, Container, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWishlist } from "../../redux/wishlist/wishlistSlice";
import axios from "axios";

export default function WishList() {
    // const dispatch = useDispatch();
    const { userToken } = useSelector((state) => state.auth);

    // async function getWishList(token) {
    //     try {
    //         const response = await axios.get("https://ecommerce.routemisr.com/api/v1/wishlist", {
    //             headers: {
    //                 Authorization: `Bearer ${token}`,
    //             },
    //         });
    //         const data = response.data;
    //         console.log('wishlist', data);
    //     } catch (error) {
    //         console.error('wishlist', error);
    //     }
    // }
    // useEffect(() => {
    //     if (userToken) {
    //         getWishList(userToken);
    //     }
    // }, [userToken]);
    const data = [
        {
            id: "6428ebc6dc1175abc65ca0b9",
            imageCover:
                "https://ecommerce.routemisr.com/Route-Academy-products/1680403397402-cover.jpeg",
            price: 160,
            quantity: 225,
            ratingsAverage: 4.8,

            title: "Woman Shawl",
        },
    ];

    return (
        <Container maxWidth="xl" sx={{ my: 4 }}>
            <Stack sx={{ p: 3, backgroundColor: "rgb(248,249,250)" }}>
                <Typography sx={{ fontSize: 25 }}>My wish List</Typography>

                <Stack direction='column' >
                    {data?.map((item, index) => {
                        return (
                            <Stack key={index} direction={{ sm: 'row', xs: 'column' }}
                                sx={{ justifyContent: 'space-between', alignItems: 'center', }}>
                                <Box sx={{
                                    width: { sm: "25%", xs: "90%" },
                                    height: '100px',
                                }}>
                                    <img
                                        style={{ width: "100%", height: '100%' }}
                                        src={item?.imageCover}
                                        alt={item?.title}
                                    />
                                </Box>
                                <Stack
                                    direction='row'
                                    sx={{
                                        justifyContent: 'space-between', alignItems: 'center',
                                        width: { sm: "70%", xs: "90%" },
                                        height: '100px',
                                    }}>
                                    <Stack>
                                        <Typography sx={{ fontSize: 20 }}>{item?.title} </Typography>
                                        <Typography sx={{ fontSize: 20 }} className="primary-color "
                                        >{item?.price} EGP </Typography>

                                    </Stack>
                                    <Stack>
                                        <Typography sx={{
                                            border: 1, p: 1,
                                            borderColor: '#4fa74f',
                                            cursor: "pointer"
                                        }}>
                                            add to cart
                                        </Typography>
                                    </Stack>
                                </Stack>
                            </Stack>
                        );
                    })}
                </Stack>
            </Stack>
        </Container >
    );
}

// import { Box, Container, Stack, Typography } from "@mui/material";
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getWishlist } from "../../redux/wishlist/wishlistSlice";
// import axios from "axios";

// export default function WishList() {
//   const { userToken } = useSelector((state) => state.auth);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [wishlist, setWishlist] = useState([]);
  
//   async function getWishList(token) {
//     try {
//       const response = await axios.get(
//         "https://ecommerce.routemisr.com/api/v1/wishlist",
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       const data = response.data;
//       setWishlist(data);
//       setLoading(false);
//     } catch (error) {
//       console.error('wishlist', error);
//       setError(error);
//       setLoading(false);
//     }
//   }

//   useEffect(() => {
//     if (userToken) {
//       getWishList(userToken);
//     }
//   }, [userToken]);

//   // Rest of your code...

//   return (
//     <Container maxWidth="xl" sx={{ my: 4 }}>
//       {/* Loading state */}
//       {loading && <div>Loading...</div>}
      
//       {/* Error state */}
//       {error && <div>Error: {error.message}</div>}

//       {/* Wishlist */}
//       {!loading && !error && (
//         <Stack sx={{ p: 3, backgroundColor: "rgb(248,249,250)" }}>
//           {/* Rest of your code */}
//         </Stack>
//       )}
//     </Container>
//   );
// }