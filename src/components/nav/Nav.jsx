import React from 'react'
import logo from "../../images/logo.webp"


const Nav = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-light nav-bg-color" data-aos="fade-down" data-aos-duration="1500">
  <div className="container">
    <a className="navbar-brand" href="#">
      <img src={logo} alt="Logo" width={160} />
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
      style={{ borderColor: 'white', color:"white", backgroundColor:"white"}} // Change the border color of the button to white
    >
      <span className="navbar-toggler-icon" style={{ color: 'white' }}></span> {/* Make the icon white */}
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex gap-4">
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="#">
            HOME
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#about">
            ABOUT
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#resume">
            RESUME
          </a>
        </li>
       
        <li className="nav-item">
          <a className="nav-link text-white" href="#skill">
            SKILLS
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#projects">
            PROJECTS
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    
    )
}

export default Nav;