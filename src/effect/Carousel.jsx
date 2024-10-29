// Carousel.jsx
import "./Carousel.css"; // Optional: for additional styling if needed
import video from "../assets/video.mp4";
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
              autoPlay
              loop
              muted
              playsInline
              style={{ height: "700px", objectFit: "cover" }}
            >
              <source src={video} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
