import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Education from "./Education";
import Skills from "./Skills"; // <--- IMPORT THIS
import Certificates from "./Certificates";
import "./App.css";
import Projects from "./Projects";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        
        {/* ADD THIS ROUTE */}
        <Route path="/skills" element={<Skills />} />
    

        <Route path="/certificates" element={<Certificates />} />
        <Route path="/projects" element={<Projects />} />

        
      </Routes>
    </Router>
  );
}

export default App;
