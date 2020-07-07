import React, { useState, useEffect } from "react";
import axios from "axios";

const JobDescription = ({ match }) => {
  const [descriptions, setDescriptions] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchDescription = async () => {
      setLoading(true);
      const desc = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions/${match.params.id}.json`
      );
      setDescriptions(desc.data);
      setLoading(false);
    };
    fetchDescription();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(descriptions);
  if (loading) {
    return <h3>Loading ....</h3>;
  }
  console.log(descriptions);
  return (
    <div className=".container-xl mt-5">
      <div className=""></div>
      <div className="job-description border rounded bg-gradient-primary pt-3 mb-2">
        <img
          className="shadow-sm p-3 mb-5 bg-white rounded img-logo"
          src={descriptions.company_logo}
          alt="logo"
        />
        <div class="description">
          <h4>{descriptions.title}</h4>
          <div
            dangerouslySetInnerHTML={{ __html: `${descriptions.description}` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default JobDescription;
