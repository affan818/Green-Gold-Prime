import React from "react";
import "./NotFound.css"; // Create this CSS file for styles if needed

function NotFound() {
  return (
    <div className="not-found-container">
      <img
        src="https://themeselection-cdn.b-cdn.net/wp-content/uploads/2024/08/02-Materio-React-Tailwind-Error-page.png"
        alt="Page Not Found"
        className="not-found-image"
      />
      <h1 className="not-found-message">404 - Page Not Found</h1>
      <p className="not-found-description">
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  );
}

export default NotFound;
