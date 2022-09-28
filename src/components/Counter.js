import React from "react";
import { useState } from "react";
import "./styles/counter.css";

const Counter = () => {
  const [tally, setTally] = useState(0);

  const countIncrement = (e) => {
    e.preventDefault();
    setTally((prev) => prev + 1);
  };
  const resetCount = (e) => {
    e.preventDefault();
    setTally(0);
    document.getElementById("popUp").style.display = "none";
  };
  const popUp = (e) => {
    e.preventDefault();
    let warning = document.getElementById("popUp");
    warning.style.display = "block";
  };
  const undo = (e) => {
    e.preventDefault();
    let warning = document.getElementById("popUp");
    warning.style.display = "none";
  };

  return (
    <div className="counter-container">
      <section className="counter">
        <div className="counter-display">
          <div className="display">
            <p>{tally}</p>
          </div>
          <div className="reset-n-led">
            <div>
              <button className="led"></button>
            </div>
            <div>
              <button onClick={popUp} className="circle"></button>
            </div>
          </div>
          <div>
            <button onClick={countIncrement} className="count"></button>
          </div>
        </div>
      </section>
      <div id="popUp" className="warning-container">
        <section className="warning">
          <p>
            Are You Sure you want to reset?
            <br />
            Saved count will be lost
          </p>
          <button onClick={undo} className="cancel">
            cancel
          </button>
          <button onClick={resetCount} className="confirm-reset">
            Reset
          </button>
        </section>
      </div>
    </div>
  );
};

export default Counter;
