import React from "react";
import { useEffect } from "react";
import "./Collapse.css";
import arrowCollapse from "../../assets/arrowCollapse.svg";

function Collapse(props) {
  console.log("props :", props);

function handleCollapseClick(e) {
    const collapse = e.target.closest(".collapse").querySelector(".collapse__content");
    collapse.classList.toggle("show");
    e.target.querySelector("img").classList.toggle("rotate");
  }


  return (
    <>
      {Object.keys(props).map((key) => (
        <div className="collapse" key={key}>
          <div className="collapse__title" onClick={handleCollapseClick}>
            <img src={arrowCollapse} alt="arrowCollapse" />
            <h2>{key}</h2>
          </div>
          {Array.isArray(props[key]) ? (
            <div className="collapse__content">
              <ul>
                {props[key].map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div> 
          ) : (
            <div className="collapse__content">
              <p>{props[key]}</p>
            </div>
          )}
        </div>
      ))}
    </>
  );
}
export default Collapse;
