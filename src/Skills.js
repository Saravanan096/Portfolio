import React from "react";
import "./App.css";
import { 
  FaHtml5, FaCss3Alt, FaReact, FaJs, FaNodeJs, FaJava 
} from "react-icons/fa";
import { 
  SiC, SiCplusplus, SiMysql, SiMongodb 
} from "react-icons/si";

function Skills() {
  return (
    <div className="skills-page">
      <h1 className="page-title">TECHNICAL SKILLS</h1>

      <div className="skills-container">

        {/* Web Technologies */}
        <div className="skill-category-card">
          <h2 className="skill-header">Web Technologies</h2>
          <div className="skill-icons-grid">
            <div className="skill-item html">
              <FaHtml5 className="icon-small" />
              <span>HTML</span>
            </div>
            <div className="skill-item css">
              <FaCss3Alt className="icon-small" />
              <span>CSS</span>
            </div>
            <div className="skill-item js">
              <FaJs className="icon-small" />
              <span>JavaScript</span>
            </div>
            <div className="skill-item react">
              <FaReact className="icon-small" />
              <span>React.js</span>
            </div>
            <div className="skill-item node">
              <FaNodeJs className="icon-small" />
              <span>Node.js</span>
            </div>
          </div>
        </div>

        {/* Programming Languages */}
        <div className="skill-category-card">
          <h2 className="skill-header">Programming Languages</h2>
          <div className="skill-icons-grid">
            <div className="skill-item c">
              <SiC className="icon-small" />
              <span>C</span>
            </div>
            <div className="skill-item cpp">
              <SiCplusplus className="icon-small" />
              <span>C++</span>
            </div>
            <div className="skill-item java">
              <FaJava className="icon-small" />
              <span>Java</span>
            </div>
          </div>
        </div>

        {/* Databases */}
        <div className="skill-category-card">
          <h2 className="skill-header">Databases</h2>
          <div className="skill-icons-grid">
            <div className="skill-item mysql">
              <SiMysql className="icon-small" />
              <span>MySQL</span>
            </div>
            <div className="skill-item mongodb">
              <SiMongodb className="icon-small" />
              <span>MongoDB</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Skills;
