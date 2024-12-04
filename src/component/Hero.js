import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faGithub, faTiktok } from '@fortawesome/free-brands-svg-icons';


const Hero = () => {
  return (
    <div>
       

<section class="hero" id="Hero">
  <div class="hero-content">
      <h2>Hello, It's Me</h2>
      <h1>Muhammad Ahbab Khan</h1>
      <h3>And I'm a <span class="highlight">Frontend web Developer</span></h3>
      <p>I'm a Frontend Web Developer with expertise in website and UI design, creating engaging front-end experiences and many more...</p>
      <div class="social-icons">
      <a href="#" aria-label="Facebook">
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
      <a href="#" aria-label="Instagram">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href="#" aria-label="LinkedIn">
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
      <a href="#" aria-label="GitHub">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="#" aria-label="TikTok">
        <FontAwesomeIcon icon={faTiktok} />
      </a>
      </div>
      <a href="#about" class="btn">More About Me</a>
  </div>
  <div class="profile-picture">
      <img src="/port1.jpeg" alt=""/>
      {/* <img src="/portfolio.jpeg" alt=""/> */}
  </div>
</section>
    </div>
  )
}

export default Hero
