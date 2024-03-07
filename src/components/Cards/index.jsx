import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import fetchData from "../../services/callAPI.js";
// import Logements from "../../datas/logements.json";
import "./Cards.css";

// const data = Logements;

const Cards = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const result = fetchData();
    result.then((data) => {
      console.log(data);
      setData(data);
    });
  }, []);

  return (
    <div className="gridContainer">
      {data.map((item) => (
        <Link
          key={item.id}
          className="gridContainer__card"
          to={`/single/${item.id}`}
        >
          <h2>{item.title}</h2>
          <div className="gridContainer__card__gradient"></div>
          <img src={item.cover} alt={item.title} />
        </Link>
      ))}
    </div>
  );
};

export default Cards;
