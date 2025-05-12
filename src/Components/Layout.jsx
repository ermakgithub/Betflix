import React from 'react';
import { Box, Container } from '@mui/material';
import Footer from './ui/Footer/Footer.jsx';
import Navbar from './ui/Navbar/Navbar.jsx';
import { Outlet } from 'react-router-dom';


//#EBFCFF, #2BA3EC, #EFEDCE, #AAF1FF, #0B5FB0, #0F214D

export default function Layout() {
  return (
    <Container
      fixed
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: '#0B5FB0',
        minWidth: '100%',
      }}
    >
      <Box sx={{ p: 4 }} />
      <Navbar />
      <Outlet  />
      <Footer />
    </Container>
  );
}
