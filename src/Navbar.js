import React from "react";
import "./App.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <a href="#home" className="nav-link">Home</a>
        <a href="#education" className="nav-link">Education</a>
        <a href="#skills" className="nav-link">Skills</a>
        <a href="#certificates" className="nav-link">Certificates</a>
        <a href="#projects" className="nav-link">Projects</a>
      </div>

      <div className="nav-right">
        <span className="welcome-text">Saravanan G</span>
      </div>
    </nav>
  );
}

export default Navbar;
