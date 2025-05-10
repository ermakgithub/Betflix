import React, { useState } from 'react';
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

const Icon = ({ iconName }) => {
  const IconComponent = iconComponents[iconName];
  return <IconComponent />;
};

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  const trigger = useScrollTrigger({
    target: window,
  });

  const handleDrawerToggle = () => {
    setOpen(prevState => !prevState);
  };

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar sx={{ backgroundColor: '#730000' }}>
        <Container  maxWidth="lg">
          <Toolbar>
            <IconButton color="#00232A" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
            <Drawer open={isOpen} onClose={handleDrawerToggle}>
              <Box sx={{ width: 250, backgroundColor: '#FF9B9B',height:'100%' }} onClick={handleDrawerToggle}>
                <List>
                  {TOP_LISTS.map(item => (
                    <Link
                      key={item.title}
                      component={RouterLink}
                      to={item.url}

                      sx={{ textDecoration: 'none',color: '#00232A' }}
                    >
                      <ListItem
                        disablePadding
                        sx={{
                          color: '#00232A',

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
                          color: '#00232A',
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
                  color: '#00232A',
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
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
    </Slide>
  );
}
