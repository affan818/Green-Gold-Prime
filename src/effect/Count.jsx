import Counter from "./Counter";

function Count() {
  return (
    <div className="container-fluid product py-5 my-5">
      <div className="container py-5">
        <div
          className="section-title text-center mx-auto wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "500px" }}
        >
          <p className="fs-5 fw-medium fst-italic text-success">Our Clients</p>
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
            <Counter start="100" end="1200" />
            <h4>Products</h4>
          </div>
          <div className="col-6 col-sm-6 col-md-3">
            <Counter start="500" end="1500" />
            <h4>Happy Family</h4>
          </div>
          <div className="col-6 col-sm-6 col-md-3">
            <Counter start="10000" end="29000" />
            <h4>Trees</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Count;
