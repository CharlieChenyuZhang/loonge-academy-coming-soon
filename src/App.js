import React from "react";
import "./App.css";
import logo from "./loong.academy_logo.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Logo" className="App-logo" />
        <h1 className="fade-in">Coming Soon</h1>
        <h2 className="fade-in">Empowering Minds, Expanding Horizons</h2>
        <p className="fade-in">
          Learn Beyond Boundaries with AI-Driven Education
        </p>
      </header>
    </div>
  );
}

export default App;
