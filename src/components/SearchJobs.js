import React from "react";

const SearchJobs = ({ search, searchJob, updateSearch }) => {
  return (
    <form onSubmit={searchJob} className="mb-5 mt-5">
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="jobDescription">Job Description</label>
          <input
            value={search}
            onChange={updateSearch}
            type="text"
            className="form-control"
          />
          <small className="form-text text-muted">
            Ex: title, benefits, companies, expertise.
          </small>
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Search
      </button>
    </form>
  );
};

export default SearchJobs;
