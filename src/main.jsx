import "./index.css";
import { StrictMode } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome for icons
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap JS for functionality
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";
import Home from "./components/home/Home.jsx";
import About from "./components/about/About.jsx";
import Contact from "./components/contact/Contact.jsx";
import Gallery from "./components/gallery/Gallery.jsx";
import Blog from "./components/blog/Blog.jsx";
import Career from "./components/career/Career.jsx";
import ProductPage from "./components/productPage/ProductPage.jsx";
import NotFound from "./components/notFound/NotFound.jsx";
import NaCommercial from "./components/services/NaCommercial.jsx";
import AshapeLuxuryVilla from "./components/services/AshapeLuxuryVilla.jsx";
import WoodFarmsClub from "./components/services/WoodFarmsClub.jsx";

// Create the router with the necessary routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="*" element={<NotFound />} />
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="product" element={<ProductPage />} />
      <Route path="sandalwood-farms&club-house" element={<WoodFarmsClub />} />
      <Route path="ashapevilla-luxuryvilla" element={<AshapeLuxuryVilla />} />
      <Route path="commercial-plots" element={<NaCommercial />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="blog" element={<Blog />} />
      <Route path="career" element={<Career />} />
    </Route>
  )
);

// Render the application
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
