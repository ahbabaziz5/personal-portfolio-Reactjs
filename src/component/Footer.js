import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <div>
      <footer className="footer-section" id="footer">
      <div className="footer-columns">
        <div className="footer-column">
          <h3>Contact Me</h3>
          <ul className="contact-list">
            <li>Email: <a href="mailto:yourname@example.com">ahbabaziz5@gmail.com.com</a></li>
            <li>Phone: <a href="tel:+1234567890">+923151024978</a></li>
            <li>Location: Karachi, Pakistan</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Explore</h3>
          <ul className="footer-links">
            <li><a href="#Hero">Home</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Stay Connected</h3>
          <p>Follow me on social platforms:</p>
          <div className="social-icons">
          <a href="https://facebook.com/ahbabkhan" target="_blank" >
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
      <a href="https://instagram.com/muhammadahbabkhan" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
     
      <a href="https://www.linkedin.com/in/muhammad-ahbab-khan-669791278/"  target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
      <a href="https://github.com/ahbabaziz5" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} />
      </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 <span>Muhammad Ahbab Khan.</span> All Rights Reserved.</p>
      </div>
    </footer>
    </div>
  )
}

export default Footer
