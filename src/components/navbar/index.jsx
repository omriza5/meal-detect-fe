import React from "react";
import "./style.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-title">
        <h1>MD APP</h1>
      </div>
      <div className="nav-links">
        <a
          className="nav-link"
          href="https://www.linkedin.com/in/omri-zaher-3059498b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/linkedin-icon-18-256.png"
            alt=""
          />
        </a>
        <a
          className="nav-link"
          href="https://github.com/omriza5/meal-detect-fe"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/github-icon-18-256.png"
            alt=""
          />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
