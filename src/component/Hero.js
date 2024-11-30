import React from 'react'

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
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-linkedin-in"></i></a>
          <a href="#"><i class="fab fa-github"></i></a>
      <a href="#"><i class="fab fa-tiktok"></i></a> 
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
