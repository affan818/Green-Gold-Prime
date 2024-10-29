import Product from "../product/Product";

function ProductPage() {
  return (
    <>
      <div
        className="container-fluid page-header py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container text-center py-5">
          <h1 className="display-2 text-dark mb-4 animated slideInDown">
            Products
          </h1>
          <p className="lead text-muted">
            Explore our range of premium products designed to enhance your
            experience.
          </p>
        </div>
      </div>
      <Product />
    </>
  );
}

export default ProductPage;
