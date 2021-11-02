import React from "react";
import "./style.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-title">
        <h1>MD APP</h1>
      </div>
      <nav-links>
        <a href="http://" className="nav-link">
          <img
            src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Linkedin2_svg-512.png"
            alt=""
          />
        </a>
        <a href="http://" className="nav-link">
          <img
            src="https://cdn4.iconfinder.com/data/icons/liu-square-blac/60/github-square-social-media-256.png"
            alt=""
          />
        </a>
      </nav-links>
    </div>
  );
};

export default Navbar;
