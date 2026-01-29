import React from "react";
import "./App.css";

// Import images from the src folder
import ravillaImg from "./ravilla.jpg";
import mepcoImg from "./mepco.jpg";

function Education() {
  return (
    <div className="education-page">
      <h1 className="page-title">EDUCATION DETAILS</h1>
      <div className="education-grid">
        
        {/* Column 1: SSLC */}
        <div className="edu-card">
          <div className="img-container">
            <img src={ravillaImg} alt="Ravilla School" className="edu-img" />
          </div>
          <h2>SSLC</h2>
          <p className="school-name">Ravilla K.R.A Vidhyashram Matric Hr.Sec.School</p>
          <p className="school-name">Kovilpatti, Tamilnadu, India</p>
          <p className="year">2019 - 2020</p>
          <p className="score">Percentage: 59.4%</p>
          <p className="desc">Successfully obtained the Secondary School Leaving Certificate.</p>
        </div>

        {/* Column 2: HSC */}
        <div className="edu-card">
          <div className="img-container">
            <img src={ravillaImg} alt="Ravilla School" className="edu-img" />
          </div>
          <h2>HSC</h2>
          <p className="school-name">Ravilla K.R.A Vidhyashram Matric Hr.Sec.School</p>
          <p className="school-name">Kovilpatti, Tamilnadu, India</p>
          <p className="year">2020 - 2022</p>
          <p className="score">Percentage: 88.16%</p>
          <p className="desc">Specialized in Computer Science and Mathematics.</p>
        </div>

        {/* Column 3: Degree */}
        <div className="edu-card">
          <div className="img-container">
            <img src={mepcoImg} alt="MEPCO College" className="edu-img" />
          </div>
          <h2>B.E. Degree</h2>
          <p className="school-name">MEPCO Schlenk Engineering College</p>
          <p className="school-name">Sivakasi, Tamilnadu, India</p>
          <p className="year">2022 - 2026</p>
          <p className="score">CGPA: 7.77</p>
          <p className="desc">Pursuing Computer Science and Engineering.</p>
        </div>

      </div>
    </div>
  );
}

export default Education;