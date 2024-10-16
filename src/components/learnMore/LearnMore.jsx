import GreenGoldSunset from "../../../img/GreenGoldSunset.jpg";
import "./learnMore.css";
import { Link } from "react-router-dom";

function LearnMore() {
  return (
    <div>
      <div className="container-fluid product py-5 my-5">
        <div className="container py-5">
          <div
            className="section-title text-center mx-auto"
            style={{ maxWidth: "500px" }}
          >
            <p className="fs-5 fw-medium fst-italic text-success">Green Gold</p>
            <h1 className="display-6">
              Lorem ipsum, dolor sit amet consectetur
            </h1>
          </div>
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-12 col-md-6 mb-4 text-center">
              <div className="image-container">
                <Link to={"product"} className="link-button">
                  <img
                    className="hover-image"
                    src={GreenGoldSunset}
                    alt="GreenGoldSunset"
                  />
                  <div className="overlay">
                    <p className="overlay-text">Explore Our Product</p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-12 col-md-6 mb-4 text-center">
              <div className="image-container">
                <Link to={"about"} className="link-button">
                  <img
                    className="hover-image"
                    src={GreenGoldSunset}
                    alt="GreenGoldSunset"
                  />
                  <div className="overlay">
                    <p className="overlay-text">About Us</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LearnMore;
