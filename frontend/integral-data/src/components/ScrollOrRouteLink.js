import React, {useState} from "react";
import { Link as MuiLink } from "@mui/material";
import { NavLinks } from "./Navbar/NavbarElements";
import { animateScroll as scroll, Link as ReactScrollLink } from "react-scroll";
import { useLocation } from "react-router-dom";


const ScrollOrRouteLink = ({ to, children, ...props }) => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
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


  export default ScrollOrRouteLink;