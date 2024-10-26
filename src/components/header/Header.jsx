import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../../../img/logo.png";
// import { CgMenuGridO } from "react-icons/cg";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { Dropdown } from "react-bootstrap";

function Header() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const handleNavLinkClick = () => {
    setIsNavbarOpen(false);
  };

  return (
    <div
      className="container-fluid sticky-top"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        backdropFilter: "blur(10px)",
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
            {isNavbarOpen ? (
              <IoIosArrowDropleftCircle />
            ) : (
              <IoIosArrowDroprightCircle />
            )}
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

              {/* Dropdown with custom Bootstrap styling */}
              <Dropdown className="nav-item">
                <Dropdown.Toggle
                  as="a"
                  className="nav-link dropdown-toggle" // Use nav-link dropdown-toggle styling
                  href="#"
                  id="dropdownPages"
                >
                  Services
                </Dropdown.Toggle>

                <Dropdown.Menu className="dropdown-menu bg-light rounded-0 m-0">
                  <Dropdown.Item
                    as={NavLink}
                    to="/sandalwood"
                    className="dropdown-item"
                  >
                    Sandalwood Farms & Club House
                  </Dropdown.Item>
                  <Dropdown.Item
                    as={NavLink}
                    to="/luxury"
                    className="dropdown-item"
                  >
                    Luxury 3bhk Villa
                  </Dropdown.Item>
                  <Dropdown.Item
                    as={NavLink}
                    to="/commercial"
                    className="dropdown-item"
                  >
                    Any Commercial Plots
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <NavLink
                to="/gallery"
                className="nav-item nav-link"
                activeClassName="active"
                onClick={handleNavLinkClick}
              >
                Gallery
              </NavLink>

              <NavLink
                to="/blog"
                className="nav-item nav-link"
                activeClassName="active"
                onClick={handleNavLinkClick}
              >
                Blog
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
                to="/carrier"
                className="nav-item nav-link"
                activeClassName="active"
                onClick={handleNavLinkClick}
              >
                Carrier
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
