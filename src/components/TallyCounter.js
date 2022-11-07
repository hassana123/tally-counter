import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong, faHome } from "@fortawesome/free-solid-svg-icons";
import "./styles/tally.css";
import useCustomHook from "./useCustomHook";
import Counter from "./Counter";
function Tally({
  tally,
  newTallyList,
  tallyList,
  setDhikr,
  setHome,
  setNewTallyList,
  setTallyList,
}) {
  const setDisplay = () => {
    setDhikr(tally.dua);
    setHome(false);
  };

  //   const deleteTally = (newId) => {
  //     let tallyLeft = tallyList.filter((tally) => tally.id !== newId);
  //     setTallyList(tallyLeft);
  //   };

  return (
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
  );
}

const TallyCounter = ({ tally, setDisplay }) => {
  const [tallyList, setTallyList] = useState([
    { id: 1, dua: "Alhamdulillah", target: 345 },
    { id: 2, dua: "SubhanAllah", target: 345 },
    { id: 3, dua: "La illaha illallah", target: 345 },
    { id: 4, dua: "Astagfiru llaha", target: 345 },
    { id: 5, dua: "Allahu Akbar", target: 345 },
  ]);

  
  const [home, setHome] = useCustomHook(true);
  const [dhikr, setDhikr] = useCustomHook();
  const [newTallyList, setNewTallyList] = useCustomHook();
  const [target, setTarget]=useCustomHook();
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
      dissappear();
    }
  };
  const dissappear = () => {
    setTimeout(
      () => (document.getElementById("error").style.display = "none"),
      2000
    );
  };
  return (
    <div className="container">
      {home ? (
        <div className="header">
          <header>
            <div className="name">
            <div>
            <h1>MyDhikr</h1>
            <p>Have you Dhikr Today?</p>
            </div>
              <div  className="set-count">
              <label>Set Target </label>
              <input
                value={target}
                onChange={(e) => setTarget(e.target.value)}
                type="text"
                placeholder="365"
              />
              </div>
            </div>
            <div className="menu">
              <span id="home" onClick={() => setHome(false)}>
                <FontAwesomeIcon icon={faHome} />
              </span>
            </div>
          </header>
        </div>
      ) : (
        <div className="header">
          <header>
            <div className="name">
              <h1>MyDhikr</h1>
              <p>{target}</p>
            </div>
            <div className="menu">
              <span id="arrow" onClick={() => setHome(true)}>
                <FontAwesomeIcon icon={faArrowRightLong} />
              </span>
            </div>
          </header>
          <h2>{dhikr}</h2>
        </div>
      )}

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
            <Tally
              setHome={setHome}
              key={tally.id}
              setTallyList={setNewTallyList}
              newTallyList={newTallyList}
              setNewTallyList={setNewTallyList}
              tallyCounter={TallyCounter}
              setDhikr={setDhikr}
              setDisplay={setDisplay}
              tally={tally}
            >
              {/* <div className="icon">
              <span className="trash" onClick={() => deleteTally(tally.id)}>
                <FontAwesomeIcon icon={faTrashCan} />
              </span>
            </div> */}
            </Tally>
          ))}
        </section>
      ) : (
        <Counter />
      )}
    </div>
  );
};
export default TallyCounter;
