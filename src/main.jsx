import React from 'react'
import ReactDom from 'react-dom/client';
import App from './Components/App.jsx'
import {CssBaseline} from "@mui/material";

ReactDom.createRoot(document.getElementById('root')).render(
    <>
        <CssBaseline />
        <App />
    </>
)
