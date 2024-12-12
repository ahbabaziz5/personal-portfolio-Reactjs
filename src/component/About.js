import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation in ms
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div>
      <section className="about-me" id="about">
        <div className="profile-image" data-aos="fade-up">
          <img src="/port1.jpeg" alt="Profile Picture" />
        </div>
        <div className="about-content" data-aos="fade-up">
          <h1 data-aos="fade-up">
            About <span className="txt-Me">Me</span>
          </h1>
          <h3 data-aos="fade-up">Frontend Developer!</h3>
          <br />
          <p data-aos="fade-up">
            I am a passionate frontend developer in crafting engaging, user-friendly interfaces. My expertise includes HTML, CSS, JavaScript, React, and WordPress (Frontend) with a keen eye for detail in web design and UX principles.
            <br />
            <br />
            I love transforming ideas into seamless, interactive digital experiences. My goal is to bring a blend of creativity and technical skill to every project, ensuring visually appealing and highly responsive designs that captivate users. Whether it's a single-page app or a full-fledged website, I strive to build solutions that leave a lasting impression.
          </p>
          <a 
            href="/Muhammad Ahbab Khan.pdf" 
            className="more-button" 
            target="_blank" 
            rel="noopener noreferrer" 
            data-aos="zoom-in"
          >
            More About Me
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
