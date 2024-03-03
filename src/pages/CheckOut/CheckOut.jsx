
import { useFormik } from "formik";
import * as yup from "yup";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert, Button, CircularProgress, Container, Stack } from "@mui/material";
import CustomInput from "../../components/common/CustomInput/CustomInput";
import { getAllCart, paymentRequest } from "../../redux/Cart/CartSlice";
import { useLocation, useParams } from "react-router-dom";


const CheckOut = () => {
    const dispatch = useDispatch();

    const { payment, loading, error } = useSelector((state) => state.addCart);
    console.log("payment", payment);

    console.log("payment url", payment?.session?.url);

    const { allCart } = useSelector((state) => state.addCart);
    // console.log('kkk', allCart?.data?._id);
    useEffect(() => {
        dispatch(getAllCart())
    }, [])

    const formik = useFormik({
        initialValues: { details: "", phone: "", city: "", },

        onSubmit: (values) => {
            // console.log(JSON.stringify(values, null, 4));
            dispatch(paymentRequest({
                body: values,
                cartId:allCart?.data?._id
            }))
                .then((response) => {
                    if (response.payload && response.payload.status === "success") {
                        // console.log('response.payload ::', response.payload);
                        window.location.href = response.payload.session.url
                    }
                });
        },
        validationSchema: yup.object({
            details: yup.string().required(" required"),
            city: yup.string().required(" required"),
            phone: yup.string().required(" required")
                .matches(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/),
        }),
    });

    return (
        <Container maxWidth="xl">
            <Stack sx={{ p: 3, backgroundColor: "rgb(248,249,250)" }}>
                <form onSubmit={formik.handleSubmit}>
                    <Stack sx={{ py: 3 }}>
                        <CustomInput
                            label="details"
                            type="string"
                            name={"details"}
                            value={formik.values.details}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            errorName={formik.errors.details}
                            formikTouchedCondition={formik.touched.details}
                            formikErrorCondition={formik.errors.details}
                        />
                        <CustomInput
                            label="city"
                            type="string"
                            name={"city"}
                            value={formik.values.city}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            errorName={formik.errors.city}
                            formikTouchedCondition={formik.touched.city}
                            formikErrorCondition={formik.errors.city}
                        />

                        <CustomInput
                            label="Phone number"
                            type="string"
                            name={"phone"}
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            errorName={formik.errors.phone}
                            formikTouchedCondition={formik.touched.phone}
                            formikErrorCondition={formik.errors.phone}
                        />


                        <Button type="submit" sx={{
                            color: 'white',
                            backgroundColor: ' #4fa74f', width: "100%",
                            ':hover': { backgroundColor: ' #4fa74f' }, my: 1
                        }}>
                            {loading ? <CircularProgress style={{
                                width: '20px', height: '20px',
                                color: 'white'
                            }} /> : 'pay now'}
                        </Button>


                        {error && <Alert variant="filled" severity="error" sx={{ my: 1 }}>
                            {error}
                        </Alert>}
                    </Stack>
                </form>
            </Stack>
        </Container>
    );
};
export default CheckOut;