import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <div className="container-fluid bg-light footer mt-5 py-5">
        <div className="container py-5">
          <div className="row g-5">
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
              <h4 className="text-success mb-4">Our Office</h4>
              <div className="d-flex mb-2">
                <i className="fa fa-map-marker-alt text-success me-3 mt-2"></i>
                <p className="text-black">
                  Block No - 201, 3rd floor, Silver Palace, Opposite Yashwant
                  Stadium, Dhantoli, Nagpur, Maharashtra 440012
                </p>
              </div>
              <div className="d-flex mb-2">
                <i className="fa fa-phone-alt text-success me-3 mt-2"></i>

                <a
                  href="tel:+918208922329"
                  className="text-black text-decoration-none mobile-number"
                >
                  +91 8208922329
                </a>
              </div>

              <div className="d-flex mb-2">
                <i className="fa fa-envelope text-success me-3 mt-2"></i>

                <a
                  href="mailto:+9022755384"
                  className="text-black text-decoration-none mobile-number"
                >
                  info@greengoldprime.com
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <h4 className="text-success mb-4 ">Google Map</h4>
              <Card
                className="relative"
                style={{
                  height: "80%",
                  width: "100%",
                  position: "relative",
                }}
              >
                <iframe
                  src={
                    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.3576004459837!2d79.07640487752263!3d21.138162533855983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c15227d4a987%3A0x9bab39962551c484!2sGreen%20Gold%20Prime%20by%20Maitreya%20Group!5e0!3m2!1sen!2sin!4v1729858104220!5m2!1sen!2sin"
                  } // Pass the iframe source URL as a prop
                  title="Embedded Content"
                  loading="lazy"
                  className="rounded-md"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{
                    height: "100%",
                    width: "100%",
                    border: "none",
                    borderRadius: "0.375rem", // Bootstrap's rounded-md equivalent
                    objectFit: "cover",
                  }}
                />
              </Card>
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
