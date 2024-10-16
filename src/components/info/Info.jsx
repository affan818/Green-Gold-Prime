import "./info.css";
import GreenGoldSunset from "../../../img/GreenGoldSunset.jpg";
import { Link } from "react-router-dom";

function Info() {
  return (
    <div className="container-fluid product py-5 my-5">
      <div className="container py-5">
        <div
          className="section-title text-center mx-auto"
          style={{ maxWidth: "500px" }}
        >
          <p className="fs-5 fw-medium fst-italic text-success">Green Gold</p>
          <h1 className="display-6">Lorem ipsum, dolor sit amet consectetur</h1>
        </div>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
            <p
              className="display-6"
              style={{ fontSize: "4rem", fontFamily: "poppins" }}
            >
              Lorem ipsum, dolor sit amet Lorem ipsum dolor sit amet.
            </p>
            <Link to={"about"}>
              <button className="mb-sm-5" style={{ fontFamily: "cursive" }}>
                Learn More
              </button>
            </Link>
          </div>
          <div className="col-12 col-md-6 text-center">
            <img
              style={{ borderRadius: "10px" }}
              className="w-100"
              src={GreenGoldSunset}
              alt="GreenGoldSunset"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
