import React,{useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import { Link, animateScroll } from "react-scroll";

import Button from '@mui/material/Button';

import MenuItem from '@mui/material/MenuItem';

const pages = ['About', 'Projects', 'Skills','Contact'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
 
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };



  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            YAS DEV
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link    activeClass="active"

                    spy={true}
                    smooth={true}
                    offset={70}
                    duration= {500}
                    offset={-70}
                    to={page}>{page}
                     
                    </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, }}
          >
            YAS DEV
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } , justifyContent:{xs:'flex-end'}}}>
            {pages.map((page) => (
              <Button
                key={page}
                 
                onClick={handleCloseNavMenu}
                sx={{ my: 2, mx:3, color: 'white', display: 'block',fontSize : '18px' ,  }}
              >
                    <Link    activeClass="active"

                    spy={true}
                    smooth={true}
                    offset={70}
                    duration= {500}
                    offset={-70}
                    to={page}>{page}

                    </Link>
              </Button>
            ))}
          </Box>


        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
