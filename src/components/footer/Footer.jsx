import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="container-fluid bg-light footer mt-5 py-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <h4 className="text-success mb-4">Our Office</h4>
              <p className="mb-2 text-black">
                <i className="fa fa-map-marker-alt text-success me-3"></i>
                1235 Street Nagpur
              </p>
              <p className="mb-2 text-black">
                <i className="fa fa-phone-alt text-success me-3"></i>
                +91 2054687985
              </p>
              <p className="mb-2 text-black">
                <i className="fa fa-envelope text-success me-3"></i>
                info@greengoldprime.com
              </p>
              <div className="d-flex pt-3">
                <a
                  className="btn btn-square btn-success rounded-circle me-2"
                  href="https://www.instagram.com/greengoldprimengp/?hl=en"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  className="btn btn-square btn-success rounded-circle me-2"
                  href="https://www.facebook.com/p/GREEN-GOLD-Prime-Club-House-100064238313025/"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  className="btn btn-square btn-success rounded-circle me-2"
                  href="https://www.youtube.com/@greengoldbymaitreyafarms5635"
                >
                  <i className="fab fa-youtube"></i>
                </a>
                <a
                  className="btn btn-square btn-success rounded-circle me-2"
                  href="https://www.linkedin.com/in/bipasha-patil-2a765a23b/?originalSubdomain=in"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <h4 className="text-success mb-4">Quick Links</h4>
              <a
                className="btn btn-link text-black"
                href="about"
                style={{ textDecoration: "none" }}
              >
                About Us
              </a>
              <a
                className="btn btn-link text-black"
                href="contact"
                style={{ textDecoration: "none" }}
              >
                Contact Us
              </a>
              <a
                className="btn btn-link text-black"
                href="*"
                style={{ textDecoration: "none" }}
              >
                Our Services
              </a>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <h4 className="text-success mb-4 ">Newsletter</h4>
              <p className="text-black">
                Dolor amet sit justo amet elitr clita ipsum elitr est.
              </p>
              <form>
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control border-0"
                    placeholder="Your Email"
                  />
                  <button className="btn btn-success" type="submit">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <h6
          className="text-center p-2 mt-3"
          style={{ backgroundColor: "transparent" }}
        >
          Designed by{" "}
          <Link
            className="text-success"
            to={"https://mediaforumdigital.com/"}
            style={{ textDecoration: "none" }}
          >
            MediaForum
          </Link>{" "}
          Pvt Ltd @ 2024
        </h6>
      </div>
    </>
  );
};

export default Footer;
