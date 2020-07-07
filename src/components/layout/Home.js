import React from "react";
import SearchJobs from "../SearchJobs";
import { Link } from "react-router-dom";

const Home = ({ jobs, loading, search, searchJob, updateSearch }) => {
  if (loading) {
    return <h1>Please wait ....</h1>;
  }
  return (
    <>
      <SearchJobs
        search={search}
        searchJob={searchJob}
        updateSearch={updateSearch}
      />
      <ul className="list-group list-group-flush">
        {jobs.map((job) => (
          <li
            key={job.id}
            className="list-group-item list-group-item-action"
            style={{ cursor: "pointer" }}
          >
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={`/jobs/${job.id}`}
            >
              <h5 className="h5">{job.title}</h5>
              <div className="d-flex justify-content-between mt-3">
                <small className="form-text text-muted">{job.company}</small>
                <small className="form-text text-muted">{job.type}</small>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <Link to="/jobs">
        <button
          type="button"
          className="btn btn-primary btn-lg btn-block mb-5 mt-2"
        >
          Show more jobs
        </button>
      </Link>
    </>
  );
};

export default Home;
