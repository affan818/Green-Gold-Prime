import React from "react";
import "./gallery.css"; // Import your CSS file for styling

function Gallery() {
  const images = [
    // Add your image URLs here
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
  ];

  return (
    <>
      <div
        className="container-fluid page-header py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container text-center py-5">
          <h1 className="display-2 text-dark mb-4 animated slideInDown">
            Gallery
          </h1>
        </div>
      </div>
      <div className="container py-5">
        <div className="row">
          {images.map((src, index) => (
            <div className="col-sm-12 col-md-4 mb-4" key={index}>
              <img
                src={src}
                alt={`Gallery item ${index + 1}`}
                className="img-fluid rounded"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Gallery;
