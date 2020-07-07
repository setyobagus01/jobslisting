import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import Home from "./components/layout/Home";
import Jobs from "./components/Jobs";
import JobDescription from "./components/JobDescription";

import "./App.css";

function App() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      const res = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?page=${currentPage}&search=${query}`
      );
      setJobs(res.data);
      setLoading(false);
    };
    fetchJobs();
  }, [currentPage, query]);

  console.log(jobs);

  // Changing page
  const newPage = () => {
    let addPage = 0;
    if (jobs.length >= 50) {
      addPage = currentPage + 1;
      setCurrentPage(addPage);
    } else {
      setCurrentPage(currentPage);
    }
  };

  // Search something
  const updateSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  const searchJob = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    setQuery(search);
    console.log(query);
    setSearch("");
  };

  return (
    <Router>
      <div className="">
        <h1 className="text-primary">
          <Link to="/">Github Jobs</Link>
        </h1>

        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <Home
                loading={loading}
                jobs={jobs.slice(0, 10)}
                search={search}
                searchJob={searchJob}
                updateSearch={updateSearch}
              />
            )}
          />
          <Route
            path="/jobs"
            exact
            render={(props) => (
              <Jobs
                jobs={jobs}
                loading={loading}
                totalPosts={jobs.length}
                newPage={newPage}
                search={search}
                searchJob={searchJob}
                updateSearch={updateSearch}
              />
            )}
          />
          <Route path="/jobs/:id" component={JobDescription} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
