import React from 'react'

const Skills = () => {
  return (
    <div>
      <section id="skills" className="skills-section">
      <h2 className="section-title">
        My <span className="highlight">Skills</span>
      </h2>
      <div className="skills-container">
        <div className="skill">
          <i className="fab fa-html5 skill-icon"></i>
          <h3>HTML</h3>
          <div className="progress-bar">
            <div className="progress" style={{ width: '90%' }}></div>
          </div>
          <span className="skill-percent">90%</span>
        </div>
        <div className="skill">
          <i className="fab fa-css3-alt skill-icon"></i>
          <h3>CSS</h3>
          <div className="progress-bar">
            <div className="progress" style={{ width: '85%' }}></div>
          </div>
          <span className="skill-percent">85%</span>
        </div>
        <div className="skill">
          <i className="fab fa-js skill-icon"></i>
          <h3>JavaScript</h3>
          <div className="progress-bar">
            <div className="progress" style={{ width: '80%' }}></div>
          </div>
          <span className="skill-percent">80%</span>
        </div>
        <div className="skill">
          <i className="fab fa-react skill-icon"></i>
          <h3>React</h3>
          <div className="progress-bar">
            <div className="progress" style={{ width: '70%' }}></div>
          </div>
          <span className="skill-percent">70%</span>
        </div>
        <div className="skill">
          <i className="fab fa-wordpress skill-icon"></i>
          <h3>WordPress (Frontend)</h3>
          <div className="progress-bar">
            <div className="progress" style={{ width: '40%' }}></div>
          </div>
          <span className="skill-percent">40%</span>
        </div>
        <div className="skill">
          <i className="fab fa-microsoft skill-icon"></i>
          <h3>C# (Windows Form)</h3>
          <div className="progress-bar">
            <div className="progress" style={{ width: '40%' }}></div>
          </div>
          <span className="skill-percent">40%</span>
        </div>
        <div className="skill">
          <i className="fas fa-database skill-icon"></i>
          <h3>SQL <br />Server</h3>
          <div className="progress-bar">
            <div className="progress" style={{ width: '30%' }}></div>
          </div>
          <span className="skill-percent">30%</span>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Skills
