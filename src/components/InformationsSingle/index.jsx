import React from "react";
import Stars from "../Stars";
import "./InformationsSingle.css";

function InformationsSingle({ logement }) {
  return (
    <div className="singleInfoContainer">
      <div className="singleInfoContainer__left">
        <h1>{logement.title}</h1>
        <p>{logement.location}</p>
        <div className="tags">
          {logement.tags.map((tag, index) => (
            <div key={index} className="tags__tag">
              {tag}
            </div>
          ))}
        </div>
      </div>
      <div className="singleInfoContainer__right">
        <div className="singleInfoContainer__right__wrap">
          <div className="singleInfoContainer__right__host">
            <p>
              {logement.host.name.split(" ")[0]}
              <br />
              {logement.host.name.split(" ")[1]}
            </p>
            <img
              className="profilPic"
              src={logement.host.picture}
              alt={logement.host.name}
            />
          </div>
          <Stars rating={logement.rating} />
        </div>
      </div>
    </div>
  );
}

export default InformationsSingle;
