import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import productData from "../../../productDetails.json";
import ProductItems from "./ProductItems";
import "./product.css";
// import Slider from "react-slick";

const Product = () => {
  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000, // Slide every 2 seconds
  //   arrows: false, // Disable arrows
  //   swipe: true, // Enable swipe functionality
  //   touchMove: true, // Enable touch move (touch slide)
  //   draggable: true, // Allow dragging with mouse (pad or desktop)
  //   swipeToSlide: true, // Slide directly when swiping or dragging
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };

  return (
    <div className="container-fluid product py-5 my-5">
      <div className="container py-5">
        <div
          className="section-title text-center mx-auto"
          style={{ maxWidth: "500px" }}
        >
          <p className="fs-5 fw-medium fst-italic text-success">Our Products</p>
          <h1 className="display-6">
            Chandan has a complex positive effect on our world
          </h1>
        </div>

        {/* Slider for Products */}
        <div className="product-list">
          {productData.map((product) => (
            <div key={product.id}>
              <ProductItems
                img={product.img}
                name={product.title}
                title={product.description}
              />
            </div>
          ))}
        </div>
        {/* <Slider {...settings}>
        </Slider> */}
      </div>
    </div>
  );
};

export default Product;
