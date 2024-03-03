import { useFormik } from "formik";
import * as yup from "yup";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomInput from "../../../components/common/CustomInput/CustomInput";
import { Alert, Box, Button, CircularProgress, Container, Input, Modal, Snackbar, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { forgotPasswordRequest } from "../../../redux/Auth/forgotPasswordSlice";
import PassCode from "../../../components/PassCode/PassCode";

const ForgotPassword = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { forgotPassword, error, loading } = useSelector(state => state.forgotPassword)
    const [snackOpen, setSnackOpen] = React.useState(false);
    const [modalOpen, setmodalOpen] = React.useState(false);

    const formik = useFormik({
        initialValues: {
            email: "",
        },

        onSubmit: (values) => {
            // console.log(JSON.stringify(values, null, 4));

            dispatch(forgotPasswordRequest({ body: values }))
                .then((response) => {
                    if (response.payload && response.payload.statusMsg === "success") {
                        //             navigate('/');
                        // console.log('bravooo', 'forgotPassword', response.payload.message);
                        // console.log('bravooo222', 'forgotPassword', forgotPassword);
                        setSnackOpen(true);
                        setmodalOpen(true)
                    }
                });
            // console.log('forgotPassword ::', forgotPassword);
            // console.log('Error ::', error, loading);
        },
        validationSchema: yup.object({
            email: yup.string().email("not valid").required("required"),
        }),
    });
    // 

    const snackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setSnackOpen(false);
    };

    const handleModalClose = () => setmodalOpen(false);

    return (
        <Container maxWidth="xl">
            <Stack>
                <Typography sx={{ mt: 2, fontSize: 24, fontWeight: 700 }}>Forgot Password</Typography>
                <Typography sx={{
                    mt: 1, fontSize: 14, color: 'gray'
                }}>Enter your email for the verification process </Typography>
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
                      
                        <Button type="submit" sx={{
                            color: 'white',
                            backgroundColor: ' #4fa74f', width: "100%",
                            ':hover': { backgroundColor: ' #4fa74f' },
                            my: 1
                        }}>
                            {loading ? <CircularProgress style={{ width: '20px', height: '20px', color: 'white' }} /> : 'Continue'}
                        </Button>


                        {error && <Alert variant="filled" severity="error" sx={{ my: 1 }}>
                            {error}
                        </Alert>}
                        {/* snackbar */}
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
                                    {forgotPassword?.message}
                                </Alert>
                            </Snackbar>
                        </div>

                        {/* modal */}

                        <div>
                            <Modal
                                open={modalOpen}
                                onClose={handleModalClose}

                            >
                                <Box sx={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    width: 400,
                                    bgcolor: 'background.paper',
                                    border: '2px solid #000',
                                    boxShadow: 24,
                                    p: 4,
                                }}>
                                    <Typography variant="h6" component="h2">
                                        Enter 6 Digits Code
                                    </Typography>
                                    <PassCode />

                                </Box>
                            </Modal>
                        </div>
                    </Stack>

                </form>
            </Stack>
        </Container>
    );
};
export default ForgotPassword;