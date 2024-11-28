import React from 'react'

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
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Stay Connected</h3>
          <p>Follow me on social platforms:</p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-github"></i></a>
            {/* <a href="#"><i className="fab fa-tiktok"></i></a> */}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Your Name. All Rights Reserved.</p>
      </div>
    </footer>
    </div>
  )
}

export default Footer
