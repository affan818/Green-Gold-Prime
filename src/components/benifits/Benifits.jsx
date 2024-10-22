import "./benifits.css";
import BenifitsCrad from "./BenifitsCrad";

function Benifits() {
  return (
    <section
      className="container-fluid product py-5 my-5"
      aria-labelledby="benefits-title"
    >
      <div className="container py-5">
        <header
          className="section-title text-center mx-auto"
          style={{ maxWidth: "500px" }}
        >
          <p className="fs-5 fw-medium fst-italic text-success">Benefits</p>
          <h1 id="benefits-title" className="display-6">
            Benefits of Chandan
          </h1>
        </header>
        <div className="row">
          {/* Consider passing an array of benefits to BenifitsCrad for dynamic rendering */}
          {Array.from({ length: 4 }).map((_, index) => (
            <BenifitsCrad key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benifits;
