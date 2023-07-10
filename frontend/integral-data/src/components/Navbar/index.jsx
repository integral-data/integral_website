import React, { useEffect, useState, Fragment } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Typography, Box, Link as MuiLink } from "@mui/material";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavMenuMobile,
  NavSignUpLink,
} from "./NavbarElements";
import integral_banner from "../../images/integral_wide_transparent.png";
import { animateScroll as scroll, Link as ReactScrollLink } from "react-scroll";
import { useLocation } from "react-router-dom";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
    return () => {
      setScrollNav(false);
      window.removeEventListener("scroll", changeNav);
    };
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const ScrollOrRouteLink = ({ to, children, ...props }) => {
    const handleClick = (event) => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    if (location.pathname === "/") {
      return (
        <NavLinks
          as={ReactScrollLink}
          to={to}
          spy={true}
          smooth={true}
          duration={500}
          offset={-80} // Adjust this value
          onClick={handleClick}
          {...props}
        >
          {children}
        </NavLinks>
      );
    }

    return (
      <NavLinks
        as={MuiLink}
        href={"/#" + to}
        color="inherit"
        underline="none"
        onClick={handleClick}
        {...props}
      >
        {children}
      </NavLinks>
    );
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav} isOpen={isOpen}>
          <NavMenuMobile
            style={{
              transform: isOpen ? "translateY(0)" : "translateY(-100%)",
            }}
          >
            <Box
              sx={{
                display: "flex", // The box should be a flex container
                flexDirection: "column", // The direct children stack on top of each other
                justifyContent: "center", // Center children vertically
                alignItems: "center", // Center children horizontally
                height: "100%", // Make it fill the entire container
                marginTop: "0px",
                marginBottom: "800px",
              }}
            >
              <NavItem sx={{ marginTop: "0px", textAlign: "center" }}>
                <ScrollOrRouteLink to="why-integral">
                  <Typography variant="h2" fontWeight={400} textAlign="center">
                    Why Integral?
                  </Typography>
                </ScrollOrRouteLink>
              </NavItem>
              <NavItem>
                <ScrollOrRouteLink to="services">
                  <Typography variant="h2" fontWeight={400}>
                    Our Services
                  </Typography>
                </ScrollOrRouteLink>
              </NavItem>
              <NavItem sx={{ marginTop: "0px", margin: "auto" }}>
                <ScrollOrRouteLink to="expertise">
                  <Typography variant="h2" fontWeight={400}>
                    Expertise
                  </Typography>
                </ScrollOrRouteLink>
              </NavItem>
              <NavItem>
                <ScrollOrRouteLink to="case-studies">
                  <Typography variant="h2" fontWeight={400}>
                    Case Studies
                  </Typography>
                </ScrollOrRouteLink>
              </NavItem>
              <NavItem>
                <NavSignUpLink
                  to="/contact"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  onClick={() => setIsOpen(false)}
                >
                  <Typography variant="h2" fontWeight={400}>
                    Contact Us
                  </Typography>
                </NavSignUpLink>
              </NavItem>
            </Box>
            {/* Add NavItems here */}
          </NavMenuMobile>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              <img
                src={integral_banner}
                alt="Logo"
                style={{ height: "56px" }}
              />
            </NavLogo>
            <MobileIcon onClick={() => setIsOpen(!isOpen)}>
              <FaBars />
            </MobileIcon>

            <NavMenu>
              <NavItem>
                <ScrollOrRouteLink to="why-integral">
                  <Typography variant="h6" fontWeight={700}>
                    Why Integral?
                  </Typography>
                </ScrollOrRouteLink>
              </NavItem>
              <NavItem>
                <ScrollOrRouteLink to="services">
                  <Typography variant="h6" fontWeight={700}>
                    Our Services
                  </Typography>
                </ScrollOrRouteLink>
              </NavItem>
              <NavItem>
                <ScrollOrRouteLink to="expertise">
                  <Typography variant="h6" fontWeight={700}>
                    Expertise
                  </Typography>
                </ScrollOrRouteLink>
              </NavItem>
              <NavItem>
                <ScrollOrRouteLink to="case-studies">
                  <Typography variant="h6" fontWeight={700}>
                    Case Studies
                  </Typography>
                </ScrollOrRouteLink>
              </NavItem>
              <NavItem>
                <NavSignUpLink
                  to="/contact"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  <Typography variant="h6" fontWeight={700}>
                    Contact Us
                  </Typography>
                </NavSignUpLink>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
