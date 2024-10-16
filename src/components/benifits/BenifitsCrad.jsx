import "./benifits.css";
import GreenGoldSunset from "../../../img/GreenGoldSunset.jpg";
import { Link } from "react-router-dom";

function BenifitsCrad() {
  return (
    <>
      <div
        className="row d-flex align-items-center mycard"
        style={{
          backgroundColor: "rgba(211, 227, 191)",
          minHeight: "100px",
          width: "100%",
          padding: "1rem",
          marginBottom: "20px",
        }}
      >
        <div className="col-sm-12 col-lg-4 text-center text-lg-left">
          <img
            style={{
              maxHeight: "50%",
              maxWidth: "80%",
              minHeight: "50%",
              minWidth: "100%",
              margin: "0 auto",
              marginRight: "100%",
              borderRadius: "10px",
            }}
            src={GreenGoldSunset}
            alt="GreenGoldSunset"
          />
        </div>
        <div className="col-sm-12 col-lg-8 text-lg-left">
          <p
            className="display-6"
            style={{
              fontSize: "1.5rem",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            nostrum unde quidem assumenda maiores iusto adipisci nobis, soluta
            culpa temporibus libero ea consequuntur totam quos officiis odio
            dolor beatae debitis aliquid incidunt! Obcaecati assumenda itaque
            ipsum, ratione reprehenderit, deleniti aliquam nam quasi deserunt
            labore consequatur at molestiae. Facere, maxime nobis!
          </p>
          <Link to={"about"}>
            <button className="mb-sm-5" style={{ fontFamily: "cursive" }}>
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default BenifitsCrad;
