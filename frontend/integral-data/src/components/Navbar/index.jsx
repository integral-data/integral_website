import React, { useEffect, useState, Fragment } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Typography } from "@mui/material";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavPages,
  NavMenuMobile,
  NavBtn,
  NavSignUpLink,
} from "./NavbarElements";
import integral_banner from "../../images/integral_wide_transparent.png";
import { animateScroll as scroll } from "react-scroll";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
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
            <NavItem>
              <NavLinks
                to="why-integral"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                onClick={() => setIsOpen(false)}
              >
                <Typography variant="h2" fontWeight={400}>
                  Why Integral?
                </Typography>
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="services"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                onClick={() => setIsOpen(false)}
              >
                <Typography variant="h2" fontWeight={400}>
                  Our Services
                </Typography>
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="expertise"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                onClick={() => setIsOpen(false)}
              >
                <Typography variant="h2" fontWeight={400}>
                  Expertise
                </Typography>
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavSignUpLink
                to="case_studies"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                onClick={() => setIsOpen(false)}
              >
                <Typography variant="h2" fontWeight={400}>
                  Case Studies
                </Typography>
              </NavSignUpLink>
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
                <NavLinks
                  to="why-integral"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  <Typography variant="h6" fontWeight={700}>
                    Why Integral?
                  </Typography>
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="services"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  <Typography variant="h6" fontWeight={700}>
                    Our Services
                  </Typography>
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="expertise"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  <Typography variant="h6" fontWeight={700}>
                    Expertise
                  </Typography>
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavSignUpLink
                  to="/case_studies"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  <Typography variant="h6" fontWeight={700}>
                    Case Studies
                  </Typography>
                </NavSignUpLink>
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
