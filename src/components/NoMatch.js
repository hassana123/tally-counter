import React from "react";
import error from "./images/404.jpg"
const NoMatch = () => {
  return <div className="errorPage">
  <img src={error}  alt="404 Page"></img>
  </div>;
};

export default NoMatch;
