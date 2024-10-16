import { Link } from "react-router-dom";
import "./benifits.css";
import BenifitsCrad from "./BenifitsCrad";

function Benifits() {
  return (
    <div className="container-fluid product py-5 my-5">
      <div className="container py-5">
        <div
          className="section-title text-center mx-auto"
          style={{ maxWidth: "500px" }}
        >
          <p className="fs-5 fw-medium fst-italic text-success">Benefits</p>
          <h1 className="display-6">Benefits of Chandan</h1>
        </div>
        <div className="row">
          <BenifitsCrad />
          <BenifitsCrad />
          <BenifitsCrad />
          <BenifitsCrad />
        </div>
      </div>
    </div>
  );
}

export default Benifits;
