import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Fade from "@mui/material/Fade";
import { IoCodeSharp } from "react-icons/io5";
import { IoCodeSlashSharp } from "react-icons/io5";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import "../styles/Navbar.css";
import { useState } from "react";

function ScrollTop(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function BackToTop(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar sx={{ backgroundColor: "black", height: "100px"}}>
        <Toolbar sx={{ display: "flex", height: "100%", width: "100%"}}>
          <Typography sx={{width:"50%", paddingRight:"40px"}} component="div" >
            <Typography
              sx={{ fontWeight: "600", fontSize: "20px", letterSpacing:"2px",display:"flex", justifyContent:"center", WebkitTextStroke:"1.2px"}}
              variant="p"
              component="div"
            >
               CRISTIAN BLANCO     
            </Typography>
            <Typography sx={{display:"flex", justifyContent:"center", fontSize:"13px"}} variant="p" component="div">
              FULL STACK DEVELOPER
            </Typography>
          </Typography>
          <div style={{width:"50%", marginLeft:"19px", marginTop:"30px"}}>
            <a  className="tabs" href="/">HOME</a>
            <a className="tabs" href="">ABOUT</a>
            <a className="tabs" href="">WORK</a>
            <a className="tabs" href="">CONTACT</a>
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}
