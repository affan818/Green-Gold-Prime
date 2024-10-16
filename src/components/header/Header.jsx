import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../../../img/logo.png";
import { CgMenuGridO } from "react-icons/cg";

function Header() {
  // State to track whether the menu is open or not
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  // Toggle the navbar state
  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  // Close the navbar when a link is clicked
  const handleNavLinkClick = () => {
    setIsNavbarOpen(false);
  };

  return (
    <div
      className="container-fluid sticky-top"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.7)", // Light transparent background
        backdropFilter: "blur(10px)", // Blur effect
      }}
    >
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light py-2 py-lg-0">
          <NavLink to="/" className="navbar-brand">
            <img
              className="img-fluid"
              src={logo}
              alt="Logo"
              style={{ maxHeight: "100%" }}
            />
          </NavLink>
          <button
            type="button"
            className={`navbar-toggler ms-auto ${
              isNavbarOpen ? "" : "collapsed"
            }`}
            onClick={toggleNavbar}
          >
            {/* Conditionally render the hamburger or cross icon */}
            {isNavbarOpen ? <CgMenuGridO /> : <CgMenuGridO />}
          </button>
          <div
            className={`collapse navbar-collapse ${isNavbarOpen ? "show" : ""}`}
            id="navbarCollapse"
          >
            <div className="navbar-nav ms-auto text-center">
              <NavLink
                exact
                to="/"
                className="nav-item nav-link"
                activeClassName="active"
                onClick={handleNavLinkClick}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="nav-item nav-link"
                activeClassName="active"
                onClick={handleNavLinkClick}
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className="nav-item nav-link"
                activeClassName="active"
                onClick={handleNavLinkClick}
              >
                Contact
              </NavLink>
              <NavLink
                to="/product"
                className="nav-item nav-link"
                activeClassName="active"
                onClick={handleNavLinkClick}
              >
                Product
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
