import Logo from "../Images/Logo.png";

import "../styles/Home.css";

import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="centerContent">
        <img src={Logo} alt="logo" width="30%" />
        <p>Where you can get your desired movie.</p>
        <Link rel="stylesheet" to="/Movies">
          <Button
            variant="contained"
            size="large"
            sx={{ borderRadius: "20px" }}
          >
            Browse Movies <ArrowForwardIcon></ArrowForwardIcon>
          </Button>
        </Link>
      </div>
    </>
  );
}
