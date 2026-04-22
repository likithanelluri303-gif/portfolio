import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <span className="brand-icon">⚡</span>
          <span className="brand-text">Portfolio</span>
        </div>
        <ul className="navbar-links">
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              end
            >
              <span className="link-icon">🏠</span>
              <span className="link-text">Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/projects" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              <span className="link-icon">💼</span>
              <span className="link-text">Projects</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;