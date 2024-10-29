import React from "react";
import "./career.css"; // Import your custom CSS file for the career section

const jobListings = [
  {
    id: 1,
    title: "Chandan Specialist",
    location: "Remote",
    description:
      "We are looking for a Chandan specialist with experience in ...",
  },
  {
    id: 2,
    title: "Marketing Manager",
    location: "On-site",
    description: "Seeking a Marketing Manager to lead our team in ...",
  },
  // Add more job listings as needed
];

function Career() {
  return (
    <>
      <div
        className="container-fluid page-header py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container text-center py-5">
          <h1 className="display-2 text-dark mb-4 animated slideInDown">
            Career
          </h1>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="text-center mb-4">Current Openings</h2>
        <div className="row">
          {jobListings.map((job) => (
            <div key={job.id} className="col-md-6 mb-4">
              <div className="card mycard">
                <div className="card-body">
                  <h5 className="card-title">{job.title}</h5>
                  <p className="card-text">{job.description}</p>
                  <p className="text-muted">Location: {job.location}</p>
                  <a href="#" className="btn btn-success">
                    Apply Now
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

export default Career;
