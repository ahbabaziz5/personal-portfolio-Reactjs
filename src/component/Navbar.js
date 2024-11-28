import React from 'react'

const Navbar = () => {
  return (
    <div>
    <nav>
      <div className="menu">
        {/* <input
          type="checkbox"
          id="check"
          checked={checked}
          onChange={handleCheck}
        /> */}
        <div className="logo">
          <a href="#">Portfolio</a>
        </div>
        <ul>
          <label className="btn cancel" htmlFor="check">
            <i className="fas fa-times"></i>
          </label>
          <li><a href="#Hero">Home</a></li>
          <li><a href="#about">About</a></li>
          {/* <li><a href="#services">Services</a></li> */}
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#footer">Contact</a></li>
        </ul>
        <label htmlFor="check" className="btn bars">
          <i className="fas fa-bars"></i>
        </label>
      </div>
    </nav>
  </div>
  )
}

export default Navbar
