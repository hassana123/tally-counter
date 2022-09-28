import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong, faHome } from "@fortawesome/free-solid-svg-icons";
import "./styles/tally.css";
import Counter from "./Counter";
const TallyList = () => {
  const [tallyList, setTallyList] = useState([
    { id: 1, dua: "Alhamdulillah", target: 345 },
    { id: 2, dua: "SubhanAllah", target: 345 },
    { id: 3, dua: "La illaha illallah", target: 345 },
    { id: 4, dua: "Astagfiru llaha", target: 345 },
    { id: 5, dua: "Allahu Akbar", target: 345 },
  ]);
  const [home, setHome] = useState(true);
  //   const [dhikr, setDhikr] = useState();
  const [newTallyList, setNewTallyList] = useState("");

  const setDisplay = () => {
    setHome(false);
    document.getElementById("home").style.display = "none";
    document.getElementById("arrow").style.display = "block";
  };
  const undoDisplay = () => {
    setHome(true);
    document.getElementById("arrow").style.display = "none";
    document.getElementById("home").style.display = "block";
  };
  const addTally = () => {
    if (newTallyList) {
      let newId = tallyList.length + 1;
      let newEnteredTally = {
        id: newId,
        dua: newTallyList,
        target: 345,
      };
      setTallyList([...tallyList, newEnteredTally]);
      setNewTallyList("");
    } else {
      document.getElementById("error").style.display = "block";
    }
  };

  //   const deleteTally = (newId) => {
  //     let tallyLeft = tallyList.filter((tally) => tally.id !== newId);
  //     setTallyList(tallyLeft);
  //   };

  return (
    <div className="container">
      <header>
        <div className="name">
          <h1>MyDhikr</h1>
          <p>have you dhikr today?</p>
        </div>

        <div className="menu">
          <span id="home" onClick={setDisplay}>
            <FontAwesomeIcon icon={faHome} />
          </span>
          <span id="arrow" onClick={undoDisplay}>
            <FontAwesomeIcon icon={faArrowRightLong} />
          </span>
        </div>
      </header>
      {home ? (
        <section className="sect" id="tallyParent">
          <div className="form-control">
            <input
              value={newTallyList}
              onChange={(e) => setNewTallyList(e.target.value)}
              type="text"
              placeholder="You can add any Dhikr"
            />
            <button className="btn-add" onClick={addTally}>
              Add Dhikr
            </button>
            <small id="error">Dhikr cannot be empty.</small>
          </div>
          {tallyList.map((tally) => (
            <React.Fragment key={tally.id}>
              <div className="tally-wrapper">
                <div
                  onClick={(e) => {
                    setDisplay();
                  }}
                  className="tally-container"
                >
                  <h3>{tally.dua}</h3>
                  <small className="target">
                    {tally.target}
                    <small>X</small>
                  </small>
                </div>
              </div>

              {/* <div className="icon">
              <span className="trash" onClick={() => deleteTally(tally.id)}>
                <FontAwesomeIcon icon={faTrashCan} />
              </span>
            </div> */}
            </React.Fragment>
          ))}
        </section>
      ) : (
        <Counter />
      )}
    </div>
  );
};

export default TallyList;
