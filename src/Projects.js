import React, { useState } from "react";
import "./App.css";

function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
      {
      title: "File Uploading System",
      year: "2026",
      shortDesc: "React-based platform for secure file uploads and user-based search and retrieval.",
      tech: "React, Node.js, MongoDB",
      img: "/images/fus.webp",
      features: [
        "Secure user-specific file uploading",
        "Advanced search by username for file retrieval",
        "Instant file download functionality",
        "Personalized user upload dashboard",
        "Scalable storage using MongoDB GridFS",
      ],
      longDesc: `Developed a full-stack file management application where users can securely upload and store their documents. 
Integrated MongoDB to link files with specific user profiles, ensuring organized data retrieval.

Designed a robust search feature allowing users to locate and download files uploaded by others by searching their usernames. 
Implemented a responsive React frontend to manage file states and provide real-time feedback during the upload and download process.`,
},
    {
      title: "Automobile Rental Web Application",
      year: "2025",
      shortDesc: "Web-based automobile rental and booking system.",
      tech: "HTML, CSS, JavaScript, MongoDB",
      img: "/images/rental.webp",
      features: [
        "User registration & secure login",
        "Real-time vehicle booking",
        "MongoDB-based user & booking management",
        "Secure payment processing",
        "Responsive UI for smooth navigation",
      ],
      longDesc: `Built a web application using HTML, CSS, and JavaScript with MongoDB integration
for managing users and booking data.

Designed a user-friendly interface for smooth navigation and vehicle booking.
Implemented secure authentication and protected payment processing to boost user trust.
Tested and debugged the system to ensure a smooth and error-free user experience.`,
    },
    {
      title: "Food Ordering System",
      year: "2024",
      shortDesc: "Java-based food ordering and management system.",
      tech: "Java, MongoDB",
      img: "/images/food.jpeg",
      features: [
        "Real-time food ordering",
        "Role-based access (Admin & Customer)",
        "Menu & order management",
        "Secure authentication",
        "Sales monitoring dashboard",
      ],
      longDesc: `Developed a Java-based web application for browsing menus and placing orders in real time.
Integrated MongoDB to manage users, food items, and order details efficiently.

Implemented secure authentication and role-based access for customers and admins.
Designed an admin dashboard for menu management, order processing, and sales monitoring.`,
    },
    {
      title: "E-Commerce Website",
      year: "2024",
      shortDesc: "Full-featured React e-commerce platform.",
      tech: "React.js, MongoDB",
      img: "/images/ecommerce.png",
      features: [
        "Product browsing & search",
        "Cart & order management",
        "Admin dashboard for inventory",
        "Secure user authentication",
        "Sales analytics monitoring",
      ],
      longDesc: `Built a React.js-based e-commerce website for browsing products, cart management,
and real-time order placement.

Integrated MongoDB for managing users, inventory, and order details.
Implemented secure authentication and role-based access.
Designed an admin dashboard for product management and sales analytics.`,
    },
    {
      title: "3-Key Keyboard using Arduino",
      year: "2024",
      shortDesc: "Embedded hardware project using Arduino.",
      tech: "Arduino, Embedded C",
      img: "/images/th.jpg",
      features: [
        "Three programmable keys",
        "Microcontroller-based input detection",
        "Efficient embedded logic",
        "Hardware-software integration",
      ],
      longDesc: `Designed and implemented a 3-key keyboard using Arduino.
Programmed the microcontroller to detect key presses and execute assigned actions.

Focused on embedded system logic, hardware interfacing, and efficient code structure.`,
    },
  ];

  /* ---------------- DASHBOARD VIEW ---------------- */
  if (!activeProject) {
    return (
      <div className="projects-page">
        <h1 className="page-title">PROJECTS</h1>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.img} alt={project.title} />
              <h2>{project.title}</h2>
              <p className="year">{project.year}</p>
              <p>{project.shortDesc}</p>

              <p className="tech">
                <strong>Tech:</strong> {project.tech}
              </p>

              <ul className="features-list">
                {project.features.slice(0, 3).map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>

              <button onClick={() => setActiveProject(project)}>
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  /* ---------------- DETAILS VIEW ---------------- */
  return (
    <div className="project-details-page">
      <button className="back-btn" onClick={() => setActiveProject(null)}>
        ← Go Back
      </button>

      <div className="details-container">
        <img src={activeProject.img} alt={activeProject.title} />

        <div className="details-content">
          <h1>{activeProject.title}</h1>
          <p className="year">{activeProject.year}</p>

          <p>
            <strong>Technologies Used:</strong> {activeProject.tech}
          </p>

          <h3>Key Features</h3>
          <ul className="features-list">
            {activeProject.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>

          <h3>Project Overview</h3>
          <p style={{ whiteSpace: "pre-line" }}>
            {activeProject.longDesc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
