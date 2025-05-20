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
        backgroundColor: 'none',
        minWidth: '100%',
        margin: 0,
        padding: 0,
        maxWidth: '100%',
        '@media (min-width: 600px)': {
          paddingLeft: '0 !important',
          paddingRight: '0 !important',
        },

      }}
    >
      <Box sx={{ p: 4 }} />
      <Navbar />
      <Outlet  />
      <Footer />
    </Container>
  );
}
