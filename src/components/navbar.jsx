import React from 'react';
import { Link } from 'react-scroll';
import '../index.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/" smooth={true} duration={500}>Home</Link></li>
        <li><Link to="information-section" smooth={true} duration={500}>Information</Link></li> {}
        <li><Link to="/visualize" smooth={true} duration={500}>Visualize</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
