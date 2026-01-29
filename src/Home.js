import React from "react";
import profile from "./profile.jpeg";
import {
  FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGraduationCap
} from "react-icons/fa";

function Home() {
  return (
    <div className="container home-container">
      <div className="left">
        <h1 className="name">Saravanan G</h1>
        <h3 className="role">Software Developer | Full Stack Developer</h3>
        <p className="summary">
  Passionate software developer with strong problem-solving skills and a keen interest in building scalable, efficient, and user-friendly web applications. Simply put, I love coding and solving puzzles. I treat every project as an opportunity to learn something new. My goal is to write clean code that makes websites run 
  fast and look great, while continuously growing my skills in the tech world
</p>

        <div className="links">
          <a href="https://github.com/Saravanan096" target="_blank" rel="noreferrer"><FaGithub className="icon" /></a>
          <a href="https://www.linkedin.com/in/saravanan-g-721833316" target="_blank" rel="noreferrer"><FaLinkedin className="icon" /></a>
          <a href="mailto:saravanagowri2005@gmail.com"><FaEnvelope className="icon" /></a>
        </div>

        <div className="contacts">
          <p><FaPhoneAlt className="contact-icon" /> +91 6381334015</p>
          <p><FaMapMarkerAlt className="contact-icon" /> 1351 A/6 Annai Therasa Nagar, Kovilpatti</p>
          <p><FaGraduationCap className="contact-icon" /> B.E CSE at MEPCO Schlenk Engineering College, Sivakasi</p>
        </div>
      </div>

      <div className="right">
        <img src={profile} alt="Saravanan" className="profile-img" />
      </div>
    </div>
  );
}

export default Home;