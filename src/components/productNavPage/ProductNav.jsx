import Product from "../product/Product";
function ProductNav() {
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
        </div>
      </div>
      <Product />
    </>
  );
}

export default ProductNav;
