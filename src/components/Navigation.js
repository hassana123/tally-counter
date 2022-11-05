import React from "react";
import "./styles/nav.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navigation = () => {
  const [navBurger, setNavBurger] = useState(false);
  return (
    <>
      <div className="logo">
        <h1>Tally </h1>
      </div>
      <div className="hamburgerMenu">
        <button onClick={() => setNavBurger(!navBurger)} className="hamburger">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
      <nav className={navBurger ? "menuNav" : "hideNav"}>
        <div className="middle">
          <ul>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "activate" : "")}
                to="/"
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={(e) =>
                  e.target.addEventListener("click") ? !navBurger : navBurger
                }
                className={({ isActive }) => (isActive ? "activate" : "")}
                to="/tally"
              >
                TallyCounter
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={(e) =>
                  e.target.addEventListener("click") ? !navBurger : navBurger
                }
                className={({ isActive }) => (isActive ? "activate" : "")}
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={(e) =>
                  e.target.addEventListener("click") ? !navBurger : navBurger
                }
                className={({ isActive }) => (isActive ? "activate" : "")}
                to="/testError"
              >
                TestErrorBoudary
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
