import React, {useState} from 'react';
import {
    AppBar, Box,
    Container,
    Drawer,
    IconButton,
    List,
    ListItem, ListItemButton,
    ListItemText,
    Slide,
    Toolbar,
    useScrollTrigger,

} from "@mui/material";
import MenuIcon from  "@mui/icons-material/Menu"

export default function Navbar() {
    const [isOpen, setOpen] = useState(false);

    const trigger = useScrollTrigger({
        target: window
    });

    const handleDrawerToggle = () => {
        setOpen((prevState) => !prevState);
    };

    return (
        <Slide appear={false} direction="down" in={!trigger}>


        <AppBar >
            <Container maxWidth="lg">
            <Toolbar>
                <IconButton color="inherit" onClick ={handleDrawerToggle} >
                    <MenuIcon />
                </IconButton>
                <Drawer
                    open={isOpen}
                    onClose={handleDrawerToggle}>
                    <Box sx={{width:250}} onClick={handleDrawerToggle}>

                <List>

                        <ListItem disablePadding>
                            <ListItemButton sx={{ textAlign: 'center' }}>
                                <ListItemText primary="Movies" />
                            </ListItemButton>
                        </ListItem>
                </List>
                    </Box>
                </Drawer>
            </Toolbar>
            </Container>
        </AppBar>
        </Slide>
    );
}

