// import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logements from "../../datas/logements.json";
import "./Cards.css";

const data = Logements;

const Cards = ({ item }) => {
  // const [data, setData] = useState([]);

  //     useEffect(() => {
  //         const fetchData = async () => {
  //             try {
  //                 const response = await fetch("../../datas/logements.json");
  //                 const jsonData = await response.json();
  //                 setData(jsonData);
  //             } catch (error) {
  //                 console.error("Error fetching data:", error);
  //             }
  //         };
  // console.log(data);
  //         fetchData();
  //     }, []);

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
