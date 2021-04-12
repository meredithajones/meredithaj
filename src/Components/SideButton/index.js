import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import './SideButton.css';

const SideButton = () => {
  return (
    <nav className="SideNav">
      <a
        href="https://www.linkedin.com/in/meredithjones4747/"
        target="_blank"
        rel="noreferrer"
      >
        <i className="socialLink">
          <FaLinkedin />
        </i>
      </a>
      <a
        href="https://github.com/meredithajones"
        target="_blank"
        rel="noreferrer"
      >
        <i className="socialLink">
          <FaGithub />
        </i>
      </a>
      <Link to="">
        <i className=""></i>
      </Link>
    </nav>
  );
};

export default SideButton;
