import React from 'react'
import { Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  return (
    <div>
       <nav>
        <div className="navbar">
          <i className="bx bx-menu"></i>
          <div className="logo">
            <Link to="/">
              <img src="/src/Assets/logo.webp" alt="Logo" />
            </Link>
          </div>
          <div className="nav-links">
            <div className="sidebar-logo">
              <span className="logo-name">
                <img style={{ width: '150px' }} src="/src/Assets/logo.webp" alt="Logo" />
              </span>
              <i className="bx bx-x"></i>
            </div>
            <ul className="links">
              <li><Link to="/">HOME</Link></li>
              <li><Link to="/about">ABOUT US</Link></li>
              <li><Link to="/services">SERVICES</Link></li>
              <li><Link to="/projects">OUR PROJECTS</Link></li>
              <li><Link to="/contact">CONTACT</Link></li>
              <li>
                <Link to="/contact" className="search-box">
                  <button>Contact Us</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
// import React from 'react'

// const Navbar = () => {
//   return (
//     <div>
//       <p>Hii Navbar</p>
//     </div>
//   )
// }

// export default Navbar

