import React, { useState, useEffect } from "react";

const TestErrorBoudary = () => {
  const [error, setError] = useState(false);
  const [femaleUsers, setFemaleUsers] = useState([]);

  useEffect(() => {
    const fetchFemaleRandomUser = async () => {
      const response = await fetch("https://randomuser.me/api/?results=50");
      const { results } = await response.json();
      setFemaleUsers(results);
    };
    fetchFemaleRandomUser();
  }, []);

  return (
    <div className="testError">
      <button
        onClick={() => {
          setError(!error);
        }}
      >
        TestErrorBoudary
      </button>
      {error ? <div>{femaleUsers}</div> : "hey"}
    </div>
  );
};

export default TestErrorBoudary;
