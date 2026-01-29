import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        {/* Use Link instead of a tag to prevent page reload */}
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/education" className="nav-link">Education</Link>
        <Link to="/skills" className="nav-link">Skills</Link>
        <Link to="/certificates" className="nav-link">Certificates</Link>
        <Link to="/projects" className="nav-link">Projects</Link>
      </div>
      <div className="nav-right">
        <span className="welcome-text">Hi ! Saravanan G</span>
      </div>
    </nav>
  );
}

export default Navbar;