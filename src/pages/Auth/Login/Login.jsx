import { useFormik } from "formik";
import * as yup from "yup";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import CustomInput from "../../../components/common/CustomInput/CustomInput";
import { Alert, Button, CircularProgress, Container, Stack, Typography } from "@mui/material";
import { loginRequest } from "../../../redux/Auth/loginSlice";
import { Link, useNavigate } from "react-router-dom";
import { setUserToken } from '../../../redux/Auth/userTokenSlice';
const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { login, error, loading } = useSelector(state => state.login)

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },

        onSubmit: (values) => {
            // // console.log( JSON.stringify(values, null, 4));
            dispatch(loginRequest({ body: values }))
                .then((response) => {
                    if (response.payload && response.payload.message === "success") {
                        localStorage.setItem('userToken', response.payload.token)
                        dispatch(setUserToken(response.payload.token));
                        // console.log('bravooo', response.payload.message);
                        // console.log('response.payload ::', response.payload);
                        // console.log('2222 ::', login);
                        navigate('/');
                    }
                });

        },
        validationSchema: yup.object({
            email: yup.string().email("not valid").required("required"),
            password: yup.string().required(" required"),

        }),
    });


    return (
        <Container maxWidth="xl">
            <Stack>
                <form onSubmit={formik.handleSubmit}>
                    <Stack sx={{ py: 3 }}>

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
                        <Link to="/forgot-password">Forgot password?</Link>

                        <Button type="submit" sx={{
                            color: 'white',
                            backgroundColor: ' #4fa74f', width: "100%",
                            ':hover': { backgroundColor: ' #4fa74f' }, my: 1
                        }}>
                            {loading ? <CircularProgress style={{ width: '20px', height: '20px', color: 'white' }} /> : 'login now'}
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
export default Login;