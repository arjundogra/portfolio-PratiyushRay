import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar_nav">
        <div className="navbar_options">Home</div>
      </div>
      <div className="navbar_nav">
        <div className="navbar_options">About</div>
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