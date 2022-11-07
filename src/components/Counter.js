import React from "react";
import { useState } from "react";
import "./styles/counter.css";

const Counter = () => {
  const [tally, setTally] = useState(0);
  const [activeLed, setActiveLed] = useState(false);


  const countIncrement = (e) => {
    e.preventDefault();
    setTally((prev) => prev + 1);
  };
  const countDecrement = (e) => {
    e.preventDefault();
    if (tally > 0) {
      setTally((prev) => prev - 1);
    } else {
      setTally(0);
    }
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
          <div className={`${activeLed ? "led" : "display"}`}>
            <p>{tally}</p>
          </div>
          <div className="reset-n-led">
            {activeLed ? (
              <div>
                <button
                  onClick={() => setActiveLed(false)}
                  className="led-btn"
                ></button>
                <small className="small">LED</small>
              </div>
            ) : (
              <div>
                <button
                  onClick={() => setActiveLed(true)}
                  className="circle"
                ></button>
                <small className="small">LED</small>
              </div>
            )}

            <div>
              <button onClick={popUp} className="circle"></button>
              <small className="small">reset</small>
            </div>
          </div>
          <div className="grid">
            <div>
              <button onClick={countIncrement} className="count">
                +
              </button>
            </div>
            <div>
              <button onClick={countDecrement} className="count">
                -
              </button>
            </div>

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
