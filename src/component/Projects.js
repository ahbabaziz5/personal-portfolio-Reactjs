import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Duration of the animation in ms
      once: true,      // Animation should only happen once
    });
    AOS.refresh();    // Refresh AOS to update animations
  }, []);

  return (
    <div>
      <section id="projects" className="projects-section">
        <h2 className="section-title" data-aos="fade-up">
          My <span className="project">Projects</span>
        </h2>
        <div className="projects-container">

          {/* Project 1 */}
          <div className="project-card" data-aos="fade-up" data-aos-delay="100">
  <img src="/news.png" alt="Project 1" className="project-image" />
  <div className="project-info">
    <h3>News App Website</h3>
    <p>News app created with real-time news API on ReactJS.</p>
    <a href="https://react-news-app-jade.vercel.app/" className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
  </div>
</div>


          {/* Project 2 */}
          <div className="project-card" data-aos="fade-up" data-aos-delay="200">
  <img src="/movie.png" alt="Project 2" className="project-image" />
  <div className="project-info">
    <h3>Movie Web and App</h3>
    <p>Movie app created with Next.js, Tailwind CSS, and MongoDB.</p>
    <a href="https://movie-app-pied-zeta.vercel.app" className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
  </div>
</div>


          {/* Project 3 */}
          <div className="project-card" data-aos="fade-up" data-aos-delay="300">
  <img src="/blog.png" alt="Project 3" className="project-image" />
  <div className="project-info">
    <h3>Blog Application</h3>
    <p>Blog app created with HTML, CSS, JavaScript, and Firebase.</p>
    <a href="https://ahbabaziz5.github.io/hackathon/" className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
  </div>
</div>


          {/* Project 4 */}
          {/* <div className="project-card" data-aos="fade-up" data-aos-delay="400">
            <img src="./Images/Project.jfif" alt="Project 4" className="project-image" />
            <div className="project-info">
              <h3>Portfolio Website</h3>
              <p>A personal portfolio showcasing my skills and work.</p>
              <a href="#" className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          </div> */}

          {/* Project 5 */}
          {/* <div className="project-card" data-aos="fade-up" data-aos-delay="500">
            <img src="./Images/Project.jfif" alt="Project 5" className="project-image" />
            <div className="project-info">
              <h3>E-Commerce Website</h3>
              <p>Developed an online store with user-friendly features.</p>
              <a href="#" className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          </div> */}

          {/* Project 6 */}
          {/* <div className="project-card" data-aos="fade-up" data-aos-delay="600">
            <img src="./Images/Project.jfif" alt="Project 6" className="project-image" />
            <div className="project-info">
              <h3>Blog Application</h3>
              <p>A responsive blogging platform built with React and Node.js.</p>
              <a href="#" className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          </div> */}

        </div>
      </section>
    </div>
  );
};

export default Projects;
