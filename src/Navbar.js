import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar_nav">
        <NavLink exact to="/" className="notActive" activeClassName="activeNav">
          <div className="navbar_options">Home</div>
        </NavLink>
      </div>
      <div className="navbar_nav">
        <NavLink
          exact
          to="/about"
          className="notActive"
          activeClassName="activeNav"
        >
          <div className="navbar_options">About</div>
        </NavLink>
      </div>
      <div className="navbar_nav">
        <NavLink
          exact
          to="/skills"
          className="notActive"
          activeClassName="activeNav"
        >
          <div className="navbar_options">Skills</div>
        </NavLink>
      </div>
      <div className="navbar_nav">
        <NavLink
          exact
          to="/projects"
          className="notActive"
          activeClassName="activeNav"
        >
          <div className="navbar_options">Projects</div>
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
