import React from 'react';
import { Box, Container } from '@mui/material';
import Footer from './ui/Footer/Footer.jsx';
import Navbar from './ui/Navbar/Navbar.jsx';
import { Outlet } from 'react-router-dom';


//#FE0000, #AF0000, #FFFFFA, #00232A, #FF9B9B, #730000

export default function Layout() {
  return (
    <Container
      fixed
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: '#00232A',
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
