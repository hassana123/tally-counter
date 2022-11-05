import React from "react";

const DetectError = ({ error }) => {
  return (
    <div className="error-detect">
      <p>{error.message}</p>
      <p>A jsx Error Occured Somewhere</p>
    </div>
  );
};

export default DetectError;
