import * as React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import integral_banner from "./images/integral_wide_transparent.png";
import integral_small from "./images/integral_transparent_icon.png";

const pages = [
  { name: "Home", url: "/" },
  { name: "Our Services", url: "/#services" },
  { name: "Why Integral?", url: "/#why_integral" },
  { name: "Contact Us", url: "/contact" },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleButtonClick = (url) => {
    handleCloseNavMenu();
    navigate(url);

    if (url.startsWith('/#')) {
      setTimeout(() => {
        const id = url.substring(2);
        const element = document.getElementById(id);
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 35,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  };

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "arial",
              fontWeight: 200,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img src={integral_banner} alt="Logo" style={{ height: "36px" }} />
          </Typography>

          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              justifyContent: "space-between",
              width: '100%'
            }}
          >
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/"
              sx={{
                mr: 2,
                fontFamily: "arial",
                fontWeight: 200,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <img src={integral_banner} alt="Logo" style={{ height: "36px" }} />
            </Typography>
            <div/>
          </Box>

          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {pages.map((page) => (
              <MenuItem
                key={page.name}
                onClick={() => handleButtonClick(page.url)}
              >
                <Typography
                  textAlign="center"
                  variant="h5"
                  sx={{ fontFamily: "Mona Sans" }}
                >
                  {page.name}
                </Typography>
              </MenuItem>
            ))}
          </Menu>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={() => handleButtonClick(page.url)}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  textTransform: "none", // Remove uppercase
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
