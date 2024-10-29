import React from "react";
import "./blog.css"; // Import your custom CSS file for the blog

const blogPosts = [
  {
    id: 1,
    title: "Understanding Chandan",
    excerpt: "Chandan has been a part of our culture for centuries...",
    date: "October 28, 2024",
    image: "img/blog-1.jpg", // Replace with your image path
  },
  {
    id: 2,
    title: "Health Benefits of Chandan",
    excerpt: "Daily use of Chandan can improve your health in many ways...",
    date: "October 27, 2024",
    image: "img/blog-2.jpg", // Replace with your image path
  },
  // Add more blog posts as needed
];

function Blog() {
  return (
    <>
      <div
        className="container-fluid page-header py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container text-center py-5">
          <h1 className="display-2 text-dark mb-4 animated slideInDown">
            Blogs
          </h1>
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          {blogPosts.map((post) => (
            <div key={post.id} className="col-md-6 mb-4">
              <div className="card mycard">
                <img
                  src={post.image}
                  className="card-img-top"
                  alt={post.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text">{post.excerpt}</p>
                  <p className="text-muted">{post.date}</p>
                  <a href="#" className="btn btn-success">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Blog;
