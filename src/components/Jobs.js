import React from "react";
import { Link } from "react-router-dom";
import SearchJobs from "./SearchJobs";

function Jobs({
  jobs,
  loading,
  totalPosts,
  newPage,
  search,
  searchJob,
  updateSearch,
}) {
  const buttonVanished = {
    display: totalPosts < 50 ? "none" : "block",
  };

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
      <nav aria-label="Page navigation">
        <button
          onClick={newPage}
          type="button"
          style={buttonVanished}
          className="btn btn-primary btn-lg btn-block mb-5 mt-2"
        >
          Show more jobs
        </button>
      </nav>
    </>
  );
}

export default Jobs;
