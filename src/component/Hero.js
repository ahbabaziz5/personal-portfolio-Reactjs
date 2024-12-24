import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faGithub, faTiktok } from '@fortawesome/free-brands-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation in ms
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div>
      <section className="hero" id="Hero">
        <div className="hero-content" data-aos="fade-up">
          <h2 data-aos="fade-up">Hello, It's Me</h2>
          <h1 data-aos="fade-up">Muhammad Ahbab Khan</h1>
          {/* <h3 data-aos="fade-up">And I'm a <span className="highlight">Frontend web Developer</span></h3> */}
          <h3 data-aos="fade-up">And I'm a <span class="highlight typing">Frontend Web Developer</span></h3>

          <p data-aos="fade-up">I'm a Frontend Web Developer with expertise in website and UI design, creating engaging front-end experiences, and much more...</p>
          
          <div className="social-icons extrasss" data-aos="fade-up">
            <a href="https://www.facebook.com/ahbab.khan/" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://www.instagram.com/muhammadahbabkhan/" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a  href="https://www.linkedin.com/in/muhammad-ahbab-khan-669791278/" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="https://github.com/ahbabaziz5" aria-label="GitHub">
              <FontAwesomeIcon icon={faGithub} />
            </a>
           
          </div>
          
          {/* <a href="#about" className="btn" data-aos="fade-up">More About Me</a> */}
        </div>
        
        <div className="profile-picture" data-aos="zoom-in">
          <img src="/port1.jpeg" alt=""/>
        </div>
      </section>
    </div>
  );
};

export default Hero;


