

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Header.css';

export default function Header() {
  const [theme, setTheme] = useState('light');

  const toggle = () => {
    if (theme === 'light') {
      document.body.style.backgroundColor = '#121212';
      document.body.style.color = '#f5f5f5';
      setTheme('dark');
    } else {
      document.body.style.backgroundColor = '#ffffff';
      document.body.style.color = '#000000';
      setTheme('light');
    }
  };

  return (
     
    <nav className="navbar navbar-expand-lg custom-navbar sticky-top shadow-sm">
      <div className="container">
        <Link className="navbar-brand logo-text" to="/">WIX</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto d-flex justify-content-center align-items-center ">

            <li className="nav-item">
              <Link className="nav-link stylish-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link stylish-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link stylish-link" to="/portfolio">Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link stylish-link" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link stylish-link" to="/client">Client Albums</Link>
            </li>
            <li className="nav-item">
              <button className="btn theme-toggle-btn ms-3" onClick={toggle}>
                {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
  );
}
