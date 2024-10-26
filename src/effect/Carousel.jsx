// Carousel.jsx
import { Link } from "react-router-dom";
import "./Carousel.css"; // Optional: for additional styling if needed

const Carousel = () => {
  return (
    <div className="container-fluid px-0 mb-5">
      <div
        id="header-carousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <video
              className="w-100 carousel-video"
              src="../../videos/forestvideo.mp4"
              autoPlay
              loop
              muted
              playsInline
              style={{ height: "700px", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
