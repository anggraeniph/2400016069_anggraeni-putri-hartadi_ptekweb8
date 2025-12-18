import { NavLink } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <h2 className="logo">PORTOFOLIO</h2>

          {/* DESKTOP */}
          <ul className="nav-menu desktop">
            <li>
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" className="nav-link">
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="btn-outline">
                Let’s Contact
              </NavLink>
            </li>
          </ul>

          <div className="social-icons desktop">
            <a href="https://github.com/anggraeniph" target="_blank">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/anggraeni-putri-hartadi-4657a5389/" target="_blank">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/anggraenip.h?igsh=MWtlaW41ZXdscXJ5dA==" target="_blank">
              <FaInstagram />
            </a>
          </div>

          {/* HAMBURGER */}
          <div className="hamburger" onClick={() => setOpen(true)}>
            <FaBars />
          </div>
        </div>
      </nav>

      {/* BACKDROP */}
      {open && <div className="backdrop" onClick={() => setOpen(false)} />}

      {/* SLIDE MENU */}
      <div className={`side-menu ${open ? "active" : ""}`}>
        <div className="side-header">
          <h3>Menu</h3>
          <FaTimes onClick={() => setOpen(false)} />
        </div>

        <NavLink onClick={() => setOpen(false)} to="/">
          Home
        </NavLink>
        <NavLink onClick={() => setOpen(false)} to="/projects">
          Projects
        </NavLink>
        <NavLink onClick={() => setOpen(false)} to="/contact">
          Contact
        </NavLink>

        <div className="side-social">
          <a href="https://github.com/USERNAME" target="_blank">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/USERNAME" target="_blank">
            <FaLinkedin />
          </a>
          <a href="https://instagram.com/USERNAME" target="_blank">
            <FaInstagram />
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
