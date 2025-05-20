import React, { useContext, useState } from 'react';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import {
  AppBar,
  Box,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger,
  Link,
  Divider,
  Stack,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';
import { iconComponents, MOVIE_LISTS, TOP_LISTS } from '../../../constant.js';
import Search from '../Search';
import toggleColorMode, { ColorModeContext } from '../../../context/ToggleColorMode.jsx';
import { useTheme } from '@emotion/react';

const Icon = ({ iconName }) => {
  const IconComponent = iconComponents[iconName];
  return <IconComponent />;
};

export default function Navbar() {
  const {toggleColorMode, mode} = useContext(ColorModeContext);



  const [isOpen, setOpen] = useState(false);

  const trigger = useScrollTrigger({
    target: window,
  });

  const handleDrawerToggle = () => {
    setOpen(prevState => !prevState);
  };

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar sx={{ backgroundColor: '#0F214D' }}>
        <Container  maxWidth="lg">
          <Toolbar>
            <IconButton sx={{color:'#AAF1FF'}} onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
            <Drawer open={isOpen} onClose={handleDrawerToggle}>
              <Box sx={{ width: 250, backgroundColor: '#0F214D',height:'100%' }} onClick={handleDrawerToggle}>
                <List>
                  {TOP_LISTS.map(item => (
                    <Link
                      key={item.title}
                      component={RouterLink}
                      to={item.url}

                      sx={{ textDecoration: 'none',color: '#AAF1FF' }}
                    >
                      <ListItem
                        disablePadding
                        sx={{
                          color: '#AAF1FF',

                        }}
                      >
                        <ListItemButton>
                          <ListItemIcon>
                            <Icon iconName={item.icon} />
                          </ListItemIcon>
                          <ListItemText primary={item.title} />
                        </ListItemButton>
                      </ListItem>
                    </Link>
                  ))}
                </List>
                <Divider />
                <List>
                  {MOVIE_LISTS.map(item => (
                    <Link
                      key={item.title}
                      component={RouterLink}
                      to={item.url}
                      sx={{ textDecoration: 'none' }}
                    >
                      <ListItem
                        disablePadding
                        sx={{
                          color: '#AAF1FF',
                        }}
                      >
                        <ListItemButton>
                          <ListItemIcon>
                            <Icon iconName={item.icon} />
                          </ListItemIcon>
                          <ListItemText primary={item.title} />
                        </ListItemButton>
                      </ListItem>
                    </Link>
                  ))}
                </List>
              </Box>
            </Drawer>

            <Stack
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              width="100%"
            >
              <Typography
                sx={{
                  color: '#AAF1FF',
                  textDecoration: 'none',
                  variant: 'h3',
                  fontSize: 30,
                }}
                component={RouterLink}
                to="/"
              >
                Betflix
              </Typography>
              <Search />
              <IconButton color="black" onClick={toggleColorMode}>
                {mode === 'dark' ? <Brightness7/> : <Brightness4/>}
               </IconButton>

            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
    </Slide>
  );
}
