import React from "react";
// import { useEffect } from "react";
import "./Collapse.css";
import arrowCollapse from "../../assets/arrowCollapse.svg";

function Collapse(props) {
  console.log("props :", props);

  return (
    <>
      {Object.keys(props).map((key) => (
        <div className="collapse" key={key}>
          <div className="collapse__title">
            <img src={arrowCollapse} alt="arrowCollapse" />
            <h2>{key}</h2>
          </div>
          {Array.isArray(props[key]) ? (
            <div className="collapse__content show">
              <ul>
                {props[key].map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div> 
          ) : (
            <div className="collapse__content show">
              <p>{props[key]}</p>
            </div>
          )}
        </div>
      ))}
    </>
  );
}
export default Collapse;
