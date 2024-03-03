
// import { useFormik } from "formik";
// import * as yup from "yup";
// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import CustomInput from "../common/CustomInput/CustomInput";
// import { Alert, Box, Button, CircularProgress, Container, Input, Stack } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { resetCodeRequest } from "../../redux/Auth/resetCodeSlice";

// const PassCode = () => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const { resetCode, error, loading } = useSelector(state => state.resetCode)
//     // const testt = useSelector(state => state.resetCode?.resetCode)

//     // // console.log('ttttttttt', testt);
//     const formik = useFormik({
//         initialValues: {
//             resetCode: "",
//         },

//         onSubmit: (values) => {
//             // console.log(JSON.stringify(values, null, 4));

//             dispatch(resetCodeRequest({ body: values }))
//                 .then((response) => {
//                     if (response.payload && response.payload.status === "success") {
//                         //             navigate('/');
//                         // console.log('bravooo', 'resetCode', response.payload.message);
//                         // console.log('bravooo222', 'resetCode', resetCode);

//                     }
//                 });
//             // console.log('resetCode ::', resetCode);
//             // console.log('Error ::', error, loading);
//         },
//         validationSchema: yup.object({
//             resetCode: yup.number().min(6).required("required"),
//         }),
//     });

//     return (
//         <Container maxWidth="xl">
//             <Stack>
//                 <form onSubmit={formik.handleSubmit}>
//                     <Stack sx={{ py: 3 }}>

//                         <CustomInput
//                             type="password"
//                             name={"resetCode"}
//                             value={formik.values.resetCode}
//                             onChange={formik.handleChange}
//                             onBlur={formik.handleBlur}
//                             errorName={formik.errors.resetCode}
//                             formikTouchedCondition={formik.touched.resetCode}
//                             formikErrorCondition={formik.errors.resetCode}
//                         />

//                         <Button type="submit" sx={{
//                             color: 'white',
//                             backgroundColor: ' #4fa74f', width: "100%",
//                             ':hover': { backgroundColor: ' #4fa74f' },
//                             my: 1
//                         }}>
//                             {loading ? <CircularProgress style={{
//                                 width: '20px', height: '20px',
//                                 color: 'white'
//                             }} /> : 'Continue'}
//                         </Button>


//                         {error && <Alert variant="filled" severity="error" sx={{ my: 1 }}>
//                             {error}
//                         </Alert>}

//                     </Stack>

//                 </form>
//             </Stack>
//         </Container>
//     );
// };
// export default PassCode;