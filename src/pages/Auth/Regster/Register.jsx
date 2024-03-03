import { useFormik } from "formik";
import * as yup from "yup";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import CustomInput from "../../../components/common/CustomInput/CustomInput";
import { Alert, Button, CircularProgress, Container, Stack, Typography } from "@mui/material";
import { registerRequest } from "../../../redux/Auth/registerSlice";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { register, error, loading } = useSelector(state => state.register)

    // console.log('registerRequest ::', register);
    // console.log('registerError ::', error);

    const formik = useFormik({
        initialValues: {
            name: "",
            phone: "",
            email: "",
            password: "",
            rePassword: "",
        },

        onSubmit: (values) => {
            // console.log('jjj', JSON.stringify(values, null, 4));

            dispatch(registerRequest({ body: values }))
            .then((response) => {
              if (response.payload &&response.payload.message === "success") {
                navigate('/login');
              }
            });
            // console.log('registerRequest ::', register);
            // console.log('registerError ::', error, loading);
        },
        validationSchema: yup.object({
            name: yup.string().required("required").min(2),
            email: yup.string().email("not valid").required("required"),
            password: yup.string().required(" required"),
            rePassword: yup
                .string()
                .required(" required")
                .oneOf([yup.ref("password")], "not the same password"),

            phone: yup
                .string()
                .required(" required")
                .matches(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/),

        }),
    });


    return (
        <Container maxWidth="xl">
            <Stack>
                <form onSubmit={formik.handleSubmit}>
                    <Stack sx={{py:3}}>
                        <CustomInput
                            label="Name"
                            type="string"
                            name={"name"}
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            errorName={formik.errors.name}
                            formikTouchedCondition={formik.touched.name}
                            formikErrorCondition={formik.errors.name}
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
                        <CustomInput
                            label="Email"
                            type="string"
                            name={"email"}
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            errorName={formik.errors.email}
                            formikTouchedCondition={formik.touched.email}
                            formikErrorCondition={formik.errors.email}
                        />
                        <CustomInput
                            label="Password"
                            type="password"
                            name={"password"}
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            errorName={formik.errors.password}
                            formikTouchedCondition={formik.touched.password}
                            formikErrorCondition={formik.errors.password}
                        />
                        <CustomInput
                            label="Re-Password"
                            type="password"
                            name={"rePassword"}
                            value={formik.values.rePassword}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            errorName={formik.errors.rePassword}
                            formikTouchedCondition={formik.touched.rePassword}
                            formikErrorCondition={formik.errors.rePassword}
                        />
                        <Button type="submit" sx={{
                            color: 'white',
                            backgroundColor: ' #4fa74f', width: "100%",
                            ':hover': { backgroundColor: ' #4fa74f' },my:1
                        }}>
                            {loading ? <CircularProgress style={{ width: '20px', height: '20px', color: 'white' }} /> : 'Register now'}
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
export default Register;