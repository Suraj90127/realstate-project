import "./component.css";
import { Link } from "react-router-dom";
import "../App.css";
import logo from "../Assets/logo.png";
import { MdCall } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { IoReorderThreeSharp } from "react-icons/io5";
import React, { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const navLinksRef = useRef(null);
  const menuIconRef = useRef(null);

  const handleMenuClick = () => {
    setNavOpen(true);
  };

  const handleCloseClick = () => {
    setNavOpen(false);
  };

  const handleClickOutside = (event) => {
    if (
      navLinksRef.current &&
      !navLinksRef.current.contains(event.target) &&
      !menuIconRef.current.contains(event.target)
    ) {
      setNavOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <div>
      <nav>
        <div className="navbar">
          <i ref={menuIconRef} className="bx bx-menu" onClick={handleMenuClick}>
            <IoReorderThreeSharp />
          </i>
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <div
            ref={navLinksRef}
            className="nav-links"
            style={{ left: navOpen ? "0" : "-100%" }}
          >
            <div className="sidebar-logo">
              <span className="logo-name">
                <img
                  style={{ width: "150px" }}
                  src="/src/Assets/logo.webp"
                  alt="Logo"
                />
              </span>
              <i className="bx bx-x" onClick={handleCloseClick}>
                <IoMdClose />
              </i>
            </div>
            <ul className="links">
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/about-us">ABOUT US</Link>
              </li>
              <li>
                <Link to="/project">PROJECTS</Link>
              </li>
              <li>
                <Link to="/developer">DEVELOPERS</Link>
              </li>
              <li>
                <Link to="/blog&news">BLOGS</Link>
              </li>
              <li>
                <Link to="/contact">CONTACT</Link>
              </li>
              <li>
                <Link to="/contact" className="search-box flex">
                  <MdCall className="mt-3 call text-[25px]" />
                  <button>8010 500 900</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
