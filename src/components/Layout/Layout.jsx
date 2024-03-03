import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Stack } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setUserToken } from '../../redux/Auth/userTokenSlice';

export default function Layout() {
  const dispatch = useDispatch();
  useEffect(() => {
    //for handling refreshing bec in refresh it deleting the userToken inside redux
    const token = localStorage.getItem("userToken");
    if (token) {
      dispatch(setUserToken(token));
    }
  }, []);



  return (
    <Stack
      direction="column"
      sx={{ display: 'flex', flexFlow: 'column', minHeight: '100vh' }}
    >
      <Navbar />
      <Stack sx={{ flex: 1 }}>
        <Outlet />
      </Stack>
      <Footer />
    </Stack>
  );
}