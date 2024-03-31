import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Fade from "@mui/material/Fade";
import "../styles/Navbar.css";
import { useState } from "react";

function ScrollTop(props) {
  const { children, window } = props;
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

export default function BackToTop(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        sx={{ backgroundColor: "#1B1E1E", height: { xs: "18%", md: "15%" } }}
      >
        <Toolbar
          className="toolbar"
          sx={{ display: "flex", height: "100%", width: "100%" }}
        >
          <Typography sx={{ width: { xs: "100%", md: "50%" } }} component="div">
            <Typography
              sx={{
                fontWeight: "600",
                fontSize: "20px",
                letterSpacing: "2px",
                textAlign: "center",
                WebkitTextStroke: "1.2px",
                mt: { xs: "1rem" },
                fontFamily: "Poppins",
              }}
              variant="p"
              component="div"
            >
              CRISTIAN BLANCO
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                fontSize: "13px",
                fontFamily: "Poppins",
              }}
              variant="p"
              component="div"
            >
              FULL STACK DEVELOPER
            </Typography>
          </Typography>
          <div className="conteiner-tabs">
            <a className="tabs" href="/">
              Home
            </a>
            <a className="tabs" href="/about">
              About
            </a>
            <a className="tabs" href="/work">
              Work
            </a>
            <a className="tabs" href="/contact">
              Contact
            </a>
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
