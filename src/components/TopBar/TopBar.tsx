import React from "react";
import { Link } from "react-scroll";
import "./TopBar.css";

const TopBar: React.FC = () => {
  return (
    <nav className="topbar">
      <ul>
        <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
        <li><Link to="about" smooth={true} duration={500}>About</Link></li>
        <li><Link to="education" smooth={true} duration={500}>Education</Link></li>
        <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
        <li><Link to="interests" smooth={true} duration={500}>Interests</Link></li>
        <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default TopBar;
