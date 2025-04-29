import React from 'react';
import {Container} from "@mui/material";
import Footer from "./ui/Footer/Footer.jsx";
import Navbar from "./ui/Navbar/Navbar.jsx";
import {Outlet} from "react-router-dom";


export default function Layout() {
    return (
          <Container fixed>
              <Navbar/>
              <Outlet/>
              <Footer/>
          </Container>
    )
}
