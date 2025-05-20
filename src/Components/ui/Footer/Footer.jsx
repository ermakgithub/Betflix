import React from 'react';
import {Stack, Typography} from "@mui/material";

export default function Footer() {
    return (
        <Stack component="footer"
               sx={{
                   paddingTop:4,
                   paddingBottom:4,
                   flexDirection:{sm:'row'},
                   justifyContent:{sm:'space-between'},
                   alignItems:{sm:'center'},
                   marginTop:'auto',
                   backgroundColor:'#000000',


        }}
        >

                <Typography variant='body2' color="#0F214D">
                    &copy; {new Date().getFullYear()} &laquo;betflix&raquo; 18+<br/>
                    Данный сайт создан исключительно в обучающих целях.<br/>
                    Все права принадлежат правообладателям.
                </Typography>

                <Typography variant="h4" color="#0F214D">
                    betflix
                </Typography>

        </Stack>
    );
}

