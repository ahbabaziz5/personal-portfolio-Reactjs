import React from 'react'

const About = () => {
  return (
    <div>
       <section className="about-me" id="about"> 
      <div className="profile-image">
        <img src="./Images/azeem.jfif" alt="Profile Picture" />
      </div>
      <div className="about-content">
        <h1>
          About <span className="txt-Me">Me</span>
        </h1>
        <h3>Frontend Developer!</h3>
        <br />
        <p>
          I am a passionate frontend developer in crafting engaging, user-friendly interfaces. My expertise includes HTML, CSS, JavaScript, React, and WordPress (Frontend) with a keen eye for detail in web design and UX principles.
          <br />
          <br />
          I love transforming ideas into seamless, interactive digital experiences. My goal is to bring a blend of creativity and technical skill to every project, ensuring visually appealing and highly responsive designs that captivate users. Whether it's a single-page app or a full-fledged website, I strive to build solutions that leave a lasting impression.
        </p>
        <a href="./Images/M__Azeem_CV..-.pdf" className="more-button" target="_blank" rel="noopener noreferrer">
          More About Me
        </a>
      </div>
    </section>
    </div>
  )
}

export default About
