import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar_nav">
        <Link to="/">
          <div className="navbar_options">Home</div>
        </Link>
      </div>
      <div className="navbar_nav">
        <Link to="/about">
          <div className="navbar_options">About</div>
        </Link>
      </div>
      <div className="navbar_nav">
        <div className="navbar_options">Projects</div>
      </div>
      <div className="navbar_nav">
        <div className="navbar_options">Resume</div>
      </div>
    </div>
  );
}

export default Navbar;
