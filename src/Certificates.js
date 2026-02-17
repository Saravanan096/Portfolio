import React, { useState } from "react";
import "./App.css";

function Certificates() {
  const [selectedImage, setSelectedImage] = useState(null);

  const certificates = [
     {
  title: "Programming using Java – Infosys",
  desc: `Completed the course "Programming using Java" offered by Infosys Springboard.

Awarded on: August 24, 2025

Gained strong understanding of:
• Core Java concepts
• Object-Oriented Programming (OOP)
• Practical programming skills`,
  img: "/images/infosys.png",
},
 {
      title: "HTML AND CSS",
      desc: `I successfully completed the GUVI HCL professional course in HTML and CSS, 
      mastering the fundamentals of front-end development. I applied these skills to build a responsive 
      web interface using semantic HTML5 and advanced CSS3 layouts for a seamless user experience.
      `,
      img: "/images/",
    },

    {
      title: "NPTEL Certifications",
      desc: `• Data Mining (2024)
• Foundation of Cloud IoT Edge ML (2025)
Built strong fundamentals in data analytics, cloud, and IoT-based ML systems.`,
      img: "/images/nptel.png",
    },
     {
      title: "IIChE-TI Hardware Hackathon",
      desc: `Participated in the IIChE-TI Hardware Hackathon at Kongu Engineering College.
Designed a portable composting device focused on eco-friendly and low-cost design.
Integrated temperature and moisture sensors for real-time monitoring.`,
      img: "/images/hack.jpg",
    },
    {
      title: "Introduction to MongoDB",
      desc: `MongoDB University – July 2024.
Hands-on experience in NoSQL concepts, document-oriented design,
and CRUD operations.`,
      img: "/images/mongodb.png",
    },
     {
      title: "Digital SoC Design Verification",
      desc: `Completed a 40-hour short-term course conducted by
Bharath Semiconductor Society.

Course: Introduction to Digital SoC Design Verification
Duration: 16th Dec 2024 – 21st Dec 2024

Assessment Level: Budding Knowledge`,
      img: "/images/Inter.jpg",
    },
    {
      title: "Technical Symposium – Full Stack Essentials",
      desc: `Actively participated and supported the smooth execution of the
"Full Stack Essentials" technical symposium.
Ensured effective participant engagement.`,
      img: "/images/event.jpeg",
    },
  ];

  return (
    <div className="certificates-page">
      <h1 className="page-title">CERTIFICATES AND ACHIEVEMENTS</h1>

      {/* GRID */}
      <div className="certificates-container">
        {certificates.map((item, index) => (
          <div className="certificate-card" key={index}>
            <h2>{item.title}</h2>
            <p style={{ whiteSpace: "pre-line" }}>{item.desc}</p>
            <button
              className="view-btn"
              onClick={() => setSelectedImage(item.img)}
            >
              View Image
            </button>
          </div>
        ))}
      </div>

      {/* IMAGE MODAL */}
      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <div className="image-box" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Certificate" />
            <button
              className="close-btn"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Certificates;
