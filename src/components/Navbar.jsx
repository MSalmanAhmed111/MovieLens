import "../styles/Navbar.css";
import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import logo from "../Images/Logo.png";

export default function Navbar() {
  return (
    <>
      <nav>
        <div className="title">
          <Link to="/Movies" underline="hover">
            <img src={logo} alt="" style={{ width: "15rem", height: "100%" }} />
          </Link>
        </div>
        <div className="links">
          <ul>
            <li>
              <Link to="/" underline="hover">
                <h2 style={{ color: "#2EB4FF" }}>Home</h2>
              </Link>
            </li>
            <li>
              <Link to="/Movies" underline="hover">
                <h2 style={{ color: "#2EB4FF" }}>Movies</h2>
              </Link>
            </li>
            <li>
              <Link to="/My-List" underline="hover">
                <h2 style={{ color: "#2EB4FF" }}>My List</h2>
              </Link>
            </li>
          </ul>
        </div>
        <div
          className="searchfield"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <SearchIcon
            size="medium"
            sx={{ color: "black", mr: 1, my: 0.5 }}
            style={{ position: "absolute", paddingLeft: "3px" }}
          />
          <input
            type="text"
            placeholder="Search Movies"
            style={{
              backgroundColor: "whitesmoke",
              height: "1.5rem",
              borderRadius: "25px",
              textIndent: "20px",
            }}
          />
        </div>
      </nav>
    </>
  );
}
