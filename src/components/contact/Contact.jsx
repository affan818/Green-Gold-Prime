import { Link } from "react-router-dom";
import "./contact.css"; // Make sure to create this CSS file or add styles to your existing CSS

function Contact() {
  return (
    <>
      <div
        className="container-fluid page-header py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container text-center py-5">
          <h1 className="display-2 text-dark mb-4 animated slideInDown">
            Contact
          </h1>
        </div>
      </div>
      <div className="container-fluid product py-5 my-5">
        <div className="container py-5">
          <div
            className="section-title text-center mx-auto wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "500px" }}
          >
            <h1 className="display-6">Contact Us</h1>
          </div>
          <div className="row">
            <div className="col-sm-12 col-lg-6">
              <form className="contact-form p-4 rounded-lg">
                <h3
                  className="text-xl font-bold mb-4"
                  style={{ fontFamily: "poppins" }}
                >
                  REQUEST CONSULTATION
                </h3>
                <h3
                  className="text-xl text-yellow-400 font-bold mb-4"
                  style={{ fontFamily: "poppins" }}
                >
                  PLUS GET A SUPPORT
                </h3>
                <p className="pb-5" style={{ fontFamily: "poppins" }}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Provident, accusamus?
                </p>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Your name"
                    className="form-input"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Mobile or landline number"
                    className="form-input"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="form-input"
                  />
                </div>
                <Link to={"*"}>
                  <button className="submit-button">Learn More</button>
                </Link>
              </form>
            </div>
            <div className="col-sm-12 col-lg-6">
              <div className="contact-form p-4 rounded-lg">
                <img
                  style={{ height: "100%", width: "100%" }}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAniFMy8x1P3Izez_zVDC3POrDhNAyMGl5sg&s"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
