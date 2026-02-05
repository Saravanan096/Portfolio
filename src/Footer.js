import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./App.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a
          href="https://github.com/Saravanan096"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/saravanan-g-721833316"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

        <a href="mailto:saravanagowri2005@gmail.com">
          <FaEnvelope />
        </a>
      </div>

      <p className="footer-text">
        © Copyright 2026 Saravanan G | Full Stack Developer.
         All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
