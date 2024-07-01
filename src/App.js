import React from "react";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import "./App.css";
import logo from "./loong.academy_logo.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Logo" className="App-logo" />
        <h2 className="academy">Loong.Academy</h2>
        <h1 className="fade-in">Coming Soon</h1>
        <h2 className="fade-in">Empowering Minds, Expanding Horizons</h2>
        <p className="fade-in">
          Learn Beyond Boundaries with AI-Driven Education
        </p>
      </header>
      <div className="links fade-in">
        <a
          href="mailto:contact@chenyuzhang.com"
          className="icon-link"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://www.linkedin.com/company/loong-academy/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default App;
