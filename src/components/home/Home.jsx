import Carousel from "../../effect/Carousel";
import Product from "../product/Product";
import Counter from "../../effect/Counter";
import Info from "../info/Info";
import LearnMore from "../learnMore/LearnMore";
import Benifits from "../benifits/Benifits";

function Home() {
  return (
    <div>
      <Carousel />
      <Product />
      <Info />
      <Benifits />
      <LearnMore />
      <div className="container-fluid product py-5 my-5">
        <div className="container py-5">
          <div
            className="section-title text-center mx-auto wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "500px" }}
          >
            <p className="fs-5 fw-medium fst-italic text-success">
              Our Clients
            </p>
            <h1 className="display-6">
              Chandan has a complex positive effect on our world
            </h1>
          </div>

          <div className="row g-4">
            <div className="col-6 col-sm-6 col-md-3">
              <Counter start="0" end="680" />
              <h4>Clients</h4>
            </div>
            <div className="col-6 col-sm-6 col-md-3">
              <Counter start="0" end="500" />
              <h4>Products</h4>
            </div>
            <div className="col-6 col-sm-6 col-md-3">
              <Counter start="0" end="500" />
              <h4>Happy Family</h4>
            </div>
            <div className="col-6 col-sm-6 col-md-3">
              <Counter start="30000" end="50000" />
              <h4>Trees</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
